import React from 'react'
import Link from 'next/link'
import SocialButton from "@/components/SocialButton";

import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import Twitter from "../../public/twitter.svg";

const Contact = () => {
    return (

        <section className=" mb-8">
            <div className="h-[22rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
                <h1 className="text-6xl text-black font-semibold">Want to work together ?</h1>
                <p className="flex-1 text-black">Feel free to reach out for collaborations or just a friendly hello, contact to my email below <br />
                    <Link href="/" className='border-b border-slate-500 hover:border-none hover:font-semibold'>abdurrohmanfajar10@gmail.com</Link>
                </p>


                <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">

                    <Link href="/" className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto hover:scale-95 hover:bg-transparent hover:border hover:border-black hover:text-black  transition-all duration-300 ease-in-out">  Contact me  </Link>



                    <div className="flex items-center gap-4">
                        <SocialButton bgColor="linkedin">
                            <Linkedin className="w-5 h-5" />
                        </SocialButton>
                        <SocialButton bgColor="instagram">
                            <Instagram className="w-5 h-5" />
                        </SocialButton>
                        <SocialButton bgColor="twitter">
                            <Twitter className="w-5 h-5" />
                        </SocialButton>
                        <SocialButton bgColor="github">
                            <Github className="w-5 h-5" />
                        </SocialButton>
                    </div>
                    <div>
                        <p className='text-slate-600 dark:text-white text-sm font-medium'>Copyright © 2023 - All right reserved by Fajar Abdurrohman and Desing Inspiration by <Link href="https://www.aboghanbari.com/" className='text-pink-400 font-medium text-sm'>aboghanbari</Link></p>
                    </div>

                </div>

            </div>


        </section>

    )
}

export default Contact