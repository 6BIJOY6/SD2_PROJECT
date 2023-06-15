import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import PageNOtFound from './pages/PageNOtFound';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import ForgotPassword from './pages/ForgotPassword';
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import Users from './pages/admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/admin/Products';
import UpdateProduct from './pages/admin/UpdateProduct';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';
import AdminOrders from './pages/admin/AdminOrders';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
  <>
  
    <Routes>
      <Route path="/" element ={<HomePage />}/>
      <Route path="/categories" element ={<Categories />}/>
      <Route path="/category/:slug" element ={<CategoryProduct />}/>
      <Route path="/cart" element ={<CartPage />}/>
      <Route path="/category/:slug" element ={<CategoryProduct />}/>
      <Route path="/product/:slug" element ={<ProductDetails/>}/>
      


      <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />

          <Route path="user/profile" element={<Profile />} />

      </Route>

      <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard/>} />
          <Route path="admin/create-category" element={<CreateCategory/>} />
          <Route path="admin/create-product" element={<CreateProduct/>} />
          <Route path="admin/product/:slug" element={<UpdateProduct/>} />
          <Route path="admin/products" element={<Products/>} />
          <Route path="admin/orders" element={<AdminOrders/>} />
          <Route path="admin/users" element={<Users/>} />
          

          <Route path="admin/users" element={<Users/>} />

        </Route>
        <Route path="/contact" element ={<Contact />}/>
        <Route path="/forgotpassword" element ={<ForgotPassword/>}/>
      <Route path="*" element ={<PageNOtFound />}/>
      <Route path="/signup" element ={<SignUp />}/>
      <Route path="/login" element ={<LogIn />}/>
      
    </Routes>

  </>
  );
}

export default App;
