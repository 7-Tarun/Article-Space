// 1. React & Routing (Navigation)
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// 2. Global State (Redux)
import { login as authLogin } from "../store/authSlice"
import { Logo, Button, Input } from "./Index"

// 3. Backend Service (Appwrite)
import { useDispatch } from "react-redux"

// 4. Custom UI Blocks & Form Library
import authService from "../appWrite/auth"
import { useForm } from "react-hook-form"

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to Your Account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover: underline">
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                {/* handleSubmit is a special function from react-hook-form that validates form fields */}
                {/* and passes the form data as an object to the login function if validation succeeds. */}
                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        <Input
                            label="Email: "
                            placeholder="Enter Your Email"
                            type="email"
                            //register ko spread karna jaruri hai or ak key dani hogi yaha pe email hai (optional: object pass kar sakte hai)
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value) || "Email address must be a valid address",
                                }
                            })}
                        />
                        <input
                            label="Password: "
                            placeholder="password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button/>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login