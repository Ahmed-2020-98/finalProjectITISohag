import React from 'react';
import './Mobile.css'
export default function Mobile() {
  return (
    <>
  



    <div className='col-2'>
    <h2>Filter by</h2>

<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
price
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='range' min={0} max={20000} />
       <ul  className='aa'><li> <p >0</p>   </li>  
      <li>   <p >200000</p></li> </ul> 
    

</div>
         <hr/>
        <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Internal Memory GB
  </a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>4GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>8GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>16GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>32GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>64GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>128GB<br/>
                 <a href='#'>Show More Internal<br/> Memory GB</a>
                </form>
</div>
        <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Memory RAM In GB
  </a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>1GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1.5GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>2GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>3GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>4GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>6GB<br/>
                 <a href='#'>Show More </a>
                </form>
</div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Game Platform
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox'id="x" name="x" value="x"/>PlayStation 5<br/>
               
</div>
<hr/>
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Charger Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>Adapter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Battery Charger<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Car Charger<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Wireless Charger<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Dock Charger<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Travel Charger<br/>
                 <a href='#'>Show More Charger Type</a>
                </form>

</div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Cable Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>Charger Cable<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Data Cable<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>AUX Cable<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>HDMI Cable<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>UTP Cable<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Connection Cable<br/>
                 <a href='#'>Show More Cable Type</a>
                </form>
</div>
<hr/>
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Connectivity
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox'id="x" name="x" value="x"/>Wired<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Wireless<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Wired&Wireless<br/>
               
</div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  HeadPhones & Headsets Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox'id="x" name="x" value="x"/>In-Ear<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>On-Ear<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Over-Ear<br/>
                
</div>
<hr/>
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Speakers Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox'id="x" name="x" value="x"/>BlueTooth Speakers<br/>
               
</div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Memory Cards Capacity
  </a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>4GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>8GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>16GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>32GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>64GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>128GB<br/>
                 <a href='#'>Show More<br/> Memory Cards Capacity</a>
                </form>
</div>
<hr/>
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Power Bank Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox'id="x" name="x" value="x"/>Wired Power Bank<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Wireless Power Bank<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Wired & Wireless Power Bank<br/>
                 
</div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Screen Protector Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>Glass Screen Protector<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Nano Screen Protector<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Privacy Screen Protector<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Regular Screen Protector<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Screen Front & Back<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>3D Screen Protector<br/>
                 <a href='#'>Show More Screen <br/> Protector Type</a>
                </form>
</div>
<hr/>

<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Shop By Category
  </a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>Mobile & Tablets<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Computers & Laptops<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Receivers & TVs Accessories<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Speakers & Home Theaters<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Mobile Accessories<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Accessories<br/>
                 <a href='#'>Show More Shop<br/> By Category</a>
                </form>
</div>
          <hr/>
          
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Brand
  </a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>ACME<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Zeblaze<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Zippo<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Yunteng<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Yoobao<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Yesido<br/>
                 <a href='#'>Show More Brands</a>
            </form>
</div>
          <hr/>
          
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Deal
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox'id="x" name="x" value="x"/>0<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1<br/>
               
</div>
          <hr/>
          
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Screen Size
  </a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>7 - 8.9 Inches<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>9 Inches & Above<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Below 3.9 Inches<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>4 - 5 Inches<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>5.1 - 5.4 Inches<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>5.5 - 5.9 Inches<br/>
                 <a href='#'>Show More Screen Size</a>
            </form>
</div>
          <hr/>
          
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Rear Camera
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Single<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Dual<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Triple<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Quad<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Not Avaliable<br/>
               
</div>
          <hr/>
          
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Product Color
  </a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>Black<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Brown<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Burgundy<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Champagne<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Gold<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Grey<br/>
                 <a href='#'>Show More Color</a>
                 </form>
</div>
         </div>
         
          

        
          
      
      </>
  )
}


