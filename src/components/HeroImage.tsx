import React from 'react'

const HeroImage = () => {
  return (
    <>
    {/* Hero Foto layout */}
    <div className="shadow-brutalism w-full h-[22rem] lg:h-[28rem] rounded-3xl duration-300 transition ease-in-out overflow-hidden group hover:scale-[97%]">
        <div className="h-full group-hover:scale-[110%] duration-300 transition ease-in-out  rounded-3xl p-8 bg-[url('https://ik.imagekit.io/fajarblog/porto/avatar-profile.png')] bg-cover bg-center "/>
    </div>
    </>
  )
}

export default HeroImage;