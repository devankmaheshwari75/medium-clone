import { AppBar } from "../components/AppBar";
import { CardComponent } from "../components/CardComponent";
import { useBlogs } from "../hooks/useBlogs";
import { Link } from "react-router-dom";
import { Skeleton } from "../components/Skeleton";
import { searchQuery } from "../store/atoms/searchquery";
import { useRecoilValue } from "recoil";

export const Blog = () => {
  const { loading, blogs } = useBlogs();
  const query = useRecoilValue(searchQuery); // Get the current search query

  // Filter blogs based on the search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title?.toLowerCase().includes(query?.toLowerCase()) ||
    blog.content?.toLowerCase().includes(query?.toLowerCase()) ||
    blog.author?.name?.toLowerCase().includes(query?.toLowerCase())
  );
  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="">
          <div className="mx-auto">
            <Skeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center py-4">
        <div className="flex justify-center max-w-xl flex-col">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id}>
                <CardComponent
                  title={blog.title}
                  content={blog.content}
                  authorName={blog.author.name || "Anonymous"}
                  publishedDate={blog.publishedDate}
                />
              </Link>
            ))
          ) : (
            <p>No blogs found for your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};
