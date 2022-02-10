import "./Child.css";
import { Link } from "react-router-dom";

const ChildParent = ({ blog, title }) => {
  return (
    <>
      <h1 className="heading__blog">{title}</h1>;
      {blog.map((data) => {
        return (
          <div className="Main__div">
            <div className="inner__div" key={data.id}>
              <Link to={`/blogs/${data.id}`}>
                <h2 className="heading_title">{data.title}</h2>
                <p className="blog__data">Writen by {data.author}</p>
              </Link>
              <div className="button__div"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ChildParent;
