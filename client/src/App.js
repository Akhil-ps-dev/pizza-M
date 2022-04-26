import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom'
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Adminscreen from './screens/Adminscreen';
import Userlist from './screens/Userlist';
import Orderslist from './screens/Orderslist';
import Addpizza from './screens/Addpizza';
import Pizzaslist from './screens/Pizzaslist';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/admin" element={<Adminscreen />} />
          <Route path="/admin/userslist"  element={<Userlist/>} />
          <Route path="/admin/orderslist"  element={<Orderslist/>} />
          <Route path="/admin/foodlist"  element={<Pizzaslist/>} />
          <Route path="/admin/addfood"  element={<Addpizza/>} />




        </Routes>

      </Router>



    </div>
  );
}

export default App;
