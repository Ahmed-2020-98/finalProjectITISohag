import React from 'react'

export default function Electronics() {
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
Hard Disk Capacity
  </a>

</p>
<div className="collapse" id="collapseExample">
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>4 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>32 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>64 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>320 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>500 GB<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>512 GB<br/>
                 <a href='#'>Show More Hard Disk Capacity </a>
            </form>
                 </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Console Type
  </a>

</p>
<div className="collapse" id="collapseExample">
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>Nintendo Switch<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>PlayStation 3<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>PlayStation 4 Standard Edition<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>PlayStation 4 Pro<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>PlayStation 4 Slim<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>PlayStation 5<br/>
                 <a href='#'>Show More Console Type </a>
            </form>
                 </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Digital Camera Type
  </a>

</p>
<div className="collapse" id="collapseExample">
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>Body Only<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Point & Shoot<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>SLR Camera<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Security Camera<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Compact Camera<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Mirrorless Camera<br/>
                 <a href='#'>Show More Digital Camera Type</a>
            </form>
                 </div>
                <hr/>  
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Game Platform
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>PlayStation 4<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>PlayStation 5<br/> 
                 <input type='checkbox' id="x" name="x" value="x"/>Xbox One<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Nintendo Switch<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Xbox<br/>
               
</div>
          <hr/>

          <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Charger Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Battery Charger<br/>
                </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Connectivity
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Wireless<br/>
                </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Headphones & Headsets Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>On-Ear<br/>
                </div>
                <hr/>

                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Power Bank Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Wired Power Bank<br/>
                </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">

  Car Accessory Type

  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Accessory Lights<br/>
                </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">

  Clock Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Table Clocks<br/>
<input type='checkbox' id="x" name="x" value="x"/>Wall Clocks<br/>
                </div>
                <hr/>

                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Compatible With
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Mobiles & Tablets<br/>
<input type='checkbox' id="x" name="x" value="x"/>Laptops & Notebooks<br/>
<input type='checkbox' id="x" name="x" value="x"/>Cameras<br/>
<input type='checkbox' id="x" name="x" value="x"/>Multi Devices<br/>
                </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Category
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Decor Shelves<br/>
<input type='checkbox' id="x" name="x" value="x"/>Decorative Accessories<br/>
                </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Musical Instrument Type
  </a>
</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Piano Keyboards and Accessories<br/>

                </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Rechargeable Battery
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Yes<br/>
<input type='checkbox' id="x" name="x" value="x"/>No<br/>
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
                 <input type='checkbox'id="x" name="x" value="x"/>Speakers & Home Theaters<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Mobile Accessories<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Accessories<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Cameras & Cameras Accessories<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Computer & Laptop Accessories<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Gaming<br/>
                 <a href='#'>Show More Shop By Category</a>
            </form>
                 </div>
                <hr/>  

                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Audio Type
  </a>

</p>
<div className="collapse" id="collapseExample">
                    <p className='search-text'></p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Search'/>
                </div>
                 <input type='checkbox'id="x" name="x" value="x"/>Amplifier Mixer<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Microphone Stand<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Microphone<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Radio<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Microphone System<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Voice Recorder<br/>
                 <a href='#'>Show More Audio Type</a>
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
                 <input type='checkbox'id="x" name="x" value="x"/>Yunteng<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Xbox<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Guerrilla<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>GunFIre Games<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Havit<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Hikvision<br/>
                 <a href='#'>Show More Brand</a>
            </form>
                 </div>
                <hr/>
                <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Deal
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>0<br/>
             </div>
             <hr/>
             <p>
  <a className="box" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Game Type
  </a>

</p>
<div className="collapse" id="collapseExample">
<input type='checkbox' id="x" name="x" value="x"/>Arcade Cabinets<br/>
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
                 <input type='checkbox' id="x" name="x" value="x"/>Gold<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Grey<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Red<br/>
                 <input type='checkbox' id="x" name="x" value="x"/>Silver<br/>
                 <a href='#'>Show More Product Color</a>
            </form>
                 </div>
                <hr/>
    </div>
    </>
  )
}