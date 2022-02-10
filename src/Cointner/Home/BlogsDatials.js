import "./BlogDatils.css";
import { useParams } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import UseFetch from "./Api/UseFetch";

const BlogsDaitals = () => {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = UseFetch(`http://localhost:4000/data/` + id);

  const dltPost = (e) => {
    fetch(`http://localhost:4000/data/` + id, {
      method: "DELETE",
    }).then((x) => {
      window.history.back("./Home")
    });
  };

  return (
    <>
      <Navbar />
      <div className="blog__div">
        <div className="blog-details">
          {isLoading && <div className="loader"></div>}
          {error && <h1>{error}</h1>}
          {blog && (
            <article>
              <h1>{blog.title}</h1>
              <p>
                Written by <b>{blog.author}</b>
              </p>
              <div>
                <p>{blog.body}</p>
              </div>
              <div>
                <button onClick={() => dltPost()}>Delete</button>
              </div>
            </article>
          )}
        </div>
      </div>
    </>
  );
};
export default BlogsDaitals;
