import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


import CustomerCard from '../../components/CustomerCard'
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


const CustomersList = () => {
    const classes = useStyles()
    const history = useHistory()

    const [customers, setCustomers] = useState([])    

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
        .then(() => {
            const newCustomersState = customers.filter(customer => customer.id !== id)
            setCustomers(newCustomersState)
        })
}

const handleEditCustomer = (id) => {
    history.push(`customers/edit/${id}`)
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
                            onEditCustomer = {handleEditCustomer}
                        />
                    </Grid>                            
                    ))
                }
        </Grid> 
    )
}



export default CustomersList


// XS = EXTRA SMALL
// SM = SMALL
// MD = MEDIUM
// LG = LARGE
// XL = EXTRA LARGE