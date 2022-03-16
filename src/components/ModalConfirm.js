import React from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'


const ModalConfirm = ({open, onClose, onConfirm, title, message}) => { // ESTA FUNÇÃO NÃO VAI GERENCIAR O ESTADO, MAS SIM QUEM ESTIVER CHAMANDO E VAI PASSAR POR PROP PARA CÁ E ISSO VAI PARA O COMPONENTE DIALOG ONDE VAI CONTROLAR ISSO
// ELE NÃO VAI MAIS CONTROLAR O HANDLECLICKOPEN E O HANDLECLICKCLOSE, MAS VAI EXIBIR NA TELA COM BASE NO QUE RECEBER PELA PROP   



  return (
    <>      
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onConfirm} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalConfirm