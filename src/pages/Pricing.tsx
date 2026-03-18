import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Pricing = () => {
  return (
    <>
      <section className="bg-foreground pt-32 pb-20 section-padding relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 50%, hsl(var(--gold) / 0.1) 0%, transparent 50%)"
        }} />
        <div className="relative max-w-4xl mx-auto">
          <p className="section-label">Pricing</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-background leading-[1.06] tracking-tight mb-6">
            Flexible Pricing for Schools of All Sizes
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.65)" }}>
            Custom pricing tailored to your school's size, modules, and requirements. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {["Small", "Medium", "Large"].map((size, i) => (
              <motion.div
                key={size}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`card-premium relative overflow-hidden ${i === 1 ? "border-primary border-2" : ""}`}
              >
                {i === 1 && (
                  <div className="absolute top-0 left-0 right-0 text-center py-1 text-xs font-bold bg-primary text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className={i === 1 ? "pt-6" : ""}>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">{size} School</p>
                  <p className="font-serif text-3xl font-black text-foreground mb-1">Custom</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {size === "Small" ? "Under 300 students" : size === "Medium" ? "300–800 students" : "800+ students"}
                  </p>
                  <div className="space-y-3 mb-8">
                    {[
                      "Full platform access",
                      "Implementation support",
                      "Staff training included",
                      "12-month hypercare",
                      "DE compliance updates",
                      ...(i >= 1 ? ["Priority support"] : []),
                      ...(i === 2 ? ["Dedicated account manager"] : []),
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className={i === 1 ? "btn-gold w-full text-center" : "btn-outline w-full text-center"}>
                    Request Proposal
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Victorian government schools can procure through the DE Panel SSP001 framework.{" "}
              <Link to="/contact" className="text-primary hover:underline">Contact us for details</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
