import React from 'react'
import Typography from '@mui/material/Typography'


const Clean = ({title, Component}) => {
    
    return(
        <>
            <Typography variant="h2" component="div" >
                {title}
            </Typography>
            <Component />
        </>
    )
}

export default Clean