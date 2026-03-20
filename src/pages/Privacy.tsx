import PageHero from "@/components/PageHero";
import heroPrivacy from "@/assets/hero-privacy.jpg";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Introduction",
    content: `SRM Technologies Australia Pty Ltd ("we", "us", "our") is committed to protecting the privacy of individuals who visit the Camu ERP website and use our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in accordance with the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs).`,
  },
  {
    title: "2. Information We Collect",
    content: `We may collect the following personal information when you interact with our website or services:`,
    list: [
      "Full name and job title/role",
      "Email address and phone number",
      "School name, size, and location (state/territory)",
      "Any additional information you provide in enquiry forms",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: `Your personal information is used to:`,
    list: [
      "Respond to your enquiries and registration of interest",
      "Provide tailored proposals for Camu ERP implementation",
      "Communicate relevant updates about our services",
      "Improve our website and service offerings",
      "Comply with legal obligations",
    ],
  },
  {
    title: "4. Data Protection & Security",
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Your data is stored securely and access is restricted to authorised personnel only.`,
  },
  {
    title: "5. Third-Party Sharing",
    content: `We do not sell, trade, or share your personal information with third parties without your explicit consent, except where required by law or necessary to deliver our services (e.g., hosting providers operating under strict data protection agreements).`,
  },
  {
    title: "6. Cookies",
    content: `Our website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyse website traffic and improve functionality. You can manage cookie preferences through your browser settings.`,
  },
  {
    title: "7. Your Rights",
    content: `You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us using the details below.`,
  },
  {
    title: "8. Contact Us",
    content: `If you have questions about this Privacy Policy or wish to make a complaint, please contact:`,
    contact: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
};

const Privacy = () => {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        image={heroPrivacy}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mb-10"
          >
            Last updated: March 2026
          </motion.p>

          <div className="space-y-6">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-card rounded-[10px] border border-border/60 p-8 shadow-sm"
              >
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-[1.8] text-[15px]">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="mt-4 space-y-2 pl-5">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground text-[15px] leading-relaxed list-disc"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.contact && (
                  <div className="mt-4 text-muted-foreground text-[15px] leading-[1.8]">
                    <p className="font-semibold text-foreground">
                      SRM Technologies Australia Pty Ltd
                    </p>
                    <p>Melbourne, Victoria, Australia</p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:info@camuerp.com.au"
                        className="text-primary hover:underline"
                      >
                        info@camuerp.com.au
                      </a>
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
