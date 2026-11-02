import { PostCard, Container } from "../components/Index"
import dbService from "../appWrite/dbConfig"

function AllPosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        dbService.getPost([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        })
    }, [])

    return (
        <div className="w-full py-8 ">
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div key={post.$id} className="w-1/4 p-2">
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllPosts;