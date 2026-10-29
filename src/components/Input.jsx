import React, { useId } from "react"

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {

    const id = useId()

    return (
        <div className="w-full ">
            {label && <label
                className="inline-block mb-1 pl-1"
                htmlFor={id}>
                {label}
            </label>
            }
            <input 
            type={text} 
            className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
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