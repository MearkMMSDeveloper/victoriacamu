import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import CamuLogo from "@/components/CamuLogo";

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
              <CamuLogo textColor="white" iconHeight="h-[40px] md:h-[55px]" />
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
            <ul className="space-y-4 text-sm opacity-60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-80" />
                <div>
                  <p>SRM Technologies Australia Pty Ltd</p>
                  <p>Melbourne, Victoria, Australia</p>
                </div>
              </li>
              <li>
                <a href="mailto:info@camuerp.com.au" className="flex items-center gap-3 hover:opacity-100 hover:text-primary transition-all">
                  <Mail className="w-4 h-4 flex-shrink-0 opacity-80" />
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
          <div className="flex gap-6 text-xs opacity-60">
            <Link to="/privacy-policy" className="hover:opacity-100 hover:text-[hsl(43,100%,53%)] transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:opacity-100 hover:text-[hsl(43,100%,53%)] transition-colors duration-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;