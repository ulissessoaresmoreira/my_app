import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/styles' 
import {useParams} from 'react-router-dom'

import Toasty from '../../components/Toasty'
import {Button, TextField} from '@mui/material'

const useStyles = makeStyles ({
    wrapper:{       
        marginTop: (15),
        marginBottom: (50)
    }
})

const CustomersEdit = () => {
    const classes = useStyles()   // BOAS PRÁTICAS, PRIMEIRO COLOCAR AS DEFINIÇÕES DE HOOKS, DEPOIS DEFINIÇÕES DE ESTADO, USEEFFECT E DEPOIS OS HANDLE
    const {id} = useParams()
    
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

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`) // NESTA URL FOI COM STRING LITERAL E ID PQ VAI PEGAR UM ID ESPECÍFICO QUANDO CLICADO NA PÁGINA DE LISTA DE CLIENTES
        .then((response)=>{
            const {data} = response.data
            //console.log(data)            
            setForm({
                nome: {
                    value: data.first_name,
                    error: false,
                },
                funcao:{
                    value: data.job,
                    error: false,
                },
            })            
        })
    }, [id])


    console.log(form)

    

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

        
        axios.put(`https://reqres.in/api/users/${id}`, {
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
                <Button variant="contained" onClick={handleRegisterButton}>Salvar alteração</Button>
            </div>
            <Toasty open={openToasty} severity="success" text="Cadastro Realizado com Sucesso!" />
        </>
    )
}


export default CustomersEdit