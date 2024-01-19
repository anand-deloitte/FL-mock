import React from 'react';
import {hydrate} from 'react-dom';
import AppPage from './Shared/AppPage';
import { BrowserRouter } from 'react-router-dom';

hydrate(
    <BrowserRouter>
        <AppPage />
    </BrowserRouter>
, document.getElementById('root'));
