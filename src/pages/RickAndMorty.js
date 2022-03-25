import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

import RickAndMortyCard from '../components/RickAndMortyCard'
import Grid from '@mui/material/Grid'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles ((theme) => ({
    card: {
        margin: 1,
    }
}))



const RickAndMorty = () => {
    const classes = useStyles
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
        
        <Grid container>
            <Grid item xs={12} style={{background:'lightgrey'}}> 
            </Grid>
            {
                characters.map(character => (
                    <Grid item xs={12} sm={8} md={6} lg={4} className={classes.card}>
                        <RickAndMortyCard 
                            name = {character.name}
                            status = {character.status}
                            species = {character.species}
                            location = {character.location}
                            image = {character.image}
                        />
                    </Grid>  
                ))
            }
        </Grid> 
    )
}



export default RickAndMorty

