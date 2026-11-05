function Button({
    children,
    type = 'button',
    bgColor = 'bg-indigo-600 hover:bg-indigo-700',
    textColor = 'text-white',
    className = '',
    ...props
}){
    return(
        <button
            type={type}
            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg
                transition-all duration-200 cursor-pointer btn-press
                shadow-sm hover:shadow-md active:shadow-none
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button

//Sign in ya other component ke button yaha children wali jagha aake render hoga