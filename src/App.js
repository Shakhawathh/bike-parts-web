import './App.css';
import Navbar from './page/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './page/Home/Home';
import Blog from './page/Home/Blog';
import Login from './page/Login/Login';
import Dashboard from './page/Dashboard/Dashboard';
import Purchase from './page/Purchase/Purchase';
import NotFound from './page/NotFound/NotFound';
import SignUp from './page/Login/SignUp';
import RequireAuth from './page/Login/RequireAuth';
import Footer from './page/Home/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './page/Dashboard/MyOrders';
import AddReview from './page/Dashboard/AddReview';
import MyProfile from './page/Dashboard/MyProfile';
import ManageProducts from './page/Dashboard/ManageProducts';
import MakeAdmin from './page/Dashboard/MakeAdmin';
import AddProduct from './page/Dashboard/AddProduct';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        
        <Route path="/" element={<Home />} /> 
        <Route path="/Blog" element={<Blog />} />
        <Route path="Dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='AddReview' element={<AddReview></AddReview>}></Route>
          <Route path='MyProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='ManageProducts' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='MakeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='AddProduct' element={<AddProduct></AddProduct>}></Route>

        </Route>
        <Route path="/PartsCard/:PartsCardId" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
