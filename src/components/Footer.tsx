import { Link } from "react-router-dom";
import camuLogo from "@/assets/camu-logo.png";

const states = ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT", "NT", "NZ"];

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Features", path: "/features" },
      { label: "Personas", path: "/personas" },
      { label: "Implementation", path: "/implementation" },
      { label: "Pricing", path: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", path: "/about" },
      { label: "Blog", path: "/blog" },
      { label: "Security", path: "/security" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={camuLogo} alt="Camu ERP" className="h-[40px] md:h-[80px] w-auto brightness-0 invert drop-shadow-[0_2px_4px_rgba(255,255,255,0.15)] mb-2.5" />
            </div>
            <p className="text-sm leading-relaxed opacity-60 max-w-md mb-6">
              One Platform. Every School. Every Student. Every Story. Victorian DE Panel SSP001 Approved.
            </p>
            {/* Regional Directory */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3 opacity-40">Available Regions</p>
              <div className="flex flex-wrap gap-2">
                {states.map((s) => (
                  <span
                    key={s}
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      s === "VIC"
                        ? "border-secondary/40 text-secondary"
                        : "border-background/10 opacity-50"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-sans text-sm font-bold tracking-wide uppercase mb-4 opacity-40">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">
            © {new Date().getFullYear()} SRM Technologies Australia Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs opacity-40">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
