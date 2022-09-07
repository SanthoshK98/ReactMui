import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
        <Stack spacing={4}>

    <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>Text</Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
    </Stack>

    <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>Text</Button>
        <Button variant='contained' color='secondary'>Text</Button>
        <Button variant='contained' color='error'>Text</Button>
        <Button variant='contained' color='warning'>Text</Button>
        <Button variant='contained' color='info'>Text</Button>
        <Button variant='contained' color='success'>Text</Button>
    </Stack>

    <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>Text</Button>
        <Button variant='contained' size='medium'>Text</Button>
        <Button variant='contained' size='large'>Text</Button>
    </Stack>

    <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon/>} disableElevation onClick={()=>alert('Clicked')}>send</Button>
        <Button variant='contained' endIcon={<SendIcon/>} disableRipple>send</Button>
        <IconButton aria-label='send' color='success' size='small'>
            <SendIcon/>
        </IconButton>
    </Stack>

    <Stack  direction='row'>
        <ButtonGroup
            variant='contained' 
            orientation='vertical'
            size='small' 
            color='secondary' 
            aria-label='alignment button group'
        >
        <Button size='small' onClick={()=>alert('Clicked')}>Left</Button>
        <Button size='medium'>Center</Button>
        <Button size='large'>Right</Button>
        </ButtonGroup>
    </Stack>

</Stack>
  )
}

export default MuiButton