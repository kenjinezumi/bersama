import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Select
            value={i18n.language}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{
                color: 'white',
                borderColor: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                },
            }}
        >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="id">Bahasa Indonesia</MenuItem>
            <MenuItem value="bn">Bangla</MenuItem>
            <MenuItem value="ms">Malay</MenuItem>
        </Select>
    );
}

export default LanguageSelector;
