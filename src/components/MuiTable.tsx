import { 
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
 } from "@mui/material"

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>  
                    <TableCell>First Name</TableCell>  
                    <TableCell>Second Name</TableCell>  
                    <TableCell align="center">Email</TableCell>  
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row=>(
                        <TableRow key={row.id} sx={{'&: last-child td, &: last-child th': {border: 0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData = [{
    "id": 1,
    "first_name": "Hashim",
    "last_name": "Rossetti",
    "email": "hrossetti0@shop-pro.jp",
    "gender": "Male",
    "ip_address": "111.160.245.220"
  }, {
    "id": 2,
    "first_name": "Quinton",
    "last_name": "Thelwll",
    "email": "qthelwll1@utexas.edu",
    "gender": "Male",
    "ip_address": "36.222.241.225"
  }, {
    "id": 3,
    "first_name": "Uriah",
    "last_name": "Ochterlony",
    "email": "uochterlony2@hp.com",
    "gender": "Male",
    "ip_address": "165.54.152.89"
  }, {
    "id": 4,
    "first_name": "Bartlett",
    "last_name": "Cawthron",
    "email": "bcawthron3@opensource.org",
    "gender": "Male",
    "ip_address": "160.208.200.52"
  }, {
    "id": 5,
    "first_name": "Francis",
    "last_name": "Thayre",
    "email": "fthayre4@weather.com",
    "gender": "Male",
    "ip_address": "185.8.31.207"
  }, {
    "id": 6,
    "first_name": "Adrea",
    "last_name": "Paydon",
    "email": "apaydon5@huffingtonpost.com",
    "gender": "Female",
    "ip_address": "167.205.242.219"
  }, {
    "id": 7,
    "first_name": "Lenka",
    "last_name": "Storror",
    "email": "lstorror6@seattletimes.com",
    "gender": "Female",
    "ip_address": "219.80.166.63"
  }, {
    "id": 8,
    "first_name": "Mannie",
    "last_name": "Apperley",
    "email": "mapperley7@aol.com",
    "gender": "Male",
    "ip_address": "39.255.159.128"
  }, {
    "id": 9,
    "first_name": "Staci",
    "last_name": "Blakeston",
    "email": "sblakeston8@imgur.com",
    "gender": "Female",
    "ip_address": "152.235.232.69"
  }, {
    "id": 10,
    "first_name": "Cassandre",
    "last_name": "Brouwer",
    "email": "cbrouwer9@theglobeandmail.com",
    "gender": "Female",
    "ip_address": "103.201.192.23"
  }]