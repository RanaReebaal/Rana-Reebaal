/* eslint-disable @next/next/no-document-import-in-page */
import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

function One() {
    return (
        <>
        {/* <span className="typewriter"></span> */}
            <NavBar />
            <div className="section-center">
                <h1 className="mb-0 text-white font-extrabold leading-none text-transparent  text-center" >Post-Modern Full Stack Applications Developer & Architect.</h1>
                <br />
                <center>
                    <h2 className='text-yellow-200 duration-300 text-xl cursor-pointer mb-6 mt-3  font-bold ml-4'> I am a Post-Modern Full Stack Applications Developer & Architect with <br /> experience in building 
                        decentralized applications and a creativethinker <br /> with a proven 
                        track record of success indelivering high-quality projects. </h2>
                </center>

                <button className="bg-slate-600 hover:scale-125 p-3 rounded-md duration-300 text-xl cursor-pointer mb-6 mt-3  font-bold mr-8 hover:shadow-amber-100 hover:shadow-md hover:font-extrabold"><a href="skills">Get Started</a></button>
                <button className="bg-slate-600 hover:scale-125 p-3 rounded-md duration-300 text-xl cursor-pointer mb-6 mt-3  font-bold mr-8 hover:shadow-amber-100 hover:shadow-md hover:font-extrabold"><a href="skills">Learn More</a></button>
            </div>
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br />

            <About />



            <br /><br /><br /><br /><br /><br /><br />

            <Skills />

            <br /><br /><br /><br /><br /><br /><br /><br />

            <Project />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <Contact />

            <br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <Footer />

        </>
    )
}

export default One
