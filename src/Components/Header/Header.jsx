import React from 'react'
import logo from "../../assets/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className='flex justify-between px-10 lg:px-0 lg:justify-evenly items-center h-20 font-sans'>
        <img src={logo} alt="" className='h-16 cursor-pointer' />
        <div>
            <ul style={{fontSize:"17px"}} className='hidden lg:flex gap-8  font-bold cursor-pointer'>
                <li className='text-sky-500 underline underline-offset-[30px]'>Home</li>
                <li>Programs</li>
                <li>Prices</li>
                <li>Our Tutors</li>
                <li>More</li>
            </ul>
        </div>
        <div className='hidden lg:flex gap-5'>
            <button style={{border:"2px solid #0c8ce9", boxShadow:"3px 5px 0px 0px #7cc4f8"}} className='h-10 rounded-3xl w-24 text-sky-500 font-bold text-sm'>Login</button>
            <button style={{border:"2px solid #0c8ce9", boxShadow:"3px 5px 0px 0px #7cc4f9"}} className='h-10 rounded-3xl w-48 text-sky-500 font-bold text-sm'>TRY A FREE LESSON</button>
        </div>
        <div className='lg:hidden'>
            <FontAwesomeIcon icon={faBars} className="text-sky-500 h-6"/>
        </div>
    </div>
  )
}

export default Header
