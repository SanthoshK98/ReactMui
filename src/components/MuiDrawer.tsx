import { Box, Drawer, Typography, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react"

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  return (
    <>
    <IconButton 
        size="large"
        edge='start'
        color='inherit'
        aria-label="logo"
        onClick={()=>setIsDrawerOpen(true)}
    >
        <MenuIcon/>
    </IconButton>
    <Drawer anchor="left" open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
        <Box p={2} textAlign='center' width='250px'  role='presentation' >
            <Typography variant="h6" component='div'>
                Side Panel
            </Typography>
        </Box>
    </Drawer>
    </>
  )
}
