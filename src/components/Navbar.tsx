import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';


type Option = {
    value: string;
    label: string;
    file: string;
  };

const endpoint='https://ik.imagekit.io/fajarblog/porto/'
const options: Option[] = [
    { value: 'EN', label: 'EN', file: `${endpoint}pdf-private/CV EN Fajar Abdurrohman 2024v2.pdf`},
    // { value: 'ID', label: 'Indonesia', file: '/pdf/Fajar_Abdurrohman IND CV ATS Friendly.pdf' },
  ];

const Navbar: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
    const [isScrolled, setIsScrolled] = useState(false);  // State untuk menentukan apakah user telah melakukan scroll atau belum

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const option = options.find((opt) => opt.value === value) || null;
    setSelectedOption(option  || options[0]);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 9);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
    <div className={`navbar sticky bg-white top-0 z-10 px-16 mt-0 pt-0 mx-auto transition-all duration-600 ease-in-out ${
      isScrolled ? 'border-b-2 border-black' : ''
    }`}>
    <div className="navbar bg-white dark:bg-black ">
    <div className="navbar-start w-1/3">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-6 shadow bg-white rounded-box w-52">
            <Link href="#home" className=' text-lg font-bold py-1.5 px-2 text-black hover:translate-x-2 hover:underline transition-all duration-300 ease-in-ou'>
                Home
            </Link>
            <Link href="#project" className=' text-lg font-bold py-1.5 px-2 text-black hover:translate-x-2 hover:underline transition-all duration-300 ease-in-ou'>
                 Project
            </Link>
            <Link href="#education" className=' text-lg font-bold py-1.5 px-2 text-black hover:translate-x-2 hover:underline transition-all duration-300 ease-in-ou'>
                 Education
            </Link>
            <Link href="#experience" className=' text-lg font-bold py-1.5 px-2 text-black hover:translate-x-2 hover:underline transition-all duration-300 ease-in-ou'>
                 Experience
            </Link>
            <Link href="#certification" className=' text-lg font-bold py-1.5 px-2 text-black hover:translate-x-2 hover:underline transition-all duration-300 ease-in-ou'>
              Certification
            </Link>
            <Link href="#technology" className=' text-lg font-bold py-1.5 px-2 text-black hover:translate-x-2 hover:underline transition-all duration-300 ease-in-ou'>
              Technology
            </Link>
            {/* <Link href="#animation" className=' text-lg font-bold py-1.5 px-2 text-black hover:translate-x-2 hover:underline transition-all duration-300 ease-in-ou'>
                Animation
            </Link> */}
            <Link href="#contact" className=' text-lg font-bold py-1.5 px-2 text-black hover:translate-x-2 hover:underline transition-all duration-300 ease-in-ou'>
                Contact
            </Link>
            <Link href="https://fajarblog.vercel.app/" target="_blank" className=' text-lg font-bold py-1.5 px-2 text-black hover:translate-x-2 hover:underline transition-all duration-300 ease-in-ou'>
                  Blog <span className='text-slate-700 text-sm'>(soon)</span>
            </Link>

         
          
        </ul>
        </div>
        <div className='flex items-center gap-[1ch]'>
            <div className='hidden lg:block w-5 h-5 bg-yellow-400 rounded-full shadow-brutalism'/>
            <span className='hidden lg:block text-md text-black font-semibold lg:font-bold tracking-widest uppercase'>
                Fajar Abdurrohman
            </span>
            
        </div>
    </div>
    
    <div className="navbar-end w-2/3 ">
        <div className="hidden lg:flex flex-col lg:gap-4">
            <ul className="menu text-center justify-content menu-horizontal items-center align-center font-bold gap-1 px-2 ">
                <Link href="#home" className='text-slate-700 dark:text-white px-2 py-1 rounded-3xl   hover:text-white hover:bg-black transition-all duration-300 ease-in-out'>
                    Home
                </Link>
                <Link href="#project" className='text-slate-700 dark:text-white px-2 py-1 rounded-3xl   hover:text-white hover:bg-black transition-all duration-300 ease-in-out'>
                    Project
                </Link>
                <Link href="#education" className='text-slate-700 dark:text-white px-2 py-1 rounded-3xl   hover:text-white hover:bg-black transition-all duration-300 ease-in-out'>
                    Education
                </Link>
                <Link href="#experience" className='text-slate-700 dark:text-white px-2 py-1 rounded-3xl   hover:text-white hover:bg-black transition-all duration-300 ease-in-out'>
                    Exper
                </Link>
                <Link href="#certification" className='text-slate-700 dark:text-white px-2 py-1 rounded-3xl   hover:text-white hover:bg-black transition-all duration-300 ease-in-out'>
                  Certif
                </Link>
                <Link href="#technology" className='text-slate-700 dark:text-white px-2 py-1 rounded-3xl   hover:text-white hover:bg-black transition-all duration-300 ease-in-out'>
                    Tech
                </Link>
                {/* <Link href="#animation" className='text-slate-700 dark:text-white px-2 py-1 rounded-3xl   hover:text-white hover:bg-black transition-all duration-300 ease-in-out'>
                    Animation
                </Link> */}
                <Link href="#contact" className='text-slate-700 dark:text-white px-2 py-1 rounded-3xl   hover:text-white hover:bg-black transition-all duration-300 ease-in-out'>
                    Contact
                </Link>
                <Link href="https://fajarblog.vercel.app/" target="_blank" className='flex flex-col text-slate-700 dark:text-white px-2 py-1 rounded-3xl   hover:text-white hover:bg-black transition-all duration-300 ease-in-out'>
                   <div className='p-0 mb-0'>
                     Blog
                   </div>
                   <div className='text-slate-500 text-xs p-0 -mt-1.5 hover:text-white'>
                    (soon)
                   </div>
                </Link>
                
               
            </ul>
        </div>
        <div className="shadow-brutalism lg:ml-3 flex gap-2 lg:gap-3 items-center justify-center bg-white text-black font-medium py-2 px-0 lg:px-5 rounded-3xl w-40 md:w-60 lg:w-auto hover:scale-[97%] hover:bg-transparent border border-black hover:text-black transition-all duration-300 ease-in-out">
          <span className=' dark:text-black font-bold text-base text-black'>CV</span> 
            
            <select name="language" className="pl-2 rounded-lg hidden md:block  text-black bg-white" onChange={handleSelectChange} defaultValue={selectedOption.value}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <a href={selectedOption.file} download target="_blank" className="bg-white px-3 py-1 rounded-3xl font-medium text-black hover:bg-amber-400 hover:border hover:border-black hover:text-white transition-all duration-300 ease-in-out">
              <Image className='lg:hidden' src="/download.png" width={20} height={20} alt="Download"></Image>
                <span className="hidden text-black font-semibold text-base hover:text-white lg:block">Download</span>
            </a>
        </div>
        </div>
        </div>
    </div>
    
  )
}

export default Navbar