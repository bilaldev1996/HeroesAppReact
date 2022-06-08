import React from 'react'
import HeroList from '../hero/HeroList'

const MarvelScreen = () => {
    return (
        <div className='my-4'>
            <h1 className="animate__animated animate__flip">MarvelScreen</h1>
            <hr />
            <HeroList publisher={ 'Marvel Comics' } />
        </div>
    )
}

export default MarvelScreen
