import { Grid } from '@mui/material'
import Logo from '../../Logo'
import { ElDatoLayout } from '../layout/ElDatoLayout'

const DatoPage = () => {
  return (
    <ElDatoLayout>
      <Grid 
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{minHeight:'100vh', bgcolor:'#111217'}}
      >

          <Logo />

      </Grid>        
    </ ElDatoLayout>
  )
};

export default DatoPage