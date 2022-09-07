import { Stack, Rating } from "@mui/material"
import React, { useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(3)
    console.log({value})
    const handleChange = (e:React.ChangeEvent<{}>, newValue: number| null)=>{
        setValue(newValue)
    }
  return (
    <Stack>
        <Rating 
            value={value} 
            onChange={handleChange} 
            precision={0.5}
            size='large'
            icon={<FavoriteIcon fontSize="inherit" color="error"/>}
            emptyIcon={<FavoriteBorderIcon  fontSize="inherit"/>}
            readOnly
            // highlightSelectedOnly
        />
    </Stack>
  )
}
