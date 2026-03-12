import { Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: 1000,
        padding: "40px 0",
        width: "100%",
      }}
    >
      <Typography>
        <div style={{ padding: "0 20px", width: "100%" }}>
          <div>
            <Title level={1}>Privacy Policy</Title>

            <Paragraph>
              This Privacy Policy describes how Zoomment (&quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects
              your personal data when you use our open-source commenting widget
              and related services at zoomment.com.
            </Paragraph>
          </div>

          <div>
            <Title level={2} id="owner_of_the_data">
              Owner and Data Controller
            </Title>

            <Paragraph>Zoomment — zoomment.com</Paragraph>
            <Paragraph>
              <strong>Contact email:</strong> zoomment.com@gmail.com
            </Paragraph>
          </div>

          <div>
            <Title level={2} id="what_is_zoomment">
              What is Zoomment
            </Title>
            <Paragraph>
              Zoomment is an open-source commenting platform that allows website
              owners to embed a commenting widget on their websites. Visitors
              can leave comments, reply to existing comments, and react with
              emojis. Website owners can manage comments through an admin
              dashboard.
            </Paragraph>
          </div>

          <div>
            <Title level={2} id="types_of_data">
              Types of Data Collected
            </Title>

            <Title level={3}>
              Data collected from website administrators (account holders)
            </Title>
            <ul>
              <li>
                <strong>Email address</strong> — used for authentication (magic
                link login), account management, and notifications when new
                comments are posted on your website.
              </li>
              <li>
                <strong>Name</strong> — used for display purposes in the
                dashboard and comment responses.
              </li>
              <li>
                <strong>Website domain</strong> — used to associate your
                commenting widget with your website.
              </li>
              <li>
                <strong>Gravatar hash</strong> — derived from your email address
                to display your avatar.
              </li>
            </ul>

            <Title level={3}>
              Data collected from comment authors (website visitors)
            </Title>
            <ul>
              <li>
                <strong>Author name</strong> — provided voluntarily when posting
                a comment, displayed publicly alongside the comment.
              </li>
              <li>
                <strong>Comment text</strong> — the content of the comment,
                displayed publicly on the website.
              </li>
              <li>
                <strong>Gravatar hash</strong> — used to display an avatar next
                to the comment.
              </li>
              <li>
                <strong>Page URL</strong> — the page where the comment was
                posted.
              </li>
            </ul>

            <Title level={3}>Automatically collected data</Title>
            <ul>
              <li>
                <strong>Page view data</strong> — we track page views on
                websites using the Zoomment widget to provide analytics to
                website owners.
              </li>
              <li>
                <strong>IP address</strong> — collected automatically for
                security, spam prevention, and system operation purposes.
              </li>
              <li>
                <strong>Browser and device information</strong> — collected via
                system logs for maintenance and troubleshooting purposes.
              </li>
            </ul>
          </div>

          <div>
            <Title level={2} id="purpose_of_processing">
              How We Use Your Data
            </Title>
            <ul>
              <li>
                <strong>Providing the commenting service</strong> — displaying
                comments, replies, and emoji reactions on websites.
              </li>
              <li>
                <strong>Authentication</strong> — sending magic link emails to
                verify website administrator accounts.
              </li>
              <li>
                <strong>Notifications</strong> — sending email notifications to
                website owners when new comments are posted.
              </li>
              <li>
                <strong>Admin dashboard</strong> — enabling website owners to
                moderate, approve, and respond to comments.
              </li>
              <li>
                <strong>Analytics</strong> — providing page view statistics to
                website owners.
              </li>
              <li>
                <strong>RSS feeds</strong> — generating comment feeds for
                websites that use this feature.
              </li>
              <li>
                <strong>Security and spam prevention</strong> — protecting the
                service from abuse.
              </li>
              <li>
                <strong>System maintenance</strong> — monitoring and improving
                the performance and reliability of the service.
              </li>
            </ul>
          </div>

          <div>
            <Title level={2} id="third_party_services">
              Third-Party Services
            </Title>
            <Paragraph>We use the following third-party services:</Paragraph>
            <ul>
              <li>
                <strong>Gravatar</strong> — to display user avatars based on
                email hashes. Gravatar is operated by Automattic Inc. See their{" "}
                <a
                  href="https://automattic.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
                .
              </li>
              <li>
                <strong>Email service providers</strong> — to send
                authentication and notification emails to website
                administrators.
              </li>
            </ul>
          </div>

          <div>
            <Title level={2} id="cookies">
              Cookies
            </Title>
            <Paragraph>
              Zoomment uses cookies strictly for authentication and session
              management purposes. We do not use cookies for advertising or
              tracking. Cookies are set when website administrators log in to
              the Zoomment dashboard.
            </Paragraph>
          </div>

          <div>
            <Title level={2} id="place_of_processing">
              Mode and Place of Processing the Data
            </Title>
            <Title level={3}>Methods of processing</Title>
            <Paragraph>
              We take appropriate security measures to prevent unauthorized
              access, disclosure, modification, or destruction of your data.
              Data processing is carried out using computers and IT tools,
              following organizational procedures strictly related to the
              purposes indicated in this policy.
            </Paragraph>

            <Title level={3}>Retention time</Title>
            <Paragraph>
              Personal data is processed and stored for as long as required by
              the purpose it was collected for:
            </Paragraph>
            <ul>
              <li>
                <strong>Account data</strong> — retained for as long as you
                maintain an active Zoomment account. You may request deletion of
                your account at any time.
              </li>
              <li>
                <strong>Comments</strong> — retained for as long as the website
                owner keeps them. Website owners can delete comments through the
                admin dashboard.
              </li>
              <li>
                <strong>System logs</strong> — retained for a limited period
                necessary for maintenance and security purposes.
              </li>
            </ul>
          </div>

          <div>
            <Title level={2} id="open_source">
              Open Source
            </Title>
            <Paragraph>
              Zoomment is an open-source project. You can review our source code
              on{" "}
              <a
                href="https://github.com/zoomment"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              to verify how we handle your data. Transparency is a core
              principle of our project.
            </Paragraph>
          </div>

          <Title level={2} id="gdpr_rights">
            Your Rights (GDPR)
          </Title>

          <Paragraph>
            If you are located in the European Union, you have the following
            rights regarding your personal data:
          </Paragraph>

          <ul>
            <li>
              <strong>Right to access</strong> — you have the right to know what
              personal data we hold about you and obtain a copy.
            </li>
            <li>
              <strong>Right to rectification</strong> — you can request
              correction of inaccurate personal data.
            </li>
            <li>
              <strong>Right to erasure</strong> — you can request deletion of
              your personal data.
            </li>
            <li>
              <strong>Right to restrict processing</strong> — you can request
              that we limit how we use your data.
            </li>
            <li>
              <strong>Right to data portability</strong> — you can request your
              data in a structured, machine-readable format.
            </li>
            <li>
              <strong>Right to object</strong> — you can object to the
              processing of your personal data.
            </li>
            <li>
              <strong>Right to withdraw consent</strong> — where processing is
              based on consent, you may withdraw it at any time.
            </li>
            <li>
              <strong>Right to lodge a complaint</strong> — you have the right
              to file a complaint with your local data protection authority.
            </li>
          </ul>

          <Paragraph>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:zoomment.com@gmail.com">zoomment.com@gmail.com</a>.
            We will respond within one month.
          </Paragraph>

          <div>
            <Title level={2} id="changes">
              Changes to This Privacy Policy
            </Title>
            <Paragraph>
              We reserve the right to update this privacy policy at any time.
              Changes will be posted on this page with an updated revision date.
              We encourage you to review this page periodically.
            </Paragraph>
          </div>

          <div>
            <Paragraph>
              <strong>Last updated:</strong> March 12, 2026
            </Paragraph>
          </div>
        </div>
      </Typography>
    </div>
  );
};

export default PrivacyPolicy;
