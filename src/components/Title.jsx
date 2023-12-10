import React from 'react'

const Title = ({ name, desc }) => {
  return (
    <div className='w-full flex items-start flex-col text-left gap-2'>
      <h1 className='capitalize text-[#02295a] font-bold text-2xl'>{ name }</h1>
      <p className='text-[#9699ab] text-lg md:text-base'>{ desc }</p>
    </div>
  )
}

export default Title