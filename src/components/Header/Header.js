import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navLinks: {
        display: 'flex',
        gap: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.common.white,
    },
    logo: {
        flexGrow: 1,
        color: theme.palette.common.white,
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logo}>
                    Bersama
                </Typography>
                <div className={classes.navLinks}>
                    <Link to="/" className={classes.link}><Button color="inherit">Home</Button></Link>
                    <Link to="/rights" className={classes.link}><Button color="inherit">Know Your Rights</Button></Link>
                    <Link to="/report" className={classes.link}><Button color="inherit">Report</Button></Link>
                    <Link to="/safety" className={classes.link}><Button color="inherit">Safety & Emergency</Button></Link>
                </div>
                <LanguageSelector />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
