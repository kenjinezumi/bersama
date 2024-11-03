import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

function SafetyEmergency() {
    const { t } = useTranslation();

    return (
        <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                {t('emergencyContacts')}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {t('callForHelp')}
            </Typography>
            <Button variant="contained" color="error" size="large" sx={{ mt: 2 }}>
                {t('sos')}
            </Button>
        </Box>
    );
}

export default SafetyEmergency;
