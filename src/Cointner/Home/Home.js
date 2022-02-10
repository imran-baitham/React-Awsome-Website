import "./Home.css";
import Navbar from "../Nav/Navbar";
import ChildParent from "./BlogsChild/Child";
import UseFetch from "./Api/UseFetch";

const Home = () => {
  const {
    data: blog,
    isLoading,
    error,
  } = UseFetch("http://localhost:4000/data");

  return (
    <div className="home">
      <Navbar />
      <div className="blog__style">
        {isLoading && <h1 className="loader"></h1>}
        {error && <h1>{error}</h1>}
        {blog && <ChildParent blog={blog} title="All Blog" />}
      </div>
    </div>
  );
};
export default Home;
