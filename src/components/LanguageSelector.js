// LanguageSelector.js
import React from 'react';
import { MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select
      value={i18n.language}
      onChange={changeLanguage}
      variant="outlined"
      size="small"
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="bn">বাংলা (Bangla)</MenuItem>
      <MenuItem value="ms">Bahasa Malaysia</MenuItem>
      <MenuItem value="id">Bahasa Indonesia</MenuItem>
      <MenuItem value="zh">廣東話 (Cantonese)</MenuItem>
      <MenuItem value="ta">தமிழ் (Tamil)</MenuItem>
    </Select>
  );
}

export default LanguageSelector;
