import { Button, Typography } from '@mui/material'
import Logo from '../../Logo'

const DatoPage = () => {
  return (
    <>
        
        {/* <Typography>DatoPage SERAVEK Basic</Typography> */}
            <div 
                style={{ display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: '100vh' }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    href="https://stathead.eldatomx.com"
                    sx={{ mt: 2 }}
                    >
                    stathead.eldatomx
                </Button>
                <Logo />
            </div>
        
            
    </>
  )
}

export default DatoPage