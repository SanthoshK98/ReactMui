import { Stack, Avatar, AvatarGroup } from "@mui/material"

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>KSK</Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>
            <AvatarGroup max={3}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>KSK</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/women/81.jpg' alt='Jane Doe'/>
            <Avatar src='https://randomuser.me/api/portraits/women/55.jpg' alt='Jane Doe'/>
            </AvatarGroup>
        </Stack>
        <Stack direction='row' spacing={2}>
            <Avatar variant='square' sx={{bgcolor:'primary.light', width:48, height:48}}>BW</Avatar>
            <Avatar variant='rounded' sx={{bgcolor:'success.light', width:48, height:48}}>KSK</Avatar>
        </Stack>
    </Stack>
  )
}
