import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Eye, Scale, Users, ShieldCheck, Lock, Heart,
  CheckCircle, XCircle, Database, Cpu, ClipboardList, UserCheck,
  FileText, GraduationCap, Sparkles, AlertTriangle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import heroAbout from "@/assets/hero-about.jpg";

const principles = [
  { icon: UserCheck, title: "Human Oversight", desc: "Teachers remain in control. AI suggests, humans decide. Every consequential output is reviewed by a qualified educator." },
  { icon: Eye, title: "Transparency", desc: "AI-generated content is clearly labelled. Confidence scores and rationale are surfaced so users understand the why behind every recommendation." },
  { icon: Scale, title: "Fairness", desc: "Continuous bias monitoring across cohorts. Models are tested against equity criteria before deployment and audited regularly." },
  { icon: ClipboardList, title: "Accountability", desc: "Full audit trails of prompts, outputs and AI-influenced decisions. Clear ownership at the school, district and platform level." },
  { icon: Lock, title: "Privacy & Security", desc: "Aligned with the Privacy Act 1988. No personal or sensitive student data is used to generate AI analysis. Encrypted at rest and in transit." },
  { icon: Heart, title: "Social Wellbeing", desc: "AI is deployed only where it improves teaching, learning and wellbeing — never to replace human relationships in education." },
];

const rules = [
  "AI supports teachers — it does not replace them",
  "No sensitive or personal student data is used for AI analysis",
  "Controlled AI outputs only — no free-flow generation",
  "Teacher approval required for every AI-influenced decision",
];

const restricted = [
  "Automated grading without human validation",
  "Behavioural or emotional profiling of students",
  "Facial recognition or surveillance",
  "Black-box decision making",
];

const safeUseCases = [
  { icon: Sparkles, title: "Teacher Copilots", desc: "AI assists with lesson plans, rubrics and resource suggestions — always reviewed and approved by the teacher." },
  { icon: FileText, title: "Writing Feedback", desc: "Formative writing suggestions on grammar and structure. The teacher remains the final assessor." },
  { icon: AlertTriangle, title: "Early Warning Signals", desc: "Pattern-based attendance and engagement signals to support pastoral care — non-identifying and human-reviewed." },
  { icon: GraduationCap, title: "Administrative Automation", desc: "Drafting communications, scheduling and routine workflows. Humans remain in the approval loop." },
];

const governance = [
  { icon: ClipboardList, title: "AI Usage Logs", desc: "Every prompt, output and AI-assisted decision is logged for review." },
  { icon: FileText, title: "Audit Trails", desc: "Tamper-evident audit trails meeting Australian compliance requirements." },
  { icon: Users, title: "Role-Based Access", desc: "Granular AI permissions per role — student, teacher, admin, principal." },
  { icon: ShieldCheck, title: "Consent-Based Data Usage", desc: "Explicit consent management with clear data retention and right-to-access policies." },
];

const layers = [
  { icon: Database, title: "Data Layer", desc: "Hosted in Australia with full data sovereignty. Encrypted at rest and in transit. Role-based access controls." },
  { icon: Cpu, title: "AI Layer", desc: "Controlled, fine-tuned models. No direct exposure to public LLMs. All prompts logged and filtered." },
  { icon: Eye, title: "Governance Layer", desc: "Explainability dashboards, bias monitoring and continuous model performance tracking." },
  { icon: UserCheck, title: "Human-in-the-Loop", desc: "Teachers approve AI outputs. No autonomous decision-making in any consequential workflow." },
];

const ResponsibleAI = () => {
  return (
    <>
      <PageHero
        label="Responsible AI"
        title="Human-led, AI-assisted, Policy-compliant, Privacy-first"
        description="Camu's approach to AI in schools is anchored in the Australian Framework for Generative AI in Schools — built compliant by design, never AI-first by default."
        image={heroAbout}
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label">Our Approach</p>
          <h2 className="section-title mb-6">AI That Serves Education — On Australian Terms</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We treat AI in schools as a <strong className="text-foreground">policy-led architecture problem</strong> — not a technology showcase.
            Every AI feature in Camu maps directly to the six mandatory principles of the Australian Framework for Generative AI in Schools.
            If a feature can't be justified against a principle, it doesn't ship.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Core Principles</p>
          <h2 className="section-title mb-12">Six Principles. Non-negotiable.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="card-premium"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Operating Rules</p>
          <h2 className="section-title mb-10">How AI Behaves Inside Camu</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {rules.map((rule, i) => (
              <motion.div
                key={rule}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{rule}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Use Cases */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Safe AI Use Cases</p>
          <h2 className="section-title mb-12">Where AI Genuinely Helps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safeUseCases.map((u, i) => {
              const Icon = u.icon;
              return (
                <motion.div
                  key={u.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-premium"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">{u.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Restricted */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <p className="section-label">Restricted AI Use</p>
          <h2 className="section-title mb-10">What Camu Will Never Do</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {restricted.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-5 rounded-xl border border-destructive/20 bg-destructive/5"
              >
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Governance & Compliance</p>
          <h2 className="section-title mb-12">Compliance Built Into the Platform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governance.map((g, i) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="card-premium"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Architecture Overview</p>
          <h2 className="section-title mb-12">A Layered, Auditable AI Architecture</h2>
          <div className="space-y-4">
            {layers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-premium flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1">Layer {i + 1}</p>
                    <h3 className="font-serif text-xl font-bold mb-2">{layer.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{layer.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Message */}
      <section className="section-padding bg-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Our Commitment</p>
          <h2 className="font-serif text-3xl md:text-4xl font-black text-background mb-6 tracking-tight leading-tight">
            "Human-led, AI-assisted, policy-compliant, and privacy-first."
          </h2>
          <p className="text-base mb-8" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
            That's not a tagline. It's the architectural constraint behind every AI capability we ship.
          </p>
          <Link to="/contact" className="btn-gold">
            Talk to Our Team <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ResponsibleAI;
