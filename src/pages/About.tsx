import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Globe, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground pt-32 pb-20 section-padding relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 30% 40%, hsl(var(--teal) / 0.1) 0%, transparent 50%)"
        }} />
        <div className="relative max-w-4xl mx-auto">
          <p className="section-label">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-background leading-[1.06] tracking-tight mb-6">
            About Camu ERP — Campus + You
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.65)" }}>
            Camu is where Campus meets You. A fully integrated school ERP platform connecting every stakeholder in one ecosystem.
          </p>
        </div>
      </section>

      {/* What is Camu */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">What is Camu ERP</p>
              <h2 className="section-title">The Operating System for ANZ Education</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Camu ERP is a fully integrated school management platform that connects every student, parent, teacher, administrator, and education authority in one seamlessly connected ecosystem — reducing administrative overhead and amplifying what matters most: learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Built by SRM Technologies Australia, Camu is listed on the Victorian Department of Education School Software Panel (SSP001) across all four procurement categories — enabling streamlined, pre-approved procurement for government schools.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "2,200+", label: "Schools Addressable" },
                { num: "1", label: "Integrated Solution" },
                { num: "5", label: "User Personas Served" },
                { num: "4", label: "DE Categories Covered" },
              ].map((stat) => (
                <div key={stat.label} className="card-premium text-center">
                  <p className="font-serif text-3xl font-black text-primary mb-1">{stat.num}</p>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="card-premium">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the trusted digital backbone of every school in Australia and New Zealand — enabling institutions to operate with clarity, efficiency, and confidence.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="card-premium">
            <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To eliminate administrative fragmentation in schools by providing one connected platform that serves every role — from the principal's office to the parent's phone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Camu */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Why Choose Camu</p>
          <h2 className="section-title mb-10">Built Different. Built for Schools.</h2>
          <div className="space-y-4">
            {[
              "Pre-approved on the Victorian DE Panel (SSP001) — all four categories",
              "Single platform replacing 5+ disconnected school systems",
              "Purpose-built for Australian & NZ education requirements",
              "ISO 27001 certified with data hosted exclusively in Australia",
              "Child-safe design principles embedded in every workflow",
              "Dedicated implementation support with 12-month hypercare",
            ].map((item) => (
              <motion.div key={item} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-muted transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title mb-4">See Camu in Action</h2>
          <p className="section-subtitle mx-auto mb-8">
            Register your interest and our team will build a tailored proposal within 2 business days.
          </p>
          <Link to="/contact" className="btn-gold">
            Register Interest <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
