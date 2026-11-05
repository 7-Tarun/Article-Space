import { Container, PostForm } from "../components/Index"
import dbService from "../appWrite/dbConfig"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditPost() {

    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            dbService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
                else {
                    navigate('/');
                }
            })
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className="w-full">
            <div className="border-b border-stone-100 bg-white">
                <Container>
                    <div className="py-8">
                        <h1 className="font-serif text-2xl font-bold text-stone-900">Edit Post</h1>
                        <p className="text-stone-500 text-sm mt-1 line-clamp-1">{post.title}</p>
                    </div>
                </Container>
            </div>
            <div className="py-10">
                <Container>
                    <PostForm post={post} />    {/*PostForm receives the entire post object in a single variable for further use.
*/}
                </Container>
            </div>
        </div>
    ) : null
}

export default EditPost;