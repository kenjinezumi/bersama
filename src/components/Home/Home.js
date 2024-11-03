import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to Bersama
            </Typography>
            <Typography variant="body1" gutterBottom>
                Your trusted platform for support, rights, and safety for domestic workers in Hong Kong.
            </Typography>
            <Link to="/report" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Report an Issue
                </Button>
            </Link>
        </Box>
    );
}

export default Home;
