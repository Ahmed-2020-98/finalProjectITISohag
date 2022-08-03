import React from 'react'

export default function Television() {
  return (
    <>
    <div className='col-3'>
    <h2>Filter by</h2>
    <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  price
  </a>

</p>
<div class="collapse" id="collapseExample">
  <div>
           <input type='range' min={0} max={30000} />
          <p>0</p>       
          <p>200000</p>
  </div>
  </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Smart Connection
  </a>

</p>
<div class="collapse" id="collapseExample">
          <div >
                <input type='checkbox'id="x" name="x" value="x"/>Yes<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>No<br/>
                 
                 </div>
                 </div>
               <hr/> 
                 <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Receiver Type
</a>      
 </p>
<div className="collapse" id="collapseExample">
  <div >
                 
                <input type='checkbox'id="x" name="x" value="x"/>Standard Receiver<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Mini Receiver<br/>
    </div>
    </div><hr/>
    <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Type</a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>       
                 <input type='checkbox'id="x" name="x" value="x"/>HDMI Cable<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Wall Mount<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Remote Control<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Multimedia Player<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>LNB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Dish<br/>
                 <a href='#'>Show More Type</a>
                </form> </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Cable Type
  </a>

</p>
<div className="collapse" id="collapseExample">
               
                <input type='checkbox'id="x" name="x" value="x"/>HDMI Cable<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Connection Cables<br/>
                 <input type='checkbox'id="x" name="x" value="x"/>Audio Cable<br/>
                </div>
                 <hr/>
                 <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Speakers Type
  </a>

</p>
<div className="collapse" id="collapseExample">
                 
                <input type='checkbox'id="x" name="x" value="x"/>Bluetooth Speakers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Computer Speakers<br/>
                 <input type='checkbox'id="x" name="x" value="x"/>Subwoofers<br/>
                 <input type='checkbox'id="x" name="x" value="x"/>Home Theaters<br/>
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
Screen Technology
  </a>

</p>
<div className="collapse" id="collapseExample">
                
                <input type='checkbox'id="x" name="x" value="x"/>LCD<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>LED<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>OLED<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>QLED<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>DLED<br/>
                </div>
                 <hr/>
                 <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
TVs Screen Size Filtration
  </a>

</p>
<div className="collapse" id="collapseExample">
                <input type='checkbox'id="x" name="x" value="x"/>Less Than 32 Inch<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>32 - 42 Inch<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>43 - 60 Inch<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>60 - 80 Inch<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>More Than 80 Inch<br/>
                 </div>
                 <hr/>
                 <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Shop By Category
  </a>

</p>
<div className="collapse" id="collapseExample">
                
                 <input type='checkbox'id="x" name="x" value="x"/>Television<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Receivers & TVs Accessories<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Speakers & Home Theaters<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Mobile Accessories<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Accessories<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Computer & Laptop Accessories<br/>
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
                <input type='checkbox' id="x" name="x" value="x"/>Havit<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Hikvision<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Huayu<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>iTel<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Joyroom<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Mecool<br/>
                 <a href='#'>Show More Brands</a>
            </form>
            </div>
          
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 HotDeals
  </a>

</p>
<div className="collapse" id="collapseExample">
     <input type='checkbox' id="x" name="x" value="x"/>0<br/>
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
                 <input type='checkbox' id="x" name="x" value="x"/>Red<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Silver<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Gold<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Grey<br/>
                 <a href='#'>Show More Color</a>
            </form>
          </div>
          <hr/> 
                </div>
      </>
  )
}