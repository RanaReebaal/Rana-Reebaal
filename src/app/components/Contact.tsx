/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function Contact() {
  return (
    <>
      <h1 id="contact" className='font-extrabold text-6xl leading-none text-transparent text-center'>Contact</h1>

      <br /><br /> <br /><br /><br /><br />

     <center>

     <div className="container" id="containfdfklgbngnl">
        <form action="https://formsubmit.co/rebaalhussain@gmail.com" method="POST">
          <div className="card">
            <a className="singup">Get In Touch</a>
            <div className="sharing">
              <a className="sharing-item sharing-whatsapp" href="https://api.whatsapp.com/send?phone=923115120640">
              <svg className="i i-whatsapp" viewBox="0 0 24 24">
                <circle cx="9" cy="9" r="1"></circle>
                <circle cx="15" cy="15" r="1"></circle>
                <path d="M8 9a7 7 0 0 0 7 7m-8 5a10.5 10.5 0 1 0-4-4l-1 5Z"></path>
              </svg>
              </a>
              <a className="sharing-item sharing-envelope" href="mailto:rebaalhussain@gmail.com">
                <svg className="i i-envelope" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 8-10 5L2 8"></path>
                </svg></a>
                <a className="sharing-item sharing-telegram" href="https://t.me/RanaReebaal">
                <svg className="i i-telegram" viewBox="0 0 24 24">
                  <path d="M12.5 16 9 19.5 7 13l-5.5-2 21-8-4 18-7.5-7 4-3"></path>
                </svg></a>
              <a className="sharing-item sharing-facebook" href="https://www.facebook.com/rebaal.hussain">
                <svg className="i i-facebook" viewBox="0 0 24 24">
                  <path d="M17 14h-3v8h-4v-8H7v-4h3V7a5 5 0 0 1 5-5h3v4h-3q-1 0-1 1v3h4Z"></path>
                </svg></a>
              <a className="sharing-item sharing-tumblr" href="https://github.com/RanaReebaal">
                <svg className="i i-github" viewBox="0 0 20 20">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg></a>
            </div>


            <div className="inputBox1">
              <input type="email" name='email' required />
              <span className="user">Email</span>
            </div>

            <div className="inputBox">
              <input type="text" name='name' required />
              <span>Username</span>
            </div>

            <div className="inputBox">
              <input type="text" name='description' required />
              <span>Description</span>
            </div>



            <button type='submit' className="enter h-[45px] w-[100px] text-[black] cursor-pointer bg-transparent transition-[0.5s] uppercase text-[10px] tracking-[2px] mb-[3em] rounded-[5px] border-2 border-solid border-black hover:bg-black hover:text-white">
              Enter
            </button>
          </div>
        </form>
      </div>

     </center>
    </>
  )
}

export default Contact