import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.css';

function Home() {
    const { t } = useTranslation();
    const secondHeroRef = useRef(null);
    const [isSecondHeroVisible, setIsSecondHeroVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSecondHeroVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 50% of the section is visible
            }
        );

        if (secondHeroRef.current) {
            observer.observe(secondHeroRef.current);
        }

        return () => {
            if (secondHeroRef.current) {
                observer.unobserve(secondHeroRef.current);
            }
        };
    }, []);

    return (
        <Box sx={{ padding: 0, margin: 0 }}>
            {/* First Hero Section */}
            <Box className={styles.hero}>
                <Typography variant="h3" component="h1" className={styles.heroText}>
                    {t("welcome")}
                </Typography>
                <Typography variant="h6" component="p" className={styles.heroSubText}>
                    {t("heroSubText")}
                </Typography>
                <Link to="/report" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary" className={styles.heroButton}>
                        {t("reportIssue")}
                    </Button>
                </Link>
            </Box>

            {/* Second Hero Section with Transition */}
            <Box
                ref={secondHeroRef}
                className={`${styles.secondHero} ${isSecondHeroVisible ? styles.visible : ''}`}
            >
                <Typography variant="h3" component="h1" className={styles.heroText}>
                    {t("empowermentMessage")}
                </Typography>
                <Box className={styles.quickLinksContainer}>
                    <Link to="/rights" className={styles.quickLinkBox}>
                        <Typography variant="h6" className={styles.quickLinkText}>
                            {t("knowYourRights")}
                        </Typography>
                    </Link>
                    <Link to="/safety" className={styles.quickLinkBox}>
                        <Typography variant="h6" className={styles.quickLinkText}>
                            {t("safetyEmergency")}
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
