import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, CheckCircle, Building2, GraduationCap, BarChart3, MapPin, Shield } from "lucide-react";
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

const corePartners = [
  {
    name: "SRM Technologies",
    icon: Building2,
    role: "Implementation & Marketing Partner",
    description:
      "SRM Technologies Australia Pty Ltd is a specialized EdTech solutions provider grounded in education through the SRM Group of Institutions — India's largest multidisciplinary private educational conglomerate serving 157,700+ students. SRM Technologies delivers comprehensive managed IT services, EdTech solutions, and digital transformation initiatives for educational institutions globally.",
    highlights: ["EdTech Solutions Provider", "Managed IT Services", "Digital Transformation"],
  },
  {
    name: "Camu",
    icon: GraduationCap,
    role: "Core Technology Platform",
    description:
      "Camu is a powerful cloud-based ERP platform purpose-built to transform the learning experience across education institutions worldwide — serving 550+ institutions across 12 countries with a user base exceeding 1 million students. The platform encompasses Learning Management, Outcome Based Education, Virtual Classrooms, and cutting-edge AI capabilities.",
    highlights: ["550+ Institutions", "12 Countries", "1M+ Students"],
  },
  {
    name: "LeadSquared",
    icon: BarChart3,
    role: "CRM & Marketing Automation",
    description:
      "LeadSquared empowers organizations to deliver personalised customer interactions at scale. An end-to-end digital engagement platform helping businesses build connected experiences — serving 2,000+ businesses across 40+ countries with 250,000+ users. The platform is GDPR, HIPAA & ISO 27001 compliant.",
    highlights: ["2,000+ Businesses", "40+ Countries", "Omnichannel CRM"],
  },
];

const localPartners = [
  {
    name: "Crystal Delta",
    badge: "Local Partner",
    icon: Shield,
    description:
      "Crystal Delta is a global technology and education solutions company headquartered in Melbourne, Australia, delivering innovative and impactful technology solutions since 2015. With 150+ professionals across five offices in Australia, the United States, and India, Crystal Delta serves 60+ clients through its SoaringEd education portfolio — providing value-driven, secure, and scalable technology solutions.",
    highlights: ["Melbourne HQ", "150+ Professionals", "60+ Clients"],
  },
  {
    name: "Genix Ventures",
    badge: "Local Partner",
    icon: MapPin,
    description:
      "Genix Ventures is an Australian technology company headquartered in Melbourne, delivering innovative cloud-based business process automation solutions. Specializing in regulatory compliance, case management, and workflow automation, Genix offers Casegenix — a sophisticated cloud-native case management platform. ISO 9001 and ISO 27001 certified.",
    highlights: ["Cloud-Native Solutions", "Casegenix Platform", "ISO Certified"],
  },
];

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
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Camu ERP is implemented and marketed by SRM Technologies Australia Pty Ltd.</strong> With deep expertise in education technology, SRM Technologies brings enterprise-level solutions to schools across Australia and New Zealand.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Camu is listed on the Victorian Department of Education School Software Panel (SSP001) across all four procurement categories — enabling streamlined, pre-approved procurement for government schools.
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
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="card-premium cursor-default hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the trusted digital backbone of every school in Australia and New Zealand — enabling institutions to operate with clarity, efficiency, and confidence.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="card-premium cursor-default hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
          >
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

      {/* Partners Section */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Partners</p>
            <h2 className="section-title">Our Technology & Implementation Partners</h2>
            <p className="section-subtitle mx-auto mt-4">
              A powerful ecosystem of technology and local implementation partners delivering excellence in education.
            </p>
          </div>

          {/* Core Technology Partners */}
          <div className="mb-16">
            <h3 className="font-serif text-xl font-bold mb-8 text-center tracking-wide uppercase text-muted-foreground">
              Core Technology Partners
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {corePartners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="card-premium flex flex-col cursor-default hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <partner.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg font-bold mb-1">{partner.name}</h4>
                  <p className="text-xs font-semibold tracking-wide uppercase text-primary mb-3">{partner.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{partner.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                    {partner.highlights.map((h) => (
                      <span key={h} className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Local Implementation Partners */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-8 text-center tracking-wide uppercase text-muted-foreground">
              Local Implementation Partners
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {localPartners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="card-premium flex flex-col cursor-default hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center">
                      <partner.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                      {partner.badge}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold mb-3">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{partner.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                    {partner.highlights.map((h) => (
                      <span key={h} className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
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
