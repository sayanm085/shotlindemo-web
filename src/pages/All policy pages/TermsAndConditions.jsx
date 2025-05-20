import React from 'react';
import BlurBox from "@/components/layout component/BlurBox.component";

const TermsAndConditions = () => {
  return (
    <main className="pt-24">
      <div className="bg-[radial-gradient(circle_at_center,_#010c3b_0%,_#000003_100%)] h-screen fixed z-10 top-0 left-0 right-0 bottom-0"></div>
      <BlurBox
        className="container mx-auto  relative z-20 w-4/5 rounded-sm p-10 "
        style={{
          background: "hsla(220, 35%, 3%, 0.4)",
          borderColor: "rgb(71, 71, 71)",
        }}
      >
        <h1 className="text-3xl font-bold mb-2">TERMS AND CONDITIONS</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Last updated December 10, 2024
        </p>

        {/* Agreement to Our Legal Terms */}
        <h2 className="text-xl font-semibold mb-4">
          AGREEMENT TO OUR LEGAL TERMS
        </h2>
        <p className="mb-4 leading-relaxed">
          We are <strong>Shotlin</strong> (<em>"Company," "we," "us," "our"</em>
          ), a company registered in India at{" "}
          <strong>
            BANIPUR PALPARA WARD 13 - BANIPUR PALPARA - S.N. DEY ROAD --- North
            Twenty Four Parganas, Habra, West Bengal 743287
          </strong>
          . Our GST number is <strong>19HATPM4170H1Z1</strong>.
        </p>
        <p className="mb-4 leading-relaxed">
          We operate the website{" "}
          <a
            href="https://shotlin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            https://shotlin.com
          </a>{" "}
          (the <em>"Site"</em>), as well as any other related products and
          services that refer or link to these legal terms (the{" "}
          <em>"Legal Terms"</em>) (collectively, the <em>"Services"</em>).
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Where innovation intersects perfection.</strong> Reimagine
          your brand through captivating websites, striking photographs,
          effortless apps, and robust campaigns. Discover the blend of
          impeccable service and artistry.
        </p>
        <p className="mb-4 leading-relaxed">
          You can contact us by phone at <strong>+91 9382214304</strong>, email
          at{" "}
          <a
            href="mailto:support@shotlin.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            support@shotlin.com
          </a>
          , or by mail to{" "}
          <strong>
            BANIPUR PALPARA WARD 13 - BANIPUR PALPARA - S.N. DEY ROAD --- North
            Twenty Four Parganas, Habra, West Bengal 743287, India
          </strong>
          .
        </p>
        <p className="mb-4 leading-relaxed">
          These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (<em>"you"</em>),
          and Shotlin, concerning your access to and use of the Services. You
          agree that by accessing the Services, you have read, understood, and
          agreed to be bound by all of these Legal Terms.{" "}
          <strong>
            IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
            EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </strong>
        </p>
        <p className="mb-4 leading-relaxed">
          Supplemental terms and conditions or documents that may be posted on
          the Services from time to time are hereby expressly incorporated
          herein by reference. We reserve the right, in our sole discretion, to
          make changes or modifications to these Legal Terms from time to time.
          We will alert you about any changes by updating the “Last updated”
          date of these Legal Terms, and you waive any right to receive specific
          notice of each such change. It is your responsibility to periodically
          review these Legal Terms to stay informed of updates. You will be
          subject to, and will be deemed to have been made aware of and to have
          accepted, the changes in any revised Legal Terms by your continued use
          of the Services after the date such revised Legal Terms are posted.
        </p>
        <p className="mb-4 leading-relaxed">
          All users who are minors in the jurisdiction in which they reside
          (generally under the age of 18) must have the permission of, and be
          directly supervised by, their parent or guardian to use the Services.
          If you are a minor, you must have your parent or guardian read and
          agree to these Legal Terms prior to you using the Services.
        </p>
        <p className="mb-6 leading-relaxed">
          We recommend that you print a copy of these Legal Terms for your
          records.
        </p>

        {/* Table of Contents */}
        <h2 className="text-xl font-semibold mb-4">TABLE OF CONTENTS</h2>
        <ol className="list-decimal list-inside space-y-1 mb-8">
          <li>
            <a
              href="#our-services"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              OUR SERVICES
            </a>
          </li>
          <li>
            <a
              href="#intellectual-property-rights"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              INTELLECTUAL PROPERTY RIGHTS
            </a>
          </li>
          <li>
            <a
              href="#user-representations"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              USER REPRESENTATIONS
            </a>
          </li>
          <li>
            <a
              href="#user-registration"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              USER REGISTRATION
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              PRODUCTS
            </a>
          </li>
          <li>
            <a
              href="#purchases-payment"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              PURCHASES AND PAYMENT
            </a>
          </li>
          <li>
            <a
              href="#subscriptions"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              SUBSCRIPTIONS
            </a>
          </li>
          <li>
            <a
              href="#refunds-policy"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              REFUNDS POLICY
            </a>
          </li>
          <li>
            <a
              href="#prohibited-activities"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              PROHIBITED ACTIVITIES
            </a>
          </li>
          <li>
            <a
              href="#user-generated-contributions"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              USER GENERATED CONTRIBUTIONS
            </a>
          </li>
          <li>
            <a
              href="#contribution-license"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              CONTRIBUTION LICENSE
            </a>
          </li>
          <li>
            <a
              href="#guidelines-for-reviews"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GUIDELINES FOR REVIEWS
            </a>
          </li>
          <li>
            <a
              href="#social-media"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              SOCIAL MEDIA
            </a>
          </li>
          <li>
            <a
              href="#advertisers"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ADVERTISERS
            </a>
          </li>
          <li>
            <a
              href="#services-management"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              SERVICES MANAGEMENT
            </a>
          </li>
          <li>
            <a
              href="#privacy-policy"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              PRIVACY POLICY
            </a>
          </li>
          <li>
            <a
              href="#term-termination"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              TERM AND TERMINATION
            </a>
          </li>
          <li>
            <a
              href="#modifications-interruptions"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              MODIFICATIONS AND INTERRUPTIONS
            </a>
          </li>
          <li>
            <a
              href="#governing-law"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GOVERNING LAW
            </a>
          </li>
          <li>
            <a
              href="#dispute-resolution"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              DISPUTE RESOLUTION
            </a>
          </li>
          <li>
            <a
              href="#corrections"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              CORRECTIONS
            </a>
          </li>
          <li>
            <a
              href="#disclaimer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              DISCLAIMER
            </a>
          </li>
          <li>
            <a
              href="#limitations-liability"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LIMITATIONS OF LIABILITY
            </a>
          </li>
          <li>
            <a
              href="#indemnification"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              INDEMNIFICATION
            </a>
          </li>
          <li>
            <a href="#user-data" className="text-blue-600 dark:text-blue-400 hover:underline">
             USER DATA
            </a>
          </li>
          <li>
            <a href="#electronic-communications" className="text-blue-600 dark:text-blue-400 hover:underline">
            ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </a>
          </li>
          <li>
            <a
              href="#sms-text-messaging"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              SMS TEXT MESSAGING
            </a>
          </li>
          <li>
            <a
              href="#miscellaneous"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              MISCELLANEOUS
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              CONTACT US
            </a>
          </li>
        </ol>

        {/* 1. OUR SERVICES */}
        <section id="our-services" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">1. OUR SERVICES</h3>
          <p className="leading-relaxed mb-4">
            The information provided when using the Services is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Services from other locations do so
            on their own initiative and are solely responsible for compliance
            with local laws, if and to the extent local laws are applicable.
          </p>
          <p className="leading-relaxed">
            The Services are not tailored to comply with industry-specific
            regulations (Health Insurance Portability and Accountability Act
            (HIPAA), Federal Information Security Management Act (FISMA), etc.),
            so if your interactions would be subjected to such laws, you may not
            use the Services. You may not use the Services in a way that would
            violate the Gramm-Leach-Bliley Act (GLBA).
          </p>
        </section>

        {/* 2. INTELLECTUAL PROPERTY RIGHTS */}

        <section id="intellectual-property-rights" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            2. INTELLECTUAL PROPERTY RIGHTS
          </h3>

          {/* Our intellectual property */}
          <h4 className="text-lg font-semibold mb-2">
            Our intellectual property
          </h4>
          <p className="leading-relaxed mb-4">
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            "Content"), as well as the trademarks, service marks, and logos
            contained therein (the "Marks").
          </p>
          <p className="leading-relaxed mb-4">
            Our Content and Marks are protected by copyright and trademark laws
            (and various other intellectual property rights and unfair
            competition laws) and treaties in the United States and around the
            world. The Content and Marks are provided in or through the Services
            “AS IS” for your personal, non-commercial use or internal business
            purpose only.
          </p>

          {/* Your use of our Services */}
          <h4 className="text-lg font-semibold mb-2">
            Your use of our Services
          </h4>
          <p className="leading-relaxed mb-4">
            Subject to your compliance with these Legal Terms, including the{" "}
            <a
              href="#prohibited-activities"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              "PROHIBITED ACTIVITIES"
            </a>{" "}
            section below, we grant you a non-exclusive, non-transferable,
            revocable license to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>access the Services; and</li>
            <li>
              download or print a copy of any portion of the Content to which
              you have properly gained access, solely for your personal,
              non-commercial use or internal business purpose.
            </li>
          </ul>
          <p className="leading-relaxed mb-4">
            Except as set out in this section or elsewhere in our Legal Terms,
            no part of the Services and no Content or Marks may be copied,
            reproduced, aggregated, republished, uploaded, posted, publicly
            displayed, encoded, translated, transmitted, distributed, sold,
            licensed, or otherwise exploited for any commercial purpose
            whatsoever, without our express prior written permission. If you
            wish to make any use of the Services, Content, or Marks other than
            as set out in this section or elsewhere in our Legal Terms, please
            address your request to:{" "}
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>
            .
          </p>
          <p className="leading-relaxed mb-4">
            We reserve all rights not expressly granted to you in and to the
            Services, Content, and Marks. Any breach of these Intellectual
            Property Rights will constitute a material breach of our Legal Terms
            and your right to use our Services will terminate immediately.
          </p>

          {/* Your submissions */}
          <h4 className="text-lg font-semibold mb-2">Your submissions</h4>
          <p className="leading-relaxed mb-4">
            Please review this section and the{" "}
            <a
              href="#prohibited-activities"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              "PROHIBITED ACTIVITIES"
            </a>{" "}
            section carefully prior to using our Services to understand the (a)
            rights you give us and (b) obligations you have when you post or
            upload any content through the Services.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Submissions:</strong> By directly sending us any question,
            comment, suggestion, idea, feedback, or other information about the
            Services ("Submissions"), you agree to assign to us all intellectual
            property rights in such Submission. You agree that we shall own this
            Submission and be entitled to its unrestricted use and dissemination
            for any lawful purpose, commercial or otherwise, without
            acknowledgment or compensation to you.
          </p>

          {/* You are responsible for what you post or upload */}
          <h4 className="text-lg font-semibold mb-2">
            You are responsible for what you post or upload
          </h4>
          <p className="leading-relaxed mb-4">
            By sending us Submissions through any part of the Services you:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              confirm that you have read and agree with our{" "}
              <a
                href="#prohibited-activities"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                "PROHIBITED ACTIVITIES"
              </a>{" "}
              and will not post, send, publish, upload, or transmit through the
              Services any Submission that is illegal, harassing, hateful,
              harmful, defamatory, obscene, bullying, abusive, discriminatory,
              threatening to any person or group, sexually explicit, false,
              inaccurate, deceitful, or misleading;
            </li>
            <li>
              to the extent permissible by applicable law, waive any and all
              moral rights to any such Submission;
            </li>
            <li>
              warrant that any such Submission are original to you or that you
              have the necessary rights and licenses to submit such Submissions
              and that you have full authority to grant us the above-mentioned
              rights in relation to your Submissions; and
            </li>
            <li>
              warrant and represent that your Submissions do not constitute
              confidential information.
            </li>
          </ul>
          <p className="leading-relaxed">
            You are solely responsible for your Submissions and you expressly
            agree to reimburse us for any and all losses that we may suffer
            because of your breach of (a) this section, (b) any third party’s
            intellectual property rights, or (c) applicable law.
          </p>
        </section>

        {/* 3. USER REPRESENTATIONS */}

        <section id="user-representations" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            3. USER REPRESENTATIONS
          </h3>
          <p className="leading-relaxed mb-4">
            By using the Services, you represent and warrant that: (1) all
            registration information you submit will be true, accurate, current,
            and complete; (2) you will maintain the accuracy of such information
            and promptly update such registration information as necessary; (3)
            you have the legal capacity and you agree to comply with these Legal
            Terms; (4) you are not a minor in the jurisdiction in which you
            reside, or if a minor, you have received parental permission to use
            the Services; (5) you will not access the Services through automated
            or non-human means, whether through a bot, script or otherwise; (6)
            you will not use the Services for any illegal or unauthorized
            purpose; and (7) your use of the Services will not violate any
            applicable law or regulation.
          </p>
          <p className="leading-relaxed">
            If you provide any information that is untrue, inaccurate, not
            current, or incomplete, we have the right to suspend or terminate
            your account and refuse any and all current or future use of the
            Services (or any portion thereof).
          </p>
        </section>

        {/* 4. USER REGISTRATION */}
        <section id="user-registration" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">4. USER REGISTRATION</h3>
          <p className="leading-relaxed">
            You may be required to register to use the Services. You agree to
            keep your password confidential and will be responsible for all use
            of your account and password. We reserve the right to remove,
            reclaim, or change a username you select if we determine, in our
            sole discretion, that such username is inappropriate, obscene, or
            otherwise objectionable.
          </p>
        </section>

        {/* 5. PRODUCTS */}
        <section id="products" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">5. PRODUCTS</h3>
          <p className="leading-relaxed">
            All products are subject to availability. We reserve the right to
            discontinue any products at any time for any reason. Prices for all
            products are subject to change.
          </p>
        </section>

        {/* 6. PURCHASES AND PAYMENT */}
        <section id="purchases-payment" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            6. PURCHASES AND PAYMENT
          </h3>
          <p className="leading-relaxed mb-4">
            We accept the following forms of payment:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Razorpay</li>
            <li>PhonePe</li>
          </ul>
          <p className="leading-relaxed mb-4">
            You agree to provide current, complete, and accurate purchase and
            account information for all purchases made via the Services. You
            further agree to promptly update account and payment information,
            including email address, payment method, and payment card expiration
            date, so that we can complete your transactions and contact you as
            needed. Sales tax will be added to the price of purchases as deemed
            required by us. We may change prices at any time. All payments shall
            be in US dollars.
          </p>
          <p className="leading-relaxed mb-4">
            You agree to pay all charges at the prices then in effect for your
            purchases and any applicable shipping fees, and you authorize us to
            charge your chosen payment provider for any such amounts upon
            placing your order. We reserve the right to correct any errors or
            mistakes in pricing, even if we have already requested or received
            payment.
          </p>
          <p className="leading-relaxed">
            We reserve the right to refuse any order placed through the
            Services. We may, in our sole discretion, limit or cancel quantities
            purchased per person, per household, or per order. These
            restrictions may include orders placed by or under the same customer
            account, the same payment method, and/or orders that use the same
            billing or shipping address. We reserve the right to limit or
            prohibit orders that, in our sole judgment, appear to be placed by
            dealers, resellers, or distributors.
          </p>
        </section>
        {/* 7. SUBSCRIPTIONS */}
        <section id="subscriptions" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">7. SUBSCRIPTIONS</h3>

          {/* Billing and Renewal */}
          <h4 className="text-lg font-semibold mb-2">Billing and Renewal</h4>
          <p className="leading-relaxed mb-4">
            Your subscription will continue and automatically renew unless
            canceled. You consent to our charging your payment method on a
            recurring basis without requiring your prior approval for each
            recurring charge, until such time as you cancel the applicable
            order. The length of your billing cycle is monthly.
          </p>

          {/* Free Trial */}
          <h4 className="text-lg font-semibold mb-2">Free Trial</h4>
          <p className="leading-relaxed mb-4">
            We offer a 15-day free trial to new users who register with the
            Services. The account will be charged according to the user's chosen
            subscription at the end of the free trial.
          </p>

          {/* Cancellation */}
          <h4 className="text-lg font-semibold mb-2">Cancellation</h4>
          <p className="leading-relaxed mb-4">
            You can cancel your subscription at any time by contacting us using
            the contact information provided below. Your cancellation will take
            effect at the end of the current paid term. If you have any
            questions or are unsatisfied with our Services, please email us at{" "}
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>
            .
          </p>

          {/* Fee Changes */}
          <h4 className="text-lg font-semibold mb-2">Fee Changes</h4>
          <p className="leading-relaxed">
            We may, from time to time, make changes to the subscription fee and
            will communicate any price changes to you in accordance with
            applicable law.
          </p>
        </section>

        {/* 8. REFUNDS POLICY */}
        <section id="refunds-policy" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">8. REFUNDS POLICY</h3>
          <p className="leading-relaxed">
            Please review our Return Policy posted on the Services prior to
            making any purchases.
          </p>
        </section>

        {/* 9. PROHIBITED ACTIVITIES */}
        <section id="prohibited-activities" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            9. PROHIBITED ACTIVITIES
          </h3>
          <p className="leading-relaxed mb-4">
            You may not access or use the Services for any purpose other than
            that for which we make the Services available. The Services may not
            be used in connection with any commercial endeavors except those
            that are specifically endorsed or approved by us.
          </p>
          <p className="leading-relaxed mb-4">
            As a user of the Services, you agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              Systematically retrieve data or other content from the Services to
              create or compile, directly or indirectly, a collection,
              compilation, database, or directory without written permission
              from us.
            </li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any
              attempt to learn sensitive account information such as user
              passwords.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related
              features of the Services, including features that prevent or
              restrict the use or copying of any Content or enforce limitations
              on the use of the Services and/or the Content contained therein.
            </li>
            <li>
              Disparage, tarnish, or otherwise harm, in our opinion, us and/or
              the Services.
            </li>
            <li>
              Use any information obtained from the Services in order to harass,
              abuse, or harm another person.
            </li>
            <li>
              Make improper use of our support services or submit false reports
              of abuse or misconduct.
            </li>
            <li>
              Use the Services in a manner inconsistent with any applicable laws
              or regulations.
            </li>
            <li>
              Engage in unauthorized framing of or linking to the Services.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses,
              Trojan horses, or other material, including excessive use of
              capital letters and spamming (continuous posting of repetitive
              text), that interferes with any party’s uninterrupted use and
              enjoyment of the Services or modifies, impairs, disrupts, alters,
              or interferes with the use, features, functions, operation, or
              maintenance of the Services.
            </li>
            <li>
              Attempt to impersonate another user or person or use the username
              of another user.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) any
              material that acts as a passive or active information collection
              or transmission mechanism, including without limitation, clear
              graphics interchange formats ("gifs"), 1×1 pixels, web bugs,
              cookies, or other similar devices (sometimes referred to as
              "spyware" or "passive collection mechanisms" or "pcms").
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Services
              or the networks or services connected to the Services.
            </li>
            <li>
              Harass, annoy, intimidate, or threaten any of our employees or
              agents engaged in providing any portion of the Services to you.
            </li>
            <li>
              Attempt to bypass any measures of the Services designed to prevent
              or restrict access to the Services, or any portion of the
              Services.
            </li>
            <li>
              Copy or adapt the Services' software, including but not limited to
              Flash, PHP, HTML, JavaScript, or other code.
            </li>
            <li>
              Except as permitted by applicable law, decipher, decompile,
              disassemble, or reverse engineer any of the software comprising or
              in any way making up a part of the Services.
            </li>
            <li>
              Except as may be the result of standard search engine or Internet
              browser usage, use, launch, develop, or distribute any automated
              system, including without limitation, any spider, robot, cheat
              utility, scraper, or offline reader that accesses the Services, or
              use or launch any unauthorized script or other software.
            </li>
            <li>
              Use a buying agent or purchasing agent to make purchases on the
              Services.
            </li>
            <li>
              Make any unauthorized use of the Services, including collecting
              usernames and/or email addresses of users by electronic or other
              means for the purpose of sending unsolicited email, or creating
              user accounts by automated means or under false pretenses.
            </li>
            <li>
              Use the Services as part of any effort to compete with us or
              otherwise use the Services and/or the Content for any
              revenue-generating endeavor or commercial enterprise.
            </li>
          </ul>
        </section>

        {/* 10. USER GENERATED CONTRIBUTIONS */}
        <section id="user-generated-contributions" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            10. USER GENERATED CONTRIBUTIONS
          </h3>
          <p className="leading-relaxed">
            The Services does not offer users to submit or post content.
          </p>
        </section>

        {/* 11. CONTRIBUTION LICENSE */}
        <section id="contribution-license" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            11. CONTRIBUTION LICENSE
          </h3>
          <p className="leading-relaxed mb-4">
            You and the Services agree that we may access, store, process, and
            use any information and personal data that you provide following the
            terms of the Privacy Policy and your choices (including settings).
          </p>
          <p className="leading-relaxed">
            By submitting suggestions or other feedback regarding the Services,
            you agree that we can use and share such feedback for any purpose
            without compensation to you.
          </p>
        </section>

        {/* 12. GUIDELINES FOR REVIEWS */}
        <section id="guidelines-for-reviews" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            12. GUIDELINES FOR REVIEWS
          </h3>
          <p className="leading-relaxed mb-4">
            We may provide you areas on the Services to leave reviews or
            ratings. When posting a review, you must comply with the following
            criteria: (1) you should have firsthand experience with the
            person/entity being reviewed; (2) your reviews should not contain
            offensive profanity or abusive, racist, offensive, or hateful
            language; (3) your reviews should not contain discriminatory
            references based on religion, race, gender, national origin, age,
            marital status, sexual orientation, or disability; (4) your reviews
            should not contain references to illegal activity; (5) you should
            not be affiliated with competitors if posting negative reviews; (6)
            you should not make any conclusions as to the legality of conduct;
            (7) you may not post any false or misleading statements; and (8) you
            may not organize a campaign encouraging others to post reviews,
            whether positive or negative.
          </p>
          <p className="leading-relaxed mb-4">
            We may accept, reject, or remove reviews in our sole discretion. We
            have absolutely no obligation to screen reviews or to delete
            reviews, even if anyone considers reviews objectionable or
            inaccurate. Reviews are not endorsed by us, and do not necessarily
            represent our opinions or the views of any of our affiliates or
            partners. We do not assume liability for any review or for any
            claims, liabilities, or losses resulting from any review. By posting
            a review, you hereby grant to us a perpetual, non-exclusive,
            worldwide, royalty-free, fully paid, assignable, and sublicensable
            right and license to reproduce, modify, translate, transmit by any
            means, display, perform, and/or distribute all content relating to
            review.
          </p>
        </section>

        {/* 13. SOCIAL MEDIA */}

        <section id="social-media" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">13. SOCIAL MEDIA</h3>
          <p className="leading-relaxed mb-4">
            As part of the functionality of the Services, you may link your
            account with online accounts you have with third-party service
            providers (each such account, a "Third-Party Account") by either:
            (1) providing your Third-Party Account login information through the
            Services; or (2) allowing us to access your Third-Party Account, as
            is permitted under the applicable terms and conditions that govern
            your use of each Third-Party Account. You represent and warrant that
            you are entitled to disclose your Third-Party Account login
            information to us and/or grant us access to your Third-Party
            Account, without breach by you of any of the terms and conditions
            that govern your use of the applicable Third-Party Account, and
            without obligating us to pay any fees or making us subject to any
            usage limitations imposed by the third-party service provider of the
            Third-Party Account.
          </p>
          <p className="leading-relaxed mb-4">
            By granting us access to any Third-Party Accounts, you understand
            that (1) we may access, make available, and store (if applicable)
            any content that you have provided to and stored in your Third-Party
            Account (the "Social Network Content") so that it is available on
            and through the Services via your account, including without
            limitation any friend lists, and (2) we may submit to and receive
            from your Third-Party Account additional information to the extent
            you are notified when you link your account with the Third-Party
            Account. Depending on the Third-Party Accounts you choose and
            subject to the privacy settings that you have set in such
            Third-Party Accounts, personally identifiable information that you
            post to your Third-Party Accounts may be available on and through
            your account on the Services.
          </p>
          <p className="leading-relaxed mb-4">
            Please note that if a Third-Party Account or associated service
            becomes unavailable or our access to such Third-Party Account is
            terminated by the third-party service provider, then Social Network
            Content may no longer be available on and through the Services. You
            will have the ability to disable the connection between your account
            on the Services and your Third-Party Accounts at any time. Please
            note that your relationship with the third-party service providers
            associated with your Third-Party Accounts is governed solely by your
            agreement(s) with such third-party service providers. We make no
            effort to review any Social Network Content for any purpose,
            including but not limited to, for accuracy, legality, or
            non-infringement, and we are not responsible for any Social Network
            Content.
          </p>
          <p className="leading-relaxed">
            You acknowledge and agree that we may access your email address book
            associated with a Third-Party Account and your contacts list stored
            on your mobile device or tablet computer solely for purposes of
            identifying and informing you of those contacts who have also
            registered to use the Services. You can deactivate the connection
            between the Services and your Third-Party Account by contacting us
            using the contact information below or through your account settings
            (if applicable). We will attempt to delete any information stored on
            our servers that was obtained through such Third-Party Account,
            except the username and profile picture that become associated with
            your account.
          </p>
        </section>

        {/* 14. ADVERTISERS */}
        <section id="advertisers" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">14. ADVERTISERS</h3>
          <p className="leading-relaxed">
            We allow advertisers to display their advertisements and other
            information in certain areas of the Services, such as sidebar
            advertisements or banner advertisements. We simply provide the space
            to place such advertisements, and we have no other relationship with
            advertisers.
          </p>
        </section>

        {/* 15. SERVICES MANAGEMENT */}
        <section id="services-management" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            15. SERVICES MANAGEMENT
          </h3>
          <p className="leading-relaxed">
            We reserve the right, but not the obligation, to: (1) monitor the
            Services for violations of these Legal Terms; (2) take appropriate
            legal action against anyone who, in our sole discretion, violates
            the law or these Legal Terms, including without limitation,
            reporting such user to law enforcement authorities; (3) in our sole
            discretion and without limitation, refuse, restrict access to, limit
            the availability of, or disable (to the extent technologically
            feasible) any of your Contributions or any portion thereof; (4) in
            our sole discretion and without limitation, notice, or liability, to
            remove from the Services or otherwise disable all files and content
            that are excessive in size or are in any way burdensome to our
            systems; and (5) otherwise manage the Services in a manner designed
            to protect our rights and property and to facilitate the proper
            functioning of the Services.
          </p>
        </section>

        {/* 16. PRIVACY POLICY */}
        <section id="privacy-policy" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">16. PRIVACY POLICY</h3>
          <p className="leading-relaxed mb-4">
            We care about data privacy and security. Please review our Privacy
            Policy:{" "}
            <a
              href="https://shotlin.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              https://shotlin.com/privacy-policy
            </a>
            . By using the Services, you agree to be bound by our Privacy
            Policy, which is incorporated into these Legal Terms. Please be
            advised the Services are hosted in India. If you access the Services
            from any other region of the world with laws or other requirements
            governing personal data collection, use, or disclosure that differ
            from applicable laws in India, then through your continued use of
            the Services, you are transferring your data to India, and you
            expressly consent to have your data transferred to and processed in
            India.
          </p>
        </section>

        {/* 17. TERM AND TERMINATION */}
        <section id="term-termination" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            17. TERM AND TERMINATION
          </h3>
          <p className="leading-relaxed mb-4">
            These Legal Terms shall remain in full force and effect while you
            use the Services.{" "}
            <strong>
              WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE
              RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
              LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
              BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR
              FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
              REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL
              TERMS OR OF ANY APPLICABLE LAW OR REGULATION.
            </strong>{" "}
            WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE
            YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY
            TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
          </p>
          <p className="leading-relaxed mb-4">
            If we terminate or suspend your account for any reason, you are
            prohibited from registering and creating a new account under your
            name, a fake or borrowed name, or the name of any third party, even
            if you may be acting on behalf of the third party. In addition to
            terminating or suspending your account, we reserve the right to take
            appropriate legal action, including without limitation pursuing
            civil, criminal, and injunctive redress.
          </p>
        </section>

        {/* 18. MODIFICATIONS AND INTERRUPTIONS */}
        <section id="modifications-interruptions" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            18. MODIFICATIONS AND INTERRUPTIONS
          </h3>
          <p className="leading-relaxed mb-4">
            We reserve the right to change, modify, or remove the contents of
            the Services at any time or for any reason at our sole discretion
            without notice. However, we have no obligation to update any
            information on our Services. We will not be liable to you or any
            third party for any modification, price change, suspension, or
            discontinuance of the Services.
          </p>
          <p className="leading-relaxed">
            We cannot guarantee the Services will be available at all times. We
            may experience hardware, software, or other problems or need to
            perform maintenance related to the Services, resulting in
            interruptions, delays, or errors. We reserve the right to change,
            revise, update, suspend, discontinue, or otherwise modify the
            Services at any time or for any reason without notice to you. You
            agree that we have no liability whatsoever for any loss, damage, or
            inconvenience caused by your inability to access or use the Services
            during any downtime or discontinuance of the Services.
          </p>
        </section>

        {/* 19. GOVERNING LAW */}
        <section id="governing-law" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">19. GOVERNING LAW</h3>
          <p className="leading-relaxed">
            These Legal Terms shall be governed by and defined following the
            laws of India. Shotlin and yourself irrevocably consent that the
            courts of India shall have exclusive jurisdiction to resolve any
            dispute which may arise in connection with these Legal Terms.
          </p>
        </section>

        {/* 20. DISPUTE RESOLUTION */}
        <section id="dispute-resolution" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">20. DISPUTE RESOLUTION</h3>
          <p className="leading-relaxed">
            You agree to irrevocably submit all disputes related to these Legal
            Terms or the legal relationship established by these Legal Terms to
            the jurisdiction of the India courts. Shotlin shall also maintain
            the right to bring proceedings as to the substance of the matter in
            the courts of the country where you reside or, if these Legal Terms
            are entered into in the course of your trade or profession, the
            state of your principal place of business.
          </p>
        </section>

        {/* 21. CORRECTIONS */}
        <section id="corrections" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">21. CORRECTIONS</h3>
          <p className="leading-relaxed">
            There may be information on the Services that contains typographical
            errors, inaccuracies, or omissions, including descriptions, pricing,
            availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or
            update the information on the Services at any time, without prior
            notice.
          </p>
        </section>

        {/* 22. DISCLAIMER */}
        <section id="disclaimer" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">22. DISCLAIMER</h3>
          <p className="leading-relaxed mb-4">
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
            AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
            THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
            EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
            THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
            ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF
            ANY WEBSITES LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY
            OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
            CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF
            ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
            SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
            SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
            INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
            TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN
            HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE
            SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN
            ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND
            INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED,
            OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT,
            ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR
            SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES,
            ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION
            FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A
            PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
            BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
            AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR
            IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
            CAUTION WHERE APPROPRIATE.
          </p>
        </section>

        {/* 23. LIMITATIONS OF LIABILITY */}
        <section id="limitations-liability" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            23. LIMITATIONS OF LIABILITY
          </h3>
          <p className="leading-relaxed">
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
            TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
            EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
            PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
            YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
          </p>
        </section>

        {/* 24. INDEMNIFICATION */}
        <section id="indemnification" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">24. INDEMNIFICATION</h3>
          <p className="leading-relaxed mb-4">
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys’ fees
            and expenses, made by any third party due to or arising out of: (1)
            use of the Services; (2) breach of these Legal Terms; (3) any breach
            of your representations and warranties set forth in these Legal
            Terms; (4) your violation of the rights of a third party, including
            but not limited to intellectual property rights; or (5) any overt
            harmful act toward any other user of the Services with whom you
            connected via the Services. Notwithstanding the foregoing, we
            reserve the right, at your expense, to assume the exclusive defense
            and control of any matter for which you are required to indemnify
            us, and you agree to cooperate, at your expense, with our defense of
            such claims. We will use reasonable efforts to notify you of any
            such claim, action, or proceeding which is subject to this
            indemnification upon becoming aware of it.
          </p>
        </section>

        {/* 25. USER DATA */}
        <section id="user-data" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">25. USER DATA</h3>
          <p className="leading-relaxed mb-4">
            We will maintain certain data that you transmit to the Services for
            the purpose of managing the performance of the Services, as well as
            data relating to your use of the Services. Although we perform
            regular routine backups of data, you are solely responsible for all
            data that you transmit or that relates to any activity you have
            undertaken using the Services. You agree that we shall have no
            liability to you for any loss or corruption of any such data, and
            you hereby waive any right of action against us arising from any
            such loss or corruption of such data.
          </p>
        </section>

        {/* 26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES */}
        <section id="electronic-communications" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
          </h3>
          <p className="leading-relaxed mb-4">
            Visiting the Services, sending us emails, and completing online
            forms constitute electronic communications. You consent to receive
            electronic communications, and you agree that all agreements,
            notices, disclosures, and other communications we provide to you
            electronically, via email and on the Services, satisfy any legal
            requirement that such communication be in writing. YOU HEREBY AGREE
            TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
            RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
            RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
            SERVICES. You hereby waive any rights or requirements under any
            statutes, regulations, rules, ordinances, or other laws in any
            jurisdiction which require an original signature or delivery or
            retention of non-electronic records, or to payments or the granting
            of credits by other than electronic means.
          </p>
        </section>

        {/* 27. SMS TEXT MESSAGING */}
        <section id="sms-text-messaging" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">27. SMS TEXT MESSAGING</h3>

          {/* Opting Out */}
          <h4 className="text-lg font-semibold mb-2">Opting Out</h4>
          <p className="leading-relaxed mb-4">
            If at any time you wish to stop receiving SMS messages from us,
            simply reply to the text with “STOP.” You may receive an SMS message
            confirming your opt out.
          </p>

          {/* Message and Data Rates */}
          <h4 className="text-lg font-semibold mb-2">Message and Data Rates</h4>
          <p className="leading-relaxed mb-4">
            Please be aware that message and data rates may apply to any SMS
            messages sent or received. The rates are determined by your carrier
            and the specifics of your mobile plan.
          </p>

          {/* Support */}
          <h4 className="text-lg font-semibold mb-2">Support</h4>
          <p className="leading-relaxed">
            If you have any questions or need assistance regarding our SMS
            communications, please email us at{" "}
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>{" "}
            or call at +91 9382214304.
          </p>
        </section>

        {/* 28. MISCELLANEOUS */}
        <section id="miscellaneous" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">28. MISCELLANEOUS</h3>
          <p className="leading-relaxed mb-4">
            These Legal Terms and any policies or operating rules posted by us
            on the Services or in respect to the Services constitute the entire
            agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Legal Terms
            shall not operate as a waiver of such right or provision. These
            Legal Terms operate to the fullest extent permissible by law. We
            shall not be responsible or liable for any loss, damage, delay, or
            failure to act caused by any cause beyond our reasonable control.
          </p>
          <p className="leading-relaxed mb-4">
            If any provision or part of a provision of these Legal Terms is
            determined to be unlawful, void, or unenforceable, that provision or
            part of the provision is deemed severable from these Legal Terms and
            does not affect the validity and enforceability of any remaining
            provisions. There is no joint venture, partnership, employment, or
            agency relationship created between you and us as a result of these
            Legal Terms or use of the Services.
          </p>
          <p className="leading-relaxed">
            You agree that these Legal Terms will not be construed against us by
            virtue of having drafted them. You hereby waive any and all defenses
            you may have based on the electronic form of these Legal Terms and
            the lack of signing by the parties hereto to execute these Legal
            Terms.
          </p>
        </section>

        {/* 29. CONTACT US */}
        <section id="contact-us" className="mb-8">
          <h3 className="text-xl font-semibold mb-2">29. CONTACT US</h3>
          <p className="leading-relaxed mb-4">
            In order to resolve a complaint regarding the Services or to receive
            further information regarding use of the Services, please contact us
            at:
          </p>
          <address className="not-italic mt-2 mb-4">
            <strong>Shotlin</strong>
            <br />
            379/N,BANIPUR PALPARA WARD 13,BANIPUR PALPARA,S.N. DEY ROAD<br />
            North 24 Parganas,West Bengal 743287, India
            <br />
            Phone: +91 9382214304
            <br />
            <a
              href="mailto:support@shotlin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@shotlin.com
            </a>
          </address>
        </section>
      </BlurBox>
    </main>
  );
};

export default TermsAndConditions;
