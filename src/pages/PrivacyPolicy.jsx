import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Index";

function PrivacyPolicy() {
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://articlespace.com";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-8 sm:py-12 animate-fade-up">
            <Container>
                <div className="max-w-3xl mx-auto">
                    {/* Back link */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-stone-500 hover:text-indigo-600 transition-colors duration-150 mb-6 group/back"
                    >
                        <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-150 group-hover/back:-translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to home
                    </Link>

                    {/* Document Card */}
                    <article className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 text-stone-700 leading-relaxed text-sm sm:text-base">
                        {/* Header */}
                        <header className="border-b border-stone-100 pb-6">
                            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
                                Privacy Policy
                            </h1>
                            <p className="text-xs sm:text-sm text-stone-400">
                                Last updated: November 10, 2026
                            </p>
                            <p className="mt-4 text-stone-600">
                                This Privacy Policy describes how <strong>Article Space</strong> (&ldquo;We&rdquo;, &ldquo;Us&rdquo;, or &ldquo;Our&rdquo;) collects, uses, and protects your information when you visit or use our website (accessible from{" "}
                                <a
                                    href={siteUrl}
                                    className="text-indigo-600 hover:underline break-all"
                                >
                                    {siteUrl}
                                </a>
                                ). By accessing or using the Service, you agree to the collection and use of information in accordance with this policy.
                            </p>
                        </header>

                        {/* 1. Definitions */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                1. Key Definitions
                            </h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Account:</strong> A unique account created for you to access and publish content on Article Space.
                                </li>
                                <li>
                                    <strong>Service / Website:</strong> Refers to Article Space, accessible at{" "}
                                    <span className="text-stone-900 font-medium break-all">{siteUrl}</span>.
                                </li>
                                <li>
                                    <strong>Jurisdiction:</strong> Rajasthan, India.
                                </li>
                                <li>
                                    <strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual (such as your name and email address).
                                </li>
                                <li>
                                    <strong>Usage Data:</strong> Technical and diagnostic data collected automatically when browsing the website.
                                </li>
                                <li>
                                    <strong>Cookies:</strong> Small text files stored on your browser or device to maintain login sessions, remember preferences, and support advertising features.
                                </li>
                            </ul>
                        </section>

                        {/* 2. Information We Collect */}
                        <section className="space-y-4">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                2. Information We Collect
                            </h2>

                            <div className="space-y-2">
                                <h3 className="font-serif text-base sm:text-lg font-semibold text-stone-800">
                                    A. Personal Data You Provide
                                </h3>
                                <p>
                                    When you register for an account on Article Space, we collect personally identifiable information that you voluntarily provide, including:
                                </p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Full Name</li>
                                    <li>Email Address</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-serif text-base sm:text-lg font-semibold text-stone-800">
                                    B. User-Generated Content
                                </h3>
                                <p>
                                    When you publish articles on the platform, we store the content you submit—including article titles, text, rich-text formatting, and uploaded featured images—so they can be displayed to readers.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-serif text-base sm:text-lg font-semibold text-stone-800">
                                    C. Usage Data
                                </h3>
                                <p>
                                    Usage Data is collected automatically when using the Service. This may include your device&apos;s Internet Protocol (IP) address, browser type and version, the pages you visit, the time and date of your visit, time spent on pages, device type, and general diagnostic data.
                                </p>
                            </div>
                        </section>

                        {/* 3. Cookies & Tracking Technologies */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                3. Cookies &amp; Tracking Technologies
                            </h2>
                            <p>
                                We use cookies and similar tracking technologies to keep you signed in and improve your reading experience:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Necessary / Session Cookies:</strong> Essential for authenticating users, maintaining active login sessions, and protecting user accounts against unauthorized access.
                                </li>
                                <li>
                                    <strong>Functionality Cookies:</strong> Remember your preferences and settings to deliver a smoother user experience.
                                </li>
                                <li>
                                    <strong>Advertising Cookies:</strong> Used by third-party advertising partners (such as Google AdSense) to serve relevant advertisements.
                                </li>
                            </ul>
                            <p>
                                You can instruct your browser to refuse all cookies or notify you when a cookie is sent. Note that disabling essential cookies may prevent login and publishing features from working properly.
                            </p>
                        </section>

                        {/* 4. Google AdSense & Third-Party Advertising */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                4. Google AdSense &amp; Third-Party Advertising
                            </h2>
                            <p>
                                Article Space may display third-party advertisements served through <strong>Google AdSense</strong> and other advertising partners.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    Third-party vendors, including Google, use cookies (such as the DoubleClick / Google advertising cookie) to serve ads based on a user&apos;s prior visits to Article Space or other websites on the Internet.
                                </li>
                                <li>
                                    Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
                                </li>
                                <li>
                                    Users may opt out of personalized advertising at any time by visiting{" "}
                                    <a
                                        href="https://adssettings.google.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 hover:underline font-medium"
                                    >
                                        Google Ads Settings
                                    </a>{" "}
                                    or by visiting{" "}
                                    <a
                                        href="https://www.aboutads.info/choices/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 hover:underline font-medium"
                                    >
                                        www.aboutads.info
                                    </a>
                                    .
                                </li>
                            </ul>
                            <p>
                                Note that Article Space has no direct access to or control over the cookies used by third-party advertisers.
                            </p>
                        </section>

                        {/* 5. Third-Party Infrastructure & Service Providers */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                5. Third-Party Service Providers
                            </h2>
                            <p>
                                We rely on trusted third-party backend infrastructure providers—such as <strong>Appwrite</strong>—to handle user authentication, database operations, and media storage securely. These service providers process data solely to perform these technical services on our behalf and are bound by strict data protection standards.
                            </p>
                        </section>

                        {/* 6. How We Use & Share Your Information */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                6. How We Use &amp; Share Your Data
                            </h2>
                            <p>We use your information strictly to:</p>
                            <ul className="list-disc pl-5 space-y-1.5">
                                <li>Provide, operate, and maintain Article Space.</li>
                                <li>Manage user registration, authentication, and account security.</li>
                                <li>Display your published articles and images to readers on the platform.</li>
                                <li>Respond to user inquiries, bug reports, or support requests sent via email.</li>
                                <li>Monitor platform stability, prevent spam or abuse, and comply with legal obligations.</li>
                            </ul>
                            <p>
                                We do <strong>not</strong> sell or rent your personal information to third parties. We may disclose information only if required by law or in response to valid legal requests by public authorities.
                            </p>
                        </section>

                        {/* 7. Data Retention & Your Rights */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                7. Data Retention &amp; Deletion Rights
                            </h2>
                            <p>
                                We retain your personal data only for as long as your account remains active or as needed to provide the Service and comply with applicable laws.
                            </p>
                            <ul className="list-disc pl-5 space-y-1.5">
                                <li>
                                    <strong>Manage Content:</strong> You can edit or permanently delete your published articles and uploaded images directly inside Article Space at any time.
                                </li>
                                <li>
                                    <strong>Account Deletion:</strong> You may request access to, correction of, or complete deletion of your account and personal data by emailing us at{" "}
                                    <a
                                        href="mailto:contact.tarundev@gmail.com"
                                        className="text-indigo-600 hover:underline font-medium"
                                    >
                                        contact.tarundev@gmail.com
                                    </a>
                                    .
                                </li>
                            </ul>
                        </section>

                        {/* 8. Security of Your Data */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                8. Security of Your Personal Data
                            </h2>
                            <p>
                                We strive to use commercially reasonable security measures (including encrypted connections and secure authentication flows) to protect your personal data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* 9. Children's Privacy */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                9. Children&apos;s Privacy
                            </h2>
                            <p>
                                Article Space is not directed to anyone under the age of 13 (or higher applicable minimum age in your jurisdiction, such as 16 in the EEA, without parental consent). We do not knowingly collect personally identifiable information from minors. If you are a parent or guardian and believe your child has provided personal data to us, please contact us so we can promptly remove it.
                            </p>
                        </section>

                        {/* 10. External Links & Updates */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                10. Links to Other Websites &amp; Policy Updates
                            </h2>
                            <p>
                                Our platform may contain links to external websites that are not operated by us (including links inside user-published articles or social profiles). We have no control over and assume no responsibility for the content or privacy practices of any third-party sites.
                            </p>
                            <p>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised &ldquo;Last updated&rdquo; date at the top.
                            </p>
                        </section>

                        {/* 11. Contact Us */}
                        <section className="border-t border-stone-100 pt-6 space-y-2">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                11. Contact Us
                            </h2>
                            <p>
                                If you have any questions, concerns, or data deletion requests regarding this Privacy Policy, you can contact us at:
                            </p>
                            <p>
                                <a
                                    href="mailto:contact.tarundev@gmail.com"
                                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium hover:underline"
                                >
                                    contact.tarundev@gmail.com
                                </a>
                            </p>
                        </section>
                    </article>
                </div>
            </Container>
        </div>
    );
}

export default PrivacyPolicy;

