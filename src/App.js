import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RightsPage from './pages/RightsPage';
import ReportPage from './pages/ReportPage';
import SafetyEmergencyPage from './pages/SafetyEmergencyPage';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4AA0D5',
        },
        secondary: {
            main: '#A3D9B5',
        },
        error: {
            main: '#F28B82',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/rights" element={<RightsPage />} />
                    <Route path="/report" element={<ReportPage />} />
                    <Route path="/safety" element={<SafetyEmergencyPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
