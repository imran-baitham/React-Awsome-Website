import "./Blogs.css";
import { Link } from "react-router-dom";
import Navbar from "./Nav/Navbar";

const NoPage = () => {
  return (
    <>
      <Navbar />
      <div className="soory">
        <div className="soory__center">
          <h2>Soory</h2>
          <p>That page Cannot be found</p>
          <Link to="/Home"><span>Back to tha homepage...</span></Link>
        </div>
      </div>
    </>
  );
};
export default NoPage;
