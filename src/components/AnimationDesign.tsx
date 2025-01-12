import YouTubeEmbed from "@/components/YoutubeEmbed";

const AnimationDesign = () => {
  return (
    <section id="animation" className="mb-8 pt-5 border-t-2 border-black">
      {/* Foto Banner tambahan, Web Design , Figma dll. */}
      <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold mb-0 lg:mb-5 text-gray-900 dark:text-white">
            Web Design Figma
      </h1>
      <div className="shadow-brutalism w-full h-[16rem]  lg:h-[17rem] mb-5 rounded-3xl duration-300 transition ease-in-out border border-1 border-slate-500   overflow-hidden group hover:scale-[97%]">
        <div className="h-full group-hover:scale-[103%] duration-300 transition ease-in-out  rounded-3xl p-8 bg-[url('https://ik.imagekit.io/fajarblog/porto/portofolio/banner.jpeg')] bg-cover bg-center "/>
      </div>
        <h1 className="lg:text-3xl md:text-2xl text-lg text-center font-bold mb-2 lg:mb-5 text-gray-900 dark:text-white">
            2D Animation Project
        </h1>
        <div className="h-[60rem] lg:h-[30rem] shadow-brutalism w-auto rounded-3xl p-2 lg:p-10 
            flex flex-col lg:flex-row gap-16 items-center justify-center 
            g-[url('https://ik.imagekit.io/fajarblog/porto//gradient-bg.jpg')] bg-cover">   
            {/* Youtube Embed Component */}
            <YouTubeEmbed videoId="7hqffNLydc8" title="Kominfo 2D Animation Bootcamp - Fajar Abdurrohman" />
            <YouTubeEmbed videoId="AWrRxuIc6kA" title="Ninu Kucing Pemalas - Fajar Abdurrohman" />
        </div>
  </section>
  )
}

export default AnimationDesign