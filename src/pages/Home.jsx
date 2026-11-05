import { useEffect, useState } from "react"
import dbService from "../appWrite/dbConfig"
import {Container,PostCard } from "../components/Index"

function Home(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        dbService.getAllPosts().then((posts) => {
            if(posts){
                setPosts(posts.rows)
            }
        })
    },[])

    if(posts.length === 0){
        return (
            <div className="w-full">
                {/* Hero empty state */}
                <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-stone-50 border-b border-stone-100">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(99,102,241,0.08),transparent_70%)]" />
                    <Container>
                        <div className="relative flex flex-col items-center justify-center py-32 text-center animate-fade-up">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-6 text-3xl">
                                📖
                            </div>
                            <h1 className="font-serif text-3xl font-bold text-stone-900 mb-3">Your reading space</h1>
                            <p className="text-stone-500 text-base max-w-sm leading-relaxed">
                                Log in to discover articles, or start writing your first post for the world to read.
                            </p>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            {/* Page header */}
            <div className="border-b border-stone-100 bg-white">
                <Container>
                    <div className="py-8 animate-fade-up">
                        <h1 className="font-serif text-2xl font-bold text-stone-900">Latest Articles</h1>
                        <p className="text-stone-500 text-sm mt-1">{posts.length} article{posts.length !== 1 ? 's' : ''} published</p>
                    </div>
                </Container>
            </div>

            {/* Grid */}
            <div className="py-10">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger-children">
                        {posts.map((post) => (
                            <PostCard key={post.$id} {...post}/>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Home