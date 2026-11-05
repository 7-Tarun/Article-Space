import { PostForm, Container } from "../components/Index";

function AddPost() {
    return (
        <div className="w-full">
            <div className="border-b border-stone-100 bg-white">
                <Container>
                    <div className="py-8">
                        <h1 className="font-serif text-2xl font-bold text-stone-900">New Post</h1>
                        <p className="text-stone-500 text-sm mt-1">Write something amazing for your readers</p>
                    </div>
                </Container>
            </div>
            <div className="py-10">
                <Container>
                    <PostForm />
                </Container>
            </div>
        </div>
    )
}

export default AddPost;