import HeroSlider from "@/components/HeroSlider";
import SchoolSearch from "@/components/SchoolSearch";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  BookOpen,
  Shield,
  CreditCard,
  MessageSquare,
  BarChart3,
  GraduationCap,
  Monitor,
  Baby,
  Heart,
  Landmark,
  CheckCircle,
} from "lucide-react";
import heroHome1 from "@/assets/hero-home-1.jpg";
import isoIcon from "@/assets/certs/iso27001.png";
import soc2Icon from "@/assets/certs/soc2.png";
import gdprIcon from "@/assets/certs/gdpr.png";
import st4sIcon from "@/assets/certs/st4s.png";

const features = [
  { icon: Users, title: "Student Information System", desc: "Complete student lifecycle management from enrolment to graduation." },
  { icon: BookOpen, title: "Attendance Management", desc: "One-tap attendance with instant parent notifications and DE compliance." },
  { icon: CreditCard, title: "Finance & Payments", desc: "Online fee collection, canteen orders, and automatic reconciliation." },
  { icon: MessageSquare, title: "Communication Tools", desc: "Multi-channel broadcasts across app, email, SMS, and web portal." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Real-time dashboards for attendance, academics, and finances." },
  { icon: Shield, title: "Compliance Built-In", desc: "Victorian DE policy, child safety, and VRQA reporting automated." },
];

const personas = [
  { icon: GraduationCap, title: "Principals", desc: "Real-time school overview, compliance reporting, and strategic insights." },
  { icon: BookOpen, title: "Teachers", desc: "Streamlined attendance, curriculum planning, and grade management." },
  { icon: Monitor, title: "Admin Staff", desc: "Single source of truth for records, payments, and workflows." },
  { icon: Baby, title: "Students", desc: "Personalised timetable, progress tracking, and assignment portal." },
  { icon: Heart, title: "Parents", desc: "Real-time notifications, payments, and academic visibility." },
  { icon: Landmark, title: "State Administrators", desc: "Centralised monitoring, real-time analytics, and system-wide compliance reporting." },
];

const securityItems = [
  { img: isoIcon, title: "ISO 27001 Certified", desc: "Internationally recognised security management standard." },
  { img: soc2Icon, title: "SOC 2 Type II", desc: "Independent audit of security, availability, and privacy." },
  { img: gdprIcon, title: "GDPR Aligned", desc: "Highest global standard of data rights and protection." },
  { img: st4sIcon, title: "ST4S Assessed", desc: "Safe & Trusted 4 Schools — child-safe communications standard." },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => {
  return (
    <>
      <HeroSlider />

      {/* Trust Banner */}
      <section className="bg-accent border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-serif text-4xl font-black text-primary">12,300+</span>
            <div>
              <p className="font-semibold text-foreground text-sm">Schools Addressable</p>
              <p className="text-xs text-muted-foreground">Across Australia & New Zealand</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT", "NT", "NZ"].map((s) => (
              <span
                key={s}
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                  s === "VIC"
                    ? "border-secondary/40 bg-teal-light text-secondary"
                    : "border-border text-muted-foreground"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 className="section-title">The Operating System for ANZ Education</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Camu ERP is a fully integrated school management platform that connects every student, parent, teacher, and administrator in one seamlessly connected ecosystem.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Implemented and marketed by SRM Technologies Australia, Camu is listed on the Victorian Department of Education School Software Panel (SSP001) across all four procurement categories.
              </p>
              <Link to="/about" className="btn-gold">
                Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "12,300+", label: "Schools Addressable" },
                { num: "1", label: "Integrated Solution" },
                { num: "6", label: "User Personas Served" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="card-premium text-center">
                  <p className="font-serif text-3xl font-black text-primary mb-1">{stat.num}</p>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Platform Capabilities</p>
          <h2 className="section-title">One Platform. Every Function.</h2>
          <p className="section-subtitle mb-12">
            Camu replaces disconnected school systems with a single, integrated ERP platform.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp} className="card-premium group">
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-sans text-lg font-bold mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link to="/features" className="btn-outline">
              View All Features <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Personas Section with subtle background */}
      <section className="section-padding relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-[0.15]">
          <img src={heroHome1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <p className="section-label">Who Benefits</p>
          <h2 className="section-title">Built for Every Role in Your School</h2>
          <p className="section-subtitle mb-12">
            Camu ERP speaks the language of every person in your school community.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {personas.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="card-premium text-center group">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/10 transition-colors">
                  <p.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-sans text-sm font-bold mb-2 text-foreground">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link to="/features" className="btn-outline">
              Explore All Personas <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* School Search / Implementation */}
      <SchoolSearch />

      {/* Security Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Security & Compliance</p>
          <h2 className="section-title">Enterprise-Level Protection</h2>
          <p className="section-subtitle mb-12">
            Your school data is protected by the highest international security standards.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {securityItems.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="card-premium text-center">
                <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <img src={item.img} alt={item.title} className="h-14 w-14 object-contain" />
                </div>
                <h3 className="font-sans text-sm font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Register Interest CTA */}
      <section className="section-padding bg-foreground relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, hsl(var(--gold) / 0.1) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-black text-background mb-4 tracking-tight">
            Ready to Transform Your School?
          </h2>
          <p className="text-base mb-8" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
            Join schools across Australia and New Zealand already using Camu ERP to streamline operations and improve engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" state={{ scrollToForm: true }} className="btn-gold">
              Register Your School <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="btn-outline border-background/20 text-background hover:border-secondary hover:text-secondary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;