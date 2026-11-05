import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dbService from "../appWrite/dbConfig";
import { Button, Container } from "../components/Index"
import parse from "html-react-parser";
import { useSelector } from "react-redux";
// Import DOMPurify for HTML sanitization
import DOMPurify from "dompurify";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            dbService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        dbService.deletePost(post.$id).then((status) => {
            if (status) {
                dbService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-10 animate-fade-up">
            <Container>
                <div className="max-w-3xl mx-auto">

                    {/* Back link */}
                    <Link to="/"
                        className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-indigo-600
                            transition-colors duration-150 mb-6 group/back">
                        <svg className="w-4 h-4 transition-transform duration-150 group-hover/back:-translate-x-0.5"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        All articles
                    </Link>

                    {/* Hero image */}
                    <div className="relative rounded-2xl overflow-hidden mb-8 bg-stone-100 shadow-sm">
                        <img
                            src={dbService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full object-cover max-h-[480px]"
                        />
                        {/* Gradient overlay at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                        {isAuthor && (
                            <div className="absolute top-4 right-4 flex gap-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-white/90 hover:bg-white text-stone-700 border border-stone-200 hover:border-stone-300 backdrop-blur-sm">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500 hover:bg-red-600" onClick={deletePost}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4 leading-tight">
                        {post.title}
                    </h1>

                    {/* Divider */}
                    <div className="w-12 h-0.5 bg-indigo-500 rounded-full mb-8" />

                    {/* Post content */}
                    <div className="browser-css text-stone-700 leading-relaxed">
                        {parse(DOMPurify.sanitize(post.content))}
                    </div>

                    {/* Footer */}
                    <div className="mt-14 pt-8 border-t border-stone-200">
                        <Link to="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-150 group/back">
                            <svg className="w-4 h-4 transition-transform duration-150 group-hover/back:-translate-x-0.5"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to all articles
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}


//Whats the problem of using parse?
// Stored XSS (Cross-Site Scripting):
// Rich text editors like TinyMCE store HTML content in the database.
// If raw HTML is rendered without sanitization, malicious scripts or event handlers
// injected by an attacker can execute in other users' browsers.
// Since the malicious code is stored in the database, this is called Stored XSS.

// Example: An injected <img> tag with an onerror handler can execute malicious JavaScript.
// Prevention: Sanitize HTML before rendering it.

//Solution: DOMPurify
// It sanitizes HTML before rendering it in the browser.
// It allows safe HTML tags (e.g., <p>, <b>, <i>) while removing
// dangerous tags (e.g., <script>) and attributes (e.g., onerror, onload).
// This helps prevent Stored XSS attacks.