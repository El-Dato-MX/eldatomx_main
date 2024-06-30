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
                  ¿Qué es El Dato MX?
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif'}}>
                  El Dato MX es donde redefinimos la intersección entre deporte y tecnología. Somos la plataforma que democratiza las estadísticas y análisis deportivos para los fanáticos de habla hispana. Imagina tener todo el poder de los números del deporte en la palma de tu mano, explicado de una manera que hasta tu tío que odia las matemáticas entendería. Desde la NBA hasta la NFL y la MLB, estamos aquí para convertir datos complejos en información que realmente puedas usar, ya sea para impresionar a tus amigos, dominar tu liga de fantasía o, quién sabe, tal vez ganar esa apuesta ocasional.
                </Typography>
              </Grid>

              {/* Why should you care */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom sx={{borderBottom: '2px solid #333', pb: 2, mb: 4}}>
                  ¿Por qué debería importarte?
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif'}}>
                  Porque tenemos la experiencia que cuenta. Entre nosotros, hemos trabajado con equipos de la NBA G League, la Liga Mexicana de Béisbol y hasta en el programa de desarrollo de jugadores de béisbol más avanzado del mundo. Hemos diseñado sistemas para bancos, creado interfaces que no te harán querer lanzar tu computadora por la ventana, y sabemos cómo hacer que los números cobren vida.

                  Pero lo más importante: entendemos que quieres información deportiva que sea tan emocionante como el último minuto de un partido cerrado. No solo te damos números fríos; te contamos las historias detrás de esos números, te ayudamos a entender el juego a un nivel más profundo y, quién sabe, tal vez hasta te ayudemos a ganar algunas discusiones en el bar (o en el grupo de WhatsApp, seamos realistas).

                  En El Dato MX, no solo hablamos de deportes, vivimos y respiramos deportes. Y queremos que tú también lo hagas, pero con el poder de los datos de tu lado. Así que, ¿estás listo para llevar tu pasión deportiva al siguiente nivel? Únete a nosotros y descubre por qué los números pueden ser tan emocionantes como un touchdown en el último segundo.
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
              ¿Qué pasa cuando juntas un grupo de ex atletas obsesionados con la tecnología y estadística? Pues nosotros. Somos un grupo de treintañeros trabajando desde casa, unidos por nuestra pasión obsesiva por los deportes y los números.
            </Typography>

            {/* Subsections */}
            <Grid container spacing={6}>
              {/* Why are we doing this */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{color: 'white', mb: 3}}>
                  ¿Por qué lo hacemos?
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif', color: 'white'}}>
                  Porque nos cansamos de ver cómo toda la información cool estaba en inglés y queríamos que nuestra gente también pudiera disfrutar de esos datos jugosos. Además, ¿qué más íbamos a hacer con nuestras vidas? ¿Conseguir trabajos normales? Nah.
                </Typography>
              </Grid>

              {/* Team */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{color: 'white', mb: 3}}>
                  Nuestro equipo
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif', color: 'white'}}>
                  Somos un dream team de amigos que han estado en las trincheras del deporte y la tecnología. Hemos jugado, hemos analizado, hemos programado y, sí, también hemos apostado (con resultados variados, para ser honestos). Entre nosotros, tenemos experiencia trabajando con equipos de la NBA G League, la Liga Mexicana de Béisbol y en programas de desarrollo de jugadores de béisbol de alto nivel.
                </Typography>
              </Grid>

              {/* Why trust us */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{color: 'white', mb: 3}}>
                  ¿Por qué confiar en nosotros?
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif', color: 'white'}}>
                  Mira, no somos una gran corporación con trajes caros y oficinas lujosas. Somos un grupo de apasionados que han estado en las trincheras del deporte y la tecnología. No pretendemos saberlo todo, pero te prometemos que nos esforzamos al máximo para ofrecerte la información más precisa y útil posible. Y si nos equivocamos, bueno, al menos lo haremos con estilo.
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
