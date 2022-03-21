import React from 'react'

import { makeStyles } from '@material-ui/styles' 
import Button from '@mui/material/Button'

import TextField from '@mui/material/TextField'

const useStyles = makeStyles ({
    wrapper:{       
        marginTop: (25)
    }
})

const Register = () => {
    const classes = useStyles()

    return(
        <>
            <div className={classes.wrapper}>
                <TextField id="standard-basic" label="Digite seu nome" variant="standard" />
            </div>
            <div className={classes.wrapper}>
                <TextField id="standard-basic" label="Digite seu cargo" variant="standard" />
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained">Cadastrar</Button>
            </div>
        </>
    )
}


export default Register