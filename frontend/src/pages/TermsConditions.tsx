import React from "react";
import { Link } from 'react-router-dom';


const TermsConditions: React.FC = () => {
    return (
        <div className="bg-laurel text-cream">
            <section className="max-w-4xl mx-auto p-6 prose text-cream tracking-wide">
                <section className="text-center text-4xl">
                    <h1 className="text-center text-4xl font-teachers">TERMS & CONDITIONS</h1>
                    <p className="text-center text-2xl font-teachers mt-4">
                        Welcome to GenTalks! By using our mentorship platform, you agree to these terms and conditions. Please read them carefully.
                    </p>
                </section>

                <section className="font-teachers mt-10">
                    <section>
                        <h2 className="font-semibold text-2xl">1. GenTalks Overview</h2>
                        <p className="p-4 text-lg">
                            GenTalks is a student-led online community dedicated to generational empowerment through supportive and
                            nurturing conversations, primarily serving high school students but open to all users.
                        </p>
                    </section>

                    <section className="mt-4">
                        <h2 className="font-semibold text-2xl">2. Eligibility and Online Safety Advisory</h2>
                        <p className="p-4 text-lg">
                            GenTalks is intended for high school students who meet the minimum age requirements outlined in Discord’s
                            Terms & Conditions. Users must be at least 13 years old to access the platform.
                            While GenTalks is designed to be a safe and supportive space, users under the age of 18 are advised that it remains an online environment and may involve risks such as cyberbullying, cyberattacks, and other safety concerns.
                            Minors are strongly encouraged to participate under the supervision or guidance of a trusted adult.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-2xl">3. User Registration and Accounts</h2>
                        <p className="p-4 text-lg">
                            GenTalks operates without requiring user registration or account creation, ensuring ease of access and privacy for all users.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-2xl">4. Private Peer Mentorship Sessions</h2>
                        <p className="p-4 text-lg">
                            The platform offers private one-on-one peer mentorship sessions aimed at providing guidance and support.
                        </p>
                        <p className="mb-4 text-lg">
                            <li>All mentorship interactions must remain professional and respectful.</li>
                            <li>Romantic or intimate relationships of any kind between mentors and mentees are strictly prohibited.</li>
                            <li>Users are encouraged to maintain appropriate boundaries during sessions.</li>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-2xl">5. User Code of Conduct</h2>
                        <p className="p-4 text-lg">
                            Users agree to engage respectfully and lawfully on the platform. Any form of harassment, bullying, discrimination, hate speech, or other harmful conduct is strictly prohibited.
                        </p>
                        <p className="mb-4 text-lg">
                            <li><strong>Respect Mentors’ Time</strong>: Mentors volunteer their time. If you need to cancel or reschedule, notify them at least 24 hours in advance.</li>
                            <li><strong>No Solicitation</strong>: Mentors are here to guide, not to provide job referrals, internships, or employment opportunities. Avoid asking for these during sessions.</li>
                            <li><strong>Be Prepared</strong>: Research your mentor, come with questions, and make your sessions purposeful.</li>
                            <li><strong>Engage Respectfully</strong>: Treat mentors and other users with kindness and professionalism.</li>
                            Failure to follow these guidelines may result in suspension or termination of your access to GenTalks. <br />
                            View the full Code of Conduct <Link to="/code-of-conduct" className="underline">here</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-2xl">6. Reporting Concerns and Safety Measures</h2>
                        <p className="p-4 text-lg">
                            GenTalks prioritizes the safety and well-being of its users.
                            If you experience or witness any form of sexual assault, self-harm, harassment, or other inappropriate behavior,
                            you are urged to report the incident immediately to our moderation team at
                            <a href="mailto:contact.gentalks@gmail.com">contact.gentalks@gmail.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-2xl">7. Intellectual Property Rights</h2>
                        <p className="p-4 text-lg">
                            All content and materials provided on GenTalks are owned or licensed by Gentalks.
                            Unauthorized copying, distribution, or use of such content is prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-2xl">8. Disclaimer of Professional Advice</h2>
                        <p className="p-4 text-lg">
                            GenTalks is a peer support platform and does not provide professional counseling, medical, legal, or mental health advice.
                            Users seeking such services should consult qualified professionals.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-2xl">9. Limitation of Liability</h2>
                        <p className="p-4 text-lg">
                            GenTalks shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-2xl">10. Modifications to Terms</h2>
                        <p className="p-4 text-lg">
                            GenTalks reserves the right to modify these Terms & Conditions at any time.
                            Continued use of the platform constitutes acceptance of any updated terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-2xl">11. Contact Information</h2>
                        <p className="p-4 text-lg">
                            For any questions or concerns regarding these terms and conditions, please contact us at: <a href="mailto:contact.gentalks@gmail.com">contact.gentalks@gmail.com</a>.
                        </p>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default TermsConditions;
