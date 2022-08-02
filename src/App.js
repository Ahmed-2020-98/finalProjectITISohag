import './App.css';
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
    </div>
  );
}

export default App;
