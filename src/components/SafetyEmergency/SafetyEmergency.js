import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function SafetyEmergency() {
    return (
        <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Safety & Emergency Contacts
            </Typography>
            <Typography variant="body1" gutterBottom>
                Call our hotline or contact emergency services for immediate help.
            </Typography>
            <Button variant="contained" color="error" size="large" sx={{ mt: 2 }}>
                SOS
            </Button>
        </Box>
    );
}

export default SafetyEmergency;
