import React, { useRef } from 'react'
import { IconButton, Grid, Typography, Box, Container, AppBar, Toolbar, Button } from '@mui/material'
import Logo from '../../Logo'
import { ElDatoLayout } from '../layout/ElDatoLayout'

const DatoPage = () => {
  const homeRef = useRef(null);
  const whatRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <ElDatoLayout>
      <Box sx={{bgcolor:'#111217', color: 'white'}}>
        {/* Navbar */}
	<AppBar position="fixed" sx={{backgroundColor: 'rgba(17, 18, 23, 0.8)'}}>
	  <Toolbar>
            <IconButton onClick={() => scrollToSection(homeRef)} sx={{ p: 0, mr: 3 }}>
              <Box sx={{ width: '80px', height: '24px', display: 'flex', alignItems: 'center' }}>
                <Logo style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </Box>
            </IconButton>
            <Button color="inherit" onClick={() => scrollToSection(whatRef)} sx={{color: 'white', mr: 2}}>¿Qué es?</Button>
            <Button color="inherit" onClick={() => scrollToSection(aboutRef)} sx={{color: 'white'}}>Sobre nosotros</Button>
          </Toolbar>
        </AppBar>	
        {/* Logo Section */}
        <Box ref={homeRef} display="flex" justifyContent="center" alignItems="center" sx={{height: '100vh'}}>
          <Logo />
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg">
          {/* Top two columns */}
          <Box ref={whatRef} sx={{height: '75vh', display: 'flex', alignItems: 'center'}}>
            <Grid container spacing={8}>
              {/* What is eldatomx */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom sx={{borderBottom: '2px solid #333', pb: 2, mb: 4}}>
                  ¿Qué es ElDatoMX?
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif'}}>
                  ElDatoMX es una plataforma innovadora que revoluciona la forma en que se analizan los datos deportivos en México. Ofrecemos insights profundos y análisis avanzados para equipos, entrenadores y aficionados apasionados.
                </Typography>
              </Grid>

              {/* Why should you care */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom sx={{borderBottom: '2px solid #333', pb: 2, mb: 4}}>
                  ¿Por qué debería importarte?
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif'}}>
                  En la era del big data, ElDatoMX te da la ventaja competitiva que necesitas. Ya sea que busques mejorar el rendimiento de tu equipo o entender mejor el juego, nuestras herramientas te llevarán al siguiente nivel.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          {/* About us */}
          <Box ref={aboutRef} sx={{height: '75vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography variant="h4" gutterBottom sx={{borderBottom: '2px solid #333', pb: 2, mb: 4}}>
              Sobre nosotros
            </Typography>
            <Typography sx={{mb: 6, fontFamily: 'SeravekBasic, sans-serif'}}>
              En ElDatoMX, estamos comprometidos con la revolución de los datos en el deporte mexicano. Nuestra visión es transformar la forma en que se entiende y se juega el deporte en México.
            </Typography>

            {/* Subsections */}
            <Grid container spacing={6}>
              {/* Why are we doing this */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{color: 'white', mb: 3}}>
                  ¿Por qué lo hacemos?
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif', color: 'white'}}>
                  Creemos que el deporte mexicano tiene un potencial enorme y sin explotar. Nuestra misión es impulsar su crecimiento a través del poder de los datos y el análisis avanzado.
                </Typography>
              </Grid>

              {/* Team */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{color: 'white', mb: 3}}>
                  Nuestro equipo
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif', color: 'white'}}>
                  Somos un grupo diverso de apasionados por el deporte y la tecnología. Desde científicos de datos hasta ex atletas profesionales, nuestro equipo combina experiencia y pasión para ofrecer lo mejor.
                </Typography>
              </Grid>

              {/* Why trust us */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{color: 'white', mb: 3}}>
                  ¿Por qué confiar en nosotros?
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif', color: 'white'}}>
                  Con años de experiencia en análisis deportivo y tecnología de vanguardia, hemos desarrollado metodologías probadas que han ayudado a equipos a alcanzar nuevas alturas. Nuestro compromiso con la excelencia y la innovación nos distingue.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* Footer */}
        <Box sx={{bgcolor: 'rgba(255,255,255,0.05)', color: 'white', py: 3, mt: 4}}>
          <Container maxWidth="lg">
            <Typography variant="body2" align="center">
              © 2024 ElDatoMX. Todos los derechos reservados.
            </Typography>
          </Container>
        </Box>
      </Box>        
    </ElDatoLayout>
  )
};

export default DatoPage
