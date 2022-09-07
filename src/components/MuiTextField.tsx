import { Stack, TextField , InputAdornment} from "@mui/material"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextField = () => {
    const [value, setValue] = useState<string>('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant="outlined"/>  
            <TextField label='Name' variant="filled"/>  
            <TextField label='Name' variant="standard"/>  
            {/* variant outline is the default */}
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='secondary' size="small" color="secondary"/>  
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Form Input' 
                       required value={value} 
                       onChange={(e)=>setValue(e.target.value)} 
                       error={!value}
                       helperText={!value ? 'Required' : 'Do not share'}
                       />  
            <TextField label='Password' 
                       type='password' 
                       helperText='Do not share your password' 
                       InputProps={{
                        startAdornment: <InputAdornment position='start'><VisibilityIcon/></InputAdornment>
                    }}
                       />
            <TextField label='Read Only' InputProps={{readOnly: true}}/>   
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount' size="small" color="secondary"
                        InputProps={{
                            startAdornment: <InputAdornment position='start'>$</InputAdornment>
                        }}
            />  
            <TextField label='Weight' size="small" color="secondary"
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                        }}
            />  
        </Stack>
    </Stack>
  )
}

export default MuiTextField