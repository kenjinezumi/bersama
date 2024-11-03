import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

function Footer() {
    const { t } = useTranslation();

    return (
        <Box component="footer" className={styles.footer}>
            {/* Contact Information */}
            <Box className={styles.contactSection}>
                <Typography variant="h6" className={styles.footerHeading}>
                    {t("contactUs")}
                </Typography>
                <Typography variant="body2" className={styles.contactText}>
                    {t("email")}
                </Typography>
            </Box>

            {/* Copyright */}
            <Typography variant="body2" className={styles.copyright}>
                {t("copyright")}
            </Typography>
        </Box>
    );
}

export default Footer;
