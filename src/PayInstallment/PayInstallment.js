import React from 'react'
import './payInstallment.css'
import { FaCcMastercard } from "react-icons/fa";
import {RiVisaLine} from "react-icons/ri";
export default function PayInstallment() {
  return (
    <>
    <div className='payInstallment py-5'>
        <div className='container'>
            <div className='payInstallmentContent d-flex flex-column justify-content-center align-items-center py-5'>
                <h1 className='py-2'>PAY INSTALLMENTS</h1>
                <h2  className='py-2'>Pay Your Installment Online</h2>
                <div className='z'>
                    <p>Pay your installment now using Visa or Mastercard.</p>
                    <div className='icons'>
                    <RiVisaLine className='mx-3 fs-1'/>
                        <FaCcMastercard  className='mx-3 fs-1'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
