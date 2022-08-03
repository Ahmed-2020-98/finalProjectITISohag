import React from 'react'

export default function Vehicles () {
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
<input type='range' min={0} max={300000} />
       <ul  className='aa'><li> <p >0</p>   </li>  
      <li>   <p >300000</p></li> </ul> 
    

</div>
         <hr/>
         <p>
<a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Cable Type
</a>

</p>
<div className="collapse" id="collapseExample">

               <input type='checkbox' id="x" name="x" value="x"/>AUX Cable<br/> 
               
</div>
       <hr/>
       <p>
<a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Vehicle Type
</a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>2-In-1<br/>
               <input type='checkbox' id="x" name="x" value="x"/>Pickup Van<br/> 
               <input type='checkbox' id="x" name="x" value="x"/>Golf Cart<br/>
               <input type='checkbox' id="x" name="x" value="x"/>Tuk-Tuk<br/>
               <input type='checkbox' id="x" name="x" value="x"/>Scooter<br/>
               <input type='checkbox' id="x" name="x" value="x"/>Tricycle<br/>
</div>
       <hr/>
       <p>
<a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Fuel Type
</a>

</p>
<div className="collapse" id="collapseExample">

               <input type='checkbox' id="x" name="x" value="x"/>Electric<br/> 
               <input type='checkbox' id="x" name="x" value="x"/>Diesel<br/>
               <input type='checkbox' id="x" name="x" value="x"/>Gasoline<br/>
               
</div>
       <hr/>
       <p>
<a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Car Accessory Type

</a>

</p>
<div className="collapse" id="collapseExample">
                  <p className='search-text'></p>
          <form className='search'>
              <div>
                  <input type='text' placeholder='Search'/>
              </div>
               <input type='checkbox'id="x" name="x" value="x"/>Accessory Lights<br/>
               <input type='checkbox' id="x" name="x" value="x"/>Air Compressors & Tire Inflators<br/>
               <input type='checkbox' id="x" name="x" value="x"/>Bluetooth Car Kits<br/>
               <input type='checkbox' id="x" name="x" value="x"/>Car Alarm<br/>
               <input type='checkbox' id="x" name="x" value="x"/>Car Cleaning Tools<br/>

               <a href='#'>Show More </a>
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
                <input type='checkbox' id="x" name="x" value="x"/>York<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Veito<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Crafft<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Gree<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Midea<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Miele<br/>
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
  <input type='checkbox'id="x" name="x" value='x'/>0<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1<br/>
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




