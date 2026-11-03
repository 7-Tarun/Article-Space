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
        <div className="py-8">
            <Container>
                <PostForm post={post} />    {/*PostForm receives the entire post object in a single variable for further use.
*/}
            </Container>
        </div>
    ) : null
}

export default EditPost;