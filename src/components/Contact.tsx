import React from 'react'
import Link from 'next/link'
import SocialButton from "@/components/SocialButton";

import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import Twitter from "../../public/twitter.svg";

const Contact = () => {
    return (

        <section id="contact" className=" mb-8">
            <div className="h-full lg:h-[22rem] rounded-3xl p-8 lg:p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
                <h1 className="text-3xl lg:text-6xl text-black font-semibold">Want to work together ?</h1>
                <p className="flex-1 text-black">Feel free to reach out for collaborations or just a friendly hello, contact to my email below <br />
                    <Link href="/" className='border-b border-slate-500 hover:border-none hover:font-semibold'>abdurrohmanfajar10@gmail.com</Link>
                </p>


                <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">

                    <Link href="mailto:abdurrohmanfajar10@gmail.com?subject=Subjek%20Email&body=Isi%20Email" target="_blank" className="bg-black text-white text-center tracking-widest font-medium py-3 px-12 rounded-full w-60 lg:w-auto hover:scale-95 hover:bg-transparent hover:border hover:border-black hover:text-black  transition-all duration-300 ease-in-out">  Contact me  </Link>



                    <div className="flex items-center mt-3 lg:mt-0 gap-4">
                        <Link href="https://www.linkedin.com/in/fajar-abdurrohman/" target="_blank">
                            <SocialButton bgColor="linkedin">
                                <Linkedin className="w-5 h-5" />
                            </SocialButton>
                        </Link>
                        <Link href="https://www.instagram.com/fajar.arh25/" target="_blank">
                            <SocialButton bgColor="instagram">
                                <Instagram className="w-5 h-5" />
                            </SocialButton>
                        </Link>
                        <Link href="https://twitter.com/laststory432" target="_blank">
                            <SocialButton bgColor="twitter">
                                <Twitter className="w-5 h-5" />
                            </SocialButton>
                        </Link>
                        <Link href="https://github.com/fajar2510" target="_blank">
                            <SocialButton bgColor="github">
                                <Github className="w-5 h-5" />
                            </SocialButton>
                        </Link>
                    </div>
                    <div>
                        <p className='text-slate-600 dark:text-white text-sm font-medium'>Copyright © 2023 - All right reserved by Fajar Abdurrohman and Inspiration by <Link href="https://www.aboghanbari.com/" className='text-pink-600 font-medium text-sm'>aboghanbari</Link></p>
                    </div>

                </div>

            </div>


        </section>

    )
}

export default Contact