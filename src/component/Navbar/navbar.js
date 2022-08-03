import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { FaCcAmazonPay} from "react-icons/fa";
import { FiPhoneCall} from "react-icons/fi";
import { TbBuildingStore} from "react-icons/tb";
 import { MdLanguage} from "react-icons/md";
 import { FaSearch} from "react-icons/fa";
 import { AiOutlineShoppingCart} from "react-icons/ai";

 import './navbar.css'
// import Mobile from './../../Pages/Mobile';
import HotDeals from './../../Pages/HotDeals';
import Television from './../../Pages/Television';
import LargeAppliances from './../../Pages/LargeAppliances';
import { li } from 'react-router-dom';
const Navbar = () =>{

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
            {/* <div className='loweheader'> */}
              <ul className='men'>
         <li>  <img className="logo" href="/_nuxt/62a3c8e64210a6d99271bac592e93526.svg#i-logo"/></li> 
    {/* <p className='search-text'></p> */}
            {/* <form className='search'> */}
              {/* <FaSearch/> */}
 <li><input className='search' type='text' placeholder='Search Product'/></li>  
            {/* </form>  */}
  
     <li> <p className='login'>Login Or Register</p></li> 
    <li>   <p className='fs-1' >< AiOutlineShoppingCart/></p> </li>

</ul>
        
            </div>
        </div>
        </div>

        <div className='kk'>
          <ul>
    <li >HotDeals</li>
    <li >Mobiles&Tablets
    <ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Mobiles

</p>

<ul className="dropdown-menu">
  <li>Mobile Apple</li>
  <li>Mobile Samsung</li>
  <li>Mobile Xiaomi</li>
  <li>Mobile Oppo</li>
  <li>Mobile Realme</li>
  <li>Alcatel Phone</li>

  </ul></li>
  
  </ul>
  <ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Mobile Accessories

</p>

<ul className="dropdown-menu">
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
</li>
<li>Tablets</li>
<li>Feature Phones</li>
</ul>
            {/* </li></ul> */}
    </li>
    <li >Televisions</li>
    <li >Large Applicances</li>
    <li>Small Applicances</li>
    <li> Kitchen Applicances</li>
    <li>Electronics</li>
    <li >Labtop&PCS</li>
    <li >Health&Beauty</li>
    <li>Vehicles</li> 
  </ul>  </div> 





{/* 
<div className='base1'>

        <div className="dropdown">
          
          <ul className='base0'><li className='base'>
          <ul><li>
            
          
            <li>Mobiles& Tablets</li>
          <ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Mobiles

</p>

<ul className="dropdown-menu">
  <li>Mobile Apple</li>
  <li>Mobile Samsung</li>
  <li>Mobile Xiaomi</li>
  <li>Mobile Oppo</li>
  <li>Mobile Realme</li>
  <li>Alcatel Phone</li>

  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Mobile Accessories

</p>

<ul className="dropdown-menu">
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
</li>
<li>Tablets</li>
<li>Feature Phones</li>
</ul>
            </li></ul>









            
        <div className="dropdown">
          <ul><li>
            <li>Television</li>
          <ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

TVs

</p>

<ul className="dropdown-menu">
  <li>Samsung TV</li>
  <li>LG</li>
  <li>Toshiba TV</li>
  <li>Sony TV</li>
  <li>SARY TV</li>
  </ul></li>
<li>TV Accessories</li>
<li>Tablets</li>
<li>Feature Phones</li>
</ul>
            </li>
            </ul>

    


            <div className="dropdown">
          <ul><li>

            <li>Large Appliances</li>
           
          
            <ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Air Conditioners

</p>

<ul className="dropdown-menu">
  <li>Unionaire Air Conditioner</li>
  <li>Carrier Air Conditioner</li>
  <li> LG Air Conditioner</li>
  <li> Midea Air Conditioner</li>
  

  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Built in

</p>

<ul className="dropdown-menu">
        <li> Hobs</li>
        <li> Built in Ovens</li>
        <li> Hoods</li>
       
</ul>
</li>
</ul>
<ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Cookers


</p>

<ul className="dropdown-menu">
  <li> Fresh Cookers</li>
  <li> La Germania Cookers</li>
  <li> UnionAire Cookers</li>
  <li>Zanussi Cookers</li>
  

  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Refrigerators

</p>

<ul className="dropdown-menu">
        <li> Beko Refrigerators</li>
        <li> Sharp Refrigerators</li>
        <li> Unionaire Refrigerators</li>
       
</ul>
</li>
</ul>
<ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Freezers

</p>

<ul className="dropdown-menu">
  <li>Beko Freezers</li>
  <li>W.Alaska Freezers</li>
  <li> Fresh Freezers</li>
  <li>Toshiba Freezers</li>
  

  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Washing Machines


</p>

<ul className="dropdown-menu">
        <li>Zanussi washing Machines</li>
        <li> Fresh washing Machines</li>
        <li> Toshiba washing Machines</li>
        <li>LG washing Machines</li>
</ul>
</li>
</ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Dishwashers

</p>

<ul className="dropdown-menu">
        <li> Ariston Dishwashers</li>
        <li>Beko Dishwashers</li>
        <li> Bosch Dishwashers</li>
        <li>Tornado Dishwashers</li>
       
</ul>
</li>

</ul>
            <ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Water Heaters

</p>

<ul className="dropdown-menu">
        <li> Ariston Water Heaters</li>
        <li>Fresh Water Heaters</li>
        <li> Kiriazi Water Heaters</li>
        <li> Olympic Electric Water Heaters</li>
       
</ul>
</li>

</ul>
           
                 </li></ul>
                 <div className="dropdown">
          <ul><li>

            <li>Small Appliances</li>
           
          
            <ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Vacuum Cleaners

</p>

<ul className="dropdown-menu">
  <li> Carpet Vacuum Cleaners</li>
  <li>Drum Vacuum Cleaners</li>
   <li>Handheld Vacuum Cleaners</li>
   <li>Steam Vacuum Cleaners</li> 
   <li> Stick Vacuum Cleaners</li>
  

  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Scales

</p>

<ul className="dropdown-menu">
        <li> Mechanical Kitchen Scale</li>
        <li> Body Scale</li>
</ul>
</li>
</ul>
<ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Irons
</p>

<ul className="dropdown-menu">
  <li> Garment Steamers</li>
  <li> Steam Generator</li>
  <li>Dry Irons</li>
  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Fans & Ventilation

</p>

<ul className="dropdown-menu">
        <li> Ventilating Fan</li>
        <li> Fans</li>   
</ul>
</li>
</ul>
<ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Dispensers & Filters

</p>

<ul className="dropdown-menu">
  <li>Water Dispensers</li>
  <li>Water Filters</li>
  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Heaters 
</p>

<ul className="dropdown-menu">
      <li> Radiant Heaters</li>
      <li> Ceramic Heaters</li>
      <li>Quartz Heaters</li>
</ul>
</li>
</ul>
  
                 </li></ul>


                 <div className="dropdown">
          <ul><li>

            <li>Kitchen Appliances</li>
           
          
            <ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Food Preparation

</p>

<ul className="dropdown-menu">
  <li>Food Processors</li>
  <li>Blenders</li>
  <li> Choppers</li>
  <li>Mixers</li>
  

  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Meat Grinders

</p>

<ul className="dropdown-menu">
        <li> Bosch </li>
        <li> Tornado</li>
        <li> Kenwood</li>
       
</ul>
</li>
</ul>
<ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Microwaves & Ovens


</p>

<ul className="dropdown-menu">
  <li> Ovens</li>
  <li> Microwaves</li>
  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Food steamer & Rice cooker

</p>

<ul className="dropdown-menu">
        <li> Food steamer  </li>
        <li>Rice cooker</li>
       
</ul>
</li>
</ul>
<ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Kettles & Coffe Machines

</p>

<ul className="dropdown-menu">
  <li>Coffe Machines</li>
  <li>Kettles</li>
  

  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Toasters & Grills
</p>

<ul className="dropdown-menu">
        <li>Toasters </li>
        <li> Grills </li>
</ul>
</li>
</ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Fryers

</p>

<ul className="dropdown-menu">
        <li> Air Fryer</li>
        <li>Deep Fryer</li> 
</ul>
</li>

</ul>
            <ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Kitchen Supplies

</p>

<ul className="dropdown-menu">
        <li> Camping Goods </li>
<li> Hot PlateAriston </li>
       
</ul>
</li>
<li>Juicers</li>
<li>Sandwich & Waffle Makers</li>
</ul>

           
                 </li></ul>


                 <div className="dropdown">
          <ul><li>

            <li>Electronics</li>
           
          
            <ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Gaming

</p>

<ul className="dropdown-menu">
  <li>Game Consoles</li>
  <li>Joy Stick</li>
  <li> Gaming Accessories</li>
  <li>Video Gaming</li>
  <li>Arcade Gaming</li>
  

  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Home

</p>

<ul className="dropdown-menu">
        <li> Power Tools </li>
        <li> Battery</li>
        <li> Intercom</li>
        <li>Electrical Products</li>
<li>Clocks</li>
       
</ul>
</li>
</ul>
<ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Cameras


</p>

<ul className="dropdown-menu">
  <li> Canon</li>
  <li> Nikon</li>
  <li>Fujifilm</li>
  </ul></li>
  <li>Camera Accessories</li>
  <li>Telephones</li>
  <li>Security</li>
  </ul>
</li>
</ul>



<div className="dropdown">
          <ul><li>

            <li>Laptops & PCs</li>
           
          
            <ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Laptops

</p>

<ul className="dropdown-menu">
  <li>Lenovo</li>
  <li>Dell</li>
  <li>HP</li>
  <li>Asus</li>
  <li>ACER</li>
  <li>MSI</li>
  

  </ul></li>
  
  </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Computer Accessories

</p>

<ul className="dropdown-menu">
        <li> Keyboards </li>
        <li> UPS</li>
        <li> Monitors</li>
        <li>Speakers & Subwoofers</li>
<li>Mouses</li>
       
</ul>
</li>
</ul>
<ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Office


</p>

<ul className="dropdown-menu">
  <li> Printers</li>
  <li> Calculators</li>
  <li>Projectors</li>
  <li>Scanners</li>
  </ul></li>
  </ul>
  <ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Data Storage


</p>

<ul className="dropdown-menu">
  <li>USB Flash Drives</li>
  <li>Hard Drives </li>
  </ul></li>
  </ul>
  <ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Network Devices


</p>

<ul className="dropdown-menu">
  <li> Routers</li>
 
  </ul></li>
  
  
  <li>Desktops</li>
  <li>Bags & Cases</li>
  </ul>
</li>
</ul>
<div className="dropdown">
          <ul><li>

<li>Health & Beauty</li>
           
          
           <ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Shavers

</p>

<ul className="dropdown-menu">
 <li>For Women</li>
 <li>For Men</li>

 </ul></li>
 
 </ul>
<ul><li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Hair Styling Equipment

</p>

<ul className="dropdown-menu">
       <li> Hair Dryers </li>
       <li> Hair Stylers</li>
       <li> Hait Straightensrs</li>
      
      
</ul>
</li>
</ul>
<ul>  <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">

Sports


</p>

<ul className="dropdown-menu">
 <li>Treadmill</li>
 <li> Bike & Bicycles</li>
 <li>Elliptical</li>
 <li>Multi Gym</li>
 <li>Sport Equipment</li>
 <li>Air Bike</li>
 </ul></li>
 
 <li>Body Massagers</li>
 

 
 <li>Medical Equipment</li>
 <li>Skin Care</li>
 </ul></li></ul>
 
<div className="dropdown">
          <ul><li>

<li> Vehicles</li>
           
          </li>
           <ul> <li>Golf Cart</li>
           <li>Pickup Van</li>
           <li>Scooter</li>
           <li>TUK-TUK</li>
             <li>
<p className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Car Accessories

</p>

<ul className="dropdown-menu">
 <li>Car Air Compressor</li>
<li>Car Cleaning Tools</li>
<li>Car Charger</li>
<li>Car LED</li>
 </ul></li>
 
 </ul>

 
 </ul>
 </div>
 
 
 
 
 
 
 </div>



</div>

                 

</div>
                 </div>

                 </div>

</div>
</div>
</li></ul>
</div> */}
{/* </div> */}
    </>
  )
}
export default Navbar; 