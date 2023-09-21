import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'

function page() {
  return (
    <>
      <NavBar />

      <div className="ml-12">

        <br /><br /><br />
        <h1 id="skills" className='font-extrabold text-[#ffeba7] text-6xl leading-none text-transparent text-center'>
          <a href="#">EXPERIENCE</a>
        </h1>

        <br /><br /><br /><br /><br /><br />

        <div className="">
          <h2 className="text-[#ffeba7] text-3xl font-extrabold ml-4">2019 - 2020 Baltic Design</h2>
          <br />


          <li className="ml-20 mt-10">
            Developed three projects for Baltic Design, a small web development company based in London, UK.
          </li>
          <li className="ml-20 mt-5">
            Projects included a new website for a local coffee shop, a custom Figma design theme for a small business, and <br /> migrating a website from simple JS to MERN Stack.
          </li>
          <li className="ml-20 mt-5">
            Received positive feedback from clients on all three projects.
          </li>
        </div>
        <br /><br />
        <div className="">
          <h2 className="text-[#ffeba7] text-3xl font-extrabold ml-4">2021 - 2022 DevHub</h2>
          <br />

          <li className="ml-20 mt-10">
            Worked on a variety of projects for DevHub, a
            Switzerland-based large marketing agency hiring freelancers .
          </li>
          <li className="ml-20 mt-10">
            Projects included developing a new website for a large financial institution, creating a custom
            e-commerce platform for a fashion retailer, and <br /> migrating a website from Drupal to NextJS.
          </li>
          <li className="ml-20 mt-10">
            Collaborated with a team of developers and designers to create high-quality websites and applications.
          </li>
        </div>
        <br /><br />
        <div className="">
          <h2 className="text-[#ffeba7] text-3xl font-extrabold ml-4">2022 - 2023 K-Work</h2>
          <br />

          <li className="ml-20 mt-10">
            Worked on several projects through K-Work, a korean marketplace where freelancers select works of their choice.
          </li>
          <li className="ml-20 mt-10">
            Projects included developing a new website fora startup, creating some APIs for websites and multiple server-side functions with team.
          </li>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default page