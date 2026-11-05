import { Container, Logo, LogoutBtn } from "./Index"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { logout } from "../store/authSlice"
import { useNavigate } from "react-router-dom"

function Header() {

    const authStatus = useSelector((state) => state.auth.status )
    const navigate = useNavigate()

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
                <nav className="flex items-center h-14">
                    <div className="mr-6 flex-shrink-0">
                        <Link to='/' className="transition-opacity duration-150 hover:opacity-80">
                            <Logo width='70px' />
                        </Link>
                    </div>

                    <ul className="flex items-center ml-auto gap-0.5">
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
                </nav>
            </Container>
        </header>
    )
}

export default Header

//Link and Navigatie is almost same