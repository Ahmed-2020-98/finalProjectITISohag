import './App.css';
<<<<<<< HEAD
import Login from './Login/Login';
import Register from './Register/Register';
import Footer from './Footer/Footer';
import PayInstallment from './PayInstallment/PayInstallment';
import StoreLocator from './StoreLocator/StoreLocator';
import Header from './Header2/Header';

function App() {
  return (
    <div>
      <Header/>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <PayInstallment/> */}
      <StoreLocator/>
      <Footer/>
=======
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Mobiles_Tablets from './Mobiles&Tablets/Mobiles_Tablets';
import Televisions from './Televisions/Televisions';
import Large_Appliances from './Large Appliances/Large_Appliances';
import Small_Appliances from './Small Appliances/Small_Appliances';
function App() {
  return (
    <div className="countainer_fluid">
     <Mobiles_Tablets/>
     <Televisions/>
     <Large_Appliances/>
     <Small_Appliances/>
>>>>>>> MinaFarid
    </div>
  );
}

export default App;
