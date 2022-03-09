import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

import CharactersCard from '../components/CharactersCard'


const Characters = () => {
    const [characters, setCharacters] = useState([])

    console.log(Characters)

    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data))
        
    




    return (
        
            <>                           
                <h1>Characters</h1>
                {
                    characters.map(character => (

                        <CharactersCard 
                        name = {character.name}
                        status = {character.status}
                        species = {character.species}
                        avatar = {character.image}
                        />

                    ))
                }
            </>
            
        
    )
}



export default Characters