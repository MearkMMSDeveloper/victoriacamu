import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import heroAbout from "@/assets/hero-about.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <>
      <PageHero
        label="About Us"
        title="About Camu ERP — Campus + You"
        description="Camu is where Campus meets You. A fully integrated school ERP platform connecting every stakeholder in one ecosystem."
        image={heroAbout}
      />

      {/* What is Camu */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="section-label">What is Camu ERP</p>
              <h2 className="section-title">The Operating System for ANZ Education</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Camu ERP is a fully integrated school management platform that connects every student, parent, teacher, administrator, and education authority in one seamlessly connected ecosystem — reducing administrative overhead and amplifying what matters most: learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Built by SRM Technologies Australia, Camu is listed on the Victorian Department of Education School Software Panel (SSP001) across all four procurement categories — enabling streamlined, pre-approved procurement for government schools.
              </p>
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
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
            </motion.div>
          </div>
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
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
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
