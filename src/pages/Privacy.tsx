import PageHero from "@/components/PageHero";
import heroContact from "@/assets/hero-contact.jpg";

const Privacy = () => {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        image={heroContact}
      />

      <section className="section-padding">
        <div className="max-w-3xl mx-auto prose prose-sm">
          <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

          <h2>1. Introduction</h2>
          <p>
            SRM Technologies Australia Pty Ltd ("we", "us", "our") is committed to protecting the privacy
            of individuals who visit the Camu ERP website and use our services. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information in accordance with the
            Australian Privacy Act 1988 and the Australian Privacy Principles (APPs).
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following personal information when you interact with our website or services:</p>
          <ul>
            <li>Full name and job title/role</li>
            <li>Email address and phone number</li>
            <li>School name, size, and location (state/territory)</li>
            <li>Any additional information you provide in enquiry forms</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>Your personal information is used to:</p>
          <ul>
            <li>Respond to your enquiries and registration of interest</li>
            <li>Provide tailored proposals for Camu ERP implementation</li>
            <li>Communicate relevant updates about our services</li>
            <li>Improve our website and service offerings</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Protection & Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal
            information against unauthorised access, alteration, disclosure, or destruction. Your data
            is stored securely and access is restricted to authorised personnel only.
          </p>

          <h2>5. Third-Party Sharing</h2>
          <p>
            We do not sell, trade, or share your personal information with third parties without your
            explicit consent, except where required by law or necessary to deliver our services
            (e.g., hosting providers operating under strict data protection agreements).
          </p>

          <h2>6. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. Cookies are small text
            files stored on your device that help us analyse website traffic and improve functionality.
            You can manage cookie preferences through your browser settings.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to access, correct, or request deletion of your personal information.
            To exercise these rights, please contact us using the details below.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to make a complaint, please contact:
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

export default Privacy;
