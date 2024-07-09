import React from 'react'
import { useState } from 'react'
import { images } from '..'

const Products = () => {
    const [select,setSelect] = useState(0)
    const categories = ['Phones and Tablets','Gadget Accessories','Cosmetics & Beauty']
    const selectCategory = (index) => {
        setSelect(index)
    }

  return (
    <div className=' mt-8'>
        <section className='flex justify-between items-center'>
            <h3 className=' font-bold text-2xl pl-3'>Featured Categories</h3>
            <ul className='flex gap-8 text-[#414042]'>
                <li className={`${select === 0 ? 'bg-[#9B045B] bg-opacity-20 ' : '' }  cursor-pointer px-3 py-[2px] rounded-md transition-all duration-200`} onClick={() => selectCategory(0)}>Phones and Tablets</li>
                <li className={`${select === 1 ? 'bg-[#9B045B] bg-opacity-20 ' : '' } cursor-pointer px-3 py-[2px] rounded-md  transition-all duration-200`}  onClick={() => selectCategory(1)} >Gadget Accessories</li>
                <li className={`${select === 2 ? 'bg-[#9B045B] bg-opacity-20 ' : '' } cursor-pointer px-3 py-[2px] rounded-md transition-all duration-200  `} onClick={() => selectCategory(2)}>Cosmetics & Beauty</li>
            </ul>
        </section>
        <section className=' mt-7 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-6'>
            {
                images.map((image,index) => (
                    <div key={index} className=' mt-5 border-solid border-2 rounded-lg border-[#414042] border-opacity-40 px-5 pb-7 pt-5'>
                        <img src={image.image} alt="" className=''/>
                        <div className=' text-2xl font-normal mt-4 mb-2'>{image.name}</div>
                        <div className=' font-bold text-3xl mb-2'>${image.price}.00</div>
                        <button className=' bg-[#9B045B] text-white w-full py-3 rounded-xl'>Add to cart</button>
                    </div>
                )) 
            }
        </section>
    </div>
  )
}

export default Products