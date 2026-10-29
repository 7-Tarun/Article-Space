import React, { useId } from "react"

function Select({
    options,
    label,
    className =  "",
    ...props
}, ref){

    const id = useId()
    return(
        <div className="w-full">
            {label && <label htmlFor={id} className=""></label>}
            <select
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-100 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options?.map((option) => {
                    <option key={option} value={option}>
                        {option}
                    </option>
                })}
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