import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

 import HotDeals from './Pages/HotDeals';
import Navbar from './component/Navbar/navbar';
import Mobile from './Pages/Mobile/Mobile';
import Television from './Pages/Television';
import LargeAppliances from './Pages/LargeAppliances';
import SmallAppliances from './Pages/SmallAppliances';
import KitchenAppliances from './Pages/KitchenAppliances';
import Electronics from './Pages/Electronics';
import Laptops from './Pages/Laptops';
import Health from './Pages/Health';
import Vehicles from './Pages/Vehicles';
import Nav from './component/Navbar/nav';

function App() {
  return (
<Router>
  <Routes>
 

    
  <Route path='/' element={<Nav/>}/>
  {/* <Route path='/' element={<Navbar/>}/> */}
    {/* <Route path='/' element={<HotDeals/>}/> */}
    {/* <Route path='/' element={<Mobile/>}/> */}
     {/* <Route path='/' element={<Television/>}/>  */}
      {/* <Route path='/' element={<LargeAppliances/>}/> */}
      {/* <Route path='/' element={<SmallAppliances/>}/> */}
      {/* <Route path='/' element={<KitchenAppliances/>}/> */}
      {/* <Route path='/' element={<Electronics/>}/> */}
      {/* <Route path='/' element={<Laptops/>}/> */}
      {/* <Route path='/' element={<Health/>}/> */}
      {/* <Route path='/' element={< Vehicles/>}/> */}
   
  </Routes>
</Router>

  )
}
 
export default App;
