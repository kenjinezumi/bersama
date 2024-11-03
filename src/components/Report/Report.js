import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function Report() {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Report an Issue
            </Typography>
            <TextField
                label="Describe the issue"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary">
                Submit Report
            </Button>
        </Box>
    );
}

export default Report;
