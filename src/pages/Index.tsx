import HeroSlider from "@/components/HeroSlider";
import SchoolSearch from "@/components/SchoolSearch";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Shield, CreditCard, MessageSquare, BarChart3 } from "lucide-react";

const features = [
  { icon: Users, title: "Student Information System", desc: "Complete student lifecycle management from enrolment to graduation." },
  { icon: BookOpen, title: "Attendance Management", desc: "One-tap attendance with instant parent notifications and DE compliance." },
  { icon: CreditCard, title: "Finance & Payments", desc: "Online fee collection, canteen orders, and automatic reconciliation." },
  { icon: MessageSquare, title: "Communication Tools", desc: "Multi-channel broadcasts across app, email, SMS, and web portal." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Real-time dashboards for attendance, academics, and finances." },
  { icon: Shield, title: "Compliance Built-In", desc: "Victorian DE policy, child safety, and VRQA reporting automated." },
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

      {/* Features Preview */}
      <section className="section-padding">
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

      {/* School Search */}
      <SchoolSearch />

      {/* CTA */}
      <section className="section-padding bg-foreground relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 50%, hsl(var(--gold) / 0.1) 0%, transparent 60%)"
        }} />
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
            <Link to="/about" className="btn-outline border-background/20 text-background hover:border-secondary hover:text-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
