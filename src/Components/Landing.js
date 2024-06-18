import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { HomePage } from '@/constants/Constants';
import { Card, CardMedia} from "@mui/material";
import { Collection, aboutUs, instaSection, signatureGrid, trendingSection } from "@/constants/Constants";

const Landing = () => {
    return (
        <><><><><><Container maxWidth="xl" sx={{
            backgroundColor: '#EAD9CE',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            minWidth: '100vw'
        }}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        textAlign: 'left',
                        color: '#2e2e2d',
                        padding: '20px',
                    }}>
                        <Typography variant="h2" fontFamily={'Bastiken'} fontWeight={'100'} gutterBottom>
                            {HomePage.Heading}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {HomePage.paragraph}
                        </Typography>
                        <Button variant="contained" sx={{
                            backgroundColor: '#B07B54',
                            color: 'white',
                            borderRadius: '0 30px 30px 0',
                            padding: 2,
                            mt: 2,
                            width: '30%',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                        }}>
                            <Typography variant='body2'>{HomePage.buttonText}</Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src='/images/home1.png' alt="Jewelry model" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                </Grid>
            </Grid>
        </Container><Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', minHeight: '100vh', minWidth: '100vw', width: '100vw' }}>
                <Typography variant="h4" sx={{ mt: 3, fontFamily: 'Bastiken', textAlign: 'center' }}>{Collection.title}</Typography>

                <Grid container justifyContent="center" sx={{ mt: 3 }}>
                    {/* First Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345, position: 'relative' }}>
                            <CardMedia
                                component="img"
                                image="/images/necklaces.png"
                                alt="Necklaces"
                                sx={{ position: 'relative' }} />
                            <Button
                                size="small"
                                sx={{
                                    position: 'absolute',
                                    bottom: 16,
                                    left: 0,
                                    textTransform: 'none',
                                    color: 'white',
                                    backgroundColor: '#B07B54',
                                    borderRadius: '0 30px 30px 0',
                                    padding: 1,
                                    width: '80%',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
                                    '&:hover': {
                                        backgroundColor: '#B07B54',
                                    },
                                }}
                            >
                                {Collection.buttonText1}
                            </Button>
                        </Card>
                    </Grid>


                    {/* Second Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345, position: 'relative' }}>
                            <CardMedia
                                component="img"
                                image="/images/golden-earrings.png"
                                alt="Golden Earrings"
                                sx={{ position: 'relative' }} />

                            <Button size="small" sx={{
                                position: 'absolute',
                                bottom: 16,
                                left: 0,
                                textTransform: 'none',
                                color: 'white',
                                backgroundColor: '#B07B54',
                                borderRadius: '0 30px 30px 0',
                                padding: 1,
                                width: '80%',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
                                '&:hover': {
                                    backgroundColor: '#B07B54',
                                },
                            }}>  {Collection.buttonText2}</Button>
                        </Card>
                    </Grid>

                    {/* Third Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345, position: 'relative' }}>
                            <CardMedia
                                component="img"
                                image="/images/wedding-rings.png"
                                alt="Wedding rings"
                                sx={{ position: 'relative' }} />

                            <Button size="small" sx={{
                                position: 'absolute',
                                bottom: 16,
                                left: 0,
                                textTransform: 'none',
                                color: 'white',
                                backgroundColor: '#B07B54',
                                borderRadius: '0 30px 30px 0',
                                padding: 1,
                                width: '80%',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
                                '&:hover': {
                                    backgroundColor: '#B07B54',
                                },
                            }}>{Collection.buttonText3}</Button>

                        </Card>
                    </Grid>
                </Grid>

                <Box sx={{
                    minHeight: '35vh',
                    marginTop: '10vh',
                    backgroundColor: '#EAD9CE',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Typography variant='h5' sx={{ mt: '5vh', textAlign: 'center' }}>{Collection.paragraph1}</Typography>
                    <Typography sx={{ mt: '5vh', textAlign: 'center' }}>{Collection.paragraph2}</Typography>
                </Box>

                <Typography variant="h4" sx={{ mt: 10, fontFamily: 'Bastiken', textAlign: 'center' }}>{Collection.heading}</Typography>

                <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
                    {/* First Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image="/images/High-Angle-Golden-Earrings.png"
                                alt="Necklaces" />
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card1}</Typography>
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card1Price}</Typography>
                        </Card>
                    </Grid>

                    {/* Second Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image="/images/Round-Golden-Earrings.png"
                                alt="Golden Earrings" />
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card2}</Typography>
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card2Price}</Typography>
                        </Card>
                    </Grid>

                    {/* Third Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
                    {/* First Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                        </Card>
                    </Grid>

                    {/* Second Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image="/images/Thin-golden-chain.png"
                                alt="Golden Earrings" />
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card3}</Typography>
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card3Price}</Typography>
                        </Card>
                    </Grid>

                    {/* Third Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image="/images/Shiny-Golden-chain.png"
                                alt="Golden Earrings" />
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card4}</Typography>
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card4Price}</Typography>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
                    {/* First Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image="/images/Eastern-golden-bracelet.png"
                                alt="Necklaces" />
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card5}</Typography>
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card5Price}</Typography>
                        </Card>
                    </Grid>

                    {/* Second Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image="/images/gold-braclet.png"
                                alt="Golden Earrings" />
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card6}</Typography>
                            <Typography sx={{ textAlign: 'left', padding: 1 }}>{Collection.card6Price}</Typography>
                        </Card>
                    </Grid>

                    {/* Third Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                        </Card>
                    </Grid>
                </Grid>

            </Container></><Container maxWidth="xl" sx={{
                backgroundColor: '#EAD9CE',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20px 0',
                width: '100%',
                minWidth: '100vw',
            }}>
                <Grid container alignItems="center" spacing={2} sx={{ flexWrap: 'wrap' }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <img src='/images/about_us.png' alt="Jewelry model" style={{ maxWidth: '100%', height: '90vh' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            textAlign: 'left',
                            color: '#2e2e2d',
                            padding: '20px',
                        }}>
                            <Typography variant="h3" fontFamily={'Bastiken'} fontWeight={'100'} gutterBottom>
                                {aboutUs.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>{aboutUs.paragraph}</Typography>
                        </Box>
                        <Button variant="contained" sx={{
                            backgroundColor: '#B07B54',
                            color: 'white',
                            borderRadius: '30px 0 0 30px',
                            padding: 2,
                            marginTop: '30%',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            width: '30%',
                            display: 'flex',
                            marginLeft: 'auto',
                            right: 0,
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                        }}>
                            <Typography variant='body2'>{aboutUs.buttonText}</Typography>
                        </Button>
                    </Grid>

                </Grid>
            </Container></><Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    minHeight: '100vh',
                    minWidth: '60vw',
                    width: '100vw',
                    position: 'relative',
                    mt: 10
                }}
            >
                <Typography variant="h4" sx={{ mt: 3, fontFamily: 'Bastiken', textAlign: 'center' }}>{signatureGrid.title}</Typography>
                <Typography variant="body" sx={{ mt: 3, fontFamily: 'Bastiken', textAlign: 'center' }}>{signatureGrid.paragraph}</Typography>

                <Grid container justifyContent="center" spacing={2} sx={{ mt: 3 }}>
                    {/* First Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/Rectangle 27.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>

                    {/* Second Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/Rectangle 28.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>

                    {/* Third Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/Rectangle 29.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>

                    {/* Fourth Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/Rectangle 30.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        width: '60%',
                        position: 'absolute',
                        bottom: 10,
                        right: 0,
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#B07B54',
                            color: 'white',
                            borderRadius: '30px 0 0 30px',
                            padding: 2,
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                            width: '30%',
                            display: 'flex',
                        }}
                    >
                        <Typography variant="body2">{signatureGrid.buttonText}</Typography>
                    </Button>
                </Box>
            </Container></><Container maxWidth="xl" sx={{
                backgroundColor: '#EAD9CE',
                minHeight: '70vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20px 0',
                width: '100vw',
                minWidth: '100vw'
            }}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            textAlign: 'left',
                            color: '#2e2e2d',
                            padding: '20px',
                        }}>
                            <Typography variant="h3" fontFamily={'Bastiken'} gutterBottom>
                                {trendingSection.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {trendingSection.paragraph}
                            </Typography>
                            <Button variant="contained" sx={{
                                backgroundColor: '#B07B54',
                                color: 'white',
                                borderRadius: '0 30px 30px 0',
                                padding: 2,
                                mt: '30%',
                                width: '30%',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                            }}>
                                <Typography variant='body2'>{trendingSection.buttonText}</Typography>
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'right' }}>
                            <img src='/images/shop-now.png' alt="Jewelry model" style={{ maxWidth: '100%', height: '70vh' }} />
                        </Box>
                    </Grid>
                </Grid>
            </Container></><Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    minHeight: '100vh',
                    minWidth: '60vw',
                    width: '100vw',
                    position: 'relative',
                    mt: 10
                }}
            >
                <Typography variant="h4" sx={{ mt: 3, fontFamily: 'Bastiken', textAlign: 'center' }}>{instaSection.title}</Typography>
                <Typography variant="body" sx={{ mt: 3, fontFamily: 'Bastiken', textAlign: 'center' }}>{instaSection.subTitle}</Typography>

                <Grid container justifyContent="center" spacing={3} sx={{ mt: 3 }}>
                    {/* First Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/insta-1.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>

                    {/* Second Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/insta-2.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>

                    {/* Third Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/insta-3.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>

                    {/* Fourth Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/insta-4.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={2} sx={{ mt: 3 }}>
                    {/* First Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/insta-5.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>

                    {/* Second Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/insta-6.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>

                    {/* Third Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/insta-7.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>

                    {/* Fourth Card */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <img src="/images/insta-8.png" alt="Necklaces" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>

            </Container></>
    )
}

export default Landing;