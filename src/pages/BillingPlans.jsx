import React, { useRef, useState } from 'react'
import { Billing, Title } from '../components'
import { content } from '../constants'

const BillingPlans = ({ billing, setBilling, billingType, setBillingType }) => {
    const windowsSize = useRef([ window.innerHeight, window.innerWidth ]);

    const { name, desc, types } = content.second;
    console.log(windowsSize)
  return (
    <div className=''>
        <Title name={ name } desc={ desc } />
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6'>
            { types.map(type => <Billing key={ type.plan } type={ type } billing={ billing } setBilling={ setBilling } billingType={ billingType } />)}
        </div>
        <div className='flex justify-center items-center gap-4 mt-6 bg-[#f0f6ff] text-lg font-medium py-4'>
          <p className={`${ billingType === 'monthly' ? 'text[#]' : 'opacity-50'}`}>{ content.second.switch[0] }</p>
          <div>

          </div>
          <p className={`${ billingType === 'yearly' ? 'text[#]' : 'opacity-50'}`}>{ content.second.switch[1] }</p>
        </div>
    </div>
  )
}

export default BillingPlans