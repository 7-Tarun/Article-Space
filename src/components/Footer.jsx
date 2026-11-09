import { Link } from "react-router-dom"
import Logo from "./Logo"

const footerLink = "relative inline-block text-sm text-stone-500 hover:text-indigo-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-indigo-400 after:transition-all after:duration-200 hover:after:w-full"

function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10">
                    
                    {/* Brand & Connect Column */}
                    <div className="md:col-span-6 space-y-4">
                        <Link to="/" className="inline-block transition-opacity hover:opacity-85">
                            <Logo width="80px" />
                        </Link>
                        <p className="text-sm text-stone-500 max-w-sm leading-relaxed">
                            A minimalist space for writers and readers. Share your ideas, discover fresh perspectives, and connect through words.
                        </p>

                        {/* Connect Icons */}
                        <div className="pt-2">
                            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                                Connect
                            </p>
                            <div className="flex items-center gap-1">
                                <a
                                    href="https://x.com/Tarun_sys"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit X"
                                    className="flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors duration-200 hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                                >
                                    <span className="flex items-center justify-center">
                                        <svg aria-hidden="true" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/~-tarun-30913633a/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit LinkedIn"
                                    className="flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors duration-200 hover:bg-stone-100 hover:text-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                                >
                                    <span className="flex items-center justify-center">
                                        <svg aria-hidden="true" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                                        </svg>
                                    </span>
                                </a>

                                <a
                                    href="https://github.com/7-Tarun"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit GitHub"
                                    className="flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors duration-200 hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                                >
                                    <span className="flex items-center justify-center">
                                        <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943-.359.309-.678.92-.678 1.855 0 1.338.012 2.419.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="col-span-6 md:col-span-3">
                        <h3 className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-widest text-stone-400">
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3">
                            <li>
                                <Link className={footerLink} to="/">Latest Articles</Link>
                            </li>
                            <li>
                                <Link className={footerLink} to="/add-post">Write a Story</Link>
                            </li>
                            <li>
                                <Link className={footerLink} to="/all-posts">My Articles</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Support Column (Placeholder/Dead Links for now) */}
                    <div className="col-span-6 md:col-span-3">
                        <h3 className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-widest text-stone-400">
                            Legal &amp; Support
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3">
                            <li>
                                <a
                                    href="#contact"
                                    onClick={(e) => e.preventDefault()}
                                    className={footerLink}
                                    title="Coming soon"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#privacy"
                                    onClick={(e) => e.preventDefault()}
                                    className={footerLink}
                                    title="Coming soon"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#terms"
                                    onClick={(e) => e.preventDefault()}
                                    className={footerLink}
                                    title="Coming soon"
                                >
                                    Terms &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Attribution */}
                <div className="border-t border-stone-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
                    <p>
                        &copy; {new Date().getFullYear()} ArticleSpace. All rights reserved.
                    </p>
                    <p>
                        Crafted by <span className="font-medium text-stone-600">Tarun</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
