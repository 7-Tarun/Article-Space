import { Container, Logo, LogoutBtn } from "./Index"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

function Header() {

    const authStatus = useSelector((state) => state.auth.status )
    const navigate = useNavigate()
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])

    const navItems = [
        {
            name: 'Home',
            url: '/',
            active: true,
        },
        {
            name: 'Login',
            url: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            url: '/signup',
            active: !authStatus,
        },
        {
            name: 'My Posts',
            url: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            url: '/add-post',
            active: authStatus,
        },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/80 transition-shadow duration-300">
            <Container>
                <nav className="flex items-center justify-between h-14">
                    <div className="flex-shrink-0">
                        <Link to='/' className="transition-opacity duration-150 hover:opacity-80 flex items-center">
                            <Logo width='70px' />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center ml-auto gap-0.5">
                        {navItems.map((item) => 
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        className="nav-btn relative text-sm font-medium text-stone-500 hover:text-indigo-600
                                            transition-all duration-200 px-3.5 py-2 rounded-lg hover:bg-indigo-50/70 cursor-pointer"
                                        onClick={() => navigate(item.url)}>
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li className="ml-1">
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>

                    {/* Mobile Hamburger Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors focus:outline-none cursor-pointer"
                            aria-label="Toggle Navigation Menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Dropdown Drawer */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-stone-100 bg-white/95 backdrop-blur-md px-4 py-3 space-y-1 animate-fade-in shadow-lg">
                    {navItems.map((item) =>
                        item.active ? (
                            <button
                                key={item.name}
                                className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium text-stone-600 hover:text-indigo-600 hover:bg-indigo-50/50 active:bg-indigo-50 transition-colors flex items-center justify-between cursor-pointer"
                                onClick={() => {
                                    navigate(item.url)
                                    setIsMenuOpen(false)
                                }}
                            >
                                <span>{item.name}</span>
                                <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        ) : null
                    )}
                    {authStatus && (
                        <div className="pt-2 border-t border-stone-100">
                            <LogoutBtn className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50/70 active:bg-red-50 transition-colors flex items-center justify-between cursor-pointer" />
                        </div>
                    )}
                </div>
            )}
        </header>
    )
}

export default Header