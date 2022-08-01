import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Mobiles_Tablets from './Mobiles&Tablets/Mobiles_Tablets';
import Televisions from './Televisions/Televisions';

function App() {
  return (
    <div className="countainer_fluid">
     <Mobiles_Tablets/>
     <Televisions/>
    </div>
  );
}

export default App;
