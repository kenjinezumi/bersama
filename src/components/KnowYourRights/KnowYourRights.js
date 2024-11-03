import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

function KnowYourRights() {
    const { t } = useTranslation();

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                {t('knowYourRights')}
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary={t('rightToFairWages')} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={t('rightToRestDays')} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={t('rightToSafeConditions')} />
                </ListItem>
            </List>
        </Box>
    );
}

export default KnowYourRights;
