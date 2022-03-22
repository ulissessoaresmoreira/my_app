import { makeStyles } from '@material-ui/styles'


import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
//import Advice from '../pages/Advice'


const useStyles = makeStyles ({
    conteudo:{
        maxWidth: 500,
                
    }
})

const AdviceCard = ({
    tip,
  }) => {
    


const classes=useStyles()

return (
    <Card   className={classes.conteudo}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {tip}
        </Typography>
        
        
        
      </CardContent>

      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  )
}



export default AdviceCard
