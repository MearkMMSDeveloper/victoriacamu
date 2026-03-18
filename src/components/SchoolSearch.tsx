import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { schools, getSchoolSize, type School } from "@/data/schools";
import { Link } from "react-router-dom";

const SchoolSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<School[]>([]);
  const [selected, setSelected] = useState<School | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const search = useCallback((q: string) => {
    if (q.length < 3) { setResults([]); setShowDropdown(false); return; }
    const lower = q.toLowerCase();
    const matched = schools.filter(s => s.name.toLowerCase().includes(lower)).slice(0, 10);
    setResults(matched);
    setShowDropdown(matched.length > 0);
    setActiveIndex(-1);
  }, []);

  useEffect(() => { search(query); }, [query, search]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
          inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      selectSchool(results[activeIndex]);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  const selectSchool = (school: School) => {
    setSelected(school);
    setQuery(school.name);
    setShowDropdown(false);
  };

  const highlightMatch = (text: string) => {
    const lower = query.toLowerCase();
    const idx = text.toLowerCase().indexOf(lower);
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span className="font-bold text-primary">{text.slice(idx, idx + query.length)}</span>
        {text.slice(idx + query.length)}
      </>
    );
  };

  const sizeInfo = selected ? getSchoolSize(selected.students) : null;

  return (
    <section className="section-padding bg-card relative">
      <div className="max-w-4xl mx-auto">
        <p className="section-label">Implementation Search</p>
        <h2 className="section-title">
          Implementation That Starts with Your School's Name
        </h2>
        <p className="section-subtitle mb-10">
          Search from over 2,300 schools across Australia and New Zealand. We'll show your personalised implementation timeline.
        </p>

        {/* Search Input */}
        <div className="relative">
          <div className="flex items-center border-b-2 border-border focus-within:border-primary transition-colors">
            <Search className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSelected(null); }}
              onKeyDown={handleKeyDown}
              onFocus={() => query.length >= 3 && results.length > 0 && setShowDropdown(true)}
              placeholder="Type your school name (e.g. Melbourne Grammar)..."
              className="w-full h-16 text-lg md:text-xl bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50 font-sans"
              aria-label="Search for your school"
              autoComplete="off"
            />
          </div>

          {/* Dropdown */}
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="absolute top-full left-0 right-0 bg-card border border-border rounded-b-xl overflow-hidden z-50"
                style={{ boxShadow: "var(--shadow-elevated)" }}
              >
                {results.map((school, i) => (
                  <button
                    key={`${school.name}-${school.state}-${i}`}
                    onClick={() => selectSchool(school)}
                    className={`w-full text-left px-5 py-3 flex items-center justify-between transition-colors ${
                      i === activeIndex ? "bg-accent" : "hover:bg-muted"
                    }`}
                  >
                    <span className="text-sm text-foreground">{highlightMatch(school.name)}</span>
                    <span className="text-xs font-semibold text-muted-foreground tracking-wider">{school.state}</span>
                  </button>
                ))}
                {results.length === 0 && query.length >= 3 && (
                  <div className="px-5 py-4 text-sm text-muted-foreground">
                    No schools found. <Link to="/contact" className="text-primary hover:underline">Register your school manually</Link>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Selected School Result */}
        <AnimatePresence>
          {selected && sizeInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 card-premium"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">School</p>
                    <p className="font-semibold text-foreground">{selected.name}</p>
                    <p className="text-sm text-muted-foreground">{selected.state}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">School Size</p>
                    <p className="font-semibold text-foreground">{sizeInfo.label}</p>
                    <p className="text-sm text-muted-foreground font-mono">{selected.students.toLocaleString()} students</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">Timeline</p>
                    <p className="font-semibold text-foreground">{sizeInfo.timeline}</p>
                    <p className="text-sm text-muted-foreground">Estimated deployment</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-gold">
                  Show My Plan <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/implementation" className="btn-outline">
                  View Full Timeline
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SchoolSearch;
