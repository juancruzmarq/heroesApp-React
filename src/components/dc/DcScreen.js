import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
  return (
    <div>
        <h1 className='text-center mt-4'>Dc Heroes</h1>
        <hr />
        <HeroList publisher='DC Comics'/>
    </div>
  )
}
