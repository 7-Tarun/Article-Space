import { Container, Logo, LogoutBtn } from "./Index"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { logout } from "../store/authSlice"
import { useNavigate } from "react-router-dom"

function Header() {

    const authStatus = useSelector((state) => { state.auth.status })
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            url: '/',
            active: ''
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
            name: 'ALL Posts',
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
        <header className="py-3 shadow bg-gray-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>

                    <ul className="flex ml-auto">
                        {navItems.map((item) => {
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                        onClick={() => navigate(item.url)}>
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        })}
                        {authStatus && (
                            <li>
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