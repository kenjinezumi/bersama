import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";

function Home() {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 0, margin: 0, height: "100vh", overflow: "hidden" }}>
      {/* Hero Section */}
      <Box className={styles.hero}>
        <Typography variant="h3" component="h1" className={styles.heroText}>
          {t("welcome")}
        </Typography>
        <Typography variant="h6" component="p" className={styles.heroSubText}>
          {t("heroSubText")}
        </Typography>
        <Link to="/report" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            className={styles.heroButton}
          >
            {t("reportIssue")}
          </Button>
        </Link>
      </Box>
      
      {/* Key Sections */}
      <Box className={styles.sectionContainer}>
        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h5" className={styles.cardTitle}>
              {t("knowYourRights")}
            </Typography>
            <Typography variant="body2" className={styles.cardDescription}>
              {t("knowYourRightsDescription")}
            </Typography>
            <Link to="/rights" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="primary"
                className={styles.cardButton}
              >
                {t("learnMore")}
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h5" className={styles.cardTitle}>
              {t("reportIssue")}
            </Typography>
            <Typography variant="body2" className={styles.cardDescription}>
              {t("reportIssueDescription")}
            </Typography>
            <Link to="/report" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="primary"
                className={styles.cardButton}
              >
                {t("reportNow")}
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h5" className={styles.cardTitle}>
              {t("safetyEmergency")}
            </Typography>
            <Typography variant="body2" className={styles.cardDescription}>
              {t("safetyEmergencyDescription")}
            </Typography>
            <Link to="/safety" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="primary"
                className={styles.cardButton}
              >
                {t("accessNow")}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Home;
