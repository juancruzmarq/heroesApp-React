import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string'

export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { q = ''} = queryString.parse(location.search)

  const [formValue, handleInputChange] = useForm({
    searchText: q,
  })
  
  const {searchText} = formValue;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  }

  return (
    <div>
        <h1>Buscar Heroe</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Buscar</h4>    
            <hr />
            <form onSubmit={handleSearch}>
              <input type="text" placeholder='Buscar un heroe' className='form-control' name='searchText' autoComplete='off' value={searchText} onChange={handleInputChange} />  
              <button type='submit' className='btn btn-outline-primary mt-1'>Buscar</button>
            </form>
          </div>
          <div className="col-7">
            <h4>Resultados</h4>
            <hr />

                    {
                      (q.length === 0) &&
                      <div className="alert alert-info">
                        Busca un heroe
                      </div>
                    }
                    {
                      (q.length > 0 && heroesFiltered.length === 0) &&
                      <div className="alert alert-danger">
                        No hay resultados
                      </div>
                    }
                    {
                      heroesFiltered.map(hero => (
                        <div className="col-5 d-inline-flex" key={hero.id} >
                          <HeroCard hero={hero} {...hero} />
                        </div>
                      ))

                    }

              
            
          </div>
        </div>
    </div>
  )
}
