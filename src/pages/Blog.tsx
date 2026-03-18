import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const articles = [
  {
    title: "Why Schools Need ERP Software in 2025",
    excerpt: "Discover why modern schools are moving from disconnected systems to integrated ERP platforms — and how it impacts student outcomes.",
    category: "Industry Insights",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "Benefits of School ERP: A Complete Guide",
    excerpt: "From reduced admin time to better parent engagement, explore the measurable benefits of implementing a school ERP system.",
    category: "Guides",
    readTime: "7 min read",
    slug: "#",
  },
  {
    title: "Digital Transformation in Australian Education",
    excerpt: "How Australian schools are embracing technology to improve operations, comply with DE requirements, and enhance learning outcomes.",
    category: "Trends",
    readTime: "6 min read",
    slug: "#",
  },
  {
    title: "Understanding the Victorian DE Panel (SSP001)",
    excerpt: "A comprehensive guide to the Victorian Department of Education School Software Panel and what it means for school procurement.",
    category: "Compliance",
    readTime: "4 min read",
    slug: "#",
  },
  {
    title: "School Data Security: What Parents Should Know",
    excerpt: "An overview of how modern school ERP systems protect student data with enterprise-grade security and Australian-hosted infrastructure.",
    category: "Security",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "Choosing the Right Student Management System",
    excerpt: "Key factors to consider when selecting a student management system for your school — features, compliance, support, and scalability.",
    category: "Guides",
    readTime: "8 min read",
    slug: "#",
  },
];

const Blog = () => {
  return (
    <>
      <section className="bg-foreground pt-32 pb-20 section-padding relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 30% 50%, hsl(var(--gold) / 0.1) 0%, transparent 50%)"
        }} />
        <div className="relative max-w-4xl mx-auto">
          <p className="section-label">Resources</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-background leading-[1.06] tracking-tight mb-6">
            Insights for Modern School Leaders
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "hsl(0 0% 100% / 0.65)" }}>
            Expert articles on school technology, compliance, and digital transformation in Australian education.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <motion.article
                key={article.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card-premium group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-primary">{article.category}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title mb-4">Stay Updated</h2>
          <p className="section-subtitle mx-auto mb-8">
            Get the latest insights on school technology and education ERP delivered to your inbox.
          </p>
          <Link to="/contact" className="btn-gold">
            Subscribe to Updates <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
