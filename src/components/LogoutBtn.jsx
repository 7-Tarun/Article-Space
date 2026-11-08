import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import authService from "../appWrite/auth"
import { logout } from "../store/authSlice"
import { useState } from "react"
import { ConfirmModal } from "./Index"


function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showModel, setShowModel] = useState(false)

    const [loading, setLoading] = useState(false)

    const logoutHandler = () => {
        setLoading(true)
        authService.logOut()
            .then(() => {
                dispatch(logout())
                setShowModel(false)
                navigate("/")
            })
            .finally(() => setLoading(false))
    }

    return (
        <>
            <button
                className="text-sm font-medium text-stone-500 hover:text-red-600 transition-all duration-200 px-3.5 py-2 rounded-lg hover:bg-red-50/70 cursor-pointer btn-press"
                onClick={() => setShowModel(true)}
            >
                Logout
            </button>

            <ConfirmModal
                isOpen={showModel}
                onClose={() => setShowModel(false)}
                onConfirm={logoutHandler}
                title="Log out of ArticleSpace?"
                message="Miss You Bhai,🫡"
                confirmText="Log Out"
                cancelText="Cancel"
                loading={loading}
            />
        </>
    )
}

export default LogoutBtn