import React from 'react'
import ProjectPreview from "@/components/ProjectPreview";

const ProjectMain = () => {
  return (
    <section id="project" className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4 ">
        <ProjectPreview
        name="Flexbox Interaktif"
        description="Belajar Flexbox Interaktif dengan Next.js, Tailwindcss, Typescript, dan Frame Motion. Deployed on Netlify!"
        imageUrl="portofolio/2.png"
        bgColor="#"
        dark
        url="https://flexbox-interaktif.netlify.app/"
        />
        <ProjectPreview
        name="Shoe Store Web Apps."
        description="Project hariSenin.com build with Next.js, Tailwindcss, Strapi for CMS, and Stripe Payment"
        imageUrl="portofolio/shoe-store.png"
        bgColor="#685cdd"
        dark
        url="https://github.com/fajar2510/project9-shoes-marketf"
        />
        <ProjectPreview
        name="Clothing E-Commerce"
        description="Deployed in Netlify! Build a website simple Clothing Store, with React.js, Sass, and Firebase"
        imageUrl="portofolio/crwn-clothing.png"
        bgColor="#E1306C"
        url="https://clothing-web-app.netlify.app/"
        dark
        />
        {/* <ProjectPreview
        name="Stock Blood Bank Admin"
        description="System Information Executive for Blood Bank Management case study Rumah Sakit Islam Surabaya (MySql, CodeIgniter, Bootstrap)"
        imageUrl="portofolio/siebankdarah1.png"
        bgColor="#E1306C"
        url="https://github.com/fajar2510/Stock-blood-rsibd"
        dark
        /> */}
        <ProjectPreview
        name="SIG Tenaga Kerja Jatim"
        description="Interactive Map Cluster Marker with Geographic Information Systems for Labor in East Java with Leaflet.js (MySql, CodeIgniter, Bootstrap)"
        imageUrl="portofolio/penta-map1.png"
        bgColor="#4e4e56"
        url="https://fajarnext.my.id/pentamap/"
        dark
        />
        <ProjectPreview
        name="System Information Accounting"
        description="System Informtion Accounting with Debet and Credit, and Balance Sheet (MySql, PHP Nattive, Bootstrap)"
        imageUrl="portofolio/siakuntansi1.png"
        bgColor="#938400"
        url="https://fajarnext.my.id/siakuntansi"
        dark
        />
        <ProjectPreview
        name="Aiku Psycology Consultation"
        description="Aiku Android App Psycology consultation online with Flutter(Dart), CodeIgniter, MySql, and Firebase Auth"
        imageUrl="portofolio/aiku1.png"
        bgColor="#65BCE7"
        url="https://drive.google.com/file/d/15bjWCoaVqfwC0JEIWP8G4xqhlnXkJ0OY/view?usp=sharing"
        dark
        />

  </section>
  )
}

export default ProjectMain