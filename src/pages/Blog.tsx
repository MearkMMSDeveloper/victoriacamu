import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import heroBlog from "@/assets/hero-blog.jpg";

const articles = [
  {
    title: "Why Schools Need ERP Software in 2025",
    excerpt: "Discover why modern schools are moving from disconnected systems to integrated ERP platforms — and how it impacts student outcomes.",
    category: "Industry Insights",
    readTime: "5 min read",
  },
  {
    title: "Benefits of School ERP: A Complete Guide",
    excerpt: "From reduced admin time to better parent engagement, explore the measurable benefits of implementing a school ERP system.",
    category: "Guides",
    readTime: "7 min read",
  },
  {
    title: "Digital Transformation in Australian Education",
    excerpt: "How Australian schools are embracing technology to improve operations, comply with DE requirements, and enhance learning outcomes.",
    category: "Trends",
    readTime: "6 min read",
  },
  {
    title: "Understanding the Victorian DE Panel (SSP001)",
    excerpt: "A comprehensive guide to the Victorian Department of Education School Software Panel and what it means for school procurement.",
    category: "Compliance",
    readTime: "4 min read",
  },
  {
    title: "School Data Security: What Parents Should Know",
    excerpt: "An overview of how modern school ERP systems protect student data with enterprise-grade security and Australian-hosted infrastructure.",
    category: "Security",
    readTime: "5 min read",
  },
  {
    title: "Choosing the Right Student Management System",
    excerpt: "Key factors to consider when selecting a student management system for your school — features, compliance, support, and scalability.",
    category: "Guides",
    readTime: "8 min read",
  },
];

const Blog = () => {
  return (
    <>
      <PageHero
        label="Resources"
        title="Insights for Modern School Leaders"
        description="Expert articles on school technology, compliance, and digital transformation in Australian education."
        image={heroBlog}
      />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
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
                <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
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
