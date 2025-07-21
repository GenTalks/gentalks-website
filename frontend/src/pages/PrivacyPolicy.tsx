import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 prose text-cream tracking-wide">
      <section className="text-center text-4xl font-bosk">
        <h1 className="text-center text-4xl font-teachers">PRIVACY POLICY</h1>
        <p className="text-center text-2xl font-teachers mt-4">
          Effective Date: June 10, 2025
        </p>
      </section>

      <section className="font-teachers mt-10">
        <section>
          <h2 className="font-semibold text-2xl">1. Information Collection</h2>
          <p className="p-4 text-lg">
            GenTalks does not require users to create accounts or submit personal information to participate in the community platform. Minimal information may be collected confidentially to facilitate private peer mentorship sessions.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="font-semibold text-2xl">2. Use of Collected Information</h2>
          <p className="p-4 text-lg">
            Information collected for mentorship purposes is used solely to facilitate communication and enhance user experience. GenTalks does not sell, rent, or share personal information with third parties for marketing or other purposes.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="font-semibold text-2xl">3. Confidentiality and Safety</h2>
          <p className="p-4 text-lg">
            Peer mentorship sessions are conducted with confidentiality, except where disclosure is required by law or to protect the safety of users or others. GenTalks may take appropriate action if a user’s safety or well-being is at risk.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="font-semibold text-2xl">4. Online Safety Notice</h2>
          <p className="p-4 text-lg">
            While GenTalks endeavors to maintain a safe environment, users should be aware of inherent risks in online interactions such as cyberbullying and cyberattacks, particularly those under 18 years of age. Users are encouraged to exercise caution and report any suspicious or harmful activity.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="font-semibold text-2xl">5. Cookies and Tracking Technologies</h2>
          <p className="p-4 text-lg">
            GenTalks may utilize cookies or similar technologies to improve site functionality and user experience. Users can manage cookie preferences through their browser settings.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="font-semibold text-2xl">6. Data Security</h2>
          <p className="p-4 text-lg">
            GenTalks implements reasonable technical and organizational measures to protect personal data from unauthorized access, loss, or misuse. However, no method of transmission over the Internet or electronic storage is completely secure.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="font-semibold text-2xl">7. Changes to this Privacy Policy</h2>
          <p className="p-4 text-lg">
            GenTalks reserves the right to update this privacy policy periodically. Users are encouraged to review it regularly to stay informed about how we protect personal information.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="font-semibold text-2xl">8. Contact Us</h2>
          <p className="p-4 text-lg">
            If you have any questions or concerns about this privacy policy or our data practices, please contact us at: <a href="mailto:contact.gentalks@gmail.com">contact.gentalks@gmail.com</a>.
          </p>
        </section>
      </section>
    </section>
  );
};

export default PrivacyPolicy;
