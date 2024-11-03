import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

function KnowYourRights() {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Know Your Rights
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Right to fair wages" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Right to rest days" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Right to safe working conditions" />
                </ListItem>
            </List>
        </Box>
    );
}

export default KnowYourRights;
