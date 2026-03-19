import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  image: string;
}

const PageHero = ({ label, title, description, image }: PageHeroProps) => {
  return (
    <section className="relative min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--navy) / 0.6) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, hsl(var(--teal) / 0.12) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{label}</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-background leading-[1.06] tracking-tight mb-6 max-w-4xl">
            {title}
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "hsl(0 0% 100% / 0.7)" }}
          >
            {description}
          </p>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PageHero;
