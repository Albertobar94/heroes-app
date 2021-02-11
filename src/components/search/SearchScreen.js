import React, { useMemo } from 'react';
import queryString from "query-string";
import { useLocation } from 'react-router-dom';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search )

    const [ formValues, handleInputChange, reset ] = useForm( {
        searchText: q
    } );

    const { searchText } = formValues;

    
    
    const heroesFiltered = useMemo(() => getHeroByName( q ), [q]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`)

    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-4">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find you hero"
                            className="form-control"
                            name='searchText'
                            value={ searchText }
                            autoComplete='off'
                            onChange={ handleInputChange }
                        />

                        <button 
                            className="btn m-1 btn-outline-primary btn-block"
                            type='submit'
                        >
                        Search
                        </button>
                    </form>
                </div>
                <div className="col-8">
                    <h4>Results</h4>
                    <hr/>
                    {   ( q === '') 
                        &&  <div className="alert alert-info">
                                Seach a hero
                            </div>
                    }
                    {
                        ( q !== '' && heroesFiltered.length === 0 )
                        &&  <div className="alert alert-danger">
                                There is no hero with { q }
                            </div>

                    }

                        {
                            heroesFiltered.map( hero => (
                                <HeroCard
                                    key={ hero.id}
                                    {...hero}
                                />
                            ))
                        }

                </div>
            </div>
        </div>
    )
}
