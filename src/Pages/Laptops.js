import React from 'react'

export default function Laptops() {
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
<input type='range' min={0} max={200000} />
       <ul  className='aa'><li> <p >0</p>   </li>  
      <li>   <p >200000</p></li> </ul>
       </div>
          <hr/>
      <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Operating System
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>DOS<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Windows<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Linux<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Mac OS<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Ubuntu<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Processor Brand
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>AMD<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Apple<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Intel<br/>
  </div>
  <hr/>

  <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Laptop Family
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>2-In-1<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Laptop<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Notebook<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Probook<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Ultrabook<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>MacBook<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  RAM Capacity
  </a>

</p>
<div className="collapse" id="collapseExample">
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>2 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>4 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>6 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>8 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>10 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>12 GB<br/>
                 <a href='#'>Show More RAM Capacity</a>
            </form>
                 </div>
                <hr/>  
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Processor Core
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Dual Core<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Hexa Core<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Octa Core<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Quad Core<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Deca Core<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Processor Family
  </a>

</p>
<div className="collapse" id="collapseExample">
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>AMD A Series<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>AMD Athlon<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>AMD Duo Core<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>AMD E Series<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>AMD Radeon<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>AMD Ryzen<br/>
                 <a href='#'>Show More Processor Family</a>
            </form>
                 </div>
                <hr/> 
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  PC Family
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>All-In-One<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Computer Cases<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Desktop Computers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Tower Computers<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Operating System
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>DOS<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Mac OS<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Windows<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Ubuntu<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Processor Brand





  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>AMD<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Intel<br/> 
                </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Processor Core
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Dual Core<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Octa Core<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Quad Core<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Hexa Core<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Internal Memory GB
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>16 GB<br/>
</div>
<hr/>
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Memory RAM In GB
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>1 GB<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Radio<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Charger Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Adapter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Battery Charger<br/> 
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
                 <input type='checkbox' id="x" name="x" value="x"/>HDMI Cable<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Connection Cables<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>VGA Cable<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Hard Disk Cable<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Audio Cable<br/>
                 <a href='#'>Show More Cable Type</a>
            </form>
                 </div>
                <hr/> 
                
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Speakers Type
  </a>

</p>
<div className="collapse" id="collapseExample">
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>Bluetooth Speakers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Computer Speakers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Subwoofers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Home Theaters<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Car Speakers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Wall Speakers<br/>
                 <a href='#'>Show More Speakers Type</a>
            </form>
                 </div>
                <hr/> 
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Connectivity






  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Wired<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Wireless<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Wired/Wireless<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Mouse Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Optical Mouses<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Laser Mouses<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Touch Pad<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Gaming Mouse<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Storage Capacity
  </a>

</p>
<div className="collapse" id="collapseExample">
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>2 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>8 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>16 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>32 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>64 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>128 GB<br/>
                 <a href='#'>Show More Storage Capacity</a>
            </form>
                 </div>
                <hr/> 
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Usage
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>External Hard Disk<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Internal Laptop Hard Disk<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Internal PC Hard Disk<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Internal Hard Disk<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Internal Laptop & PC Hard Disk<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Screen Technology
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>LCD<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>LED<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>OLED<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>QLED<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>WLED<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Stationery Type


  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Calculators<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Bags Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>School Bags<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Cameras Bags<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Backpacks<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Tablets Bags<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Baby Bag<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  TVs Screen Size Filtration
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Less Than 32 Inch<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>32 - 42 Inch<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>43 - 60 Inch<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Barcode Scanner<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Flatbed scanner<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Handheld Scanner<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Overhead Scanner<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Sheetfed Scanner<br/>
</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Hardware Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Power Supply<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Processor<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Motherboard<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Ram<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Computer Case<br/>
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
                 <input type='checkbox'id="x" name="x" value="x"/>ACME<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Xprinter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>WiWU<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Harman Kardon<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Havit<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Hikvision<br/>
                 <a href='#'>Show More Brand</a>
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
                 <input type='checkbox'id="x" name="x" value="x"/>Black<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Brown<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Champagne<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Gold<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Grey<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Red<br/>
                 <a href='#'>Show More Product Color</a>
            </form>
                 </div>
                <hr/>  
         </div>
         </>
  )
}