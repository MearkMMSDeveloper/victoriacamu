import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const states = ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT", "NT", "NZ"];
const roles = ["Principal", "Deputy Principal", "Business Manager", "ICT Coordinator", "Teacher", "Admin Staff", "Other"];
const sizes = ["Small (Under 300)", "Medium (300–800)", "Large (800+)"];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-foreground pt-32 pb-20 section-padding relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 50%, hsl(var(--gold) / 0.1) 0%, transparent 50%)"
        }} />
        <div className="relative max-w-4xl mx-auto">
          <p className="section-label">Register</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-background leading-[1.06] tracking-tight mb-6">
            Register Your Interest
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.65)" }}>
            Whether you're in Victoria on the DE panel or anywhere across Australia & New Zealand — register and receive a tailored proposal within 2 business days.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card-premium text-center py-16">
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="font-serif text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We've received your registration. Our team will review your information and send a tailored proposal within 2 business days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="card-premium">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Full Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">School Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Your school name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Your Role *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                    <option value="">Select your role</option>
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Email *</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors" placeholder="you@school.edu.au" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors" placeholder="+61..." />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">School Size *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                    <option value="">Select size</option>
                    {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">State / Territory *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                    <option value="">Select state</option>
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Additional Notes</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Any specific requirements or priorities..." />
              </div>
              <p className="text-xs text-muted-foreground mt-4 mb-6">
                Your information is handled in accordance with the Privacy Act 1988. We never share your data with third parties without consent.
              </p>
              <button type="submit" className="btn-gold w-full md:w-auto">
                <Send className="w-4 h-4 mr-2" /> Submit Registration
              </button>
            </form>
          )}

          {/* Trust Badges */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "DE SSP001 Panel Supplier",
              "Cyber & IT Liability Insured",
              "Child-Safe Compliant",
              "2-Day Response Guarantee",
            ].map((badge) => (
              <div key={badge} className="text-center p-4 rounded-xl border border-border bg-card">
                <p className="text-xs font-semibold text-muted-foreground">{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
