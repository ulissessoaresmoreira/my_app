import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'


const Translate = () => {
    const [text, setText] = useState([])
    const [textTranslated, setTextTranslated] = useState([])
    const [autor, setAutor] = useState([])

    useEffect(() => {
        axios.get('https://api.funtranslations.com/translate/yoda.json?text=Master%20Obiwan%20has%20lost%20a%20planet.')
            .then((response) => {
                console.log(response.data.contents.text)
                setText(response.data.contents.text)                
                console.log(response.data.contents.translated)
                setTextTranslated(response.data.contents.translated)
                console.log(response.data.contents.translation)
                setAutor(response.data.contents.translation)
            })
    }, [])


    return(
        <>
            <h1>  </h1>
            <div>{text}</div>
            <div>{textTranslated}</div>
            <div>{autor}</div>
        </>
    )
}


export default Translate