import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./Context/UserAuthContext"
import { DataContextProvider } from './Context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserAuthContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </UserAuthContextProvider>
  </BrowserRouter>
);

