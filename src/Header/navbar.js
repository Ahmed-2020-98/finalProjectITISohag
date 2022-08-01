import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import { FaCcAmazonPay} from "react-icons/fa";
import { FiPhoneCall} from "react-icons/fi";
import { TbBuildingStore} from "react-icons/tb";
 import { MdLanguage} from "react-icons/md";
 import { FaSearch} from "react-icons/fa";
 import { AiOutlineShoppingCart} from "react-icons/ai";
//  import raya from '../../../';
//  import {Link} from 'react-router-dom';
//  import { MdLanguage} from "react-icons/md";
 
 // import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';


 import './navbar.css'
import Mobile from './../../Pages/Mobile';
import HotDeals from './../../Pages/HotDeals';

const Navbar = () =>{
    return(
    <>
        <div className="secnavbar">
            <div className='container-fluid'>
    
          {/* ///////////////////// */}
             <div className="navbar navbar-expand-md fixed-top">   
  <span>The Easiest and Fastest instalment System</span> 
<ul className='nav-menu'>

     <li><a href='#'><FaCcAmazonPay/>  Pay Installement</a></li>
     <li><a href='#'> <FiPhoneCall/>  Call 19900</a></li>
     <li><a href='#'><TbBuildingStore/>  Store Lacator</a></li>
     <li><a href='#'> <MdLanguage/>  العربية</a></li>
 </ul>
 </div>
 <hr/>
 <div>
  <ul className='men'>
    
    <li> <p className='search-text'></p>
            <form className='search'>
 <input type='text' placeholder='Search Product'/><button type="submit"> <FaSearch/></button>     
            </form> </li>
  
       <li> <p className='login'>Login Or Register</p></li> 
       <li ><p className='zz' >< AiOutlineShoppingCart/></p></li> 
</ul> 
 {/* //////////////////////////////////////////// */}
 </div></div>
 <br/>
        <hr/>
       

{/*   
  
  <div className='container-fluid'> 
    <div className="navbar-header">
      <ul className='men'>
    
    <li> <p className='search-text'></p>
            <form className='search'>
 <input type='text' placeholder='Search Product'/><button type="submit"> <FaSearch/></button>     
            </form> </li>
  
       <li> <p className='login'>Login Or Register</p></li> 
       <li ><p className='zz' >< AiOutlineShoppingCart/></p></li> 
</ul></div>
 </div>
</div> */}

 
 {/* <div className='container-fluid'>
 <div className='navbar-link'>
 <ul className='nav-link'>
 <li><a href='#'>HotDeals</a></li>
 <li><a href='#'>Mobiles&Tablets</a></li>
   <li><a href='#'>Televisions</a></li>
    <li><a href='#'>Large Applicances</a></li>
    <li><a href='#'>Small Applicances</a></li>
    <li><a href='#'>Kitchen Applicances</a></li>
   <li><a href='#'>Electronics</a></li>
    <li><a href='#'>Labtop&PCS</a></li>
    <li><a href='#'>Health&Beauty</a></li>
   <li><a href='#'>Vehicles</a></li>

</ul> */}
{/* <div>
      <select>
        <dropdown value="fruit">Fruit</dropdown>
        {/* <option value="vegetable">Vegetable</option>
         <option value="meat">Meat</option> 
      </select>
    </div> */}
  
   {/* <ul name="HotDeals"></ul>
    <ul name="Mobiles&Tablets"/>  */}
    {/* <Link name="Televisions"/>
    <Link name="Large Applicances"/>
    <Link name="Small Applicances"/>
    <Link name="Kitchen Applicances"/>
    <Link name="Electronics"/>
    <Link name="Labtop&PCS"/>
    <Link name="Health&Beauty"/>
    <Link name="Vehicles"/> */}
    {/* </div> */}

 
      



</div>
     </>
    )
}

export default Navbar; 