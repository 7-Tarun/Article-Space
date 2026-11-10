import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Index";

function TermsAndConditions() {
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
                                Terms &amp; Conditions
                            </h1>
                            <p className="text-xs sm:text-sm text-stone-400">
                                Last updated: November 10, 2026
                            </p>
                            <p className="mt-4 text-stone-600">
                                Welcome to <strong>Article Space</strong> (accessible from{" "}
                                <a
                                    href={siteUrl}
                                    className="text-indigo-600 hover:underline break-all"
                                >
                                    {siteUrl}
                                </a>
                                ). These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our website, services, and publishing features. By accessing, browsing, or creating an account on Article Space, you agree to be bound by these Terms and our{" "}
                                <Link to="/privacy-policy" className="text-indigo-600 hover:underline font-medium">
                                    Privacy Policy
                                </Link>
                                . If you do not agree with any part of these Terms, please discontinue use of the platform immediately.
                            </p>
                        </header>

                        {/* 1. Eligibility & User Accounts */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                1. Eligibility &amp; User Accounts
                            </h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Age Requirement:</strong> You must be at least 13 years old (or the minimum legal age required in your country, such as 16 in the EEA, without parental consent) to create an account or publish content on Article Space.
                                </li>
                                <li>
                                    <strong>Account Responsibility:</strong> When creating an account, you must provide accurate information (Name and Email). You are solely responsible for safeguarding your login password and for all activities or content published under your account.
                                </li>
                            </ul>
                        </section>

                        {/* 2. User Conduct / Acceptable Use Policy */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                2. User Conduct &amp; Acceptable Use Policy
                            </h2>
                            <p>
                                Article Space is built to be a safe, respectful, and constructive space for readers and writers. By using this platform, you strictly agree <strong>NOT</strong> to publish, upload, share, or promote any content that contains or involves:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Vulgar or 18+ (NSFW) Content:</strong> Sexually explicit material, pornography, nudity, graphic violence, or mature/adult content of any kind.
                                </li>
                                <li>
                                    <strong>Illegal Content or Activities:</strong> Any material that violates applicable local, national, or international laws, or encourages illegal acts, fraud, piracy, or self-harm.
                                </li>
                                <li>
                                    <strong>Hate Speech &amp; Harassment:</strong> Content promoting hatred, violence, discrimination, harassment, bullying, or defamation against any individual or group based on race, religion, gender, nationality, disability, or sexual orientation.
                                </li>
                                <li>
                                    <strong>Spam &amp; Malicious Activity:</strong> Repetitive promotional spam, automated bot submissions, deceptive clickbait, phishing links, malware, or attempts to disrupt platform servers and security.
                                </li>
                                <li>
                                    <strong>Unauthorized Impersonation:</strong> Pretending to be another person, author, or organization, or violating another person&apos;s privacy.
                                </li>
                            </ul>
                        </section>

                        {/* 3. User Liability, Ownership & Copyright */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                3. User Liability, Content Ownership &amp; Copyright
                            </h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Content Ownership &amp; License:</strong> You retain full ownership of the original articles and images you create. By publishing content on Article Space, you grant us a non-exclusive, worldwide, royalty-free license to host, store, display, and distribute your content as part of the Service until you delete it.
                                </li>
                                <li>
                                    <strong>Copyright &amp; Originality Guarantee:</strong> You represent and warrant that you own or hold all necessary rights, licenses, and permissions for every text, quote, and featured image you upload. Uploading pirated or copyrighted material without permission is strictly prohibited.
                                </li>
                                <li>
                                    <strong>Full Legal Responsibility &amp; Platform Safe Harbor:</strong> You bear <strong>100% of the sole legal responsibility</strong> for any content (text, media, or external links) you post on Article Space. <strong>Article Space and its operator shall NOT be held liable</strong> for any claims, copyright infringement, defamation, inaccuracies, or damages arising out of user-generated content.
                                </li>
                                <li>
                                    <strong>Copyright Takedown Requests:</strong> If you believe your copyrighted work has been uploaded to Article Space without authorization, please report it to{" "}
                                    <a
                                        href="mailto:contact.tarundev@gmail.com"
                                        className="text-indigo-600 hover:underline font-medium"
                                    >
                                        contact.tarundev@gmail.com
                                    </a>{" "}
                                    with proof of ownership for prompt removal.
                                </li>
                            </ul>
                        </section>

                        {/* 4. Right to Moderate & Terminate (Account Banning) */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                4. Right to Remove Content &amp; Terminate Accounts
                            </h2>
                            <p>
                                To protect the community and keep the platform compliant with legal and advertising standards, Article Space reserves the <strong>absolute and unrestricted right</strong>, at its sole discretion and <strong>without any prior notice or warning</strong>, to:
                            </p>
                            <ul className="list-disc pl-5 space-y-1.5">
                                <li>Unpublish, restrict, or permanently delete any article, text, or uploaded image that violates these Terms or appears harmful or inappropriate.</li>
                                <li>Temporarily suspend or <strong>permanently ban/terminate</strong> any user account that breaches the Acceptable Use Policy, engages in repeated violations, or poses a legal or security risk to the platform.</li>
                            </ul>
                        </section>

                        {/* 5. Third-Party Advertisements & External Links */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                5. Third-Party Advertisements &amp; External Links
                            </h2>
                            <p>
                                Article Space may display third-party advertisements (including through Google AdSense) and may contain links to external third-party websites included within user articles or navigation links. We do not endorse, control, or assume any responsibility for the content, accuracy, products, or practices of any external websites or advertisers. Any interaction with third-party websites or ads is solely at your own risk.
                            </p>
                        </section>

                        {/* 6. Disclaimer of Warranties & Limitation of Liability */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                6. Disclaimer &amp; Limitation of Liability
                            </h2>
                            <p>
                                Article Space is provided on an <strong>&ldquo;AS IS&rdquo;</strong> and <strong>&ldquo;AS AVAILABLE&rdquo;</strong> basis without warranties of any kind, whether express or implied. We do not guarantee that the platform will be uninterrupted, error-free, or completely immune from data loss or unauthorized access.
                            </p>
                            <p>
                                To the maximum extent permitted by applicable law, Article Space and its creator shall not be liable for any direct, indirect, incidental, or consequential damages (including loss of data, profits, or reputation) resulting from your use of, or inability to use, the Service.
                            </p>
                        </section>

                        {/* 7. Governing Law & Jurisdiction */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                7. Governing Law &amp; Jurisdiction
                            </h2>
                            <p>
                                These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising out of or related to these Terms or your use of Article Space shall be subject to the exclusive jurisdiction of the competent courts in <strong>Rajasthan, India</strong>.
                            </p>
                        </section>

                        {/* 8. Changes to Terms */}
                        <section className="space-y-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                8. Changes to These Terms
                            </h2>
                            <p>
                                We may revise or update these Terms &amp; Conditions from time to time. Any updates will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Your continued use of Article Space after changes are posted constitutes your acceptance of the updated Terms.
                            </p>
                        </section>

                        {/* 9. Contact Us */}
                        <section className="border-t border-stone-100 pt-6 space-y-2">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                                9. Contact Us
                            </h2>
                            <p>
                                If you have any questions about these Terms &amp; Conditions, or wish to report a policy or copyright violation, please contact us at:
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

export default TermsAndConditions;

