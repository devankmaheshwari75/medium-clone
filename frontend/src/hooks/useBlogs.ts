import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";



interface Blog{
    id: string,
    title: string,
    content: string,
    publishedDate :Date
    author: {
        name : string
    }
}
export const useBlogs = () => {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {

        const getBlogs = async () => {
            try {

                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk` , {
                    headers :{
                        "Authorization" : "Bearer" + " " +localStorage.getItem("token")

                    }
                });

                console.log(response);
                



                setBlogs(response.data.posts);
                setLoading(false);


            }

            catch (e) {
                console.log(e);
            }

        }

        getBlogs();

   




    }, [])

    return {
        loading,
        blogs
    }
}