import './App.css';
import Navbar from './page/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './page/Home/Home';
import Blog from './page/Home/Blog';
import Login from './page/Login/Login';
import Portfolio from './page/Home/Portfolio';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
