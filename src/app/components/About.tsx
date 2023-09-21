/* eslint-disable @next/next/no-img-element */
import React from 'react'

function About() {
    return (
        <>
            {/* <center> */}
            <h1 id="aboutta" className='font-extrabold text-6xl leading-none text-transparent text-center'>About Me</h1>
            <br /><br />
            <div className="company">
                <div className="img">
                    <img src="myprofile11.png" className='abpoutfvf rounded-full scale-75' alt="" />
                </div>
                <div className="company-info text-left">
                    <span id="dffprxxtrptfrtdgvkkkg">Hi, My name is <span className="our">RANA REEBAAL !</span></span>
                    <p id="ddfdssdfg56u8jul" >
                    Experienced in developing and maintaining web3
                decentralized application using popular technologies
                such as (Tailwind Css & Figma for styling, ThreeJS & Rive 
                for animations, NextJS full Stack framework for both 
                client-side and server-side, Typescript as basic
                programming language).
                        &uarr;
                        <a className=' text-blue-400 text-base' href="/skills">Read More</a>
                    </p>
                </div>
            </div>

            <br /><br /><br />




            {/* card */}

            <div className="flex flex-wrap gap-x-16 ml-24" id="cardyhyh">
                <a href="/education" id="inefcrtrrrrfkdklf" target='_blank'>
                    <div className="caddrd">
                        <div className="border"></div>
                        <div className="contegnt">
                            <h2 className='text-2xl font-bold text-white mb-2'>Click Here</h2>
                            <h2 className='mb-2'>To Know More About My</h2>

                            <h3 className='text-4xl text-[#ffdc0e] font-extrabold mt-5'>EDUCATION</h3>
                        </div>
                        <span className="bottom-text">Rana Reebaal</span>
                    </div>
                </a>

                <a href="/experience" id="inefcrtrrrrfkdkgle" target='_blank'>
                    <div className="caddrd">
                        <div className="border"></div>

                        <div className="contgent">

                            <h2 className='text-2xl font-bold text-white mb-2'>Click Here</h2>
                            <h2 className='mb-2'>To Know More About My</h2>

                            <h3 className='text-4xl text-[#ffdc0e] font-extrabold mt-5'>EXPERIENCE</h3>

                            <div className="logo">

                            </div>
                        </div>

                        <span className="bottom-text">Rana Reebaal</span>
                    </div>
                </a>

                <a href="/achivment" id="inefcrtrrrrfkdkele" target='_blank'>
                    <div className="caddrd">
                        <div className="border"></div>

                        <div className="contgent">


                            <h2 className='text-2xl font-bold text-white mb-2'>Click Here</h2>
                            <h2 className='mb-2'>To Know More About My</h2>

                            <h3 className='text-4xl text-[#ffdc0e] font-extrabold mt-5'>Achievements</h3>

                            <div className="logo">

                            </div>
                        </div>

                        <span className="bottom-text">Rana Reebaal</span>
                    </div>
                </a>

            </div>


            {/* </center> */}
        </>
    )
}

export default About
