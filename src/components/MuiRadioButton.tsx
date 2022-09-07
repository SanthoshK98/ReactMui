import { Box, FormControl,FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material"
import React, { useState } from "react"

export const MuiRadioButton = () => {
    const [value, setValue] = useState('')
    console.log({value})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
  return (
    <Box>
        <FormControl error>
            <FormLabel id='job-experience-group-label'>
                Years of Experience
            </FormLabel>
            <RadioGroup 
                name="ob-experience-group" 
                aria-labelledby="ob-experience-group-label" 
                value={value} 
                onChange={handleChange}
                row
                >
                <FormControlLabel control={<Radio size="small" color="secondary"/>} label='0-2' value='0-2'/>
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
                <FormControlLabel control={<Radio/>} label='6-8' value='6-8'/>
            </RadioGroup>
            <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
    </Box>
  )
}
