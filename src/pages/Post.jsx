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
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={dbService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>

                <div className="browser-css">
                    {parse(DOMPurify.sanitize(post.content))}
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