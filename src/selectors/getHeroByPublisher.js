const heroes = require("../data/heroes");

export const getHeroByPublisher = ( publisher = '' )=>{

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes( publisher ) ){
        throw new Error(`Invalid publisher: ${ publisher }`);
    }

    console.log('getHeroByPublisher called');
    return heroes.filter(hero => hero.publisher === publisher)
}

