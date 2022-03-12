import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreens = () => {
  return (
    <div>
        <h1 className='text-center mt-4'>Marvel Heroes</h1>
        <hr />
        <HeroList publisher='Marvel Comics'/>
    </div>
  )
}
