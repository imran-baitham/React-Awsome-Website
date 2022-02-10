import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Cointner/Blog";
import BlogsDaitals from "./Cointner/Home/BlogsDatials";
import Home from "./Cointner/Home/Home";
import NoPage from "./Cointner/NoPage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogsDaitals />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
