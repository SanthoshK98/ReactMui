MuiTypography

<Typography variant='h1'>h1 Heading</Typography>

attributes
1. variant value = Ranges from h1 to h6
for h6 we have alternative values i.e., 'subtitle1', 'subtitle2'
for paragraphs, value = 'body1', 'body2'

2. component value = 'h1' for variant h4 or h5
3. gutterBottom value = false(default)

MuiButton

import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from '@mui/material

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
</Stack>

Icons

npm i @mui/icons-material

<Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon/>} disableElevation onClick={()=>alert('Clicked')}>send</Button>
        <Button variant='contained' endIcon={<SendIcon/>} disableRipple>send</Button>
        <IconButton aria-label='send' color='success' size='small'>
            <SendIcon/>
        </IconButton>
</Stack>

ButtonGroup

<Stack  direction='row'>
        <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
        <Button size='small' onClick={()=>alert('Clicked)}>Left</Button>
        <Button size='medium'>Center</Button>
        <Button size='large'>Right</Button>
        </ButtonGroup>
</Stack>

Toggle Button

import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import {useState} from 'react'

const [formats, setFormats] = useState<string[]>([])
const [formats, setFormats] = useState<string | null>(null)

const handleFormatChange = (e: React.MouseEvent<HtmlElement>, updatedFormats: string[])=>{
    setFormats(updatedFormats)
}

<Stack direction='row'>
    <ToggleButtonGroup 
        aria-label='text-formatting' 
        value={formats} 
        onChange={handleFormatChange} 
        size='small' 
        color='success' 
        orentation='vertical'
        exclusive //for selecting only one
    >
        <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
        <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
        <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
    </ToggleButtonGroup>
</Stack>


