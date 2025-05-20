import React from 'react';
import BlurBox from "@/components/layout component/BlurBox.component";

const PrivacyPolicy = () => {
  return (
    <main className="pt-24">
      <div className="bg-[radial-gradient(circle_at_center,_#010c3b_0%,_#000003_100%)] h-screen fixed z-10 top-0 left-0 right-0 bottom-0">

      </div>
      <BlurBox className=" w-11/12 xs:w-4/5 md2:max-w-5xl mx-auto px-4 py-8 text-gray-800 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200 relative z-20">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">PRIVACY POLICY</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated December 01, 2024
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            This Privacy Notice for <strong>Shotlin</strong> (“we”, “us”, or
            “our”) describes how and why we might access, collect, store, use,
            and/or share (“process”) your personal information when you use our
            services (“Services”), including when you:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Visit our website at{" "}
              <a
                href="https://shotlin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                https://shotlin.com/
              </a>
              , or any website of ours that links to this Privacy Notice.
            </li>
            <li>
              Use our services. Our expertise spans website development, app
              development, and UX design, offering comprehensive solutions to
              elevate your digital presence. We craft innovative, user-focused
              products that seamlessly integrate functionality and design to
              deliver exceptional experiences.
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events.
            </li>
          </ul>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            Questions or concerns? Reading this Privacy Notice will help you
            understand your privacy rights and choices. We are responsible for
            making decisions about how your personal information is processed.
            If you do not agree with our policies and practices, please do not
            use our Services. If you still have any questions or concerns,
            please contact us at{" "}
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>
            .
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <section id="definitions" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Definitions</h2>
          <ul className="list-disc list-inside">
            <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
            <li><strong>Processing:</strong> Any operation performed on Personal Data (collection, storage, use, disclosure).</li>
            <li><strong>User:</strong> Any individual who accesses or uses our website or services.</li>
          </ul>
        </section>

        <section id="who-we-are" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Who We Are &amp; Contact</h2>
          <p>
            <strong>Company:</strong> Shotlin Inc.<br />
            <strong>Address:</strong> 379/N,BANIPUR PALPARA WARD 13,BANIPUR PALPARA,S.N. DEY ROAD
North 24 Parganas,West Bengal 743287, India<br />
            <strong>Email:</strong> <a href="mailto:support@shotlin.com" className="text-blue-600 underline">support@shotlin.com</a>
          </p>
        </section>

        <section id="data-collection" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Data We Collect</h2>
          <p>We collect the following categories of information:</p>
          <ul className="list-disc list-inside">
            <li><strong>Account Information:</strong> Name, email address, profile picture via Google Sign-In.</li>
            <li><strong>Authentication Data:</strong> OAuth tokens, username, and password hashes.</li>
            <li><strong>Usage &amp; Analytics:</strong> Site interactions, pages visited, device and browser information, IP address.</li>
            <li><strong>Transactional Data:</strong> Orders, payments, invoice details (via Stripe or similar).</li>
            <li><strong>Communications:</strong> Support requests, form submissions, chat logs.</li>
            <li><strong>Cookies &amp; Tracking:</strong> Cookies, pixel tags, Google Analytics data.</li>
          </ul>
        </section>

        <section id="collection-methods" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. How We Collect Data</h2>
          <ul className="list-disc list-inside">
            <li>Direct user input (registration forms, profile updates).</li>
            <li>Automated technologies (cookies, tracking pixels).</li>
            <li>Third-party services (Google OAuth, Stripe, analytics providers).</li>
            <li>Server logs and error reports.</li>
          </ul>
        </section>

        <section id="use-of-data" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Use of Your Data</h2>
          <ul className="list-disc list-inside">
            <li><strong>Authentication &amp; Account Management:</strong> Creating and securing your account.</li>
            <li><strong>Service Delivery:</strong> Fulfilling transactions, sending confirmations, and customer support.</li>
            <li><strong>Personalization:</strong> Customizing content and recommendations.</li>
            <li><strong>Analytics:</strong> Improving our website and services.</li>
            <li><strong>Marketing:</strong> Newsletters and promotions (only with opt-in consent).</li>
            <li><strong>Legal Compliance:</strong> Fraud prevention, legal obligations, and enforcement.</li>
          </ul>
        </section>

        <section id="sharing-data" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Sharing &amp; Disclosure</h2>
          <p>We may share your information with:</p>
          <ul className="list-disc list-inside">
            <li><strong>Service Providers:</strong> Firebase (Auth, Database), Stripe, MailChimp, analytics vendors.</li>
            <li><strong>Affiliates &amp; Subsidiaries:</strong> For internal business purposes.</li>
            <li><strong>Legal Authorities:</strong> To comply with legal processes or protect our rights.</li>
            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales.</li>
          </ul>
        </section>

        <section id="retention-period" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Data Retention</h2>
          <p>We retain Personal Data as long as your account is active or as needed to provide you services. Analytics and logs are typically kept for 12 months.</p>
        </section>

        <section id="security-measures" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Security Measures</h2>
          <p>We implement technical and organizational measures such as TLS encryption, access controls, and regular security assessments to protect your data.</p>
        </section>

        <section id="users-rights" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Your Privacy Rights</h2>
          <p>Depending on your jurisdiction, you may have rights including:</p>
          <ul className="list-disc list-inside">
            <li>Access, correction, or deletion of your Personal Data.</li>
            <li>Restrict or object to processing.</li>
            <li>Withdraw consent at any time (without affecting processing done prior).</li>
            <li>Data portability.</li>
          </ul>
          <p>To exercise these rights, contact us at <a href="mailto:privacy@shotlin.com" className="text-blue-600 underline">privacy@shotlin.com</a>.</p>
        </section>

        <section id="gdpr-ccpa" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. GDPR &amp; CCPA Notice</h2>
          <p>
            <strong>GDPR:</strong> If you are in the European Economic Area, we rely on your consent, contractual necessity, or legitimate interests to process data.
          </p>
          <p>
            <strong>CCPA:</strong> California residents have the right to know, delete, and opt out of sale of personal information.
          </p>
        </section>

        <section id="international-transfers" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">10. International Transfers</h2>
          <p>Your data may be processed in the United States or other countries with data protection laws. Where required, we implement standard contractual clauses to safeguard transfers.</p>
        </section>

        <section id="third-party-sites" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">11. Links to Other Sites</h2>
          <p>Our site may include links to third-party websites. We are not responsible for their privacy practices; please review their policies separately.</p>
        </section>

        <section id="children" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">12. Children’s Privacy</h2>
          <p>Shotlin does not knowingly collect information from children under 16. If you believe we have, please contact us to have it removed.</p>
        </section>

        <section id="policy-updates" className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">13. Policy Updates</h2>
          <p>We may update this Privacy Policy; material changes will be posted with a new Effective Date and, where appropriate, notified to you by email.</p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 10. CONTROLS FOR DO-NOT-TRACK FEATURES */}
        <section id="DNT" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            10. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>In Short:</strong> We do not currently respond to DNT
            browser signals or any other mechanism that automatically
            communicates your choice not to be tracked online.
          </p>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (“DNT”) feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage, no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this Privacy Notice.
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 11. DO WE MAKE UPDATES TO THIS NOTICE? */}
        <section id="policyupdates" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            11. DO WE MAKE UPDATES TO THIS NOTICE?
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            <strong>In Short:</strong> Yes, we will update this notice as
            necessary to stay compliant with relevant laws.
          </p>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We may update this Privacy Notice from time to time. The updated
            version will be indicated by an updated “Revised” date at the top of
            this Privacy Notice. If we make material changes to this Privacy
            Notice, we may notify you by posting a notice of such changes or by
            contacting you directly. We encourage you to review this Privacy
            Notice frequently to be informed of how we are protecting your
            information.
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? */}
        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            If you have questions or comments about this notice, you may email
            us at{" "}
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>{" "}
            or by post to:
          </p>
          <address className="not-italic text-base text-gray-700 dark:text-gray-300 mb-4">
            Shotlin
            <br />
            379/N,BANIPUR PALPARA WARD 13,BANIPUR PALPARA,S.N. DEY ROAD<br />
            North 24 Parganas,West Bengal 743287, India
          </address>
          <p className="leading-relaxed text-base text-gray-700 dark:text-gray-300">
            We will do our best to address your concerns promptly.
          </p>
        </section>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* 13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? */}
        <section id="request" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h2>
          <p className="mb-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
            Depending on the applicable laws of your country, you may have the
            right to request access to the personal information we collect from
            you, change that information, or delete it in some circumstances. To
            request to review, update, or delete your personal information,
            please contact us at{" "}
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>{" "}
            or visit{" "}
            <a
              href="https://shotlin.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              https://shotlin.com/contact
            </a>
            . We will respond to your request in accordance with applicable data
            protection laws.
          </p>
        </section>
      </BlurBox>
    </main>
  );
};

export default PrivacyPolicy;
