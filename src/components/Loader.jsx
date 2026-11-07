function Loader({ size = "md", className = "", color = "border-indigo-600", center = false }) {
    const sizes = {
        sm: "w-4 h-4 border-2",
        md: "w-6 h-6 border-2",
        lg: "w-10 h-10 border-3",
    };

    const spinner = (
        <span
            className={`inline-block rounded-full border-t-transparent animate-spin ${sizes[size] || sizes.md} ${color} ${className}`}
            role="status"
            aria-label="loading"
        />
    );

    if (center) {
        return (
            <div className="flex items-center justify-center py-16 w-full">
                {spinner}
            </div>
        );
    }

    return spinner;
}

export default Loader;

