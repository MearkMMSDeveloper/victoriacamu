import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import SchoolSearch from "@/components/SchoolSearch";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const plans = [
  {
    size: "Small Schools",
    students: "Under 300 students",
    timeline: "6 Weeks",
    steps: [
      { week: "Weeks 1–2", label: "Discovery & Setup" },
      { week: "Weeks 3–4", label: "Data Migration" },
      { week: "Week 5", label: "Staff Training" },
      { week: "Week 6", label: "Go-Live" },
      { week: "Weeks 7–10", label: "Hypercare Support" },
    ],
  },
  {
    size: "Medium Schools",
    students: "300 – 800 students",
    timeline: "9 Weeks",
    steps: [
      { week: "Weeks 1–3", label: "Discovery & Planning" },
      { week: "Weeks 4–7", label: "Configuration & Migration" },
      { week: "Weeks 8–9", label: "Phased Staff Training" },
      { week: "Weeks 10–11", label: "Staged Go-Live" },
      { week: "Weeks 12–16", label: "Hypercare Support" },
    ],
  },
  {
    size: "Large Schools",
    students: "Over 800 students",
    timeline: "12–16 Weeks",
    steps: [
      { week: "Weeks 1–4", label: "Discovery Workshop" },
      { week: "Weeks 5–10", label: "Custom Config & Integration" },
      { week: "Weeks 11–13", label: "Role-Based Training" },
      { week: "Weeks 14–16", label: "Controlled Go-Live" },
      { week: "Weeks 17–24", label: "Extended Hypercare" },
    ],
  },
];

const included = [
  "Implementation support & data migration",
  "Staff training — admin, teaching & leadership",
  "Parent portal & student app activation",
  "12-month hypercare & dedicated support",
  "DE compliance updates included",
  "Cyber & IT liability insured platform",
];

const Implementation = () => {
  return (
    <>
      <section className="bg-foreground pt-32 pb-20 section-padding relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 40% 50%, hsl(var(--teal) / 0.1) 0%, transparent 50%)"
        }} />
        <div className="relative max-w-4xl mx-auto">
          <p className="section-label">Implementation</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-background leading-[1.06] tracking-tight mb-6">
            Simple & Scalable ERP Implementation for Schools
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.65)" }}>
            Tailored to your school's size and configuration. Minimise disruption and maximise adoption from day one.
          </p>
        </div>
      </section>

      {/* Timeline Plans */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Timeline by School Size</p>
          <h2 className="section-title mb-12">Phased Approach for Every School</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.size}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card-premium relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                <p className="font-serif text-xl font-bold mb-1">{plan.size}</p>
                <p className="text-xs text-muted-foreground mb-1">{plan.students}</p>
                <p className="font-mono text-2xl font-bold text-primary mb-6">{plan.timeline}</p>

                <div className="relative pl-6">
                  <div className="absolute left-2 top-2 bottom-2 w-px border-l-2 border-dashed" style={{ borderColor: "hsl(var(--gold) / 0.3)" }} />
                  {plan.steps.map((step, i) => (
                    <div key={i} className="relative pb-5 last:pb-0">
                      <div className="absolute left-[-18px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-card" />
                      <p className="text-xs font-mono text-muted-foreground mb-0.5">{step.week}</p>
                      <p className="text-sm font-semibold text-foreground">{step.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">What's Included</p>
          <h2 className="section-title mb-8">Included in All Implementation Plans</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-background">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Search */}
      <SchoolSearch />

      <section className="section-padding bg-accent text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title mb-4">Start Your Implementation</h2>
          <p className="section-subtitle mx-auto mb-8">
            Register your school and receive a tailored implementation proposal within 2 business days.
          </p>
          <Link to="/contact" className="btn-gold">
            Register Interest <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Implementation;
