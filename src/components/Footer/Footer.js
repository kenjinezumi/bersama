import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: 2,
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">&copy; 2024 Bersama. All rights reserved.</Typography>
            <Typography variant="body2">Contact us at support@bersama.com</Typography>
        </Box>
    );
}

export default Footer;
