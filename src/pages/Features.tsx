import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Users, ClipboardCheck, CreditCard, MessageSquare, BookOpen, Shield,
  Calendar, BarChart3, FileText, Bell, Laptop, CheckCircle,
  GraduationCap, Monitor, Baby, Heart, Scale, Link2, TrendingUp,
  PenLine, AlignLeft, MessageCircle, FolderOpen, FileEdit, Smartphone,
  DollarSign, Star, ClipboardList, Lock, Landmark, Activity, FileBarChart, Network,
  Clock, Database, Zap, AlertTriangle, Target, Gauge, Layers, Briefcase,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import heroFeatures from "@/assets/hero-features.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ── PERSONAS ── */
interface Persona {
  id: string;
  icon: typeof GraduationCap;
  label: string;
  color: string;
  quote: string;
  needs: { icon: typeof BarChart3; title: string; desc: string }[];
  capabilities: { text: string; tag: string }[];
}

const personas: Persona[] = [
  {
    id: "principal",
    icon: GraduationCap,
    label: "Principals",
    color: "hsl(var(--gold))",
    quote: "I need to see everything, act on anything, and trust it's all compliant — without living in spreadsheets.",
    needs: [
      { icon: BarChart3, title: "Real-time school overview", desc: "Live dashboards for attendance, wellbeing, academic performance and finances." },
      { icon: Scale, title: "Compliance without anxiety", desc: "Automatic DE policy alignment, audit trails and VRQA-ready reporting." },
      { icon: Link2, title: "Unified staff coordination", desc: "All teams operating from one system with clear accountability." },
      { icon: TrendingUp, title: "Strategic reporting", desc: "NAPLAN trends, cohort analytics and custom reports generated in minutes." },
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
    icon: BookOpen,
    label: "Teachers",
    color: "hsl(var(--teal))",
    quote: "I want to focus on teaching, not administration. Every minute I spend on paperwork is a minute away from my students.",
    needs: [
      { icon: PenLine, title: "Fast attendance marking", desc: "One-tap roll marking with automatic parent alerts." },
      { icon: BookOpen, title: "Curriculum & lesson planning", desc: "Aligned curriculum planner integrated with the timetable." },
      { icon: AlignLeft, title: "Assessment & grade management", desc: "Centralised gradebooks and auto-generated progress reports." },
      { icon: MessageCircle, title: "Streamlined parent communication", desc: "Scheduled and ad-hoc messages from one screen." },
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
    icon: Monitor,
    label: "Admin Staff",
    color: "hsl(var(--sage))",
    quote: "Every day is 20 tasks in 4 different systems. I need everything in one place so nothing slips through the cracks.",
    needs: [
      { icon: FolderOpen, title: "Single source of truth", desc: "Student records, staff data, forms, payments — all connected." },
      { icon: FileEdit, title: "Digital forms & automation", desc: "Smart digital workflows that auto-route and auto-file." },
      { icon: CreditCard, title: "Payments & reconciliation", desc: "Online fees, excursion payments, and automatic reconciliation." },
      { icon: Calendar, title: "Enrolments & calendar", desc: "Manage enrolments, calendars, events, and resource bookings." },
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
    icon: Baby,
    label: "Students",
    color: "hsl(var(--rose))",
    quote: "School should feel safe and easy. I want to see what's happening, what I've done well, and what's coming up — without confusion.",
    needs: [
      { icon: Star, title: "Familiar, friendly interface", desc: "Feels like the apps students already use — intuitive and clear." },
      { icon: Calendar, title: "My day, clearly laid out", desc: "Timetable, assessments, homework, and reminders in one view." },
      { icon: TrendingUp, title: "See my own progress", desc: "Grades, attendance, and teacher feedback — encouraging ownership." },
      { icon: Lock, title: "Safe and private", desc: "Age-appropriate access controls and child-safe design." },
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
    icon: Heart,
    label: "Parents",
    color: "hsl(var(--lavender))",
    quote: "I want to be involved in my child's school life without calling the office every time.",
    needs: [
      { icon: Smartphone, title: "Real-time notifications", desc: "Absence alerts, events, consent requests, and payment reminders." },
      { icon: DollarSign, title: "Pay and consent in seconds", desc: "Excursion fees, book lists, canteen credits — pay once, confirm once." },
      { icon: ClipboardList, title: "See my child's progress", desc: "Attendance, report cards, and assessments available anytime." },
      { icon: Calendar, title: "Book interviews and events", desc: "Parent-teacher bookings, RSVPs, and volunteer sign-ups." },
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
  {
    id: "state",
    icon: Landmark,
    label: "State Education Administrators",
    color: "hsl(var(--gold))",
    quote: "I need a clear, system-wide view of how schools are performing — to make policy decisions backed by real-time data, not lagging reports.",
    needs: [
      { icon: Network, title: "Centralised district monitoring", desc: "Unified visibility across schools and districts in a single console." },
      { icon: Activity, title: "Real-time policy analytics", desc: "Live data to inform resource allocation and policy decisions." },
      { icon: FileBarChart, title: "Compliance reporting at scale", desc: "Aligned with national and state education frameworks out of the box." },
      { icon: TrendingUp, title: "Outcome & attendance trends", desc: "Track student outcomes, attendance and institutional performance system-wide." },
    ],
    capabilities: [
      { text: "Cross-school performance dashboards", tag: "Gov" },
      { text: "Aggregated attendance & wellbeing analytics", tag: "Gov" },
      { text: "Automated statutory & compliance reporting", tag: "Gov" },
      { text: "Policy-aligned data exports (ACARA, NAPLAN)", tag: "Gov" },
      { text: "Resource allocation & funding insights", tag: "Gov" },
      { text: "Long-term cohort & equity trend analysis", tag: "Gov" },
    ],
  },
];

/* ── FEATURES ── */
const features = [
  {
    icon: Users,
    title: "Student Information System",
    desc: "Complete student lifecycle management — enrolment, records, academic history, wellbeing, and graduation tracking.",
    capabilities: ["Digital enrolment intake", "Student records management", "Academic history tracking", "Cohort analytics & NAPLAN insights"],
  },
  {
    icon: ClipboardCheck,
    title: "Attendance Management",
    desc: "One-tap roll marking with automatic parent alerts for unexplained absences and DE-compliant reporting.",
    capabilities: ["One-tap attendance marking", "Instant parent notifications", "Automated DE reporting", "Absence explanation workflows"],
  },
  {
    icon: CreditCard,
    title: "Finance & Payments",
    desc: "Online fee collection, excursion payments, canteen orders, and uniform shop with automatic financial reconciliation.",
    capabilities: ["Online payment gateway", "Canteen & uniform shop", "Automatic reconciliation", "Budget & financial oversight"],
  },
  {
    icon: MessageSquare,
    title: "Communication Tools",
    desc: "Multi-channel broadcast communications across mobile app, email, SMS, and web portal.",
    capabilities: ["Push notifications", "Email digests (daily/weekly)", "SMS alerts for urgent updates", "In-app messaging"],
  },
  {
    icon: BookOpen,
    title: "LMS Integration",
    desc: "Curriculum planner, assignment management, gradebook, and automated report card generation.",
    capabilities: ["Curriculum-aligned planner", "Assignment submission portal", "Centralised gradebook", "Auto report generation"],
  },
  {
    icon: Shield,
    title: "Compliance & Safety",
    desc: "Victorian DE policy compliance, child safety standards, VRQA reporting, and data privacy built into every workflow.",
    capabilities: ["DE policy auto-alignment", "Child-safe design protocols", "VRQA-ready reporting", "Audit trail logging"],
  },
  {
    icon: Calendar,
    title: "Calendar & Events",
    desc: "Term calendars, event management, parent-teacher interviews, resource bookings, and RSVP management.",
    capabilities: ["School-wide calendar", "Event RSVP management", "Interview booking system", "Resource allocation"],
  },
  {
    icon: FileText,
    title: "Digital Forms & Workflows",
    desc: "Replace paper forms with smart digital workflows that auto-route, auto-remind, and auto-file.",
    capabilities: ["Drag-and-drop form builder", "Automated routing", "Digital consent capture", "Smart reminders"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Dashboards",
    desc: "Real-time executive dashboards for attendance, academics, finances, and wellbeing insights.",
    capabilities: ["Executive live dashboard", "Custom report builder", "Trend analysis tools", "Data export & API"],
  },
  {
    icon: Bell,
    title: "Wellbeing Management",
    desc: "Student wellbeing alerts, incident tracking, referral workflows, and case management.",
    capabilities: ["Wellbeing alert system", "Incident logging", "Referral workflows", "Case management tools"],
  },
  {
    icon: Laptop,
    title: "Visitor & Contractor Management",
    desc: "Digital check-in for visitors and contractors with Working with Children Check validation.",
    capabilities: ["Digital visitor sign-in", "Contractor management", "WWCC validation", "Emergency roll generation"],
  },
];

const Features = () => {
  const [active, setActive] = useState("principal");
  const persona = personas.find((p) => p.id === active)!;

  return (
    <>
      <PageHero
        label="Capabilities"
        title="Complete School ERP Features for Modern Institutions"
        description="Everything your school needs in one platform — from student records to payments, from attendance to analytics."
        image={heroFeatures}
      />

      {/* ── PERSONAS SECTION (FIRST) ── */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Who Benefits</p>
          <h2 className="section-title mb-10">Built for Every Role in Your School</h2>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-border overflow-x-auto mb-0">
            {personas.map((p) => {
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 ${
                    active === p.id
                      ? "border-current"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                  style={active === p.id ? { color: p.color } : {}}
                >
                  <Icon className="w-4 h-4" />
                  {p.label}
                </button>
              );
            })}
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
                <p className="text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2" style={{ color: persona.color }}>
                  <persona.icon className="w-4 h-4" />
                  {persona.label}
                </p>
                <blockquote className="font-serif text-xl font-bold leading-snug mb-6 italic text-foreground">
                  &ldquo;{persona.quote}&rdquo;
                </blockquote>
                <div className="space-y-3">
                  {persona.needs.map((need) => {
                    const NeedIcon = need.icon;
                    return (
                      <motion.div
                        key={need.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-3 p-4 rounded-xl border border-border hover:bg-muted hover:border-primary/20 transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${persona.color}15` }}>
                          <NeedIcon className="w-4 h-4" style={{ color: persona.color }} />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-foreground mb-1">{need.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{need.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right */}
              <div className="card-premium">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${persona.color}20` }}>
                    <persona.icon className="w-5 h-5" style={{ color: persona.color }} />
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
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0"
                        style={{ background: `${persona.color}15`, color: persona.color }}
                      >
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

      {/* ── FEATURES SECTION (SECOND) ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Platform Features</p>
          <h2 className="section-title mb-12">Everything Your School Needs</h2>

          <div className="space-y-0">
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-[1fr,1.2fr] gap-8 items-center group p-8 rounded-2xl border border-border transition-colors ${
                  idx % 2 === 0 ? "bg-card" : "bg-background"
                }`}
                style={{ marginBottom: idx < features.length - 1 ? "1.5rem" : 0 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {f.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {cap}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title mb-4">See All Features in Action</h2>
          <p className="section-subtitle mx-auto mb-8">
            Book a demo and we'll walk you through every capability tailored to your school.
          </p>
          <Link to="/contact" className="btn-gold">
            Register Interest <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Features;