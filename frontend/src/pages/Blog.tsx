import { AppBar } from "../components/AppBar"
import { CardComponent } from "../components/CardComponent"
import { useBlogs } from "../hooks/useBlogs";
import { Link } from "react-router-dom"
import { Skeleton } from "../components/Skeleton";

export const Blog = () => {

  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>

      <AppBar />

      <div >

        <Skeleton />

      </div>

    </div>
  }

  return (

    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="flex  justify-cente max-w-xl flex-col">



          {
            blogs.map((blog) => {
              return <Link to={`/blog/${blog.id}`} key={blog.id}>
                <CardComponent
                  title={blog.title}
                  content={blog.content}
                  authorName={blog.author.name || "Anonymous"}
                  publishedDate={blog.publishedDate}
                />
              </Link>
            })
          }




        </div>

      </div>

    </div>

  )
}



