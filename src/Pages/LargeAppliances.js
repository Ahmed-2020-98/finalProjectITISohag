import React from 'react'

export default function LargeAppliances() {
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
Air Conditioner Type
  </a>

</p>
<div className="collapse" id="collapseExample">
 <input type='checkbox'id="x" name="x" value="x"/>Split Air Conditioner<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Freestanding Air Conditioner
<br/>
                 <input type='checkbox'id="x" name="x" value="x"/>Concealed Air Conditioner<br/>
                 <input type='checkbox'id="x" name="x" value="x"/>Floor Ceiling Air Conditioner<br/>
               </div>
     
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Air Conditioner Cooling system
  </a>

</p>
<div className="collapse" id="collapseExample">
 <input type='checkbox'id="x" name="x" value="x"/>Split Air Conditioner<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Colling only
<br/>
                 <input type='checkbox'id="x" name="x" value="x"/>Colling & Heater<br/>
               </div>
               <hr/>

               <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Air Conditioner Horse Power
  </a>

</p>
<div className="collapse" id="collapseExample">
<p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
    <input type='checkbox' id="x" name="x" value="x"/>6 HP<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>4 HP<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>5 HP<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1.25 HP<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1.5 HP<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>2.25 HP<br/>
                 <a href='#'>Show More Air <br/>Conditioner Horse Power</a>
            </form>
            </div>
            <hr/>
            <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Type Of Loading
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox'id="x" name="x" value="x"/>Top Loading<br/>
                  <input type='checkbox' id="x" name="x" value="x"/>Front Loading<br/>
          </div>
          <hr/>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Washing Machine Design
  </a>

</p>
<div className="collapse" id="collapseExample">
   <input type='checkbox'id="x" name="x" value="x"/>Freestanding Washing Machine<br/>
         </div>
         <hr/>
         <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Cooling Type 
  </a>

</p>
<div className="collapse" id="collapseExample"> 
<input type='checkbox'id="x" name="x" value="x"/>No Frost<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>DeFrost<br/>
             </div>
             <hr/>
             <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Refrigerator Style 
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox'id="x" name="x" value="x"/>Fridge Freezer<br/>
                <input type='checkbox' id="x" name="x" value="x"/>Single Door Fridge<br/>
                  <input type='checkbox'id="x" name="x" value="x"/>Four Doors<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Side By Side<br/>
                 <input type='checkbox'id="x" name="x" value="x"/>French Door<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Mini Bar<br/>
       </div>
       <hr/> 
       <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Refrigerator Design
  </a>

</p>
<div className="collapse" id="collapseExample">   
<input type='checkbox'id="x" name="x" value="x"/>Built-In Refrigerator<br/>
 <input type='checkbox' id="x" name="x" value="x"/>Freestanding Refrigerator<br/>
    </div>
    <hr/>
    <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Cooker Type
  </a>

</p>
<div className="collapse" id="collapseExample">

<input type='checkbox'id="x" name="x" value="x"/>Gas Cookers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Electric Cookers<br/>
                  <input type='checkbox' id="x" name="x" value="x"/> Dual Fuel Cookers<br/>
        </div>
        <hr/>         
        <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Cooker Design
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox'id="x" name="x" value="x"/>Freestanding Cooker<br/> 
</div>
<hr/>
<p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Number Of Burners
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox'id="x" name="x" value="x"/>4 Burners<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>5 Burners<br/>
                 <input type='checkbox' id="x" name="x" value="x"/> 6 Burners<br/>
                </div>
                <hr/>

      <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 DishEasher Design
  </a>

</p>
<div className="collapse" id="collapseExample">
 <input type='checkbox'id="x" name="x" value="x"/>Built-In Dishwasher<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Freestanding Dishwasher<br/>
                </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Dishwasher Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox'id="x" name="x" value="x"/>Standard Dishwashers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Slim Dishwashers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Countertop Dishwashers<br/>
                </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Deep Freezer Design
  </a>

</p>
<div className="collapse" id="collapseExample">  
      <input type='checkbox'id="x" name="x" value="x"/>Freestanding Deep Freezer<br/>
                 </div>
                 <hr/>
                 <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Freezer Type
  </a>

</p>
<div className="collapse" id="collapseExample">
      <input type='checkbox'id="x" name="x" value="x"/>Chest Deep Freezer<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Upright Deep Freezer<br/>
                 </div>
                 <hr/>
                 <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Water Heater Type
  </a>

</p>
<div className="collapse" id="collapseExample"> 
<input type='checkbox'id="x" name="x" value="x"/>Electric Water Heater<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Gas Water Heater<br/>
                 <input type='checkbox'id="x" name="x" value="x"/>Solar Water Heater<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Instant Water Heater<br/>
                 <input type='checkbox' id="x" name="x" value="x"/> Water Boiler<br/>
                </div>
                <hr/>
      <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Number Of Burners
  </a>

</p>
<div className="collapse" id="collapseExample">           
                
                <input type='checkbox'id="x" name="x" value="x"/>2 Burners<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>4 Burners<br/>
                 <input type='checkbox' id="x" name="x" value="x"/> 5 Burners<br/>
                 <input type='checkbox'id="x" name="x" value="x"/>6 Burners<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>1 Burners<br/>
                 <input type='checkbox' id="x" name="x" value="x"/> 3 Burners<br/>
                 </div>
                 <hr/>
                 <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Hob Type
  </a>

</p>
<div className="collapse" id="collapseExample">
          <p className='search-text'></p>
            <form className='search'>
                <div>
                   <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>Glass Built-In Hob<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Gas Built-In Hob<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Induction Built-In Hob<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Domino Built-In Hob<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Ceramic Built-In Hob<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Electric Built-In Hob<br/>
                 <a href='#'>Show More Hob Type</a>
            </form>
            </div>
            <hr/>
            <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Oven Design
  </a>

</p>
<div className="collapse" id="collapseExample"> 
       <input type='checkbox'id="x" name="x" value='x'/>Built-In Oven<br/>
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
                <input type='checkbox' id="x" name="x" value="x"/>38 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/> 45 Liter<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>46 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>50 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>53 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>54 Liter<br/>
                 <a href='#'>Show More Capacity In Liter</a>
            </form>
            </div>
            <hr/>
            <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Power Consumption
  </a>

</p>
<div className="collapse" id="collapseExample">
     <input type='checkbox'id="x" name="x" value='x'/>1800 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>3000 Watt<br/>
                <input type='checkbox'id="x" name="x" value='x'/>Not Available<br/>
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
Capacity In Liter
  </a>

</p>
<div className="collapse" id="collapseExample">  
                  
        
          <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                <input type='checkbox' id="x" name="x" value="x"/>20 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/> 22 Liter<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>25 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>31 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>34 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>38 Liter<br/>
                 <a href='#'>Show More Capacity In Liter</a>
            </form>
            </div>
            <hr/>
            <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Microwave Type
  </a>

</p>
<div className="collapse" id="collapseExample">
     <input type='checkbox'id="x" name="x" value='x'/>Solo Microwave<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Microwave With Grill<br/>
                 </div>
                 <hr/>
                 <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Washing Machine Type
  </a>

</p>
<div className="collapse" id="collapseExample">  
    <input type='checkbox'id="x" name="x" value='x'/>Full Automatic<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Top Automatic<br/>
                 <input type='checkbox'id="x" name="x" value='x'/>Half Automatic<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Manual<br/>
                      </div>
                      <hr/>
                      <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Air Treatment Type
  </a>

</p>
<div className="collapse" id="collapseExample">
       <input type='checkbox'id="x" name="x" value='x'/>Air Purifiers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>16162<br/>
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
                 <input type='checkbox'id="x" name="x" value="x"/>Refrigerators<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Air Conditioners<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Cookers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Freezers<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Washing Machines<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Dishwashers<br/>
                 <a href='#'>Show More Shop By Category </a>
            </form> 
            </div>
            <hr/>
            <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Inverter Function
  </a>

</p>
<div className="collapse" id="collapseExample">
     <input type='checkbox'id="x" name="x" value='x'/>Yes<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>No<br/>
                  </div>                              
                     <hr/>                  
                     <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Water Tank Capacity
  </a>
</p>
<div className="collapse" id="collapseExample">                   
       <input type='checkbox'id="x" name="x" value='x'/>15 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>20 Liter<br/>
                 <input type='checkbox'id="x" name="x" value='x'/>36 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>60 Liter<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>130 Liter<br/>
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
                 <input type='checkbox'id="x" name="x" value="x"/>65 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>110 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>165 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>200 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>270 Watt<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Not Available<br/>
                 <a href='#'>Show More Power Consumption </a>
            </form>
             </div>
              <hr/>
              <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Timer
  </a>

</p>
<div className="collapse" id="collapseExample">
       <input type='checkbox'id="x" name="x" value='x'/>1<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>0<br/>
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
