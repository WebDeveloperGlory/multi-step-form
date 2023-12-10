import React from 'react'
import { content } from '../constants';

const Billing = ({ type, billing, setBilling, billingType }) => {
    const { icon, plan, pricing } = type;
    const { bonus } = content.second;

  return (
    <div
        onClick={() => setBilling(plan)}
        key={ plan }
        className='md:basis-1/3'
    >
        <div className={`basis-full text-left hover:border-[#473dff] p-4 border-[0.5px] rounded-md ${ billing !== plan ? 'border-[#9699ab] border-opacity-50' : 'bg-[#f0f6ff] bg-opacity-70 border-[#473dff]' } cursor-pointer`}>
            <div className="flex gap-3 md:flex-col">
                <img src={ icon } alt="type icon" className='md:w-10 md:mb-4' />
                <div>
                    <h1 className='font-bold text-[#02295a] text-lg md:text-base'>{ plan }</h1>
                    <p className='opacity-80'>{ pricing[ billingType ] }</p>
                    <p className='text-sm md:text-xs font-medium text-[#02295a]'>{ billingType === "yearly" && bonus }</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Billing