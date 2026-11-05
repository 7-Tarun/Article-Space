import { useDispatch } from "react-redux"
import authService from "../appWrite/auth"
import { logout } from "../store/authSlice"


function LogoutBtn(){
    const dispatch  = useDispatch()

    const logoutHandler = () => {
        authService.logOut().then(() => {
            dispatch(logout())
        }) 
    }
    return(
        <button
            className="text-sm font-medium text-stone-500 hover:text-red-600
                transition-all duration-200 px-3.5 py-2 rounded-lg hover:bg-red-50/70 cursor-pointer btn-press"
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn