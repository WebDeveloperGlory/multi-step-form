import React from 'react'
import { thankYouIcon } from '../assets'
import { content } from '../constants'

const Thanks = () => {
    const { name, desc } = content.final
  return (
    <div className='flex justify-center items-center flex-col gap-4 h-full my-12 md:my-0'>
        <img src={ thankYouIcon } alt="thank you icon" className='w-16 h-16' />
        <h1 className='mt-2 capitalize text-[#02295a] font-bold text-2xl md:text-3xl'>{ name }</h1>
        <p className='text-[#9699ab] font-medium'>{ desc }</p>
    </div>
  )
}

export default Thanks