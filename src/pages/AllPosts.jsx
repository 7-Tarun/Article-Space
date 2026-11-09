import { PostCard, Container, PostCardSkeleton } from "../components/Index"
import dbService from "../appWrite/dbConfig"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Query } from "appwrite";

function AllPosts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const userData = useSelector(state => state.auth.userData);

    useEffect(() => {
        if (userData) {
            dbService.getAllPosts([])
                .then((posts) => {
                    // console.log("Appwrite Response:", posts);
                    if (posts) {
                        const userPosts =  posts.rows.filter(post => post.userId === userData.$id)
                        setPosts(userPosts);
                    }
                })
                .finally(() => setLoading(false))
        }
    }, [userData])

    return (
        <div className="w-full">
            {/* Page header */}
            <div className="border-b border-stone-100 bg-white">
                <Container>
                    <div className="py-6 sm:py-8 animate-fade-up">
                        <h1 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">My Posts</h1>
                        <p className="text-stone-500 text-xs sm:text-sm mt-1">
                            {loading
                                ? "Loading your articles..."
                                : posts.length > 0
                                ? `${posts.length} article${posts.length !== 1 ? 's' : ''} written by you`
                                : "Nothing published yet"}
                        </p>
                    </div>
                </Container>
            </div>

            <div className="py-6 sm:py-10">
                <Container>
                    {loading ? (
                        <PostCardSkeleton count={4} />
                    ) : posts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 sm:py-24 text-center animate-fade-up">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-2xl mb-5 text-2xl">
                                ✍️
                            </div>
                            <h2 className="font-serif text-xl font-semibold text-stone-800">No posts yet</h2>
                            <p className="text-stone-500 mt-2 text-sm px-4">Write your first article and it will appear here.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 stagger-children">
                            {posts.map((post) => (
                                <PostCard key={post.$id} {...post} />
                            ))}
                        </div>
                    )}
                </Container>
            </div>
        </div>
    )
}

export default AllPosts;