import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

function page() {
  return (
    <>
      <NavBar />

      <br /><br /><br />
      <h1 id="skills" className='font-extrabold text-[#ffeba7] text-6xl leading-none text-transparent text-center'>
        <a href="#">EDUCATION</a>
      </h1>

      <br /><br /><br /><br /><br /><br />


      <div className="ml-12">

        {/* basic skills */}
        <div className="">
          <h2 className="text-[#ffeba7] text-3xl font-extrabold ml-4">2019 - 2020 Matriculation</h2>
          <br />
          <h2 className="text-[#ffeba7] text-2xl font-thin ml-4">MATRIC WITH SCIENCE</h2>

          <li className="ml-20 mt-10">
            I passed my matriculation exam with total of 70 percent marks.
          </li>
          <li className="ml-20 mt-5">
            Subjects combination (Physics, Chemistry, Mathmatics and Biology)
          </li>
          <li className="ml-20 mt-5">
            Office Suite (Proficiency in Ms word, excel, power point,
            Google docx, sheets, solid experience in presentations
            building using canva & Gamma AI)
          </li>
        </div>
        <br /><br />
        <div className="">
          <h2 className="text-[#ffeba7] text-3xl font-extrabold ml-4">2020 - 2023 Diploma of Associate Engineering</h2>
          <br />
          <h2 className="text-[#ffeba7] text-2xl font-thin ml-4">MECHATRONICS TECHNOLOGY</h2>

          <li className="ml-20 mt-10">
            I passed my first year of DAE with 991/1100 marks with total of 89% marks (Grade A+).
          </li>
          <li className="ml-20 mt-5">
            In my second year of DAE I got 1035/1100 marks with total of 91% marks (Grade A+).
          </li>
          <li className="ml-20 mt-5">
            Final years result is awaited as of august 2023.
          </li>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page
