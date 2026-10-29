function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props

}){
    return(
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {/* Children */}
        </button>
    )
}

export default Button

//Sign in ya other component ke button yaha children wali jagha aake render hoga