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
        <div className="flex items-center justify-center w-full px-4 py-6 sm:py-10">
            <div className="mx-auto w-full max-w-md bg-white border border-stone-200/80 rounded-xl sm:rounded-2xl p-5 sm:p-8
                shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up">
                <div className="mb-6 flex justify-center">
                    <span className="inline-block">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-serif font-bold text-stone-900 leading-tight">Welcome back</h2>
                <p className="mt-2 text-center text-sm text-stone-500">
                    Don&apos;t have an account?&nbsp;
                    <Link to="/signup"
                        className="font-semibold text-indigo-600 hover:text-indigo-700 underline underline-offset-2 transition-colors duration-150">
                        Sign Up
                    </Link>
                </p>
                {error && (
                    <div className="mt-5 flex items-start gap-2.5 text-red-700 text-sm bg-red-50 border border-red-200 rounded-xl py-3 px-4 animate-fade-in">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>{error}</span>
                    </div>
                )}

                {/* handleSubmit is a special function from react-hook-form that validates form fields */}
                {/* and passes the form data as an object to the login function if validation succeeds. */}
                <form onSubmit={handleSubmit(login)} className="mt-7">
                    <div className="space-y-5">
                        <Input
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            //register ko spread karna jaruri hai or ak key dani hogi yaha pe email hai (optional: object pass kar sakte hai)
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value) || "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full mt-2 py-3 text-base"
                        >
                            Sign In →
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login