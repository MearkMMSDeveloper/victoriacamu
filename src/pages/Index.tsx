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
  UserCheck,
  Monitor,
  Baby,
  Heart,
  Lock,
  Cloud,
  Globe,
  CheckCircle,
  Clock,
} from "lucide-react";

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
];

const securityItems = [
  { icon: Lock, title: "ISO 27001 Certified", desc: "Internationally recognised security management standard." },
  { icon: Shield, title: "SOC 2 Type II", desc: "Independent audit of security, availability, and privacy." },
  { icon: Cloud, title: "Australian-Hosted", desc: "All data stored in AWS Sydney & Melbourne data centres." },
  { icon: Globe, title: "GDPR Aligned", desc: "Highest global standard of data rights and protection." },
];

const blogPosts = [
  { title: "Why Schools Need ERP Software in 2025", category: "Industry Insights", time: "5 min" },
  { title: "Benefits of School ERP: A Complete Guide", category: "Guides", time: "7 min" },
  { title: "Digital Transformation in Australian Education", category: "Trends", time: "6 min" },
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
            <span className="font-serif text-4xl font-black text-primary">2,300+</span>
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
                Built by SRM Technologies Australia, Camu is listed on the Victorian Department of Education School Software Panel (SSP001) across all four procurement categories.
              </p>
              <Link to="/about" className="btn-gold">
                Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "2,300+", label: "Schools Addressable" },
                { num: "1", label: "Integrated Solution" },
                { num: "5", label: "User Personas Served" },
                { num: "4", label: "DE Categories Covered" },
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

      {/* Personas Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
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
            <Link to="/personas" className="btn-outline">
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
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans text-sm font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link to="/security" className="btn-outline">
              View Security Details <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding bg-card">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Pricing</p>
          <h2 className="section-title">Flexible Pricing for All Schools</h2>
          <p className="section-subtitle mb-12">
            Custom pricing tailored to your school's size, modules, and requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {["Small", "Medium", "Large"].map((size, i) => (
              <motion.div
                key={size}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`card-premium relative overflow-hidden text-center ${i === 1 ? "border-primary border-2" : ""}`}
              >
                {i === 1 && (
                  <div className="absolute top-0 left-0 right-0 text-center py-1 text-xs font-bold bg-primary text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className={i === 1 ? "pt-4" : ""}>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">{size} School</p>
                  <p className="font-serif text-3xl font-black text-foreground mb-1">Custom</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {size === "Small" ? "Under 300 students" : size === "Medium" ? "300–800 students" : "800+ students"}
                  </p>
                  <Link to="/pricing" className={i === 1 ? "btn-gold w-full text-center" : "btn-outline w-full text-center"}>
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Resources</p>
          <h2 className="section-title">Latest Insights</h2>
          <p className="section-subtitle mb-12">
            Expert articles on school technology and education in Australia.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <motion.div
                key={post.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card-premium group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-primary">{post.category}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" /> {post.time}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/blog" className="btn-outline">
              View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
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
            <Link to="/contact" className="btn-gold">
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
