import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { makeStyles } from '@material-ui/styles' 

import Toasty from '../../components/Toasty'
import {Button, TextField} from '@mui/material'
import CircularIntegration from '../../components/CircularIntegration'


const useStyles = makeStyles ({
    wrapper:{       
        marginTop: (15),
        marginBottom: (50),
        
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

    const [openToasty, setOpenToasty] = useState (false) 
    

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
            return setForm(newFormState)
        }

        
        axios.post('https://reqres.in/api/users', {
            nome: form.nome.value,
            funcao: form.funcao.value,
        }).then((response) => {
            console.log('ok', response)
            setOpenToasty(true)
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
                <Button 
                    variant="contained" 
                    onClick={handleRegisterButton}>
                        Cadastrar                        
                        <CircularIntegration />
                </Button>
            </div>
            <Toasty open={openToasty} severity="success" text="Cadastro Realizado com Sucesso!" />
        </>
    )
}


export default Register