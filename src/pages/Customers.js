import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'


import CustomerCard from '../components/CustomerCard'
import Grid from '@mui/material/Grid'

import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
        
    },
    card:{
        padding: 4,          
    }
}))


const Customers = () => {
    const [customers, setCustomers] = useState([])
    const classes = useStyles()

    useEffect(() => {

    axios.get('https://reqres.in/api/users')
    .then(response =>{
        const {data} = response.data
        setCustomers(data)
        console.log(data)
    })
},[])

const handleRemoveCustomer = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`) //OBS: PASSAR O ID PARA CÁ POR LITERAL STRING
        .then(response => {
            const newCustomersState = customers.filter(customer => customer.id !== id)
            setCustomers(newCustomersState)
        })
}


    return (
        
            
        <Grid container>
            <Grid item xs={12} style={{background:'lightgrey'}}> 
            </Grid>
            
                {
                    customers.map(customer => (                                
                    <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
                        <CustomerCard
                            id = {customer.id} 
                            name = {customer.first_name}
                            lastname = {customer.last_name}
                            email = {customer.email}
                            avatar = {customer.avatar}
                            onRemoveCustomer = {handleRemoveCustomer}
                        />
                    </Grid>                            
                    ))
                }
        </Grid> 
    )
}



export default Customers


// XS = EXTRA SMALL
// SM = SMALL
// MD = MEDIUM
// LG = LARGE
// XL = EXTRA LARGE