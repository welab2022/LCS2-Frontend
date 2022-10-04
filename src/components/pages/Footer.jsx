import React from 'react'
import { useState } from 'react'
import {  useSelector  } from 'react-redux';
import './Footer.css';

const Footer = () => {
    return (
<footer className="footer-out">
    <div className='footer-content2'>
        <h3>Chi Phan Learning Center</h3>
            <p>
                Thông tin liên hệ:
                52-54 Bàu Cát 7, Phường 14, Quận Tân Bình, Thành phố Hồ Chí Minh.<br></br>
                Phone : 028 36 363 034 (Office). 
                Hotline: 098 901 0201 (Zalo)<br></br>
                Email: parent@chiphan.com<br></br>
            </p>
    </div>
</footer>
    )
}
export default Footer