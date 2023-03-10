import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {FaMicrophone} from "react-icons/fa"
export default function HomeSearch() {
  return (
    <>
    <form className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'>
      <AiOutlineSearch className='text-xl mr-3 text-gray-500'/>
      <input type="text" className='flex-grow focus:outline-none ' />
      <FaMicrophone className='text-lg'/>
    </form>
    <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center mt-8'>
        <button className='btn'>Google Search</button>
        <button className='btn'>I Am Feeling Lucky</button>
    </div>
    </>
  )
}
