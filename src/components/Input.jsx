import React from 'react'

const Input = ({ label, placeholder }) => {
  return (
    <div className='flex flex-col w-full gap-1'>
        <label className='text-[#02295a] text-sm font-medium'>{ label }</label>
        <input type="text" placeholder={ placeholder } className='hover:border-[#473dff] w-full border-[0.5px] border-opacity-50 rounded-md border-[#9699ab] px-4 py-2 font-semibold text-[#02295a]' />
    </div>
  )
}

export default Input