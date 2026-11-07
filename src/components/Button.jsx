function Button({
    children,
    type = 'button',
    bgColor = 'bg-indigo-600 hover:bg-indigo-700',
    textColor = 'text-white',
    className = '',
    loading = false,
    loadingText,
    disabled = false,
    ...props
}){
    const isDisabled = loading || disabled

    return(
        <button
            type={type}
            disabled={isDisabled}
            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg
                transition-all duration-200 btn-press
                shadow-sm hover:shadow-md active:shadow-none
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                ${isDisabled ? 'opacity-70 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
                ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {loading && (
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0" />
            )}
            <span className="inline-flex items-center gap-2">{loading && loadingText ? loadingText : children}</span>
        </button>
    )
}

export default Button

//Sign in ya other component ke button yaha children wali jagha aake render hoga