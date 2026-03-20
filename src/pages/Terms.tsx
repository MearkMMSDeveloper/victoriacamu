import PageHero from "@/components/PageHero";
import heroTerms from "@/assets/hero-terms.jpg";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the Camu ERP website operated by SRM Technologies Australia Pty Ltd, you agree to comply with and be bound by these Terms of Use. If you do not agree, please refrain from using this website.`,
  },
  {
    title: "2. Service Description",
    content: `Camu ERP is a comprehensive school management platform. SRM Technologies Australia Pty Ltd is the authorised implementation and marketing partner for Camu ERP across Australia and New Zealand. This website provides information about our services and allows schools to register their interest.`,
  },
  {
    title: "3. Website Usage",
    content: `You agree to use this website only for lawful purposes and in a manner that does not:`,
    list: [
      "Infringe the rights of others",
      "Restrict or inhibit anyone else's use of the website",
      "Attempt to gain unauthorised access to any part of the website",
      "Introduce malicious software or harmful code",
    ],
  },
  {
    title: "4. User Responsibilities",
    content: `When submitting information through our registration forms, you are responsible for ensuring that all information provided is accurate, current, and complete. You must not submit false or misleading information.`,
  },
  {
    title: "5. Intellectual Property",
    content: `All content on this website — including text, graphics, logos, images, and software — is the property of SRM Technologies Australia Pty Ltd or its licensors and is protected by Australian and international intellectual property laws. You may not reproduce, distribute, or modify any content without prior written permission.`,
  },
  {
    title: "6. Limitation of Liability",
    content: `To the maximum extent permitted by law, SRM Technologies Australia Pty Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services. The information on this website is provided "as is" without warranties of any kind.`,
  },
  {
    title: "7. External Links",
    content: `This website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites and encourage you to review their terms independently.`,
  },
  {
    title: "8. Changes to Terms",
    content: `We reserve the right to update these Terms of Use at any time. Changes will be effective immediately upon posting. Continued use of the website constitutes acceptance of the revised terms.`,
  },
  {
    title: "9. Governing Law",
    content: `These Terms of Use are governed by the laws of the State of Victoria, Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Victoria.`,
  },
  {
    title: "10. Contact Us",
    content: `For questions about these Terms, please contact:`,
    contact: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
};

const Terms = () => {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Use"
        description="Terms and conditions governing the use of the Camu ERP website."
        image={heroTerms}
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
            {sections.map((section) => (
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

export default Terms;
