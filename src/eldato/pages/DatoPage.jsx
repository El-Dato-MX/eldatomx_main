import React, { useRef, useState } from 'react'
import { IconButton, Grid, Typography, Box, Container, AppBar, Toolbar, Button, useMediaQuery, useTheme, Drawer, List, ListItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../../Logo'
import { ElDatoLayout } from '../layout/ElDatoLayout'

const DatoPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const homeRef = useRef(null);
  const whatRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (elementRef) => {
    setDrawerOpen(false);
    window.scrollTo({
      top: elementRef.current.offsetTop - 64,
      behavior: 'smooth'
    });
  };

  return (
    <ElDatoLayout>
      <Box sx={{bgcolor:'#111217', color: 'white', minHeight: '100vh', overflowX: 'hidden'}}>
        {/* Navbar */}
        <AppBar position="fixed" sx={{backgroundColor: 'rgba(17, 18, 23, 0.8)'}}>
          <Toolbar>
            <IconButton onClick={() => scrollToSection(homeRef)} sx={{ p: 0, mr: 2 }}>
              <Box sx={{ width: '60px', height: '24px', display: 'flex', alignItems: 'center' }}>
                <Logo style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </Box>
            </IconButton>
            {isMobile ? (
              <IconButton color="inherit" edge="end" onClick={() => setDrawerOpen(true)} sx={{ml: 'auto'}}>
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Button color="inherit" onClick={() => scrollToSection(whatRef)} sx={{color: 'white', mr: 2}}>¿Qué es?</Button>
                <Button color="inherit" onClick={() => scrollToSection(aboutRef)} sx={{color: 'white'}}>Sobre nosotros</Button>
              </>
            )}
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <List>
            <ListItem button onClick={() => scrollToSection(whatRef)}>
              <Typography>¿Qué es?</Typography>
            </ListItem>
            <ListItem button onClick={() => scrollToSection(aboutRef)}>
              <Typography>Sobre nosotros</Typography>
            </ListItem>
          </List>
        </Drawer>

        {/* Logo Section */}
        <Box ref={homeRef} display="flex" justifyContent="center" alignItems="center" sx={{minHeight: '100vh', pt: 8}}>
          <Logo style={{ maxWidth: '80%', height: 'auto' }} />
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* What is eldatomx */}
          <Box ref={whatRef} sx={{minHeight: {xs: 'auto', md: '75vh'}, py: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography variant="h4" gutterBottom sx={{borderBottom: '2px solid #333', pb: 2, mb: 4, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }}}>
              Somos El Dato MX
            </Typography>
            <Typography sx={{fontFamily: 'SeravekBasic, sans-serif', mb: 4, fontSize: { xs: '0.875rem', sm: '1rem' }}}>
              El Dato MX es donde redefinimos la intersección entre deporte y tecnología. Somos la plataforma que democratiza las estadísticas y análisis deportivos para los fanáticos de habla hispana. Imagina tener todo el poder de los números del deporte en la palma de tu mano, explicado de una manera que hasta tu tío que odia las matemáticas entendería. Estamos aquí para convertir datos complejos en información que realmente puedas usar, ya sea para impresionar a tus amigos o dominar tu liga de fantasía.
            </Typography>

            <Typography variant="h4" gutterBottom sx={{borderBottom: '2px solid #333', pb: 2, mb: 4, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }}}>
              Vivimos de los datos
            </Typography>
            <Typography sx={{fontFamily: 'SeravekBasic, sans-serif', fontSize: { xs: '0.875rem', sm: '1rem' }}}>
              Tenemos la experiencia que cuenta. Hemos trabajado con equipos de la NBA G League, la Liga Mexicana de Béisbol y hasta en el programa de desarrollo de jugadores de béisbol más avanzado del mundo. Sabemos cómo hacer que los números cobren vida.

              Pero lo más importante: entendemos que quieres información deportiva que sea tan emocionante como el último minuto de un partido cerrado. No solo te damos números fríos; te contamos las historias detrás de ellos. Te ayudamos a entender el juego a un nivel más profundo y, quién sabe, tal vez hasta te ayudemos a ganar alguna apuesta ocasional.

              En El Dato MX, no solo hablamos de deportes, los vivimos, los respiramos y queremos que tú también lo hagas, pero con el poder de los datos de tu lado. Así que, ¿estás listo para llevar tu pasión deportiva al siguiente nivel?
            </Typography>
          </Box>

          {/* About us */}
          <Box ref={aboutRef} sx={{minHeight: {xs: 'auto', md: '75vh'}, py: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography variant="h4" gutterBottom sx={{borderBottom: '2px solid #333', pb: 2, mb: 4, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }}}>
              Detrás de El Dato
            </Typography>
            <Typography sx={{mb: 6, fontFamily: 'SeravekBasic, sans-serif', fontSize: { xs: '0.875rem', sm: '1rem' }}}>
              ¿Qué pasa cuando juntas un grupo de ex atletas obsesionados con la tecnología y estadística? Pues nosotros. Somos un grupo de treintañeros trabajando desde casa, unidos por nuestra pasión obsesiva por los deportes y los números.
            </Typography>

            {/* Subsections */}
            <Grid container spacing={4}>
              {/* Why are we doing this */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{color: 'white', mb: 3, fontSize: { xs: '1.1rem', sm: '1.25rem' }}}>
                  ¿Por qué lo hacemos?
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif', color: 'white', fontSize: { xs: '0.875rem', sm: '1rem' }}}>
                  Porque nos cansamos de ver cómo toda la información cool estaba en inglés y queríamos que nuestra gente también pudiera disfrutar de esos datos jugosos. Además, ¿qué más íbamos a hacer con nuestras vidas? ¿Conseguir trabajos normales? Nah.
                </Typography>
              </Grid>

              {/* Team */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{color: 'white', mb: 3, fontSize: { xs: '1.1rem', sm: '1.25rem' }}}>
                  El equipo
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif', color: 'white', fontSize: { xs: '0.875rem', sm: '1rem' }}}>
                  Somos un dream team de amigos que han estado en las trincheras del deporte y la tecnología. Hemos jugado, hemos analizado, hemos programado y, sí, también hemos apostado (con resultados variados, para ser honestos).
                </Typography>
              </Grid>

              {/* Why trust us */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{color: 'white', mb: 3, fontSize: { xs: '1.1rem', sm: '1.25rem' }}}>
                  Nuestro Gameplan
                </Typography>
                <Typography sx={{fontFamily: 'SeravekBasic, sans-serif', color: 'white', fontSize: { xs: '0.875rem', sm: '1rem' }}}>
                  Mira, no somos una gran corporación con trajes caros y oficinas lujosas. Somos un grupo de apasionados con los conocimientos y la experiencia necesaria. No pretendemos saberlo todo, pero te prometemos que nos esforzamos al máximo para ofrecerte la información más precisa y útil posible.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* Footer */}
        <Box sx={{bgcolor: 'rgba(255,255,255,0.05)', color: 'white', py: 3, mt: 4}}>
          <Container maxWidth="lg">
            <Typography variant="body2" align="center" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
              © 2024 ElDatoMX. Todos los derechos reservados.
            </Typography>
          </Container>
        </Box>
      </Box>        
    </ElDatoLayout>
  )
};

export default DatoPage
