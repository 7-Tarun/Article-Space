//This file is a Security Guard of frontend called Protected Routes or Higher-Order Components(HOC)

// They prevent unauthorized users from accessing restricted routes.
// For example, if a user tries to access /add-post without logging in, (e.g yoursite.com/add-post)
// they are redirected to the login page instead of accessing the form.
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Protected({children, authentication = true}){

    const navigate = useNavigate()
    const [loading,  setLoading] = useState(true)

    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !==authentication){
            navigate("/")
        }
        setLoading(false)
    }, [authStatus, navigate, authentication])

    return loading ? <h1>Loading...</h1> : <>{children}</>
}