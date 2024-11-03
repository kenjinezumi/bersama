import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Box } from '@mui/material';

function Layout({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box component="main" sx={{ flex: "1 0 auto" }}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Layout;