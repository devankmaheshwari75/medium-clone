import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar"
import { useParams } from 'react-router-dom';
import { useBlogs } from "../hooks/useBlogs";
import { format } from 'date-fns';

import { Skeleton } from "../components/Skeleton";

interface Blog {
    id: string,
    title: string,
    content: string,
    publishedDate: Date,
    author: {
        name: string
    }
}

export const FullBlog = () => {
    const { id } = useParams();
    const { blogs } = useBlogs();

    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        const selectedBlog = blogs.find((item) => item.id === id);
        setBlog(selectedBlog);
    }, [id, blogs]);

    if (!blog) {
        return (

            <>

                <AppBar />

                <div >
                <Skeleton/>

                </div>


              

            </>

        )
    }

    const formattedDate = format(blog.publishedDate, 'dd MMMM yyyy');

    return (
        <>
            <AppBar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 h-screen w-full px-10 pt-12 max-w-screen-xl">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">{blog.title}</div>
                        <div className="py-5 text-gray-500">{formattedDate}</div>
                        <div className="pt-3 h-screen justified">{blog.content}</div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex justify-center gap-2">
                            <div className="flex flex-col justify-center">
                                <Avatar authorName={blog.author.name || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-md pt-2 text-gray-500">Author</div>
                                <div className="text-3xl font-bold">{blog.author.name || "Anonymous"}</div>
                                <div className="pt-2 text-sm text-slate-500">
                                    In a world of noise, let your words be the melody.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Avatar({ authorName }: { authorName: string }) {
    const displayName = authorName && authorName.length > 0 ? authorName[0] : "D";
    return (
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{displayName}</span>
        </div>
    );
}