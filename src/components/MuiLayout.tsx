import { Box,Stack, Divider, Grid, Paper } from "@mui/material"

export const MuiLayout = () => {
  return (
    <Paper sx={{padding:'32px'}} elevation={4}>
    <Stack 
        sx={{border:'1px solid'}} 
        direction='row-reverse' 
        spacing={2} 
        divider={<Divider 
                    orientation="vertical"
                    flexItem
                    />}>
    <Box 
    // component='span'
    sx={{
        backgroundColor: 'primary.main',
        color:'white',
        height: '100px',
        width:'100px',
        padding: '16px',
        '&:hover': {
            backgroundColor: 'primary.light'
        }
    }}
    >MuiLayout</Box>
    <Box 
    display='flex'
    width='100px'
    height='100px'
    bgcolor='success.main'
    p={2}
    >MuiLayout</Box>
    </Stack>
    <Grid container my={2} rowSpacing={2} columnSpacing={1}>
      <Grid item xs={12} sm={6}>
        <Box bgcolor='primary.main' p={2}>Item 1</Box>
      </Grid>
      <Grid item xs='auto'>
        <Box bgcolor='secondary.main' p={2}>Item 1</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor='success.main' p={2}>Item 1</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor='primary.main' p={2}>Item 1</Box>
      </Grid>
    </Grid>
    </Paper>
  )
}
