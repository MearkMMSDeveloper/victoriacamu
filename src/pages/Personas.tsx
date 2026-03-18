import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

interface Persona {
  id: string;
  emoji: string;
  label: string;
  color: string;
  quote: string;
  needs: { icon: string; title: string; desc: string }[];
  capabilities: { text: string; tag: string }[];
}

const personas: Persona[] = [
  {
    id: "principal",
    emoji: "🎓",
    label: "Principals",
    color: "hsl(var(--gold))",
    quote: "I need to see everything, act on anything, and trust it's all compliant — without living in spreadsheets.",
    needs: [
      { icon: "📊", title: "Real-time school overview", desc: "Live dashboards for attendance, wellbeing, academic performance and finances." },
      { icon: "⚖️", title: "Compliance without anxiety", desc: "Automatic DE policy alignment, audit trails and VRQA-ready reporting." },
      { icon: "🔗", title: "Unified staff coordination", desc: "All teams operating from one system with clear accountability." },
      { icon: "📈", title: "Strategic reporting", desc: "NAPLAN trends, cohort analytics and custom reports generated in minutes." },
    ],
    capabilities: [
      { text: "Executive Dashboard — live school-wide metrics", tag: "Core" },
      { text: "Automated DE-compliant attendance & wellbeing reports", tag: "Cat 1" },
      { text: "Staff & resource allocation visibility", tag: "Cat 2" },
      { text: "Financial oversight — payments, budgets, reconciliations", tag: "Cat 4" },
      { text: "Cohort analytics — NAPLAN, VCE, year-level insights", tag: "Cat 1" },
      { text: "Incident & wellbeing case management", tag: "Cat 2" },
    ],
  },
  {
    id: "teacher",
    emoji: "📚",
    label: "Teachers",
    color: "hsl(var(--teal))",
    quote: "I want to focus on teaching, not administration. Every minute I spend on paperwork is a minute away from my students.",
    needs: [
      { icon: "📝", title: "Fast attendance marking", desc: "One-tap roll marking with automatic parent alerts." },
      { icon: "📚", title: "Curriculum & lesson planning", desc: "Aligned curriculum planner integrated with the timetable." },
      { icon: "📊", title: "Assessment & grade management", desc: "Centralised gradebooks and auto-generated progress reports." },
      { icon: "💬", title: "Streamlined parent communication", desc: "Scheduled and ad-hoc messages from one screen." },
    ],
    capabilities: [
      { text: "One-tap attendance with instant parent notification", tag: "Cat 3" },
      { text: "Curriculum planner aligned to Victorian curriculum", tag: "Cat 1" },
      { text: "Centralised gradebook & auto report generation", tag: "Cat 1" },
      { text: "LMS integration — resources, assignments, submissions", tag: "Cat 1" },
      { text: "Student wellbeing alerts & referral workflows", tag: "Cat 2" },
      { text: "Group & class management, substitution cover", tag: "Cat 1" },
    ],
  },
  {
    id: "admin",
    emoji: "🖥️",
    label: "Admin Staff",
    color: "hsl(var(--sage))",
    quote: "Every day is 20 tasks in 4 different systems. I need everything in one place so nothing slips through the cracks.",
    needs: [
      { icon: "📂", title: "Single source of truth", desc: "Student records, staff data, forms, payments — all connected." },
      { icon: "📝", title: "Digital forms & automation", desc: "Smart digital workflows that auto-route and auto-file." },
      { icon: "💳", title: "Payments & reconciliation", desc: "Online fees, excursion payments, and automatic reconciliation." },
      { icon: "📅", title: "Enrolments & calendar", desc: "Manage enrolments, calendars, events, and resource bookings." },
    ],
    capabilities: [
      { text: "Enrolment management — digital intake to first day", tag: "Cat 1" },
      { text: "Digital forms builder with automated routing", tag: "Cat 3" },
      { text: "Online payments, canteen & uniform shop management", tag: "Cat 4" },
      { text: "Calendar, events & resource booking system", tag: "Cat 2" },
      { text: "Visitor & contractor check-in management", tag: "Cat 3" },
      { text: "Multi-channel broadcast communications", tag: "Cat 3" },
    ],
  },
  {
    id: "student",
    emoji: "🎒",
    label: "Students",
    color: "hsl(var(--rose))",
    quote: "School should feel safe and easy. I want to see what's happening, what I've done well, and what's coming up — without confusion.",
    needs: [
      { icon: "🌟", title: "Familiar, friendly interface", desc: "Feels like the apps students already use — intuitive and clear." },
      { icon: "📅", title: "My day, clearly laid out", desc: "Timetable, assessments, homework, and reminders in one view." },
      { icon: "📈", title: "See my own progress", desc: "Grades, attendance, and teacher feedback — encouraging ownership." },
      { icon: "🔒", title: "Safe and private", desc: "Age-appropriate access controls and child-safe design." },
    ],
    capabilities: [
      { text: "Personalised daily timetable & class schedule", tag: "Cat 1" },
      { text: "Self-service grade & progress tracking", tag: "Cat 1" },
      { text: "Assignment submission & teacher feedback portal", tag: "Cat 1" },
      { text: "Upcoming events, excursions & activities", tag: "Cat 3" },
      { text: "Safe messaging with teachers (child-safe protocols)", tag: "Cat 3" },
      { text: "Life-ready & career pathway tools", tag: "Cat 1" },
    ],
  },
  {
    id: "parent",
    emoji: "👨‍👩‍👧",
    label: "Parents",
    color: "hsl(var(--lavender))",
    quote: "I want to be involved in my child's school life without calling the office every time.",
    needs: [
      { icon: "📲", title: "Real-time notifications", desc: "Absence alerts, events, consent requests, and payment reminders." },
      { icon: "💳", title: "Pay and consent in seconds", desc: "Excursion fees, book lists, canteen credits — pay once, confirm once." },
      { icon: "📊", title: "See my child's progress", desc: "Attendance, report cards, and assessments available anytime." },
      { icon: "📅", title: "Book interviews and events", desc: "Parent-teacher bookings, RSVPs, and volunteer sign-ups." },
    ],
    capabilities: [
      { text: "Push notifications for absences, events & payments", tag: "Cat 3" },
      { text: "One-tap consent & online payment for all school fees", tag: "Cat 4" },
      { text: "Real-time attendance tracking & absence explanation", tag: "Cat 3" },
      { text: "Student progress reports & grades — anytime access", tag: "Cat 1" },
      { text: "Parent-teacher interview booking & school event RSVP", tag: "Cat 3" },
      { text: "Multi-child management — all kids in one login", tag: "Cat 1" },
    ],
  },
];

