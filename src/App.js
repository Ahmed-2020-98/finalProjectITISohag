import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import Footer from './Footer/Footer';
import PayInstallment from './PayInstallment/PayInstallment';
import Header from './Header2/Header';

function App() {
  return (
    <div>
      <Header/>
      <Login/>
      <Register/>
      <PayInstallment/>
      <Footer/>
    </div>
  );
}

export default App;
