import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import HeroCard from '../hero/HeroCard'
import queryString from 'query-string'

const SearchScreen = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const  { q = '' } = queryString.parse(location.search)


    const [values, handleInputChange] = useForm({
        searchText: q
    })
    
    const { searchText } = values
    
    const [ heroe, setHeroe ] = useState('') 


    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`?q=${searchText}`)
        setHeroe(getHeroesByName(q))
        //reset()
    }

    useEffect(() => {
        if(q === '') return
        setHeroe(getHeroesByName(q))
    }, [q])

    
    return (
        <>
            <h1>Search Hero</h1>
            <hr />

            <div className="row">

                <div className="col-md-5">
                    <h4>Search</h4>
                    <hr />
                    <form className="form-group" onSubmit={ handleSearch }>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search hero..."
                            autoComplete='off'
                            value = { searchText }
                            onChange = { (e)=> handleInputChange(e) }
                        />

                        <button className="btn btn-primary mt-3 w-100" type="submit">Search</button>
                    </form>
                </div>
                <div className="col-md-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        heroe.length ? heroe.map(hero => (
                            <HeroCard key={ hero.id } { ...hero } />
                        ))
                        :
                        <div className="text-center alert alert-danger">
                            { q === '' ? <h4>Please enter a hero name</h4> : <h4>No results found</h4> }
                        </div>

                    }
                </div>
            </div>
        </>
    )
}

export default SearchScreen
