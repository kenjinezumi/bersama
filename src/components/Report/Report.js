import React from 'react';
import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Report() {
    const { t } = useTranslation();

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                {t('reportIssue')}
            </Typography>

            {/* Describe Issue */}
            <TextField
                label={t('describeIssue')}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                sx={{ mb: 2 }}
            />

            {/* Incident Type */}
            <TextField
                label={t('incidentType')}
                variant="outlined"
                fullWidth
                select
                sx={{ mb: 2 }}
            >
                <MenuItem value="physical_abuse">{t('physicalAbuse')}</MenuItem>
                <MenuItem value="verbal_abuse">{t('verbalAbuse')}</MenuItem>
                <MenuItem value="withholding_wages">{t('withholdingWages')}</MenuItem>
                <MenuItem value="unsafe_conditions">{t('unsafeConditions')}</MenuItem>
                <MenuItem value="excessive_hours">{t('excessiveHours')}</MenuItem>
                <MenuItem value="no_rest_days">{t('noRestDays')}</MenuItem>
                <MenuItem value="other">{t('other')}</MenuItem>
            </TextField>

            {/* Date of Incident */}
            <TextField
                label={t('dateOfIncident')}
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 2 }}
            />

            {/* Location of Incident */}
            <TextField
                label={t('locationOfIncident')}
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />

            {/* Additional Comments */}
            <TextField
                label={t('additionalComments')}
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                sx={{ mb: 2 }}
            />

            <Button variant="contained" color="primary">
                {t('submitReport')}
            </Button>
        </Box>
    );
}

export default Report;
