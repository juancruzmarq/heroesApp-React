import { heroes } from "../data/Heroes"


export const getHeroById = (id) =>{
    console.log('getHeroById called with id: ', id)
    return heroes.find(hero => hero.id === id);
}