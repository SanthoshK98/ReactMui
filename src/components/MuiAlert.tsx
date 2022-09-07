import { Alert, Stack, AlertTitle, Button } from "@mui/material"
import  CheckIcon  from "@mui/icons-material/Check"
import { useState } from "react"

export const MuiAlert = () => {
    const [alert, setAlert] = useState<boolean>(true)

  return (
    <Stack spacing={2}>
        <Alert severity="error">This is an error alert</Alert> 
        <Alert severity="warning">This is an warning alert</Alert> 
        <Alert severity="info">This is an info alert</Alert> 
        <Alert severity="success">This is an success alert</Alert> 

        <Alert variant="outlined" severity="error">This is an error alert</Alert> 
        <Alert variant="outlined" severity="warning">This is an warning alert</Alert> 
        <Alert variant="outlined" severity="info">This is an info alert</Alert> 
        <Alert variant="outlined" severity="success">This is an success alert</Alert>

        {
            alert ? (<Alert variant="filled" severity="error" onClose={()=> setAlert(false)}>
            <AlertTitle>Error</AlertTitle>
            This is an error alert
        </Alert> ) : ''
        }
        
        <Alert variant="filled" severity="warning">This is an warning alert</Alert> 
        <Alert variant="filled" severity="info">This is an info alert</Alert> 
        <Alert variant="filled" severity="success" icon={<CheckIcon fontSize="inherit"/>} 
                action={
                    <Button color='inherit' size='small'>UNDO</Button>
                }
        >
        <AlertTitle>Success</AlertTitle>
        This is an success alert
        </Alert>
    </Stack>
  )
}
