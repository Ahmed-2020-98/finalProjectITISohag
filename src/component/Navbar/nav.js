import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { FaCcAmazonPay} from "react-icons/fa";
import { FiPhoneCall} from "react-icons/fi";
import { TbBuildingStore} from "react-icons/tb";
 import { MdLanguage} from "react-icons/md";
 import { FaSearch} from "react-icons/fa";
 import { AiOutlineShoppingCart} from "react-icons/ai";
 import {MdLocalOffer} from "react-icons/md";
 import{BsFillArrowRightSquareFill}from "react-icons/bs";
 
//  import './navbar.css'
// import Mobile from './../../Pages/Mobile';
import HotDeals from './../../Pages/HotDeals';
import Television from './../../Pages/Television';
import LargeAppliances from './../../Pages/LargeAppliances';
import './nav.css'

const Nav = () =>{

  return (
    <>
     <div className='navbar'>
        <div className='container'>
            <div className='upperheader'>
                <div className='oneLeft'>
                    <p>The Easiest and Fastest instalment system.</p>
               </div><hr/>
                <div className='oneRight'>
                    <ul>
                        <li><a href='#'><FaCcAmazonPay/>  Pay Installment</a></li>
                        <li><a href='#'> <FiPhoneCall/>  Call 19900</a></li>
                        <li><a href='#'><TbBuildingStore/>  Store Locator</a></li>
                        <li><a href='#'><MdLanguage/>  العربية</a></li>
                    </ul>   <hr/> 
           </div>
            </div>
            <div className="navbar-header">
           
              <div className='men'>
                {/* <div className='row'> */}
                {/*  className='login' */}
                {/* <div className='col-sm-12 '> */}
          <img className="logo inline my-2 " src='iimg/rr.jpeg'/>
          <div className='ss'>
   <form className="form-inline my-2 my-lg-0">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" class="form-control" placeholder="Search Product" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
          </div>
  <div className='ll'>
  <h5>Login Or Register</h5></div>
  <div className='dd'>
     <p className='fs-2' >< AiOutlineShoppingCart color='white' /></p> 
     </div></div>
   </div>
 </div>

       
            </div>
       




 
 
 

        <div class="navbarr">
  <a href="#home"><MdLocalOffer color='red'/>HotDeals</a>
  <div class="subnav">
    <button class="subnavbtn">Mobiles&Tablets<i class="fa fa-caret-down"></i></button>
    
    <div class=" subnav-content">
      <div className='row'>
      <div className='col-8'>
      <a href="#company"><h4>Mobiles</h4>
     <ul className='jj'>
     <li>Mobile Apple</li>
  <li>Mobile Samsung</li>
  <li>Mobile Xiaomi</li>
  <li>Mobile Oppo</li>
  <li>Mobile Realme</li>
  <li>Alcatel Phone</li>
    </ul>
  </a>
  <a href="#team"><h4>Mobile Accessories</h4>
  <ul className='jj'>
        <li>Power Banks</li>
        <li> Chargers & Adapters</li>
        <li>Charging Cables</li>
        <li> Headphones & Headsets</li>
        <li>Screen Protectors</li>
        <li> Speakers</li>
        <li>Smart Watches Accessories</li>
        <li> Smart Watches</li>
        <li>Memory Cards</li>
        <li> Mobile Cases & Covers</li>
        </ul>
  </a>
  <a href="#caree"> <h4>Tablets</h4></a>
  <a href="#cares"><h4>Feature Phones</h4></a></div>
  <div className='col-4'>
   <div className='po'>
    <h5>Great Deals</h5>
    <p>Meet Your deals and Enjoy cash and installment offers with best deals</p>
  </div>
    </div></div>
  
  <div className='row'>
    <div className='col-6'>
   
      <img  src='iimg/oppo.webp'/>
      <img  src='iimg/apple.webp'/>
      <img  src='iimg/5.webp'/>
      <img  src='iimg/sam.webp'/>

   </div>
  </div>
  <div>
    <ul className='zx'>
    <li className='fs-1'><BsFillArrowRightSquareFill color='blue'/></li>
    <li><h3 className="x">Shop All Mobiles & Tablets</h3></li>
    </ul>
  </div>
  </div> 
  </div>
  <div class="subnav">
    <button class="subnavbtn">Television <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
    <div className='row'>
      <div className='col-8'>
      <a href="#bring"><h4>TVs</h4>
      <ul className='jj'>
      <li>Samsung TV</li>
  <li>LG</li>
  <li>Toshiba TV</li>
  <li>Sony TV</li>
  <li>SARY TV</li>
      </ul>
      </a>
      <a href="#deliver"><h4>TV Accessories</h4></a>
      <a href="#package"><h4>Receivers</h4></a>
      <a href="#express"><h4>Home Theaters</h4></a>
      </div>
      <div className='col-4'>
   <div className='ko'>
    <h5>Great Deals</h5>
    <p>Save up to 30% off and Enjoy best TV<br/> offers and qualities</p>
  </div>
  </div>
  </div>
  <div className='row'>
    <div className='col-6'>
   
      <img  src='iimg/lg.webp'/>
      <img  src='iimg/tor.webp'/>
      <img  src='iimg/toa.webp'/>
      <img  src='iimg/sam.webp'/>

   </div>
  </div>
  <div>
    <ul className='zx'>
    <li className='fs-1'><BsFillArrowRightSquareFill color='blue'/></li>
    <li><h3 className="x">Shop All TVS</h3></li>
    </ul>
  </div>
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn">Large Appliances <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
    <div className='row'>
      <div className='col-8'>
      <a href="#link1"><h4>Air Conditioners</h4>
      <ul className='jj'>
      <li>Unionaire Air Conditioner</li>
  <li>Carrier Air Conditioner</li>
  <li> LG Air Conditioner</li>
  <li> Midea Air Conditioner</li>
        </ul></a>
      <a href="#link2"><h4>Cookers</h4>
      <ul className='jj'>
      <li> Fresh Cookers</li>
  <li> La Germania Cookers</li>
  <li> UnionAire Cookers</li>
  <li>Zanussi Cookers</li>
      </ul>
      </a>
      <a href="#link3"><h4>Freezers</h4>
      <ul className='jj'>
      <li>Beko Freezers</li>
  <li>W.Alaska Freezers</li>
  <li> Fresh Freezers</li>
  <li>Toshiba Freezers</li>
      </ul>
      </a>
      <a href="#link4"><h4>Washing Machines</h4>
      <ul className='jj'>
      <li>Zanussi washing Machines</li>
        <li> Fresh washing Machines</li>
        <li> Toshiba washing Machines</li>
        <li>LG washing Machines</li>
      </ul>
      </a>
      </div>
      <div className='col-4'>
   <div className='to'>
    <h5>Great Deals</h5>
    <p>Enjoy Installment up to 36 months</p>
  </div>
  </div>
  </div>
  <div>
    <ul className='zx'>
    <li className='fs-1'><BsFillArrowRightSquareFill color='blue'/></li>
    <li><h3 className="x">Shop All Large Appliances</h3></li>
    </ul>
  </div>
  </div>
    
  </div>
  <div class="subnav">
    <button class="subnavbtn">Small Appliances <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
    <div className='row'>
      <div className='col-8'>
      <a href="#link1"><h4>Vacuum Cleaners</h4>
      <ul className='jj'>
      <li> Carpet Vacuum Cleaners</li>
  <li>Drum Vacuum Cleaners</li>
   <li>Handheld Vacuum Cleaners</li>
   <li>Steam Vacuum Cleaners</li> 
   <li> Stick Vacuum Cleaners</li>
  
        </ul></a>
      <a href="#link2"><h4>Irons</h4>
      <ul className='jj'>
      <li> Garment Steamers</li>
  <li> Steam Generator</li>
  <li>Dry Irons</li>
      </ul>
      </a>
      <a href="#link3"><h4>Fans & Ventilation</h4>
      <ul className='jj'>
      <li> Ventilating Fan</li>
        <li> Fans</li> 
      </ul>
      </a>

<a href="#link4"><h4>Heaters </h4>
      <ul className='jj'>
      <li> Radiant Heaters</li>
      <li> Ceramic Heaters</li>
      <li>Quartz Heaters</li>

      </ul>
      </a>   </div>
       <div className='col-4'>
   <div className='so'>
    <h5>Great Deals</h5>
    <p>Expect to see exclusive Offers with<br/> up to 36 monthly installment</p>

  </div>
  </div>
  </div>
  <div>
    <ul className='zx'>
    <li className='fs-1'><BsFillArrowRightSquareFill color='blue'/></li>
    <li><h3 className="x">Shop All Small Appliances</h3></li>
    </ul>
  </div>
      </div></div>
      <a href="#home"> Kitchen Applicances</a>
      <a href="#home">  Electronics</a>
      <a href="#home"> Labtop&PCS</a>
      <a href="#home"> Health&Beauty</a>
      <a href="#home"> Vehicles</a>
    
   </div>
   
    

    
  





        </>
  )
}
export default Nav; 