import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Cloud, Server, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const certifications = [
  { icon: "🔐", title: "ISO 27001", desc: "Information Security Management — internationally recognised standard for managing information security risks." },
  { icon: "☁️", title: "SOC 2 Type II", desc: "Service Organisation Control — independent third-party audit of security, availability, and privacy controls." },
  { icon: "🌏", title: "GDPR", desc: "General Data Protection Regulation — GDPR-aligned data handling with highest global standard of data rights." },
  { icon: "🏫", title: "ST4S", desc: "Safe & Trusted 4 Schools — purpose-built school safety standard ensuring child-safe communications and safeguarding." },
];

const infrastructure = [
  { icon: "🇦🇺", title: "Data Never Leaves Australia", desc: "All school data stored exclusively in AWS Australian data centres — Sydney and Melbourne regions. Full Privacy Act 1988 compliance." },
  { icon: "🔄", title: "Automated Backup & Recovery", desc: "Continuous automated backups to redundant AWS availability zones. Point-in-time recovery with geo-redundant storage." },
  { icon: "🔒", title: "Enterprise-Grade Security", desc: "AES-256 encryption at rest and in transit. MFA, role-based access controls, intrusion detection, and 24/7 monitoring." },
];

const Security = () => {
  return (
    <>
      <section className="bg-foreground pt-32 pb-20 section-padding relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 60% 40%, hsl(var(--teal) / 0.12) 0%, transparent 50%)"
        }} />
        <div className="relative max-w-4xl mx-auto">
          <p className="section-label">Security & Compliance</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-background leading-[1.06] tracking-tight mb-6">
            Enterprise-Level Security & Compliance for Schools
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.65)" }}>
            Camu ERP meets the highest international security and compliance standards — hosted entirely within Australia.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Compliance Certifications</p>
          <h2 className="section-title mb-12">Certified to the Highest Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <motion.div key={cert.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="card-premium text-center">
                <span className="text-4xl block mb-4">{cert.icon}</span>
                <h3 className="font-serif text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Hosting & Infrastructure</p>
          <h2 className="section-title mb-12">Your Data, Secured in Australia</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {infrastructure.map((item) => (
              <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="card-premium">
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="font-sans text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title mb-4">Security You Can Trust</h2>
          <p className="section-subtitle mx-auto mb-8">
            Request our full security documentation and compliance certificates.
          </p>
          <Link to="/contact" className="btn-gold">
            Request Security Pack <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Security;
