import React from 'react'
import { AddOnSummary, Title } from '../components'
import { content } from '../constants'

const Summary = ({ billing, billingType, addOns, setDisplay }) => {
    const { name, desc } = content.fourth;
    const plans = ["Arcade", "Advanced", "Pro"];
    const planPrice = billing ? content.second.types[ plans.indexOf( billing ) ].pricing[ billingType ] : "undefined";

    const setTotal = () => {
        let total = 0;
        const available = [ 'Online service', 'Larger storage', 'Customizable Profile' ];

        const currentPlan = billing ? content.second.types[ plans.indexOf( billing ) ].value[ billingType ] : 0;

        if ( addOns.length > 1 ) {
            addOns.forEach(element => {
                let current = content.third.types[ available.indexOf( element ) ];
                total += current.value[ billingType ];
            });
        } else if ( addOns.length === 1 ) {
            let current = content.third.types[ available.indexOf( addOns[ 0 ] ) ];
            total += current.value[ billingType ];
        }

        total += currentPlan;

        return total;
    }

return (
    <div>
        <Title name={ name } desc={ desc } />
        <div className="mt-6 bg-[#f0f6ff] p-4 text-left">
            <div className='flex justify-between items-center border-b-2 border-[#9699ab] pb-4'>
                <div>
                    <h1 className='text-[#02295a] text-lg md:text-base font-semibold capitalize'>{ billing } ({ billingType})</h1>
                    <p 
                        onClick={() => setDisplay("select plans")}
                        className='underline text-[#9699ab] text-sm cursor-pointer hover:text-[#473dff]'
                    >Change</p>
                </div>
                <p className="text-[#02295a] font-medium text-sm">{ planPrice }</p>
            </div>

            { addOns.length > 0 && addOns.map( addOn => <AddOnSummary key={ addOn } addOn={ addOn } billingType={ billingType } /> ) }
        </div>
        <div className='flex justify-between items-center text-[#9699ab] p-4 text-left'>
            <h1>{`Total ( per ${ billingType === 'monthly' ? "month" : 'year' } )`}</h1>
            <p className="text-[#473dff] font-medium text-lg">{ `${billingType === 'yearly' ? '' : '+'}$${ setTotal() }/${ billingType === 'yearly' ? 'yr' : 'mo'}` }</p>
        </div>
    </div>
  )
}

export default Summary