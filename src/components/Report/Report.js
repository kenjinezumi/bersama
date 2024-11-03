import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Report() {
    const { t } = useTranslation();

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                {t('reportIssue')}
            </Typography>
            <TextField
                label={t('describeIssue')}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary">
                {t('submitReport')}
            </Button>
        </Box>
    );
}

export default Report;
