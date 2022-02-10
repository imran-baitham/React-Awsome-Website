import "./Blogs.css";
import { useState } from "react";
import Navbar from "./Nav/Navbar";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setPending(true);
    setTimeout(() => {
      fetch("http://localhost:4000/data/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        setPending(false);
        window.history.back("/Home");
      });

      setTitle("");
      setBody("");
      setAuthor("");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            rows="10"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          {!pending && <button>Add Blog</button>}
          {pending && <button disabled>Adding blog...</button>}
        </form>
      </div>
    </>
  );
};

export default Blog;
