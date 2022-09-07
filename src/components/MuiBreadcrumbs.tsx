import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs 
            aria-label="breadcrumb" 
            separator={<NavigateNextIcon fontSize="small"/>}
            maxItems={3}
            itemsBeforeCollapse={2}
        >
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catalogues</Link>
            <Link underline="hover" href="#">Accessories</Link>
            <Typography color='text.primary'>Shirts</Typography>
        </Breadcrumbs>
    </Box>
  )
}
