import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Button, Input, Select, RTE } from "./Index"
import dbService from "../appWrite/dbConfig"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues, formState: { isSubmitting } } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    })

    const [imagePreview, setImagePreview] = useState( post ?.featuredImage ? dbService.getFilePreview(post.featuredImage) : null )

    // React Hook Form se image input ki live value ko watch karna
    const selectedImage = watch("image")

    useEffect(() => {
        if(selectedImage && selectedImage.length > 0 && selectedImage[0] instanceof File) {
            const objectUrl = URL.createObjectURL(selectedImage[0])
            setImagePreview(objectUrl)
            
            return () => URL.revokeObjectURL(objectUrl)
        }
        else if(post?.featuredImage){
            setImagePreview(dbService.getFilePreview(post.featuredImage))
        }
        else{
            setImagePreview(null)
        }
    }, [selectedImage, post])

    const navigate = useNavigate();
    const userData = useSelector(state => state.auth.userData)

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await dbService.uploadFile(data.image[0]) : null;

            if (file) {
                dbService.deleteFile(post.featuredImage)
            }

            const dbPost = await dbService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        }
        else {
            const file = await dbService.uploadFile(data.image[0])

            if (file) {
                data.featuredImage = file.$id;
                const dbPost = await dbService.createPost({
                    ...data,
                    userId: userData.$id,
                })
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-")
        }
        else {
            return ""
        }
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                const slug = slugTransform(value.title)
                setValue("slug", slug, { shouldValidate: true })
            }
        })
        return () => subscription.unsubscribe()
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-y-6 animate-fade-up">
            <div className="w-full lg:w-2/3 lg:pr-8">
                <div className="space-y-6">
                    <Input
                        label="Title"
                        placeholder="Give your post a compelling title…"
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Slug"
                        placeholder="post-url-slug"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
                </div>
            </div>
            <div className="w-full lg:w-1/3">
                <div className="bg-white border border-stone-200/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 space-y-5 lg:sticky lg:top-20 shadow-sm">
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest">Post Settings</p>

                    <Input
                        label="Featured Image"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {imagePreview && (
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                                <span>Card Preview</span>
                                <span className="text-[11px] text-stone-400">16:9 ratio</span>
                            </div>
                            <div className="w-full aspect-video overflow-hidden rounded-xl border border-stone-200/80 bg-stone-100 relative shadow-sm group">
                                <img
                                    src={imagePreview}
                                    alt={post?.title || "Featured Image Preview"}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                                {selectedImage?.[0] instanceof File && (
                                    <span className="absolute bottom-2 left-2 text-[10px] font-medium bg-emerald-600/90 text-white px-2 py-0.5 rounded shadow-sm backdrop-blur-sm">
                                        New Selection
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        {...register("status", { required: true })}
                    />
                    <Button
                        type="submit"
                        loading={isSubmitting}
                        loadingText={post ? "Updating..." : "Publishing..."}
                        bgColor={post ? "bg-emerald-600 hover:bg-emerald-700" : "bg-indigo-600 hover:bg-indigo-700"}
                        className="w-full py-3 text-sm"
                    >
                        {post ? (
                            <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Update Post
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Publish Post
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default PostForm