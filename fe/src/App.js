import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home'
import Cart from './pages/Cart'
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import Login from './pages/Login';
import './components/common.css'
import Signup from './pages/Signup';
import Contact from './pages/Contact'
import Checkout from './pages/Checkout';
import ProfilePage from './pages/Profile';
import Add from './pages/Add';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
   <>
     <Router>
     <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route exact path="/products/*" element={<Products/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/checkout" element={<Checkout/>}></Route>
        <Route exact path="/profile" element={<ProfilePage/>}></Route>
        <Route exact path="/addProduct" element={<Add/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    <ToastContainer />
   </>
  );
}

export default App;
