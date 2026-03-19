import { Link } from "react-router-dom";
import camuLogoLight from "@/assets/camu-logo-light.png";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Features", path: "/features" },
      { label: "Implementation", path: "/implementation" },
      { label: "Register Interest", path: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-3">
              <img
                src={camuLogoLight}
                alt="Camu ERP"
                className="h-[50px] md:h-[80px] w-auto drop-shadow-[0_2px_4px_rgba(255,255,255,0.15)]"
              />
            </div>
            <p className="text-sm leading-relaxed opacity-60 max-w-md mb-4">
              One Platform. Every School. Every Student. Every Story.
            </p>
            <p className="text-xs leading-relaxed opacity-40">
              Implemented & marketed by SRM Technologies Australia Pty Ltd.
            </p>
          </div>

          {/* Quick Links */}
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

          {/* Contact Info */}
          <div>
            <h4 className="font-sans text-sm font-bold tracking-wide uppercase mb-4 opacity-40">
              Contact
            </h4>
            <ul className="space-y-3 text-sm opacity-60">
              <li>SRM Technologies Australia Pty Ltd</li>
              <li>Melbourne, Victoria, Australia</li>
              <li>
                <a href="mailto:info@camuerp.com.au" className="hover:opacity-100 hover:text-primary transition-all">
                  info@camuerp.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">
            &copy; {new Date().getFullYear()} SRM Technologies Australia Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs opacity-40">
            <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
