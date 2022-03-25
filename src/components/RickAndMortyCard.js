
//import {useState} from 'react'
import { makeStyles } from '@material-ui/styles' 

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'

import IconButton from '@mui/material/IconButton'

import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'




const useStyles = makeStyles ({
    root:{
        maxWidth: 360,
                
    }
})

const RickAndMortyCard = ({
  name,
  status,
  species,
  location,  
  image,
}) => {
    const classes=useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="425"        
        image={image}
        alt={name}
      />
      
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${status} - ${species}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <br/><strong>Last known location:</strong><br/>{location.name}
        </Typography>
        
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  )
}


export default RickAndMortyCard