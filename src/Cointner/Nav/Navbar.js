import "./nav.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="div__one">
        <Link to="/Home">
          <a href="#">North Aims</a>
        </Link>
      </div>
      <div className="div__two">
        <Link to="/Home">
          <a href="#">Home</a>
        </Link>
        <Link to="/Blog">
          <a href="#">AddBlog</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
