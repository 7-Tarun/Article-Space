import React, { useId } from "react"

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {

    const id = useId()

    return (
        <div className="w-full group/field">
            {label && <label
                className="block text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1.5
                    group-focus-within/field:text-indigo-500 transition-colors duration-200"
                htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`w-full px-4 py-2.5 text-sm text-stone-900 bg-white
                border border-stone-200 rounded-lg outline-none
                hover:border-stone-300
                focus:border-indigo-400 focus:ring-3 focus:ring-indigo-100
                transition-all duration-200 placeholder:text-stone-300
                ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input


// Problem: When an input is wrapped inside a separate Input.jsx component,
// the parent form cannot directly access the actual DOM input element using a ref.
//
// Solution: forwardRef acts as a bridge that allows the parent to pass a ref
// through the custom Input component to the actual DOM input element.
// This is useful for libraries like react-hook-form that need direct access
// to input fields for form handling and submission.

//Syntax Difference
// Normal components receive (props), while forwardRef components receive (props, ref).
// Pass the received ref to the actual DOM element using <input ref={ref} />.