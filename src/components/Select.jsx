import React, { useId } from "react"

function Select({
    options,
    label,
    className =  "",
    ...props
}, ref){

    const id = useId()
    return(
        <div className="w-full group/field">
            {label && <label htmlFor={id} className="block text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1.5
                group-focus-within/field:text-indigo-500 transition-colors duration-200">{label}</label>}
            <select
            {...props}
            id={id}
            ref={ref}
            className={`w-full px-4 py-2.5 text-sm text-stone-900 bg-white
                border border-stone-200 rounded-lg outline-none
                hover:border-stone-300
                focus:border-indigo-400 focus:ring-3 focus:ring-indigo-100
                transition-all duration-200 cursor-pointer ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

// React.forwardRef me function ko as a parameter pass kar diya (Yeh exact same kaam karega jo Input me kiya tha)
export default React.forwardRef(Select)


//Why using key in option?
// The key prop helps React identify list items between renders.
// It allows React to efficiently update, add, or remove changed items
// instead of unnecessarily recreating the entire list.