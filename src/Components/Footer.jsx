import React from 'react'

const Footer = () => {
  return (
    <footer className=' max-w-[1440px] m-auto mt-48'>
        <section className=' m-auto w-[85%] flex items-center justify-between py-8 md:flex-row flex-col'>
            <div>
            <h3>Subscribe to our newsletter</h3>
            <p>Subscribe to our newsletter & be the first to know about our new arrivals and discounts.</p>

            </div>
            <form className=' py-2 bg-white px-3 rounded-full w-1/2 text-[#414042] flex justify-between'>
                <input type="email" placeholder='Enter your email' className=' bg-white outline-none placeholder:text-[#414042] indent-3'/>
                <button className=' text-white bg-[#9B045B] px-3 py-3 rounded-full'>Subscribe</button>
            </form>
        </section>
    </footer>
  )
}

export default Footer
