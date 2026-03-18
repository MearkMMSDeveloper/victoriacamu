// Australian school names data (~2300 schools)
export interface School {
  name: string;
  state: string;
  students: number;
}

const victorianSchools: School[] = [
  { name: "Melbourne Grammar School", state: "VIC", students: 1850 },
  { name: "Scotch College Melbourne", state: "VIC", students: 2100 },
  { name: "Melbourne High School", state: "VIC", students: 1350 },
  { name: "Mac.Robertson Girls' High School", state: "VIC", students: 1100 },
  { name: "Balwyn High School", state: "VIC", students: 2050 },
  { name: "Box Hill High School", state: "VIC", students: 1650 },
  { name: "Camberwell Grammar School", state: "VIC", students: 1400 },
  { name: "Carey Baptist Grammar School", state: "VIC", students: 2300 },
  { name: "Caulfield Grammar School", state: "VIC", students: 3200 },
  { name: "Xavier College", state: "VIC", students: 2100 },
  { name: "Trinity Grammar School Kew", state: "VIC", students: 1500 },
  { name: "Haileybury College", state: "VIC", students: 4200 },
  { name: "Geelong Grammar School", state: "VIC", students: 1600 },
  { name: "Brighton Grammar School", state: "VIC", students: 1250 },
  { name: "St Kevin's College Toorak", state: "VIC", students: 1800 },
  { name: "Mentone Grammar School", state: "VIC", students: 900 },
  { name: "Penleigh and Essendon Grammar School", state: "VIC", students: 1100 },
  { name: "Yarra Valley Grammar", state: "VIC", students: 1200 },
  { name: "Korowa Anglican Girls' School", state: "VIC", students: 750 },
  { name: "Strathcona Girls Grammar", state: "VIC", students: 680 },
  { name: "Wesley College Melbourne", state: "VIC", students: 3200 },
  { name: "Ruyton Girls' School", state: "VIC", students: 700 },
  { name: "Ivanhoe Grammar School", state: "VIC", students: 2000 },
  { name: "Lauriston Girls' School", state: "VIC", students: 800 },
  { name: "Methodist Ladies' College", state: "VIC", students: 2100 },
  { name: "Presbyterian Ladies' College", state: "VIC", students: 1500 },
  { name: "Fintona Girls' School", state: "VIC", students: 480 },
  { name: "Firbank Grammar School", state: "VIC", students: 1200 },
  { name: "Genazzano FCJ College", state: "VIC", students: 1100 },
  { name: "Star of the Sea College", state: "VIC", students: 1300 },
  { name: "Albert Park Primary School", state: "VIC", students: 420 },
  { name: "Ashburton Primary School", state: "VIC", students: 380 },
  { name: "Auburn South Primary School", state: "VIC", students: 350 },
  { name: "Bentleigh West Primary School", state: "VIC", students: 500 },
  { name: "Brunswick East Primary School", state: "VIC", students: 450 },
  { name: "Canterbury Primary School", state: "VIC", students: 520 },
  { name: "Carlton Gardens Primary School", state: "VIC", students: 310 },
  { name: "Clifton Hill Primary School", state: "VIC", students: 400 },
  { name: "Deepdene Primary School", state: "VIC", students: 370 },
  { name: "Elsternwick Primary School", state: "VIC", students: 460 },
  { name: "Fitzroy Primary School", state: "VIC", students: 280 },
  { name: "Glen Iris Primary School", state: "VIC", students: 410 },
  { name: "Hampton Primary School", state: "VIC", students: 580 },
  { name: "Ivanhoe Primary School", state: "VIC", students: 340 },
  { name: "Kew Primary School", state: "VIC", students: 490 },
  { name: "Malvern Primary School", state: "VIC", students: 430 },
  { name: "Northcote Primary School", state: "VIC", students: 360 },
  { name: "Richmond Primary School", state: "VIC", students: 290 },
  { name: "South Yarra Primary School", state: "VIC", students: 320 },
  { name: "Toorak Primary School", state: "VIC", students: 380 },
];

const generateSchools = (): School[] => {
  const prefixes = [
    "St Mary's", "St Joseph's", "St Patrick's", "Holy Family", "Sacred Heart",
    "Our Lady of", "Good Shepherd", "St Andrew's", "St Paul's", "St Peter's",
    "St Thomas", "St John's", "St Michael's", "St Catherine's", "St Francis",
    "Hillview", "Lakeside", "Mountain View", "Valley", "Riverside",
    "Coastal", "Parkside", "Greenfield", "Meadowbrook", "Sunrise",
    "Springvale", "Oakleigh", "Fairfield", "Sunbury", "Frankston",
    "Cranbourne", "Berwick", "Narre Warren", "Pakenham", "Drouin",
    "Warragul", "Moe", "Traralgon", "Sale", "Bairnsdale",
    "Shepparton", "Benalla", "Wangaratta", "Wodonga", "Echuca",
    "Mildura", "Swan Hill", "Horsham", "Ararat", "Ballarat",
    "Geelong", "Colac", "Warrnambool", "Hamilton", "Portland",
  ];

  const suffixes = [
    "Primary School", "Secondary College", "Grammar School", "College",
    "Christian College", "Community School", "Public School", "High School",
    "Academy", "Preparatory School",
  ];

  const stateWeights: [string, number][] = [
    ["VIC", 650], ["NSW", 550], ["QLD", 400], ["SA", 200],
    ["WA", 200], ["TAS", 80], ["ACT", 50], ["NT", 40], ["NZ", 80],
  ];

  const schools: School[] = [...victorianSchools];

  for (const [state, count] of stateWeights) {
    for (let i = 0; i < count; i++) {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      const students = Math.floor(Math.random() * 2500) + 80;
      const name = `${prefix} ${suffix}`;
      // Avoid exact duplicates in same state
      if (!schools.find(s => s.name === name && s.state === state)) {
        schools.push({ name: `${name}`, state, students });
      }
    }
  }

  return schools.sort((a, b) => a.name.localeCompare(b.name));
};

export const schools = generateSchools();

export const getSchoolSize = (count: number) => {
  if (count < 300) return { label: "Small", timeline: "6 Weeks", color: "sage" as const };
  if (count <= 800) return { label: "Medium", timeline: "9 Weeks", color: "primary" as const };
  return { label: "Large", timeline: "12–16 Weeks", color: "secondary" as const };
};
