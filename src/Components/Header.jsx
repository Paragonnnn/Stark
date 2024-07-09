import React from 'react'
import Logo from '../assets/Logo.png'
import SearchLogo from '../assets/SVG/SearchLogo'
import PersonLogo from '../assets/PersonLogo.png'
import CartLogo from '../assets/CartLogo.png'
import QuestionMarkLogo from '../assets/QuestionMarkLogo.png'


const Header = () => {
  return (
    <header className=' flex-col sm:flex-row flex justify-between items-center mb-7 sticky top-0 z-40 bg-white py-4'>
        <img src={Logo} alt="" />
        <section className='flex bg-[#DDD9D9] p-2 px-3 gap-3 items-center rounded-full w-full sm:w-[633px] focus:outline-1 focus:outline focus:outline-[#414042]'>
            <SearchLogo />
            <input type="text" placeholder='Search' className=' bg-[#DDD9D9] placeholder:text-[#414042] w-full outline-none'/>
        </section>
        <section className=' flex gap-4'>
            <img src={PersonLogo} alt="" />
            <img src={CartLogo} alt="" />
            <img src={QuestionMarkLogo} alt="" />
        </section>
    </header>
  )
}

export default Header