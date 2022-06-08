const heroes = require("../data/heroes");

export const getHeroesByName = ( superhero = '' ) =>{
    console.log('getHeroesByName called');
    superhero = superhero.toLowerCase();
    if(superhero === '') return [];
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(superhero));

}
