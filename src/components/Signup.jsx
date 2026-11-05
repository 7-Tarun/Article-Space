import { useState } from "react"
import authService from "../appWrite/auth"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../store/authSlice"
import { Button, Input, Logo } from "./Index"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

function Signup() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    const signup = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(login(userData));
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-md bg-white border border-stone-200/80 rounded-2xl p-8
                shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up">
                <div className="mb-6 flex justify-center">
                    <span className="inline-block">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-serif font-bold text-stone-900 leading-tight">Create account</h2>
                <p className="mt-2 text-center text-sm text-stone-500">
                    Already have an account?&nbsp;
                    <Link to="/login"
                        className="font-semibold text-indigo-600 hover:text-indigo-700 underline underline-offset-2 transition-colors duration-150">
                        Sign In
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

                <form onSubmit={handleSubmit(signup)} className="mt-7">
                    <div className="space-y-5">
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,

                            })}
                        />
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
                            type="password"
                            placeholder="Enter your password"
                            {...register("password",{
                                required: true,
                            })}
                        />

                        <Button
                            type="submit"
                            className="w-full mt-2 py-3 text-base"
                        >
                            Create Account →
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup