import React from 'react'
import {GrFormAdd } from "react-icons/gr";
export default function SmallAppliances() {
  return (
    <>
    <div className='ww d-flex  flex-column align-items-center'>
     {/* <div className='col-2 '> */}
    <h2>Filter by</h2>
    <p>
  <a className="box" data-bs-toggle="collapse" href="#a" role="button" aria-expanded="false" aria-controls="collapseExample">
price <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="a">
<input type='range' min={0} max={400000} />
< div className='w-100 d-flex justify-content-between'>
  <span>0</span>
  <span>400000</span>
</div>


</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#b" role="button" aria-expanded="false" aria-controls="collapseExample">
Number Of Speeds  <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="b">
 <input type='checkbox'id="x" name="x" value='x'/>1 Speed<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>2 Speed<br/>
                 <input type='checkbox'id="x" name="x" value='x'/>3 Speed<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>4 Speed<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>5 Speed<br/>
   </div>
   <hr/>
   <p>
  <a className="box" data-bs-toggle="collapse" href="#c" role="button" aria-expanded="false" aria-controls="collapseExample">
Number Of Blades<span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="c">
   <input type='checkbox' id="x" name="x" value="x"/>2 Blades<br/>
                 <input type='checkbox'id="x" name="x" value='x'/>3 Blades<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>4 Blades<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>5 Blades<br/>
                 <input type='checkbox'id="x" name="x" value='x'/>6 Blades<br/>
                </div>
                <hr/>

 <p>
  <a className="box" data-bs-toggle="collapse" href="#d" role="button" aria-expanded="false" aria-controls="collapseExample">
Fan Diameter <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="d">
          <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>10 cm<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>15 cm<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>20 cm<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>25 cm<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>30 cm<br/>

                 <a href='#'>Show More Fan Diameter</a>
            </form>
    </div>

         <hr/>        <p>
  <a className="box" data-bs-toggle="collapse" href="#e" role="button" aria-expanded="false" aria-controls="collapseExample">
Fan Type <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="e">
        
         
          <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>Ceiling Fans<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Stand Fans<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Wall Mount Fans<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Box Fans<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Ventilating Fans<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Table Fans<br/>
                 <a href='#'>Show More Fan Type</a>
            </form>
        </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#f" role="button" aria-expanded="false" aria-controls="collapseExample">
Power Consumption <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="f">

        
          <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>2300 watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>2400 watt<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>56 watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>750 watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1200 watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1400 watt<br/>
                 <a href='#'>Show More Power Consumption</a>
            </form>
          </div>
          <hr/> 
          <p>
  <a className="box" data-bs-toggle="collapse" href="#g" role="button" aria-expanded="false" aria-controls="collapseExample">
Vacuum Cleaner Type <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="g">

      
          <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>Handheld Vacuum Cleaners<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Upright Vacuum Cleaners<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Canister Vacuum Cleaners<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Carpet Vacuum Cleaners<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>
Steam Vacuum Cleaners<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Stick Vacuum Cleaners<br/>
                 <a href='#'>Show More Vacuum Cleaner Type </a>
            </form>
          </div>
          <hr/>

          <p>
  <a className="box" data-bs-toggle="collapse" href="#h" role="button" aria-expanded="false" aria-controls="collapseExample">
Dust Bag Type <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="h">
                 <input type='checkbox' id="x" name="x" value="x"/>Bagged<br/>
                 <input type='checkbox'id="x" name="x" value='x'/>Bagless<br/>
                 </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#j" role="button" aria-expanded="false" aria-controls="collapseExample">
Juicer Type <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="j">
                 <input type='checkbox' id="x" name="x" value="x"/>Citurs press<br/>
                 <input type='checkbox'id="x" name="x" value='x'/>Juice Extractor<br/>
                 </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#k" role="button" aria-expanded="false" aria-controls="collapseExample">
Capacity In Liter <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="k">
                 <input type='checkbox' id="x" name="x" value="x"/>Less Than 1 Liter<br/>
                 <input type='checkbox'id="x" name="x" value='x'/>1 - 1.5 Liters<br/>
                 <input type='checkbox'id="x" name="x" value='x'/>More Than 1.5 Liters<br/>
                 </div>
             <hr/>
             <p>
  <a className="box" data-bs-toggle="collapse" href="#j" role="button" aria-expanded="false" aria-controls="collapseExample">
Scale Type <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="j">
          <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>Digital Bathroom Scale<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Mechanical Bathroom Scale<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Digital Kitchen Scale<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Mechanical Kitchen Scale<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Baby Scale<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Luggage Scale<br/>
                 <a href='#'>Show More Scale Type</a>
            </form>
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#l" role="button" aria-expanded="false" aria-controls="collapseExample">
Water Temperature Type <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="l">
          <input type='checkbox' id="x" name="x" value="x"/>Hot & Cold<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Hot, Cold & Normal<br/> 
          </div>
          <hr/> 
          <p>
  <a className="box" data-bs-toggle="collapse" href="#m" role="button" aria-expanded="false" aria-controls="collapseExample">
Refrigerator Included <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="m">
          <input type='checkbox' id="x" name="x" value="x"/>Yes<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>N0<br/> 
       </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#n" role="button" aria-expanded="false" aria-controls="collapseExample">
Number Of Taps <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="n">
     
          <input type='checkbox' id="x" name="x" value="x"/>1 Taps<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>2 Taps<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>3 Taps<br/>
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="j" role="button" aria-expanded="false" aria-controls="collapseExample">
Remote Control <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="j">
          <input type='checkbox' id="x" name="x" value="x"/>Yes<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>N0<br/> 
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#k" role="button" aria-expanded="false" aria-controls="collapseExample">
Remote Control <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="k">
          <input type='checkbox' id="x" name="x" value="x"/>Ceramic Heaters<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Fan Heaters<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Halogen Heaters<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Quartz Heaters<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Radiant Heaters<br/>
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#3" role="button" aria-expanded="false" aria-controls="collapseExample">
Iron Type <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="3">
          <input type='checkbox' id="x" name="x" value="x"/>Dry Iron<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Steam Generator<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Steam Iron<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Garment Steamers<br/>
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#l" role="button" aria-expanded="false" aria-controls="collapseExample">
Type  <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="l">
<input type='checkbox' id="x" name="x" value="x"/>Chopper<br/>
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#m" role="button" aria-expanded="false" aria-controls="collapseExample">
Capacity <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="m">

                 < input type='checkbox' id="x" name="x" value="x"/>1.5 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>3 Liter<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Unavailable<br/>
                 
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#n" role="button" aria-expanded="false" aria-controls="collapseExample">
Cartridge Included  <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="n">

          <input type='checkbox' id="x" name="x" value="x"/> 0 <br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1 <br/> 
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#o" role="button" aria-expanded="false" aria-controls="collapseExample">
Shop By Category <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="o">
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>           
                <input type='checkbox' id="x" name="x" value="x"/>Mobiles & Tablets<br/>
               <input type='checkbox' id="x" name="x" value="x"/> Heaters<br/>
                <input type='checkbox'id="x" name="x" value="x"/>Refrigerators<br/>
                 <input type='checkbox' id="x" name="x" value="x"/> Water Heaters <br/>
                 <input type='checkbox' id="x" name="x" value="x"/> Kettles<br/>
                 <input type='checkbox' id="x" name="x" value="x"/> Vacuum Cleaners<br/>
   
      
                 <a href='#'>Show More Shop By Category </a>
            </form>
                 </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="p" role="button" aria-expanded="false" aria-controls="collapseExample">
Mixer Type <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="p">
          <input type='checkbox' id="x" name="x" value="x"/> Hand Mixer <br/>
          </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#q" role="button" aria-expanded="false" aria-controls="collapseExample">
Type <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="q">

          <input type='checkbox' id="x" name="x" value="x"/> Water filter <br/>
          <input type='checkbox' id="x" name="x" value="x"/> Cartridge <br/>
          </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#r" role="button" aria-expanded="false" aria-controls="collapseExample">
Net Included <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="r">

          <input type='checkbox' id="x" name="x" value="x"/> 0 <br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1 <br/> 
          </div>
          <hr/> 
          <p>
  <a className="box" data-bs-toggle="collapse" href="#s" role="button" aria-expanded="false" aria-controls="collapseExample">
Brand <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="s">
          <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>Gree<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Miele<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Nouval<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Universal<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Powerology<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Simfer<br/>
                 <a href='#'>Show More Brands</a>
            </form>
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#y" role="button" aria-expanded="false" aria-controls="collapseExample">
Deal <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="y">

          <input type='checkbox' id="x" name="x" value="x"/> 0 <br/>
          </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#t" role="button" aria-expanded="false" aria-controls="collapseExample">
Product Color <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="t">
          <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>Black<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Brown<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Red<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Champange<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Gold<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Grey<br/>
                 <a href='#'>Show More Color</a>
            </form>
          </div>
          <hr/>
          </div> 
          {/* </div> */}
</>
  )
}
