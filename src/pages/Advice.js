import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

import AdviceCard from '../components/AdviceCard'



const Advice = () => {

    const [tips, setTips] = useState([])

    useEffect (() =>{

        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                //const {gato} = response.data.slip.advice
                //console.log(response.data.slip.advice)                
                setTips(response.data.slip.advice)
                console.log(tips)
            })

    }, [tips])


    return (
        <>
            <h1> Advices </h1>
            <AdviceCard 
                tip = {tips}    
            />
        </>
    )
}

export default Advice


/*

*/


