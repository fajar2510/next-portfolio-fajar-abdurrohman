import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    
    <>
    <div className="navbar bg-white dark:bg-black mb-3">
    <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link href="#" className='text-black font-medium'>
                Home
            </Link>
            <Link href="#">
                 Project
            </Link>
            <Link href="#">
                 Experience
            </Link>
            <Link href="#">
                Contact
            </Link>

         
          
        </ul>
        </div>
        <div className='flex items-center gap-[1ch]'>
            <div className='w-5 h-5 bg-yellow-400 rounded-full'/>
            <span className='text-md text-black font-semibold tracking-widest uppercase'>
                Fajar Abdurrohman
            </span>
        </div>
    </div>
    
    <div className="navbar-end ">
        <div className=" hidden lg:flex lg:gap-12">
            <ul className="menu menu-horizontal font-medium gap-8 px-3">
                <Link href="#" className='text-black font-medium'>
                    Home
                </Link>
                <Link href="#">
                    Project
                </Link>
                <Link href="#">
                    Experience
                </Link>
                <Link href="#">
                    Contact
                </Link>
               
            </ul>
        </div>
        <Link href="/" className="ml-10  bg-black text-white font-medium py-2 px-10 rounded-3xl w-60 lg:w-auto hover:scale-95 hover:bg-transparent hover:border hover:border-black hover:text-black  transition-all duration-300 ease-in-out">  Resume  </Link>
    </div>
    </div>
    </>
    
  )
}

export default Navbar