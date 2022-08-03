import React from 'react'
import {GrFormAdd } from "react-icons/gr";
export default function HotDeals() {
  return (
    <>
<div className='ww'>
     <div className='col-2 '>
    <h2>Filter by</h2>
    <p className='bb'>
  <a className="box" data-bs-toggle="collapse" href="#a" role="button" aria-expanded="false" aria-controls="collapseExample">
price <span className='fs-1'><GrFormAdd/></span>
  </a>

</p>
<div className="collapse" id="a">
<input type='range' min={0} max={400000} />
< div className='w-50 d-flex justify-content-between'>
  <span>0</span>
  <span>400000</span>
</div>


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
                 <input type='checkbox' id="zippo" name="zippo" value="zippo"/>Zippo<br/>
                 <input type='checkbox' id="zahran" name="zahran" value="zahran"/>Zahran<br/>
                 <input type='checkbox' id="Yunteng" name="Yunteng" value="Yunteng"/>Yunteng<br/>
                 <input type='checkbox' id="York" name="York" value="York"/>York<br/>
                 <input type='checkbox' id="Yoobao" name="Yoobao" value="Yoobao"/>Yoobao<br/>
                 <input type='checkbox' id="Yonanas" name="Yonanas" value="Yonanas"/>Yonanas<br/>
                 <a href='#'>Show More Brands</a>
            </form>

       </div>
         </div>
   </div>
  
      </>
  )
}


