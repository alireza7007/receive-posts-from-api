import React from 'react';
import loading from '../../assests/image/Loading.gif';
import './style.css'
export default function Loading() {
  return (
    <div className='loading'>
        <img src={loading} alt='loading...' />
    </div>
  )
}
