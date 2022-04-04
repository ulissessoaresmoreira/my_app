import {useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    Button,
    TextField,
    Typography,
} from '@mui/material'
//import { ThemeProvider } from 'styled-components'
import Container from '@mui/material/Container'
import { useHistory } from 'react-router-dom'
import useAuth from '../state/Auth'

const useStyles = makeStyles ((theme) =>  ({
    wrapper:{       
        margin: theme.spacing,
    },
    space:{
        marginTop: (15),
        marginBottom: (50),
        marginLeft: (35),        
    },
    container:{
        padding: '25px 0 0 0',
        //background: 'linear-gradient(180deg, #3d5afe 30%, #ffea00 90%)',
        height: '250px',
        color: 'black',        
    }
}))

const Login = () => {
    const classes = useStyles()
    const history = useHistory()
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value,            
        })
    }

    const [isLoading, setIsLoading] = useState(false) // SIMULAÇÃO, SÓMENTE PARA DAR UM FEEDBACK

    const {user, setUser} = useAuth()

    const handleFormSubmit = () => {
        console.log(form)
        setIsLoading(true)
        setTimeout(()=>{
            const response = {  // ESTA RESPOSTA É UMA SIMULAÇÃO DO RETORNO DA API
                success: true,
                user: {
                    email: form.email
                }
            }

            setUser({
                logged: response.success,
                email: form.email,
            })
            history.push('/')
        }, 4000)
    }

    return(
        <>
            <Container className={classes.container}>
                <Typography variant="h3">Acesso Restrito</Typography>
                <div className={classes.space}>
                    <TextField 
                        onChange={handleInputChange}
                        variant="standard"
                        label="Digite seu e-mail"
                        name="email"
                    />
                </div>
                <div className={classes.space}>
                    <TextField
                        onChange={handleInputChange}
                        variant="standard"
                        label="Digite sua senha"
                        name="password"
                        type="password"
                    />    
                </div>
                <div className={classes.space}>
                    <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                        {
                            isLoading? 'Aguarde': 'Entrar'
                        }
                    </Button>
                </div> 
            </Container>
        </>
    )
}

export default Login


