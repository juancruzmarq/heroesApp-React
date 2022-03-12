import React,{useMemo} from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';



export const HeroeScreen = () => {
  
  const navigate = useNavigate()
  const {heroId} = useParams();
  const {id, superhero, publisher, alter_ego, first_appearance, characters} = useMemo(() => getHeroById(heroId), [heroId])
  
  const imagePath = `/assets/${id}.jpg`;
 
  if(!heroId){
    return <Navigate to="/"/>
  }

  const handleReturn = () =>{
    navigate(-1)
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img //src={imagePath} //desde public//assets
        alt={superhero}
        src={heroImages(`./${id}.jpg`)}
        className="img-thumbnail"/>  
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group'>
          <li className='list-group-item'><b>Alter ego:</b> {alter_ego}</li>
          <li className='list-group-item'><b>First Appearance: </b> {first_appearance}</li>
          <li className='list-group-item'><b>Publisher: </b> {publisher}</li>  
        </ul>  
        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>
        <button className='btn btn-outline-info' onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  )
}
