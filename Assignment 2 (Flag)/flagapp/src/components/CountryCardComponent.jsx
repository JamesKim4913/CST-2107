import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import './CountryCardComponent.css';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const CountryCardComponent = ({ data }) => {    
    const [countryName, setCountryName] = useState(null);    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const fetchCountryDetails = async () => {
          // Get details of a country  
          try {
            const data = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
            const convertedJSONData = await data.json();
            setSelectedCountry(convertedJSONData[0]);
          } catch (error) {
            console.log(error);
          }
        };

        // Run only when countryName exists
        {countryName && (fetchCountryDetails())}
    
    }, [countryName]);

    // Open / Close Modal Window
    const handleOpen = (country) => {
        setIsOpen(true);
        setCountryName(country);
    };

    const handleClose = () => setIsOpen(false);


    return (
        <>
        <Container maxWidth="md" sx={{ marginTop: '2rem' }}>      
            <Grid container spacing={2}>
    
                {data.map((country, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>

                        <Card className="card">
                            <CardMedia component="img" height="140" image={country.flags.svg} alt={country.flags.alt} />
                            <CardContent className="content">
                            <Typography variant="h6" gutterBottom>
                            {country.name.common}
                            </Typography>
                            
                            <Typography variant="body2">                                                         

                                <Button onClick={() => handleOpen(country.name.common)}>Learn More</Button>

                                {/* Modal Window */}

                                {selectedCountry && (        

                                    <Modal
                                    open={isOpen}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    >

                                    <Box sx={style}>  
                                    
                                    <Card sx={{
                                        width: 400,
                                        marginTop: 20
                                        }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="240"
                                            image={selectedCountry.flags.svg}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h4">
                                                Name: {selectedCountry.name.common}
                                            </Typography>

                                            <Typography variant="h5">
                                                Official Name: {selectedCountry.name.official}
                                            </Typography>

                                            <Typography variant="h5">
                                                Capital: {selectedCountry.capital}
                                            </Typography>

                                            <Typography variant="h5">
                                                Region: {selectedCountry.region}
                                            </Typography>                 

                                            <Typography variant="h5"> 
                                                Timezone: {selectedCountry.timezones}
                                            </Typography>              

                                            <Typography variant="h5">
                                                Population: {selectedCountry.population.toLocaleString("en-US")}
                                            </Typography>

                                        </CardContent>
                                    </Card> 

                                    </Box>
                                    </Modal>
                                )}  

                                {/* End Modal Window */}  

                            </Typography>

                            </CardContent>
                        </Card>

                    </Grid>
                ))}

            </Grid>
        </Container>     
        </>        
    )
}


export default CountryCardComponent;