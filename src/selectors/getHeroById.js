
const heroes = require("../data/heroes");


export const getHeroById = ( id = '' )=>{
    console.log('getHeroById called');
    //Leer todos los ids de archivo heroes y meterlos en un array
    //const heroesIds = Object.values(heroes).map(hero => hero.id);
    return heroes.find(hero => hero.id === id)
}

