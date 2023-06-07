import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import Image from 'next/image';

type Option = {
    value: string;
    label: string;
    file: string;
  };

  
const options: Option[] = [
    { value: 'EN', label: 'EN', file: '/pdf/Fajar_Abdurrohman ENG CV ATS Friendly - FSD - Harisenin.com.pdf' },
    { value: 'ID', label: 'ID', file: '/pdf/Fajar_Abdurrohman IND CV ATS Friendly - FSD - Harisenin.com.pdf' },
  ];

const Navbar: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const option = options.find((opt) => opt.value === value) || null;
    setSelectedOption(option  || options[0]);
  };
  return (
    
    <>
    <div className="navbar sticky top-0 z-10 bg-white dark:bg-black mb-3 ">
    <div className="navbar-start w-1/3">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-6 shadow bg-white rounded-box w-52">
            <Link href="#home" className='text-slate-600 text-lg font-medium py-1.5'>
                Home
            </Link>
            <Link href="#project" className='text-slate-600 text-lg font-medium py-1.5'>
                 Project
            </Link>
            <Link href="#education" className='text-slate-600 text-lg font-medium py-1.5'>
                 Education
            </Link>
            <Link href="#experience" className='text-slate-600 text-lg font-medium py-1.5'>
                 Experience
            </Link>
            <Link href="#technology" className='text-slate-600 text-lg font-medium py-1.5'>
              Technology
            </Link>
            <Link href="#contact" className='text-slate-600 text-lg font-medium py-1.5'>
                Contact
            </Link>

         
          
        </ul>
        </div>
        <div className='flex items-center gap-[1ch]'>
            <div className='hidden lg:block w-5 h-5 bg-yellow-400 rounded-full'/>
            <span className='hidden lg:block text-md text-black font-semibold tracking-widest uppercase'>
                Fajar Abdurrohman
            </span>
        </div>
    </div>
    
    <div className=" navbar-end w-2/3 ">
        <div className=" hidden lg:flex lg:gap-4">
            <ul className="menu menu-horizontal font-medium gap-1 px-2">
                <Link href="#home" className='text-slate-600 dark:text-white px-1.5 py-1 rounded-3xl font-medium hover:text-black hover:font-bold'>
                    Home
                </Link>
                <Link href="#project" className='text-slate-600 dark:text-white px-1.5 py-1 rounded-3xl font-medium hover:text-black hover:font-bold'>
                    Project
                </Link>
                <Link href="#education" className='text-slate-600 dark:text-white px-1.5 py-1 rounded-3xl font-medium hover:text-black hover:font-bold'>
                    Education
                </Link>
                <Link href="#experience" className='text-slate-600 dark:text-white px-1.5 py-1 rounded-3xl font-medium hover:text-black hover:font-bold'>
                    Experience
                </Link>
                <Link href="#technology" className='text-slate-600 dark:text-white px-1.5 py-1 rounded-3xl font-medium hover:text-black hover:font-bold'>
                    Tech
                </Link>
                <Link href="#contact" className='text-slate-600 dark:text-white px-1.5 py-1 rounded-3xl font-medium hover:text-black hover:font-bold'>
                    Contact
                </Link>
               
            </ul>
        </div>
        <div className=" lg:ml-3 flex gap-2 lg:gap-3 items-center justify-center bg-black text-white font-medium py-2 px-0 lg:px-5 rounded-3xl w-60 lg:w-auto hover:scale-95 hover:bg-transparent hover:border hover:border-black hover:text-black transition-all duration-300 ease-in-out">
        <span className='text-whie dark:text-black'>Resume</span> 
            <select name="language" className="pl-2 rounded-lg  text-white" onChange={handleSelectChange} defaultValue={selectedOption.value}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Link href={selectedOption.file} download target="_blank" className="bg-white px-3 py-1 rounded-3xl font-medium text-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
              <Image className='lg:hidden' src="/download.png" width={20} height={20} alt="Download"></Image>
                <span className="hidden lg:block">Download</span>
            </Link>
            </div>
          </div>
          </div>
    </>
    
  )
}

export default Navbar