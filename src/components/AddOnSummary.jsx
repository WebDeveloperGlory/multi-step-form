import React from 'react'
import { content } from '../constants';

const AddOnSummary = ({ addOn, billingType }) => {
    const setAddOnPrice = ( addOn ) => {
        const available = [ 'Online service', 'Larger storage', 'Customizable Profile' ];
        let current = content.third.types[ available.indexOf( addOn ) ];

        return current.pricing[ billingType ];
    }

  return (
    <div className='mt-4 flex justify-between items-center text-[#9699ab]'>
        <p className='text-base'>{ addOn }</p>
        <p className="font-medium text-sm">{ setAddOnPrice( addOn ) }</p>
    </div>
  )
}

export default AddOnSummary