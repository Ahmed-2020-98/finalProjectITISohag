import React from 'react'

export default function KitchenAppliances() {
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
<input type='range' min={0} max={600000} />
       <ul  className='aa'><li> <p >0</p>   </li>  
      <li>   <p >600000</p></li> </ul> 
    

</div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Power Consumption
  </a>

</p>
<div className="collapse" id="collapseExample">
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>650 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>750 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>900 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1100 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1200 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1370 Watt<br/>
                 <a href='#'>Show More Power Consumption </a>
            </form>
                 </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Kettle Type
  </a>

</p>
<div className="collapse" id="collapseExample">
   <input type='checkbox'id="x" name="x" value='x'/>Electric Kettle<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Traditional Jug Kettle<br/>
                 
</div>
       <hr/>    
       <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Juicer Type
  </a>

</p>
<div className="collapse" id="collapseExample">
    <input type='checkbox'id="x" name="x" value='x'/>Citrus Press<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Juice Extractor<br/>
                
        
</div>
       <hr/>  
       
       <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Capacity In Liter
  </a>

</p>
<div className="collapse" id="collapseExample"> 
      < input type='checkbox' id="x" name="x" value="x"/>Less Than 1 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1 - 1.5 Liters<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>More Than 1.5 Liters<br/>
                  </div>
                  <hr/>
                  <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Power Consumption
  </a>

</p>
<div className="collapse" id="collapseExample">
                <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>20 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>25 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>30 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>40 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>45 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>50 Watt<br/>
                 <a href='#'>Show More Power Consumption </a>
            </form>
    </div> 
    <hr/>
    <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Oven Design
  </a>

</p>
<div className="collapse" id="collapseExample">
     < input type='checkbox' id="x" name="x" value="x"/>Built-In Oven<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Freestanding Oven<br/>     
        
    </div> 
    <hr/>
    <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Capacity In Liter
  </a>

</p>
<div className="collapse" id="collapseExample">
     <p className='search-text'></p>
          <form className='search'>
              <div>
                  <input type='text' placeholder='Search'/>
              </div>
               < input type='checkbox' id="x" name="x" value="x"/>6 Liter<br/>
               <input type='checkbox' id="x" name="x" value="x"/>14 Liters<br/> 
               <input type='checkbox' id="x" name="x" value="x"/>17 Liters<br/>
               < input type='checkbox' id="x" name="x" value="x"/>28 Liter<br/>
               <input type='checkbox' id="x" name="x" value="x"/>30 Liters<br/> 
               <input type='checkbox' id="x" name="x" value="x"/>33 Liters<br/>
               <a href='#'>Show More Capacity In Liter </a>
          </form>  
        </div>
        <hr/> 
       
        <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Digital Display
  </a>

</p>
<div className="collapse" id="collapseExample">
     <input type='checkbox'id="x" name="x" value='x'/>Yes<br/>
               <input type='checkbox' id="x" name="x" value="x"/>No<br/>
                  </div>
                  <hr/>
                  
                  <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Number Of Slices
  </a>

</p>
<div className="collapse" id="collapseExample">
  <input type='checkbox'id="x" name="x" value='x'/> 1 Slice<br/>
               <input type='checkbox' id="x" name="x" value="x"/> 2 Slices<br/>
               <input type='checkbox'id="x" name="x" value='x'/> 3 Slices<br/>
              

</div>
          <hr/>                

         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Desfrost Function
  </a>

</p>
<div className="collapse" id="collapseExample">  

       <input type='checkbox'id="x" name="x" value='x'/>Yes<br/>
               <input type='checkbox' id="x" name="x" value="x"/>No<br/>
                  </div>
                  <hr/>
                  <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Number Of Layers
  </a>

</p>
<div className="collapse" id="collapseExample">     
          <input type='checkbox'id="x" name="x" value='x'/>3 Layers<br/>
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Microwave Design
  </a>

</p>
<div className="collapse" id="collapseExample">
    <input type='checkbox'id="x" name="x" value='x'/>Built-In Microwave<br/>
               <input type='checkbox' id="x" name="x" value="x"/>Freestanding Microwave<br/> 
</div>
<hr/>
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Microwave Type
  </a>

</p>
<div className="collapse" id="collapseExample">
    <input type='checkbox'id="x" name="x" value='x'/>Solo Microwave<br/>
               <input type='checkbox' id="x" name="x" value="x"/> Microwave With Grill<br/>
               </div>
               <hr/>

               <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Iron Type
  </a>

</p>
<div className="collapse" id="collapseExample">
        <input type='checkbox'id="x" name="x" value='x'/>Steam Iron<br/>
        </div>
        <hr/>
        <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Power Consumption
  </a>

</p>
<div className="collapse" id="collapseExample">
     <p className='search-text'></p>
          <form className='search'>
              <div>
                  <input type='text' placeholder='Search'/>
              </div>
               <input type='checkbox'id="x" name="x" value="x"/>20 Watt<br/>
               <input type='checkbox' id="x" name="x" value="x"/>25 Watt<br/>
               <input type='checkbox' id="x" name="x" value="x"/>40 Watt<br/>
               <input type='checkbox' id="x" name="x" value="x"/>150 Watt<br/>
               <input type='checkbox' id="x" name="x" value="x"/>160 Watt<br/>
               <input type='checkbox' id="x" name="x" value="x"/>175 Watt<br/>
               <a href='#'>Show More Power Consumption </a>
          </form>
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Type
  </a>

</p>
<div className="collapse" id="collapseExample">
 <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>Countertop Blender<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Hand Blender<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Hand Mixer<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Stand Mixer<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Chopper<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Food Processor<br/>
                 <a href='#'>Show More Type </a>
            </form>
                 </div>
                <hr/>

                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Capacity
  </a>

</p>
<div className="collapse" id="collapseExample">
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>250 ml<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>300 ml<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>250 ml<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>350 ml<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>50 ml<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>550 ml<br/>
                 <a href='#'>Show More Capacity</a>
            </form>
            </div>
            <hr/>
            <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Grill Type
  </a>

</p>
<div className="collapse" id="collapseExample">
             
                <input type='checkbox'id="x" name="x" value='x'/>Charcoal Grills<br/>
                 <input type='checkbox' id="x" name="x" value="x"/> Electric Grills<br/>
                 <input type='checkbox' id="x" name="x" value="x"/> Gas Grills<br/>
                 </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Type
  </a>

</p>
<div className="collapse" id="collapseExample">
      
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>250 ml<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>300 ml<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>250 ml<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>350 ml<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>50 ml<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>550 ml<br/>
                 <a href='#'>Show More Type</a>
            </form>
                 </div>
                <hr/>
</div>
           </>
  )
}