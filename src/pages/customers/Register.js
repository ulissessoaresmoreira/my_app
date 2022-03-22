import React from 'react'
import {useState} from 'react'

import axios from 'axios'

import { makeStyles } from '@material-ui/styles' 
import Button from '@mui/material/Button'

import TextField from '@mui/material/TextField'

const useStyles = makeStyles ({
    wrapper:{       
        marginTop: (15),
        marginBottom: (50)
    }
})

const Register = () => {
    const classes = useStyles()

    const [form, setForm] = useState ({
        nome: {
            value: '',
            error: false,
        },
        funcao:{
            value: '',
            error: false,
        },
    })

    

    const handleInputChange = (e) =>{
        const {name, value} = e.target        

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleRegisterButton = () => {
        let hasError = false
        let newFormState = {   // testar mudar para const e testar tirar o reticencias e colocar {form}
            ...form
        }
        if (!form.nome.value) {
            hasError = true

            newFormState.nome = {
                value: form.nome.value,
                error: true,
                helperText: 'Campo de preenchimento obrigatório!'
            }
        }
        if (!form.funcao.value) {
            hasError = true

            newFormState.funcao = {
                value: form.funcao.value,
                error: true,
                helperText: 'Campo de preenchimento obrigatório!'
            }
        }
        if (hasError) {
            setForm(newFormState)
        }

        
        axios.post('https://reqres.in/api/users', {
            nome: form.nome.value,
            funcao: form.funcao.value,
        }).then((response) => {
            console.log('ok', response)
        })
        
    }
    

    return(
        <>
            <div className={classes.wrapper}>
                <TextField
                    error={form.nome.error}                    
                    helperText={form.nome.error? form.nome.helperText: ''}
                    id="standard-basic" 
                    label="Digite seu nome" 
                    variant="standard" 
                    name="nome" 
                    value={form.nome.value}  
                    onChange={handleInputChange} 
                />
            </div>
            <div className={classes.wrapper}>
                <TextField
                    error={form.funcao.error}
                    helperText={form.funcao.error? form.funcao.helperText: ''}
                    id="standard-basic" 
                    label="Digite seu cargo" 
                    variant="standard" 
                    name="funcao" 
                    value={form.funcao.value} 
                    onChange={handleInputChange} 
                />
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" onClick={handleRegisterButton} >Cadastrar</Button>
            </div>
        </>
    )
}


export default Register