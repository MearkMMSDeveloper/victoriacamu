import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Search, MapPin, Mail, Phone } from "lucide-react";
import { schools, getSchoolSize, type School } from "@/data/schools";
import PageHero from "@/components/PageHero";
import heroContact from "@/assets/hero-contact.jpg";

const states = ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT", "NT", "NZ"];
const roles = ["Principal", "Deputy Principal", "Business Manager", "ICT Coordinator", "Teacher", "Admin Staff", "Other"];
const sizes = ["Small (Under 300)", "Medium (300–800)", "Large (800+)"];

const Contact = () => {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Determine if user came from Home or Implementation (state-based navigation)
  const cameFromInternal = !!(location.state as { schoolName?: string } | null);

  // Form state
  const [schoolName, setSchoolName] = useState("");
  const [schoolSize, setSchoolSize] = useState("");
  const [schoolState, setSchoolState] = useState("");

  // School search in form
  const [searchResults, setSearchResults] = useState<School[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Auto-fill from navigation state & scroll to form if from internal link
  useEffect(() => {
    const state = location.state as { schoolName?: string; schoolSize?: string; schoolState?: string; scrollToForm?: boolean } | null;
    if (state) {
      if (state.schoolName) setSchoolName(state.schoolName);
      if (state.schoolSize) {
        const sizeMap: Record<string, string> = {
          "Small": "Small (Under 300)",
          "Medium": "Medium (300–800)",
          "Large": "Large (800+)",
        };
        setSchoolSize(sizeMap[state.schoolSize] || state.schoolSize);
      }
      if (state.schoolState) setSchoolState(state.schoolState);

      // Scroll to form if coming from internal pages
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [location.state]);

  // School name search
  const handleSchoolSearch = useCallback((value: string) => {
    setSchoolName(value);
    if (value.length < 3) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }
    const lower = value.toLowerCase();
    const matched = schools.filter((s) => s.name.toLowerCase().includes(lower)).slice(0, 8);
    setSearchResults(matched);
    setShowDropdown(matched.length > 0);
    setActiveIndex(-1);
  }, []);

  const selectSchool = (school: School) => {
    setSchoolName(school.name);
    setSchoolState(school.state);
    const sizeInfo = getSchoolSize(school.students);
    const sizeMap: Record<string, string> = {
      "Small": "Small (Under 300)",
      "Medium": "Medium (300–800)",
      "Large": "Large (800+)",
    };
    setSchoolSize(sizeMap[sizeInfo.label] || "");
    setShowDropdown(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, searchResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      selectSchool(searchResults[activeIndex]);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Show hero only when NOT coming from internal navigation */}
      {!cameFromInternal && (
        <PageHero
          label="Register"
          title="Register Your Interest"
          description="Whether you're in Victoria on the DE panel or anywhere across Australia & New Zealand — register and receive a tailored proposal within 2 business days."
          image={heroContact}
        />
      )}

      {/* Contact Info Section - only when full page view */}
      {!cameFromInternal && (
        <section className="section-padding bg-card">
          <div className="max-w-4xl mx-auto">
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title mb-8">Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-premium text-center">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Our Office</h3>
                <p className="text-sm text-muted-foreground">SRM Technologies Australia Pty Ltd</p>
                <p className="text-sm text-muted-foreground">Melbourne, Victoria, Australia</p>
              </div>
              <div className="card-premium text-center">
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-4 mx-auto">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Email Us</h3>
                <a href="mailto:info@camuerp.com.au" className="text-sm text-primary hover:underline">info@camuerp.com.au</a>
              </div>
              <div className="card-premium text-center">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">Tailored proposal within 2 business days</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding" ref={formRef}>
        <div className="max-w-3xl mx-auto">
          {/* Add padding top when skipping hero */}
          {cameFromInternal && <div className="pt-20" />}

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
              <h2 className="font-serif text-2xl font-bold mb-6">Register Your School</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Full Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Your full name" />
                </div>
                <div className="relative">
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">School Name *</label>
                  <div className="relative">
                    <input
                      ref={inputRef}
                      required
                      type="text"
                      value={schoolName}
                      onChange={(e) => handleSchoolSearch(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onFocus={() => schoolName.length >= 3 && searchResults.length > 0 && setShowDropdown(true)}
                      className="w-full px-4 py-3 pr-10 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="Start typing school name..."
                      autoComplete="off"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="absolute top-full left-0 right-0 bg-card border border-border rounded-b-xl overflow-hidden z-50 mt-0"
                        style={{ boxShadow: "var(--shadow-elevated)" }}
                      >
                        {searchResults.map((school, i) => (
                          <button
                            key={`${school.name}-${school.state}-${i}`}
                            type="button"
                            onClick={() => selectSchool(school)}
                            className={`w-full text-left px-4 py-2.5 flex items-center justify-between transition-colors text-sm ${
                              i === activeIndex ? "bg-accent" : "hover:bg-muted"
                            }`}
                          >
                            <span className="text-foreground">{school.name}</span>
                            <span className="text-xs font-semibold text-muted-foreground">{school.state}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Your Role *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                    <option value="">Select your role</option>
                    {roles.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
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
                  <select
                    required
                    value={schoolSize}
                    onChange={(e) => setSchoolSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select size</option>
                    {sizes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">State / Territory *</label>
                  <select
                    required
                    value={schoolState}
                    onChange={(e) => setSchoolState(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select state</option>
                    {states.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
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