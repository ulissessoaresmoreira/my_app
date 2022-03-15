import React from 'react'
import {useState, useEffect} from 'react'

import axios from 'axios'

const Marvel = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() =>{
        axios.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyCG63WkohIm7PjwkhcTMnBBRhzxwAapOdw&callback=initMap')
            .then(response =>{
                console.log(response)
            })

    })

    return(
        <></>
    )
}

export default Marvel