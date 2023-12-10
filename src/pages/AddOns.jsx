import React from 'react'
import { AddOn, Title } from '../components'
import { content } from '../constants'

const AddOns = ({ billingType, addOns, setAddOns }) => {
    const { name, desc, types } = content.third;
  return (
    <div>
        <Title name={ name } desc={ desc } />
        <div className='flex flex-col gap-4 mt-6'>
          { types.map(type => <AddOn key={ type.title } content={ type } billingType={ billingType } addOns={ addOns } setAddOns={ setAddOns } />)}
        </div>
    </div>
  )
}

export default AddOns