import React from 'react';
import { Typography, Box } from '@mui/material';
import styles from './Footer.module.css';

function Footer() {
    return (
        <Box component="footer" className={styles.footer}>
            {/* Contact Information */}
            <Box className={styles.contactSection}>
                <Typography variant="h6" className={styles.footerHeading}>
                    Contact Us
                </Typography>
                <Typography variant="body2" className={styles.contactText}>
                    Email: support@bersama.com
                </Typography>
                
            </Box>

            {/* Copyright */}
            <Typography variant="body2" className={styles.copyright}>
                &copy; 2024 Bersama. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
