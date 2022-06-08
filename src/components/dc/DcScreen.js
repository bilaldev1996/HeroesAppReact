import React  from 'react'
import HeroList from '../hero/HeroList'

const DcScreen = () => {
    return (
        <div className="my-5">
            <h1 className='animate__animated animate__jackInTheBox'>DcScreen</h1>
            <hr />
            <HeroList publisher={ 'DC Comics' } />
        </div>
    )
}

export default DcScreen
