import { getHeroByPublisher } from "../../selectors/getHeroByPublisher"
import PropTypes from 'prop-types'
import HeroCard from "./HeroCard"
import { useMemo } from "react"

const HeroList = ( { publisher } ) => {

    //const heroes = getHeroByPublisher( publisher )

    const heroes = useMemo( () => getHeroByPublisher( publisher ), [ publisher ] )


    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( (hero) =>(
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
}

export default HeroList




