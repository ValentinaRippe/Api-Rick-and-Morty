import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Character } from './Components/Character';
import { Episodes } from "./Components/Episodes";
import { NavBar } from './Components/NavBar';


ReactDOM.render(
  <HashRouter>
  <App />
  <Routes>
    <Route path='/' element={<NavBar/>}>
    <Route index element={<Home className='Homen'/>} />
    <Route path='episodes' element={<Episodes/>} />
    <Route path='characters' element={<Character/>} />
    <Route path='*' element={<Navigate replace to='/'/>} />
    </Route>
  </Routes>
  </HashRouter>,
  document.getElementById('root')
);
