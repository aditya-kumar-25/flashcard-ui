import React from 'react'
import { GoHome } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";

function PathTracer() {
  return (
    <div className='flex flex-wrap gap-3 items-center my-14 font-semibold'>
      <GoHome className='text-gray-500' size={30}/>
      <div className='flex gap-3 items-center'>
        <FaChevronRight />
        <p className='text-gray-500'>Flashcard</p>
      </div>
      <div className='flex gap-3 items-center'>
        <FaChevronRight />
      <p className='text-gray-500'>Mathematics</p>
      </div>
      <div className='flex gap-3 items-center'>
        <FaChevronRight />
      <p className='primary-text-color'>Relation and Function</p>
      </div>

    </div>
  )
}

export default PathTracer
