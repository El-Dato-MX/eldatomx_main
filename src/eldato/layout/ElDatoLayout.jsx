import { Box } from '@mui/material'
import { NavBar } from '../components'

export const ElDatoLayout = ({children}) => {
  return (
    <Box sx={{ display:'flex'}} >

        <NavBar />
        <Box 
            component='main'
            sx={{ flexGrow:1 }}
        >
            {children}
        </Box>

    </Box>
  )
}
