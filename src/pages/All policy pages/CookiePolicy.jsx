import React from 'react';
import BlurBox from "@/components/layout component/BlurBox.component";

const CookiePolicy = () => {
  return (
    <main className="pt-24 mb-10">
      <div className="bg-[radial-gradient(circle_at_center,_#010c3b_0%,_#000003_100%)] h-screen fixed z-10 top-0 left-0 right-0 bottom-0"></div>

      <BlurBox
        className="container mx-auto  relative z-20 w-4/5 rounded-sm p-10 "
        style={{
          background: "hsla(220, 35%, 3%, 0.4)",
          borderColor: "rgb(71, 71, 71)",
        }}
      >
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2">COOKIE POLICY</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Last updated December 01, 2024
        </p>

        {/* Intro */}
        <p className="leading-relaxed mb-4">
          This Cookie Policy explains how Shotlin (
          <strong>"Company," "we," "us,"</strong> and <strong>"our"</strong>)
          uses cookies and similar technologies to recognize you when you visit
          our website at{" "}
          <a
            href="https://shotlin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            https://shotlin.com
          </a>{" "}
          (the <em>"Website"</em>). It explains what these technologies are and
          why we use them, as well as your rights to control our use of them.
        </p>
        <p className="leading-relaxed mb-4">
          In some cases we may use cookies to collect personal information, or
          that becomes personal information if we combine it with other
          information.
        </p>

        {/* What are cookies */}
        <h2 className="text-2xl font-semibold mb-3">What are cookies?</h2>
        <p className="leading-relaxed mb-4">
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners in order to make their websites work, or to work more
          efficiently, as well as to provide reporting information.
        </p>
        <p className="leading-relaxed mb-4">
          Cookies set by the website owner (in this case, Shotlin) are called{" "}
          <strong>“first-party cookies.”</strong> Cookies set by parties other
          than the website owner are called{" "}
          <strong>“third-party cookies.”</strong> Third-party cookies enable
          third-party features or functionality to be provided on or through the
          website (e.g., advertising, interactive content, and analytics). The
          parties that set these third-party cookies can recognize your computer
          both when it visits the website in question and also when it visits
          certain other websites.
        </p>

        {/* Why do we use cookies */}
        <h2 className="text-2xl font-semibold mb-3">Why do we use cookies?</h2>
        <p className="leading-relaxed mb-4">
          We use first- and third-party cookies for several reasons. Some
          cookies are required for technical reasons in order for our Website to
          operate, and we refer to these as “essential” or “strictly necessary”
          cookies. Other cookies also enable us to track and target the
          interests of our users to enhance the experience on our Online
          Properties. Third parties serve cookies through our Website for
          advertising, analytics, and other purposes. This is described in more
          detail below.
        </p>
        {/* Unclassified Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Unclassified cookies:</h2>
          <p className="leading-relaxed mb-4">
            These are cookies that have not yet been categorized. We are in the
            process of classifying these cookies with the help of their
            providers.
          </p>
          <div className="border border-gray-300 dark:border-gray-700 rounded-md p-4 mb-4">
            <p className="leading-relaxed mb-2">
              <strong>Name:</strong> navberhide
            </p>
            <p className="leading-relaxed mb-2">
              <strong>Provider:</strong> shotlin.com
            </p>
            <p className="leading-relaxed mb-2">
              <strong>Type:</strong> html_local_storage
            </p>
            <p className="leading-relaxed">
              <strong>Expires in:</strong> persistent
            </p>
          </div>
        </section>

        {/* How can I control cookies on my browser? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How can I control cookies on my browser?
          </h2>
          <p className="leading-relaxed mb-4">
            As the means by which you can refuse cookies through your web
            browser controls vary from browser to browser, you should visit your
            browser's help menu for more information. The following is
            information about how to manage cookies on the most popular
            browsers:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Internet Explorer
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://help.opera.com/en/latest/web-preferences/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Opera
              </a>
            </li>
          </ul>
          <p className="leading-relaxed mb-4">
            In addition, most advertising networks offer you a way to opt out of
            targeted advertising. If you would like to find out more
            information, please visit:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a
                href="http://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Digital Advertising Alliance
              </a>
            </li>
            <li>
              <a
                href="http://youradchoices.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Digital Advertising Alliance of Canada
              </a>
            </li>
            <li>
              <a
                href="http://www.youronlinechoices.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                European Interactive Digital Advertising Alliance
              </a>
            </li>
          </ul>
        </section>

        {/* What about other tracking technologies, like web beacons? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What about other tracking technologies, like web beacons?
          </h2>
          <p className="leading-relaxed mb-4">
            Cookies are not the only way to recognize or track visitors to a
            website. We may use other, similar technologies from time to time,
            like web beacons (sometimes called “tracking pixels” or “clear
            gifs”). These are tiny graphics files that contain a unique
            identifier that enables us to recognize when someone has visited our
            Website or opened an email including them. This allows us, for
            example, to monitor the traffic patterns of users from one page
            within a website to another, to deliver or communicate with cookies,
            to understand whether you have come to the website from an online
            advertisement displayed on a third-party website, to improve site
            performance, and to measure the success of email marketing
            campaigns. In many instances, these technologies are reliant on
            cookies to function properly, and so declining cookies will impair
            their functioning.
          </p>
        </section>

        {/* Types of cookies */}
        <h2 className="text-2xl font-semibold mb-3">Types of cookies we use</h2>
        <p className="leading-relaxed mb-4">
          The specific types of first- and third-party cookies served through
          our Website and the purposes they perform are described below (please
          note that the specific cookies served may vary depending on the
          specific Online Properties you visit):
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Essential website cookies:</strong> These cookies are
            strictly necessary to provide you with services available through
            our Website and to use some of its features. Because these cookies
            are strictly necessary to deliver the Website, you cannot refuse
            them without impacting how our site functions.
          </li>
          <li>
            <strong>Analytics cookies:</strong> These cookies collect
            information that is used either in aggregate form to help us
            understand how our Website is being used or how effective our
            marketing campaigns are, or to help us customize our Website for
            you.
          </li>
          <li>
            <strong>Advertising cookies:</strong> These cookies are used to make
            advertising messages more relevant to you. They perform functions
            like preventing the same ad from continuously reappearing, ensuring
            that ads are properly displayed for advertisers, and in some cases
            selecting advertisements that are based on your inferred interests.
          </li>
        </ul>

        {/* How can I control cookies */}
        <h2 className="text-2xl font-semibold mb-3">
          How can I control cookies?
        </h2>
        <p className="leading-relaxed mb-4">
          You have the right to decide whether to accept or reject cookies. You
          can exercise your cookie preferences by setting or amending your web
          browser controls to accept or refuse cookies. If you choose to reject
          cookies, you may still use our Website though your access to some
          functionality and areas of our Website may be restricted.
        </p>
        <p className="leading-relaxed mb-4">
          Most browsers automatically accept cookies, but you can usually modify
          your browser setting to decline cookies if you prefer. You may also
          delete cookies that have already been placed. Please note that if you
          choose to reject or remove cookies, this could affect the availability
          and functionality of our Website.
        </p>

        {/* Changes and updates */}
        <h2 className="text-2xl font-semibold mb-3">
          Changes to this Cookie Policy
        </h2>
        <p className="leading-relaxed mb-4">
          We may update this Cookie Policy from time to time in order to
          reflect, for example, changes to the cookies we use or for other
          operational, legal, or regulatory reasons. Please therefore re-visit
          this Cookie Policy regularly to stay informed about our use of cookies
          and related technologies.
        </p>

        {/* More info */}
        <h2 className="text-2xl font-semibold mb-3">More Information</h2>
        <p className="leading-relaxed mb-4">
          If you have any questions about our use of cookies or other
          technologies, please email us at{" "}
          <a
            href="mailto:support@shotlin.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            support@shotlin.com
          </a>
          .
        </p>
      </BlurBox>
    </main>
  );
};

export default CookiePolicy;
