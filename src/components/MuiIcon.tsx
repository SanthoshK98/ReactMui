import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import {useState} from 'react'

export const MuiIcon = () => {
    const [formats, setFormats] = useState<string[]>([])
// const [formats, setFormats] = useState<string | null>(null)
console.log({formats})
const handleFormatChange = (e: React.MouseEvent<HTMLElement>, updatedFormats: string[])=>{
    setFormats(updatedFormats)
}
  return (
    <Stack direction='row'>
    <ToggleButtonGroup 
        aria-label='text-formatting' 
        value={formats} 
        onChange={handleFormatChange} 
        size='small' 
        color='success' 
        orientation='vertical'
        exclusive //for selecting only one
    >
        <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
        <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
        <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
    </ToggleButtonGroup>
</Stack>
  )
}
