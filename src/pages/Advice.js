import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

import AdviceCard from '../components/AdviceCard'



const Advice = () => {

    const [tips, setTips] = useState([])

    useEffect (() =>{

        axios.get('https://api.adviceslip.com/advice')
            .then((slip) => {
                //const {slips} = advice
                console.log(slip)
                //setTips(conselho)
            })

    }, [setTips])


    return (
        <>
            <h1> Advices </h1>
            
                    <AdviceCard 
                            
                    />               
            
        </>
    )
}

export default Advice
