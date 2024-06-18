import React from 'react'
import { Box, Container, Grid, Typography, FormControl, InputAdornment, InputLabel, OutlinedInput, Button, IconButton, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import { footer } from '@/constants/Constants';


const Footer = () => {
  return (
     <Box sx={{ backgroundColor: '#EAD9CE', marginTop:5 }}>
     <Container maxWidth="xl">
       <Grid container spacing={4}>
         <Grid item xs={12} sm={6} md={4}>
           <Typography variant="h6" sx={{ marginBottom: 2 }}>{footer.col1Title}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 2 }}>
             {footer.col1Paragraph}
           </Typography>
           <FormControl sx={{ width: '100%' }} variant="outlined">
             <InputLabel htmlFor="outlined-adornment-password">{footer.inputLabel}</InputLabel>
             <OutlinedInput
               id="outlined-adornment-password"
               variant="outlined"
               placeholder="Email"
               size="small"
               sx={{ marginRight: 2, flexGrow: 1, backgroundColor: 'white', borderRadius: '100px', padding: 0.5 }}
               endAdornment={
                 <InputAdornment position="end">
                   <Button variant="contained" sx={{ backgroundColor: '#B07B54', color: 'white', borderRadius: '20px' }}>
                     {footer.button}
                   </Button>
                 </InputAdornment>
               }
               label="Password"
             />
           </FormControl>
           <Box sx={{ display: 'flex', marginTop: 5, gap: '10px' }}>
             <IconButton href="https://instagram.com" target="_blank" sx={{ border: '1px solid #B07B54', color: '#B07B54' }}>
               <InstagramIcon />
             </IconButton>
             <IconButton href="https://pinterest.com" target="_blank" sx={{ border: '1px solid #B07B54', color: '#B07B54' }}>
               <PinterestIcon />
             </IconButton>
             <IconButton href="https://facebook.com" target="_blank" sx={{ border: '1px solid #B07B54', color: '#B07B54' }}>
               <FacebookIcon />
             </IconButton>
           </Box>
         </Grid>
         <Grid item xs={12} sm={6} md={2}>
           <Typography variant="h6" sx={{ marginBottom: 2 }}>{footer.col2}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 1 }}>{footer.link1}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 1 }}>{footer.link2}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 1 }}>{footer.link3}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 1 }}>{footer.link4}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 1 }}>{footer.link5}</Typography>
         </Grid>

         <Grid item xs={12} sm={6} md={2}>
           <Typography variant="h6" sx={{ marginBottom: 2 }}>{footer.col3}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 1 }}>{footer.link6}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 1 }}>{footer.link7}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 1 }}>{footer.link8}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 1 }}>{footer.link9}</Typography>
         </Grid>
         <Grid item xs={12} sm={6} md={4}>
           <Typography variant="h6" sx={{ marginBottom: 2 }}>{footer.col4}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 1 }}>{footer.link10}</Typography>
           <Typography variant="body2" sx={{ marginBottom: 1 }}>{footer.link11}</Typography>
         </Grid>
       </Grid>
     </Container>
     <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
       <Divider orientation="horizontal" flexItem sx={{ mx: 1 }} />
       <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '20px' }}>{footer.copyrightText}</Typography>
       <Typography variant="body2">{footer.created}</Typography>
     </Box>
   </Box>
  )
}

export default Footer