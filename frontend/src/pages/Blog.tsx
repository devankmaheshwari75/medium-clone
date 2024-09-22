import { AppBar } from "../components/AppBar"
import { CardComponent } from "../components/CardComponent"
import { useBlogs } from "../hooks/useBlogs";

export const Blog = () => {

  const {loading , blogs}  = useBlogs();

  if(loading){
    return <div>
      loading
    </div>
  }

  return (

    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="flex  justify-cente max-w-xl flex-col">



          {
            blogs.map((blog)=>{
              return <CardComponent  title={blog.title} content={blog.content} authorName={blog.author.name || "Anonymous"} publishedDate={blog.publishedDate}  />
            })
          }
          
          
         

        </div>

      </div>

    </div>

  )
}