const Personas = () => {
  const [active, setActive] = useState("principal");
  const persona = personas.find((p) => p.id === active)!;

  return (
    <>
      <section className="bg-foreground pt-32 pb-20 section-padding relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 50%, hsl(var(--gold) / 0.08) 0%, transparent 50%)"
        }} />
        <div className="relative max-w-4xl mx-auto">
          <p className="section-label">Who Benefits</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-background leading-[1.06] tracking-tight mb-6">
            Built for Every Role in Your School
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.65)" }}>
            Camu ERP speaks the language of every person in your school community.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-0 border-b border-border overflow-x-auto mb-0">
            {personas.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
                  active === p.id
                    ? "border-current"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
                style={active === p.id ? { color: p.color } : {}}
              >
                {p.emoji} {p.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid md:grid-cols-2 gap-10 py-10"
            >
              {/* Left */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: persona.color }}>
                  {persona.emoji} {persona.label}
                </p>
                <blockquote className="font-serif text-xl font-bold leading-snug mb-6 italic text-foreground">
                  "{persona.quote}"
                </blockquote>
                <div className="space-y-3">
                  {persona.needs.map((need) => (
                    <div key={need.title} className="flex items-start gap-3 p-4 rounded-xl border border-border hover:bg-muted transition-colors">
                      <span className="text-xl flex-shrink-0">{need.icon}</span>
                      <div>
                        <p className="font-semibold text-sm text-foreground mb-1">{need.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{need.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="card-premium">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ background: `${persona.color}20` }}>
                    {persona.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-sm">Camu for {persona.label}</p>
                    <p className="text-xs text-muted-foreground">Key capabilities</p>
                  </div>
                </div>
                <div className="space-y-0">
                  {persona.capabilities.map((cap) => (
                    <div key={cap.text} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: persona.color }} />
                      <span className="text-sm text-foreground flex-1">{cap.text}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0" style={{ background: `${persona.color}15`, color: persona.color }}>
                        {cap.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section-padding bg-accent text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title mb-4">Find Your Role's Solution</h2>
          <p className="section-subtitle mx-auto mb-8">
            See how Camu transforms operations for your specific role in the school.
          </p>
          <Link to="/contact" className="btn-gold">
            Register Interest <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Personas;
