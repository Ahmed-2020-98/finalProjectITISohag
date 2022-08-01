import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <>
    <div className='navbar'>
        <div className='container'>
            <div className='upperheader'>
                <div className='oneLeft'>
                    <p>The Easiest and Fastest instalment system.</p>
                </div>
                <div className='oneRight'>
                    <ul>
                        <li><a href='#'>Pay Installment</a></li>
                        <li><a href='#'>Call 19900</a></li>
                        <li><a href='#'>Store Locator</a></li>
                        <li><a href='#'>العربية</a></li>
                    </ul>
                </div>
            </div>
            <div className='loweheader'>
                <p>Icone</p>
                <input  className='form-control'/>
                <p>Login or register</p>
            </div>
        </div>
    </div>
    
    </>
  )
}
