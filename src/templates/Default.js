import Container from '@mui/material/Container'
import { makeStyles } from '@material-ui/styles' 

import Header from '../partials/Header'
import useAuth from '../state/Auth'

const useStyles = makeStyles ({
    container:{
        padding: '25px 0 0 0',
        //background: 'linear-gradient(180deg, #3d5afe 30%, #ffea00 90%)',
        height: '250px',
        color: 'black',
        
    }
})

const Default = ({children}) =>{
    const classes = useStyles()

    const { user } = useAuth({

    })
    return (
        <>
            <Header user={user} />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default