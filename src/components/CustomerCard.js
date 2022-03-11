import {useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames' 

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'


const useStyles = makeStyles ({
    root:{
        maxWidth: 500,
        minWidth: 300,
        background: 'linear-gradient(180deg, #3d5afe 30%, #ffea00 90%)',        
    }
})

const CustomerCard = ({
  name,
  lastname,
  email,
  avatar,
  className,
}) => {
    const classes=useStyles()

  return (
    <Card className={classNames(className, classes.root)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={avatar}>
            R
          </Avatar>
        }        
        title={`${name} ${lastname}`}
        subheader={email}
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


export default CustomerCard