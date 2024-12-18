import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Education = () => {
    
    return (
        <div id="education" className=' h-full rounded-3xl px-2 lg:px-10 mt-10 flex flex-col'>
            <h2 className='text-3xl font-bold text-black mb-1.5'>Education</h2>
            <span className='mb-3 text-md font-semibold text-black'>Latest education</span>

            <ol className="relative border-l border-slate-300 dark:border-slate-700">

                <li className=" ml-4">
                    {/* <h3 className='text-lg font-bold text-black mb-1.5'>Student from</h3> */}
                    <div className="absolute w-3 h-3 bg-slate-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-md font-normal leading-none text-slate-600 dark:text-slate-300"> 2017 - 2023 <span className='font-bold text-slate-500 italic'>(Graduated on September 2023)</span></time>

                    <div className='flex flex-wrap items-center justify-start py-2 gap-3 '>
                        <div className="overflow-hidden rounded-full">
                            <Image src="/img/unesa.png" width={60} height={60} alt="logo unesa" />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-white">Universitas Negeri Surabaya</h3>
                            <h4 className="text-base lg:text-lg font-semibold text-slate-800 dark:text-white">Prodi S1 Sistem Informasi <span className='italic'>(Bachelor of Information System)</span>  <br />
                                Jurusan Teknik Informatika <span className='italic'>(Informatics Engineering)</span>

                            </h4>
                        </div>


                    </div>

                    
                        <p className="text-base font-normal text-slate-600 dark:text-slate-400">Build some project and assignment for Web and Android Applications, Sytem Analyst, IT Hardware, Networking, Troubleshooting, and Business.
                        Extra Join game development community and build some games.
                    </p>
                    <ol>

                        <li className="text-base font-normal text-slate-600 dark:text-slate-400">
                        ▫️ <strong>Organization:</strong> Bidikmisi Scholarship Student Comunity; Web Game Development Comunity.
                    
                        </li>
                         <li className="text-base font-normal text-slate-600 dark:text-slate-400">
                        <a href='#' target='_blank'>▫️ <strong>E-Journal Publication</strong></a> . Interactive Geographic Information System: Visual Mapping, predict Training fund allocation.
                    
                        </li>
                    
                    </ol>
                    
                    {/* <Link href="/pdf/17051214047SPK.pdf" download target='_blank' className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                       <span className=' p-1 italic'> Graduation Certificate (Ijazah)</span> <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></Link>

                    <Link href="/pdf/SIAKAD_ Transkrip Mahasiswa.pdf" download target='_blank' className="mt-4 lg:ml-3 ml-0 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                       <span  className=' p-1 italic'> Transcript</span> <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></Link>
                     */}

                  
                       <Link href="/pdf/ENGLISH_PROFICIENCY_TEST_FAJAR_546.pdf" download target='_blank' className="mt-4 lg:ml-3 ml-0 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                       <span  className=' p-1 italic inline-flex'> Test English Proficiency Certif. <span className='text-sm text-gray-500 italic'> ~ Valid until June 2024 - June 2025 </span><span className='hidden lg:block  italic'> ( Score 546 )</span> </span> <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></Link>
                     <Link href="/pdf/Sertifikat TEP Fajar Abdurrohman.pdf" download target='_blank' className="mt-4 lg:ml-3 ml-0 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                       <span  className=' p-1 italic inline-flex'> Test English Proficiency Certif. <span className='text-sm text-gray-500 italic'> ~ Valid until April 2023 - April 2024 </span> <span className='hidden lg:block  italic'> ( Score 473 )</span> </span> <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></Link>

                </li>
            </ol>


        </div>
    )
}

export default Education