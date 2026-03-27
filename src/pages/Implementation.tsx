import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Server, RefreshCw, Eye } from "lucide-react";
import isoIcon from "@/assets/certs/iso27001.png";
import soc2Icon from "@/assets/certs/soc2.png";
import gdprIcon from "@/assets/certs/gdpr.png";
import st4sIcon from "@/assets/certs/st4s.png";
import SchoolSearch from "@/components/SchoolSearch";
import PageHero from "@/components/PageHero";
import heroImpl from "@/assets/hero-implementation.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const plans = [
  {
    size: "Very Small Schools",
    students: "Below 30 students",
    timeline: "2 Weeks",
    steps: [
      { week: "Week 1", label: "Discovery, Setup & Migration" },
      { week: "Week 2", label: "Training & Go-Live" },
      { week: "Weeks 3-6", label: "Hypercare Support" },
    ],
  },
  {
    size: "Small Schools",
    students: "Under 200 students",
    timeline: "6 Weeks",
    steps: [
      { week: "Weeks 1-2", label: "Discovery & Setup" },
      { week: "Weeks 3-4", label: "Data Migration" },
      { week: "Week 5", label: "Staff Training" },
      { week: "Week 6", label: "Go-Live" },
      { week: "Weeks 7-10", label: "Hypercare Support" },
    ],
  },
  {
    size: "Medium Schools",
    students: "Under 800 students",
    timeline: "9 Weeks",
    steps: [
      { week: "Weeks 1-3", label: "Discovery & Planning" },
      { week: "Weeks 4-7", label: "Configuration & Migration" },
      { week: "Weeks 8-9", label: "Phased Staff Training" },
      { week: "Weeks 10-11", label: "Staged Go-Live" },
      { week: "Weeks 12-16", label: "Hypercare Support" },
    ],
  },
  {
    size: "Large Schools",
    students: "Over 800 students",
    timeline: "12–16 Weeks",
    steps: [
      { week: "Weeks 1-4", label: "Discovery Workshop" },
      { week: "Weeks 5-10", label: "Custom Config & Integration" },
      { week: "Weeks 11-13", label: "Role-Based Training" },
      { week: "Weeks 14-16", label: "Controlled Go-Live" },
      { week: "Weeks 17-24", label: "Extended Hypercare" },
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

const pricingTiers = [
  { size: "Very Small", students: "Below 30 students", features: ["Full platform access", "Implementation support", "Staff training included", "Hypercare support", "DE compliance updates"] },
  { size: "Small", students: "Under 200 students", features: ["Full platform access", "Implementation support", "Staff training included", "12-month hypercare", "DE compliance updates"] },
  { size: "Medium", students: "Under 800 students", features: ["Full platform access", "Implementation support", "Staff training included", "12-month hypercare", "DE compliance updates", "Priority support"] },
  { size: "Large", students: "800+ students", features: ["Full platform access", "Implementation support", "Staff training included", "12-month hypercare", "DE compliance updates", "Priority support", "Dedicated account manager"] },
];

const certifications = [
  { img: isoIcon, title: "ISO 27001", desc: "Information Security Management — internationally recognised standard for managing information security risks." },
  { img: soc2Icon, title: "SOC 2 Type II", desc: "Service Organisation Control — independent third-party audit of security, availability, and privacy controls." },
  { img: gdprIcon, title: "GDPR", desc: "General Data Protection Regulation — GDPR-aligned data handling with highest global standard of data rights." },
  { img: st4sIcon, title: "ST4S", desc: "Safe & Trusted 4 Schools — purpose-built school safety standard ensuring child-safe communications and safeguarding." },
];

const infrastructure = [
  { icon: Server, title: "Data Never Leaves Australia", desc: "All school data stored exclusively in AWS Australian data centres — Sydney and Melbourne regions." },
  { icon: RefreshCw, title: "Automated Backup & Recovery", desc: "Continuous automated backups to redundant AWS availability zones with point-in-time recovery." },
  { icon: Eye, title: "Enterprise-Grade Security", desc: "AES-256 encryption at rest and in transit. MFA, role-based access controls, and 24/7 monitoring." },
];

const Implementation = () => {
  return (
    <>
      <PageHero
        label="Implementation"
        title="Simple & Scalable ERP Implementation for Schools"
        description="Tailored to your school's size and configuration. Minimise disruption and maximise adoption from day one."
        image={heroImpl}
      />

      {/* Timeline Plans */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Timeline by School Size</p>
          <h2 className="section-title mb-12">Phased Approach for Every School</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.size}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="card-premium relative overflow-hidden"
              >
                {/* Top orange bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: "hsl(var(--gold))" }}
                />

                <div className="pt-2">
                  <p className="font-serif text-xl font-bold mb-1">{plan.size}</p>
                  <p className="text-xs text-muted-foreground mb-1">{plan.students}</p>
                  <p className="font-mono text-2xl font-bold text-primary mb-6">{plan.timeline}</p>

                  <div className="relative pl-6">
                    {/* Vertical connecting line */}
                    <div
                      className="absolute left-[7px] top-1 bottom-1 w-0.5"
                      style={{ background: "hsl(var(--gold) / 0.4)" }}
                    />
                    {plan.steps.map((step, i) => (
                      <motion.div
                        key={i}
                        className="relative pb-5 last:pb-0"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {/* Dot */}
                        <div
                          className="absolute left-[-18px] top-1.5 w-3 h-3 rounded-full border-2 border-card"
                          style={{ background: "hsl(var(--gold))" }}
                        />
                        <p className="text-xs font-mono text-muted-foreground mb-0.5">{step.week}</p>
                        <p className="text-sm font-semibold text-foreground">{step.label}</p>
                      </motion.div>
                    ))}
                  </div>
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

      {/* Pricing */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Pricing</p>
          <h2 className="section-title">Flexible Pricing for All Schools</h2>
          <p className="section-subtitle mb-12">
            Custom pricing tailored to your school's size, modules, and requirements.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.size}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`card-premium relative overflow-hidden ${i === 2 ? "border-primary border-2 scale-[1.03]" : ""}`}
              >
                {i === 2 && (
                  <div className="absolute top-0 left-0 right-0 text-center py-1 text-xs font-bold bg-primary text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className={i === 2 ? "pt-6" : ""}>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">{tier.size} School</p>
                  <p className="font-serif text-3xl font-black text-foreground mb-1">Custom</p>
                  <p className="text-sm text-muted-foreground mb-6">{tier.students}</p>
                  <div className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className={i === 2 ? "btn-gold w-full text-center" : "btn-outline w-full text-center"}>
                    Request Proposal
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Victorian government schools can procure through the DE Panel SSP001 framework.{" "}
              <Link to="/contact" className="text-primary hover:underline">Contact us for details</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Security & Compliance</p>
          <h2 className="section-title mb-12">Enterprise-Level Security for Schools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-premium text-center group"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <img src={cert.img} alt={cert.title} className="h-14 w-14 object-contain" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Hosting & Infrastructure</p>
          <h2 className="section-title mb-12">Your Data, Secured in Australia</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {infrastructure.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-premium group"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-sans text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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