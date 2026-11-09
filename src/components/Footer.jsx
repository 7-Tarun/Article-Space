import { Link } from "react-router-dom"
import Logo from "./Logo"

const footerLink = "relative text-sm text-stone-500 hover:text-indigo-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-indigo-400 after:transition-all after:duration-200 hover:after:w-full"

function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
                <div className="flex flex-wrap -mx-4 sm:-mx-6">
                    <div className="w-full px-4 sm:px-6 pb-8 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-6">
                                <Logo />
                                <p className="mt-3 text-sm text-stone-400 max-w-xs leading-relaxed">
                                    A minimalist space for writers and readers. Share your ideas with the world.
                                </p>
                            </div>
                            <p className="text-xs text-stone-400">
                                &copy; Copyright 2026. All Rights Reserved by Tarun.
                            </p>
                        </div>
                    </div>

                    <div className="w-1/2 px-4 sm:px-6 pb-6 md:w-1/2 lg:w-2/12">
                        <h3 className="mb-3 sm:mb-5 text-xs font-bold uppercase tracking-widest text-stone-300">
                            Company
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3.5">
                            <li><Link className={footerLink} to="/">Features</Link></li>
                            <li><Link className={footerLink} to="/">Pricing</Link></li>
                            <li><Link className={footerLink} to="/">Affiliate Program</Link></li>
                            <li><Link className={footerLink} to="/">Press Kit</Link></li>
                        </ul>
                    </div>

                    <div className="w-1/2 px-4 sm:px-6 pb-6 md:w-1/2 lg:w-2/12">
                        <h3 className="mb-3 sm:mb-5 text-xs font-bold uppercase tracking-widest text-stone-300">
                            Support
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3.5">
                            <li><Link className={footerLink} to="/">Account</Link></li>
                            <li><Link className={footerLink} to="/">Help</Link></li>
                            <li><Link className={footerLink} to="/">Contact Us</Link></li>
                            <li><Link className={footerLink} to="/">Customer Support</Link></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 px-4 sm:px-6 pb-6 lg:w-3/12">
                        <h3 className="mb-3 sm:mb-5 text-xs font-bold uppercase tracking-widest text-stone-300">
                            Legals
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3.5">
                            <li><Link className={footerLink} to="/">Terms &amp; Conditions</Link></li>
                            <li><Link className={footerLink} to="/">Privacy Policy</Link></li>
                            <li><Link className={footerLink} to="/">Licensing</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer