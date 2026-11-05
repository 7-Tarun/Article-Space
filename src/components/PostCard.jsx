import React from "react"
import appwriteservice from "../appWrite/dbConfig"
import { Link } from "react-router-dom"

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="block group animate-fade-up">
            <div className="card-hover w-full bg-white border border-stone-200/80 rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-stone-100 relative">
                    <img
                        src={appwriteservice.getFilePreview(featuredImage)}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    />
                    {/* subtle overlay on hover */}
                    <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/5 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-4 pb-5">
                    <h2 className="font-serif font-semibold text-stone-900 leading-snug line-clamp-2 text-base
                        group-hover:text-indigo-600 transition-colors duration-200">
                        {title}
                    </h2>
                    {/* Read more arrow — appears on hover */}
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium text-indigo-500
                        opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0
                        transition-all duration-200">
                        Read article
                        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostCard