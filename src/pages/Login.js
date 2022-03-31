import { makeStyles } from '@material-ui/styles'
import {
    Button,
    TextField,
    Typography,
} from '@mui/material'
import { ThemeProvider } from 'styled-components'

const useStyles = makeStyles ((theme) =>  ({
    wrapper:{       
        margin: theme.spacing,
    }
}))

const Login = () => {
    const classes = useStyles()

    return(
        <>
            <Typography>
                <TextField>
                    <Button>
                        
                    </Button>                    
                </TextField>
            </Typography>
        </>
    )
}

export default Login