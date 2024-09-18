import React from 'react';
import ReactDOM from 'react-dom/client';
import EmblaCarousel from './EmblaCarousel';
import Header from './Header';
import '../css/base.css';
import '../css/sandbox.css';
import '../css/embla.css';
const OPTIONS = { containScroll: false };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const App = () => (React.createElement(React.Fragment, null,
    React.createElement(Header, null),
    React.createElement(EmblaCarousel, { slides: SLIDES, options: OPTIONS })));
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));
