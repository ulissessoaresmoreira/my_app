import {useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames' 

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from './ModalConfirm'


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

const [openModal, setOpenModal] = useState(false)
const handleToggleOpenModal = () => {
  setOpenModal(!openModal)
}

const handleConfirmModal = () => {
  alert('ok')
}

const handleRemoveCustomer = () => {
  handleToggleOpenModal()
}

const handleEditModal = () => {
  handleToggleOpenModal()
}

  return (
    <>
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
          <IconButton aria-label="editar cadastro" onClick={handleEditModal}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="remover cadastro" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
        
      </Card>
      <ModalConfirm
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={handleConfirmModal}
        title="Deseja realmente excluir este cadastro?"
        message="Ao confirmar, esta ação não poderá ser desfeita."
        
      />
    </>
  )
}


export default CustomerCard