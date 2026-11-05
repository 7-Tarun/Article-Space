import { PostCard, Container } from "../components/Index"
import dbService from "../appWrite/dbConfig"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

function AllPosts() {

    const [posts, setPosts] = useState([]);
    const userData = useSelector(state => state.auth.userData);

    useEffect(() => {
        if (userData) {
            dbService.getAllPosts([]).then((posts) => {
                // console.log("Appwrite Response:", posts);
                if (posts) {
                    const userPosts =  posts.rows.filter(post => post.userId === userData.$id)
                    setPosts(userPosts);
                }
            })
        }
    }, [userData])

    return (
        <div className="w-full py-8 ">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="w-1/4 p-2">
                            <PostCard {...post} />      {/*PostCard uses spread because it needs individual properties (e.g., $id, title).*/}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts;