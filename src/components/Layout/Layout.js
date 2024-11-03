import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Box } from '@mui/material';

function Layout({ children }) {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
                {children}
            </Container>
            <Footer />
        </Box>
    );
}

export default Layout;
