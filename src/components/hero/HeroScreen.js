import { useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { heroesImages } from '../../helpers/heroImages'
import { getHeroById } from '../../selectors/getHeroById'
//import batman from '../../assets/dc-batman.jpg' Recurso estático


const HeroScreen = () => {

    //Leer parametros de la url
    const { heroId } = useParams()

    //const hero = getHeroById(heroId)

    //Usar memo para no volver a renderizar el componente si no cambia el heroId
    const hero = useMemo(() => getHeroById(heroId), [heroId])

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    }  = hero

    //const imagePath = `/assets/${id}.jpg` Desde public/assets/


    if(!hero) return <Navigate to="/" />

    return (
        <>
            {/* <HeroCard {...hero} /> */}
            {/* Crear div para que muestre la imagen con la informacion del heroe */}
            <div className="row mt-4">
                <div className="col-md-4">
                    <img src={ heroesImages(`./${id}.jpg`) } className="img-thumbnail animate__animated animate__fadeInLeft" alt={ superhero } />
                </div>
                <div className="col-md-8 animate__animated animate__fadeInRight">
                    <h2>{ superhero }</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="font-weight-bold">Alter ego: </span>
                            { alter_ego }
                        </li>
                        <li className="list-group-item">
                            <span className="font-weight-bold">Publisher: </span>
                            { publisher }
                        </li>
                        <li className="list-group-item">
                            <span className="font-weight-bold">First appearance: </span>
                            { first_appearance }
                        </li>
                    </ul>

                    <h5 className='mt-2'>Characters</h5>
                    <p>{ characters }</p>

                    {/* Crear boton para volver a la pantalla anterior */}
                    <Link to={ -1 } className="btn btn-outline-primary mt-3">Volver</Link>
                </div>
            </div>
        </> 
    )
}

export default HeroScreen
