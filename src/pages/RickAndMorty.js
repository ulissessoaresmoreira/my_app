import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

import RickAndMortyCard from '../components/RickAndMortyCard'



const RickAndMorty = () => {
    const [characters, setCharacters] = useState([])
    
    

    useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character')
    .then(({data}) =>{
        const {results} = data
        console.log(results)
        setCharacters(results)
    })
    
            
}, [setCharacters]) // O USEFFECT É EXECUTADO SEMPRE QUE O CONTEÚDO DESSE ARRAY MUDAR



    return (
        
            <>                           
                <h1>Characters Rick and Morty</h1>
                {
                    characters.map(character => (

                        <RickAndMortyCard 
                        name = {character.name}
                        status = {character.status}
                        species = {character.species}
                        location = {character.location}
                        image = {character.image}
                        
                        />

                    ))
                }
            </>
            
        
    )
}



export default RickAndMorty

