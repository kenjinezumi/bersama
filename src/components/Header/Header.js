import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

function Header() {
    const { t } = useTranslation();

    return (
        <AppBar position="static" className={styles.appBar}>
            <Toolbar className={styles.toolbar}>
                {/* Logo or Brand Name */}
                <Typography variant="h6" component="div" className={styles.logo}>
                    Bersama
                </Typography>

                {/* Navigation Links (visible on larger screens) */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    <Link to="/" className={styles.navLink}>
                        <Button color="inherit">{t('home')}</Button>
                    </Link>
                    <Link to="/rights" className={styles.navLink}>
                        <Button color="inherit">{t('knowYourRights')}</Button>
                    </Link>
                    <Link to="/report" className={styles.navLink}>
                        <Button color="inherit">{t('reportIssue')}</Button>
                    </Link>
                    <Link to="/safety" className={styles.navLink}>
                        <Button color="inherit">{t('safetyEmergency')}</Button>
                    </Link>
                </Box>

                {/* Mobile Menu Icon and Language Selector (visible on smaller screens) */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.languageSelector}>
                        <LanguageSelector />
                    </div>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        className={styles.menuIcon}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
