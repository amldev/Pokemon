import { Pokemon } from './../interfaces/pokemon.interface';
import { POKEMOM_API_URL, POKEMON_ELEMENTS, POKEMON_LISTS } from './../app.constants';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonesService {
  favoritos: Pokemon[];
  constructor() {
    console.log('Servicio Listo');
  }
  resultBusqueda( patron: string ) {
    const arrP = Array();
    fetch( POKEMON_LISTS)
        .then( (res) => res.json() )
        .then( ( pokemons ) => {
          pokemons.forEach( ( pokemon ) => {
            const name = pokemon.name.toLowerCase();
            if ( name.indexOf( patron.toLowerCase() ) >= 0 ) {
              arrP.push( this.getPokemon( pokemon.id )  );
            }
          } );
        } );
    return arrP;
  }
  getPokemon( idN: number ) {
    const result: Pokemon = {
      id: idN,
      name: '',
      abilities: [],
      img: ''
    };
    fetch( `${POKEMOM_API_URL}pokemon/${idN}/`)
          .then( ( res ) => res.json() )
          .then( ( pokemon ) => {
            const newAbilities: string[] = [];
            const newTypes: string[] = [];
            pokemon.types.forEach( ( type ) => {
              fetch(`POKEMON_ELEMENTS`)
                  .then( ( res ) => res.json() )
                  .then( (elementos ) => {
                    let r = type.type.name;
                    // tslint:disable-next-line: prefer-for-of
                    for ( let i = 0; i < elementos.length; i++ ) {
                      if (elementos[i].clave === type.type.name) {
                        r = elementos[i].valor;
                      }
                    }
                    newTypes.push(r);
                  } );
            } );
            const newPokemon: Pokemon = {
              id: idN,
              name: pokemon.name,
              abilities: newAbilities,
              img : `https://pokeres.bastionbot.org/images/pokemon/${idN}.png`,
              types: newTypes,
              peso: pokemon.weight / 10,
              altura: pokemon.height / 10
            };
            fetch(`${POKEMOM_API_URL}pokemon-species/${idN}/`)
                  .then( (res) => res.json() )
                  .then( ( Charact ) => {
                    Charact.flavor_text_entries.forEach( ( entrie ) => {
                      if ( entrie.language.name === 'es' ) {
                        newPokemon.descripcion = entrie.flavor_text;
                        result.descripcion = entrie.flavor_text;
                      }
                    } );
                  } );
            pokemon.abilities.forEach( ( ability ) => {
              newAbilities.push(ability.ability.name);
            } );
            result.name = newPokemon.name;
            result.img = newPokemon.img;
            result.abilities = newPokemon.abilities;
            result.types = newPokemon.types;
            result.peso = newPokemon.peso;
            result.altura = newPokemon.altura;
            result.descripcion = newPokemon.descripcion;
          } );
    return result;
  }

  getFavoritos() {
    const arrP = Array();
    const arP = [216, 13, 81, 149, 197, 94, 56, 62, 74, 35, 52, 53, 1, 6, 24, 25, 60, 105, 7, 18, 202, 208, 311, 330, 331, 151, 158, 252, 144, 249, 384 ];
    arP.forEach(( num ) => {
      fetch( `${POKEMOM_API_URL}pokemon/${num}/`)
          .then( ( res ) => res.json() )
          .then( ( pokemones ) => {
            const newAbilities: string[] = [];
            const newTypes: string[] = [];
            pokemones.abilities.forEach( ( ability ) => {
              newAbilities.push(ability.ability.name);
            } );
            pokemones.types.forEach( ( type ) => {
              fetch(POKEMON_ELEMENTS)
                  .then( ( res ) => res.json() )
                  .then( (elementos ) => {
                    let r = type.type.name;
                    // tslint:disable-next-line: prefer-for-of
                    for ( let i = 0; i < elementos.length; i++ ) {
                      if (elementos[i].clave === type.type.name) {
                        r = elementos[i].valor;
                      }
                    }
                    newTypes.push(r);
                  } );
            } );
            const newPokemon: Pokemon = {
              id : num,
              name : pokemones.name,
              abilities : newAbilities,
              img : `https://pokeres.bastionbot.org/images/pokemon/${num}.png`,
              types: newTypes
            };
            arrP.push(newPokemon);
          } );
    } );
    this.favoritos = arrP;
    return this.favoritos;
  }
}
