import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContactsPage from "./components/ContactsPage";
import NoPage from "./components/NoPage";
import About from './components/About';
import Index from './components/Index';

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />

    <nav>
        <ul>
          <li>
            <NavLink to="/">Index</NavLink>
          </li>
          <li>
            <NavLink to="/contactspage">ContactsPage</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="contactspage" element={<ContactsPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);