import React from 'react'
import { content } from '../constants'
import { Input, Title } from '../components'

const PersonalInfo = () => {
    const { name, desc, form } = content.first
  return (
    <div className='w-full flex items-start flex-col text-left gap-2'>
      <Title name={ name } desc={ desc } />
      <div className="flex flex-col gap-4 w-full mt-4">
        { form.map(input => <Input key={ input.label } label={ input.label } placeholder={ input.placeholder } />) }
      </div>
    </div>
  )
}

export default PersonalInfo