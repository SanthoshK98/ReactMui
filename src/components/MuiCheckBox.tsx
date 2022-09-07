import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from "@mui/material"
import React, { useState } from "react"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkills] = useState<Array<string>>([])
    console.log({skills})
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setAcceptTnC(e.target.checked)
    }
    const handleSkillChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const index = skills.indexOf(e.target.value)
        if(index === -1){
            setSkills([...skills,e.target.value])
        }else{
            setSkills(skills.filter(skill=> skill !== e.target.value))
        }
    }
  return (
    <Box>
        <Box>
            <FormControlLabel 
                label='I accept Terms & Conditions'
                control={<Checkbox size='small' color='secondary' checked={acceptTnC} onChange={handleChange}/>}
            />
        </Box>
        <Box>
            <Checkbox 
                icon={<BookmarkBorderIcon/>} 
                checkedIcon={<BookmarkIcon/>}
                checked={acceptTnC}
                onChange={handleChange}
            />
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                        label='HTML'
                        control={<Checkbox 
                            value='html' 
                            checked={skills.includes('html')} 
                            onChange={handleSkillChange}/>}
                    />
                    <FormControlLabel 
                        label='CSS'
                        value='css'
                        control={<Checkbox 
                            
                            checked={skills.includes('css')} 
                            onChange={handleSkillChange}/>}
                    />
                    <FormControlLabel 
                        label='Javascript'
                        control={<Checkbox 
                            value='javascript'
                            checked={skills.includes('javascript')} 
                            onChange={handleSkillChange}/>}
                    />
                </FormGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}
