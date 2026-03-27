import { useState, useEffect } from "react";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQa6xAhUD_TBTP8eNJ8OXJHrPJ8MHRJnNxf-kAPQZk8_HyjpIn7fPprKmkAwer09Q/pub?output=csv";

export interface School {
  name: string;
  state: string;
  size: string;
  students: number;
  timeline: string;
}

function parseCsvRow(row: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      fields.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current.trim());
  return fields;
}

function getTimeline(size: string): string {
  switch (size) {
    case "Very Small":
      return "2 Weeks";
    case "Small":
      return "6 Weeks";
    case "Medium":
      return "9 Weeks";
    case "Large":
      return "12–16 Weeks";
    default:
      return "9 Weeks";
  }
}

function getSizeFromStudents(count: number): string {
  if (count < 30) return "Very Small";
  if (count < 200) return "Small";
  if (count < 800) return "Medium";
  return "Large";
}

function parseCsv(csv: string): School[] {
  const lines = csv.split("\n").filter((l) => l.trim());
  if (lines.length < 2) return [];

  const headers = parseCsvRow(lines[0]).map((h) => h.toLowerCase().replace(/\s+/g, "_"));
  const nameIdx = headers.findIndex((h) => h.includes("school_name"));
  const stateIdx = headers.findIndex((h) => h.includes("address_state"));
  const studentsIdx = headers.findIndex((h) => h.includes("grand_total_student_count") || h.includes("student_count"));
  const sizeIdx = headers.findIndex((h) => h.includes("level_of_school"));

  if (nameIdx === -1) return [];

  const schools: School[] = [];
  const seen = new Set<string>();

  for (let i = 1; i < lines.length; i++) {
    const fields = parseCsvRow(lines[i]);
    const name = fields[nameIdx]?.trim();
    if (!name) continue;

    const state = stateIdx !== -1 ? fields[stateIdx]?.trim() || "" : "";
    const studentStr = studentsIdx !== -1 ? fields[studentsIdx]?.trim() : "0";
    const students = Math.round(parseFloat(studentStr) || 0);
    let size = sizeIdx !== -1 ? fields[sizeIdx]?.trim() || "" : "";
    if (!size || !["Small", "Medium", "Large"].includes(size)) {
      size = getSizeFromStudents(students);
    }
    const timeline = getTimeline(size);

    const key = `${name}-${state}`;
    if (!seen.has(key)) {
      seen.add(key);
      schools.push({ name, state, size, students, timeline });
    }
  }

  return schools.sort((a, b) => a.name.localeCompare(b.name));
}

let cachedSchools: School[] | null = null;
let fetchPromise: Promise<School[]> | null = null;

function fetchSchools(): Promise<School[]> {
  if (cachedSchools) return Promise.resolve(cachedSchools);
  if (fetchPromise) return fetchPromise;

  fetchPromise = fetch(CSV_URL)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch school data");
      return res.text();
    })
    .then((csv) => {
      cachedSchools = parseCsv(csv);
      fetchPromise = null;
      return cachedSchools;
    })
    .catch((err) => {
      fetchPromise = null;
      console.error("Error fetching school data:", err);
      return [];
    });

  return fetchPromise;
}

export function useSchoolData() {
  const [schools, setSchools] = useState<School[]>(cachedSchools || []);
  const [loading, setLoading] = useState(!cachedSchools);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchSchools()
      .then((data) => {
        if (mounted) {
          setSchools(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setError("Failed to load school data");
          setLoading(false);
        }
      });
    return () => { mounted = false; };
  }, []);

  return { schools, loading, error };
}
