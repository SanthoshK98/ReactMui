import { Box, TextField, MenuItem } from "@mui/material"
import React, { useState } from "react"

export const MuiSelect = () => {
    const [country, setCountry] = useState('')
    const [countries, setCountries] = useState<Array<string>>([])
    console.log({country})
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
        console.log(value)
        // setCountry(e.target.value as string)
        setCountries(typeof value === 'string' ? value.split(','): value)
    }
  return (
    <Box width='250px'>
        <TextField 
            label='select country'
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={
                {multiple: true}
            }
            size='small'
            color="secondary"
            helperText='Please select your country'
            error
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}
