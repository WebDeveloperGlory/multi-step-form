import React, { useState } from 'react'
import { checkmarkIcon } from '../assets';

const AddOn = ({ content, billingType, addOns, setAddOns }) => {
    const [ clicked, setClicked ] = useState( addOns.includes(content.title) );

    const handleClick = ( text ) => {
        setClicked((prev) => !prev);

        if( !addOns.includes(text) ) {
            setAddOns([ ...addOns, text ])
        } else {
            let arr = addOns;
            setAddOns( arr.filter(( val ) => val !== text) );
        }
    }
    const { title, desc, pricing } = content;
  return (
    <div 
        onClick={ () => handleClick( title ) }
        className={`basis-full flex gap-1 py-4 px-2 border-[1px] cursor-pointer hover:border-[#473dff] rounded-lg ${ clicked && 'border-[#473dff] bg-[#f0f6ff]' }`}
    >
        <div
            className="basis-1/6 flex items-center justify-center"
        >
            <div className={`${ clicked && 'bg-[#473dff]'} w-6 h-6 border-[0.5px] border-opacity-80 rounded-lg`}>
                {/* <img src={ checkmarkIcon } alt="checkmark" className='w-6 h-6' /> */}
            </div>
        </div>
        <div className="basis-4/6 flex items-start justify-start text-left flex-col">
            <h1 className='font-semibold text-lg text-[#02295a]'>{ title }</h1>
            <p className='text-sm text-[#9699ab]'>{ desc }</p>
        </div>
        <div className="basis-1/6 flex items-center justify-center text-[#473dff] font-medium text-sm">{ pricing[ billingType ] }</div>
    </div>
  )
}

export default AddOn