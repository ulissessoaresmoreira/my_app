
import {useState} from 'react'
import { makeStyles } from '@material-ui/styles' 

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'


const useStyles = makeStyles ({
    root:{
        maxWidth: 450,
        background: 'linear-gradient(180deg, #3d5afe 30%, #ffea00 90%)',        
    }
})

const CharactersCard = ({
  name,
  status,
  species,  
  image,
}) => {
    const classes=useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        image={
          <Avatar aria-label="recipe" src={image}>
            R
          </Avatar>
        }        
        title={name}
        subheader={`${status} ${species}`}
      />
      
      
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


export default CharactersCard