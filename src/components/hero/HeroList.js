import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher='Marvel Comics'}) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);
    console.log(heroes)
    return (
        <div className='row rows-cols-1 row-cols-md-3 row-cols-sm-1 g-3'>
                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero}/>
                    ))
                }
        </div>
    )
}
