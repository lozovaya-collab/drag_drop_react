import React from 'react';
import {
    BrowserRouter as
        Router,
        Routes,
        Route,
} from 'react-router-dom';

import { HomePage } from '../../pages/HomePage';
import { AuthPage } from '../../pages/AuthPage';

const MainContent = () => {
    return (
        <Router>
           <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />
            </Routes> 
        </Router>
        
    )
}

export { MainContent }