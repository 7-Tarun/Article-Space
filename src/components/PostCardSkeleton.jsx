function PostCardSkeleton({ count = 4 }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className="w-full bg-white border border-stone-200/80 rounded-2xl overflow-hidden animate-pulse shadow-sm"
                >
                    {/* Image placeholder */}
                    <div className="aspect-video bg-stone-200/70 skeleton" />
                    {/* Content placeholder */}
                    <div className="p-4 pb-5 space-y-2.5">
                        <div className="h-4 bg-stone-200/80 rounded w-3/4 skeleton" />
                        <div className="h-3 bg-stone-100 rounded w-1/2 skeleton" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostCardSkeleton;