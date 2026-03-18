import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, ClipboardCheck, CreditCard, MessageSquare, BookOpen, Shield, Calendar, BarChart3, FileText, Bell, Laptop } from "lucide-react";
import PageHero from "@/components/PageHero";
import heroFeatures from "@/assets/hero-features.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const features = [
  {
    icon: Users,
    title: "Student Information System",
    desc: "Complete student lifecycle management — enrolment, records, academic history, wellbeing, and graduation tracking.",
    capabilities: ["Digital enrolment intake", "Student records management", "Academic history tracking", "Cohort analytics & NAPLAN insights"],
  },
  {
    icon: ClipboardCheck,
    title: "Attendance Management",
    desc: "One-tap roll marking with automatic parent alerts for unexplained absences and DE-compliant reporting.",
    capabilities: ["One-tap attendance marking", "Instant parent notifications", "Automated DE reporting", "Absence explanation workflows"],
  },
  {
    icon: CreditCard,
    title: "Finance & Payments",
    desc: "Online fee collection, excursion payments, canteen orders, and uniform shop with automatic financial reconciliation.",
    capabilities: ["Online payment gateway", "Canteen & uniform shop", "Automatic reconciliation", "Budget & financial oversight"],
  },
  {
    icon: MessageSquare,
    title: "Communication Tools",
    desc: "Multi-channel broadcast communications across mobile app, email, SMS, and web portal.",
    capabilities: ["Push notifications", "Email digests (daily/weekly)", "SMS alerts for urgent updates", "In-app messaging"],
  },
  {
    icon: BookOpen,
    title: "LMS Integration",
    desc: "Curriculum planner, assignment management, gradebook, and automated report card generation.",
    capabilities: ["Curriculum-aligned planner", "Assignment submission portal", "Centralised gradebook", "Auto report generation"],
  },
  {
    icon: Shield,
    title: "Compliance & Safety",
    desc: "Victorian DE policy compliance, child safety standards, VRQA reporting, and data privacy built into every workflow.",
    capabilities: ["DE policy auto-alignment", "Child-safe design protocols", "VRQA-ready reporting", "Audit trail logging"],
  },
  {
    icon: Calendar,
    title: "Calendar & Events",
    desc: "Term calendars, event management, parent-teacher interviews, resource bookings, and RSVP management.",
    capabilities: ["School-wide calendar", "Event RSVP management", "Interview booking system", "Resource allocation"],
  },
  {
    icon: FileText,
    title: "Digital Forms & Workflows",
    desc: "Replace paper forms with smart digital workflows that auto-route, auto-remind, and auto-file.",
    capabilities: ["Drag-and-drop form builder", "Automated routing", "Digital consent capture", "Smart reminders"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Dashboards",
    desc: "Real-time executive dashboards for attendance, academics, finances, and wellbeing insights.",
    capabilities: ["Executive live dashboard", "Custom report builder", "Trend analysis tools", "Data export & API"],
  },
  {
    icon: Bell,
    title: "Wellbeing Management",
    desc: "Student wellbeing alerts, incident tracking, referral workflows, and case management.",
    capabilities: ["Wellbeing alert system", "Incident logging", "Referral workflows", "Case management tools"],
  },
  {
    icon: Laptop,
    title: "Visitor & Contractor Management",
    desc: "Digital check-in for visitors and contractors with Working with Children Check validation.",
    capabilities: ["Digital visitor sign-in", "Contractor management", "WWCC validation", "Emergency roll generation"],
  },
];

const Features = () => {
  return (
    <>
      <PageHero
        label="Capabilities"
        title="Complete School ERP Features for Modern Institutions"
        description="Everything your school needs in one platform — from student records to payments, from attendance to analytics."
        image={heroFeatures}
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className="card-premium grid md:grid-cols-[1fr,1.2fr] gap-8 items-center group hover:border-primary/20 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {f.capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {cap}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-accent text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title mb-4">See All Features in Action</h2>
          <p className="section-subtitle mx-auto mb-8">
            Book a demo and we'll walk you through every capability tailored to your school.
          </p>
          <Link to="/contact" className="btn-gold">
            Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Features;
