import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runSchoolPride } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();


  useEffect(()=>{
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runSchoolPride();
  }, []);

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thanks for shopping!</h2>
            <p className='email-msg'>Check your email for the receipt!</p>
            <p className='description'>If you have any questions, please email 
            <a className='email' href='mailto:princeishere4you@yahoo.com'>Royal Shoe Store</a>
            </p>
            <Link href="/">
                <button type='button' width="300px" className='btn'>
                    Continue Shopping Royally
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success