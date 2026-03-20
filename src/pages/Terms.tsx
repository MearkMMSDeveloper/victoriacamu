import PageHero from "@/components/PageHero";
import heroContact from "@/assets/hero-contact.jpg";

const Terms = () => {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Use"
        description="Terms and conditions governing the use of the Camu ERP website."
        image={heroContact}
      />

      <section className="section-padding">
        <div className="max-w-3xl mx-auto prose prose-sm">
          <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Camu ERP website operated by SRM Technologies Australia Pty Ltd,
            you agree to comply with and be bound by these Terms of Use. If you do not agree, please
            refrain from using this website.
          </p>

          <h2>2. Service Description</h2>
          <p>
            Camu ERP is a comprehensive school management platform. SRM Technologies Australia Pty Ltd
            is the authorised implementation and marketing partner for Camu ERP across Australia and
            New Zealand. This website provides information about our services and allows schools to
            register their interest.
          </p>

          <h2>3. Website Usage</h2>
          <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
          <ul>
            <li>Infringe the rights of others</li>
            <li>Restrict or inhibit anyone else's use of the website</li>
            <li>Attempt to gain unauthorised access to any part of the website</li>
            <li>Introduce malicious software or harmful code</li>
          </ul>

          <h2>4. User Responsibilities</h2>
          <p>
            When submitting information through our registration forms, you are responsible for ensuring
            that all information provided is accurate, current, and complete. You must not submit false
            or misleading information.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, and software — is
            the property of SRM Technologies Australia Pty Ltd or its licensors and is protected by
            Australian and international intellectual property laws. You may not reproduce, distribute,
            or modify any content without prior written permission.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, SRM Technologies Australia Pty Ltd shall not be
            liable for any indirect, incidental, special, or consequential damages arising from your
            use of this website or our services. The information on this website is provided "as is"
            without warranties of any kind.
          </p>

          <h2>7. External Links</h2>
          <p>
            This website may contain links to third-party websites. We are not responsible for the
            content or privacy practices of those sites and encourage you to review their terms
            independently.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms of Use at any time. Changes will be effective
            immediately upon posting. Continued use of the website constitutes acceptance of the
            revised terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of the State of Victoria, Australia. Any
            disputes shall be subject to the exclusive jurisdiction of the courts of Victoria.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For questions about these Terms, please contact:
          </p>
          <p>
            SRM Technologies Australia Pty Ltd<br />
            Melbourne, Victoria, Australia<br />
            Email: <a href="mailto:info@camuerp.com.au" className="text-primary hover:underline">info@camuerp.com.au</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Terms;
