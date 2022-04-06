import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

import AdviceCard from '../components/AdviceCard'
import Fab from '@mui/material/Fab'
//import CircularProgress from '@mui/material/CircularProgress'
import UpdateIcon from '@mui/icons-material/Update'

const Advice = () => {
    const [tips, setTips] = useState([])
    //const [progress, setProgress] = useState(0)

    useEffect (() =>{
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                console.log(response)
                setTips(response.data.slip.advice)
                console.log(tips)
            })            
    }, [tips])

    const handleClick = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                setTips(response.data.slip.advice)
                console.log(tips)
            })
    }

    return (
        <>
            <h1> Advices  </h1>
            <AdviceCard 
                tip = {tips}                    
            />
            <Fab color="primary" aria-label="add" onClick={handleClick} >
                <UpdateIcon />
            </Fab>
        </>
    )
}

export default Advice





