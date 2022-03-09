import Container from '@mui/material/Container'
import { makeStyles } from '@material-ui/styles' 

import Header from '../partials/Header'




const useStyles = makeStyles ({
    container:{
        padding: '15px 10px',
        //background: 'linear-gradient(180deg, #3d5afe 30%, #ffea00 90%)',
        height: '250px',
        color: 'black',
    }
})



const Default = ({children}) =>{
    const classes = useStyles()
    return (
        <>
            <Header />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default