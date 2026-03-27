import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Server, RefreshCw, Eye } from "lucide-react";
import isoIcon from "@/assets/certs/iso27001.png";
import soc2Icon from "@/assets/certs/soc2.png";
import gdprIcon from "@/assets/certs/gdpr.png";
import st4sIcon from "@/assets/certs/st4s.png";
import PageHero from "@/components/PageHero";
import heroSecurity from "@/assets/hero-security.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const certifications = [
  { img: isoIcon, title: "ISO 27001", desc: "Information Security Management — internationally recognised standard for managing information security risks." },
  { img: soc2Icon, title: "SOC 2 Type II", desc: "Service Organisation Control — independent third-party audit of security, availability, and privacy controls." },
  { img: gdprIcon, title: "GDPR", desc: "General Data Protection Regulation — GDPR-aligned data handling with highest global standard of data rights." },
  { img: st4sIcon, title: "ST4S", desc: "Safe & Trusted 4 Schools — purpose-built school safety standard ensuring child-safe communications and safeguarding." },
];

const infrastructure = [
  { icon: Server, title: "Data Never Leaves Australia", desc: "All school data stored exclusively in AWS Australian data centres — Sydney and Melbourne regions. Full Privacy Act 1988 compliance." },
  { icon: RefreshCw, title: "Automated Backup & Recovery", desc: "Continuous automated backups to redundant AWS availability zones. Point-in-time recovery with geo-redundant storage." },
  { icon: Eye, title: "Enterprise-Grade Security", desc: "AES-256 encryption at rest and in transit. MFA, role-based access controls, intrusion detection, and 24/7 monitoring." },
];

const Security = () => {
  return (
    <>
      <PageHero
        label="Security & Compliance"
        title="Enterprise-Level Security & Compliance for Schools"
        description="Camu ERP meets the highest international security and compliance standards — hosted entirely within Australia."
        image={heroSecurity}
      />

      {/* Certifications */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Compliance Certifications</p>
          <h2 className="section-title mb-12">Certified to the Highest Standards</h2>
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
      <section className="section-padding bg-card">
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
