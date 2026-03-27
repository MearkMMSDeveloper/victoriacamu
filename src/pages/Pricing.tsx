import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import heroPricing from "@/assets/hero-pricing.jpg";

const Pricing = () => {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Flexible Pricing for Schools of All Sizes"
        description="Custom pricing tailored to your school's size, modules, and requirements. No hidden fees, no surprises."
        image={heroPricing}
      />

      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {["Small", "Medium", "Large"].map((size, i) => (
              <motion.div
                key={size}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`card-premium relative overflow-hidden ${size === "Medium" ? "border-primary border-2 scale-[1.03]" : ""}`}
              >
                {size === "Medium" && (
                  <div className="absolute top-0 left-0 right-0 text-center py-1 text-xs font-bold bg-primary text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className={size === "Medium" ? "pt-6" : ""}>
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
                  <Link to="/contact" className={size === "Medium" ? "btn-gold w-full text-center" : "btn-outline w-full text-center"}>
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
