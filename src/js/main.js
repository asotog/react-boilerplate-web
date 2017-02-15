// Vendors
import React from 'react';
import {render} from 'react-dom';
// Own JS
import ContactComponent from './components/contact-component';
// Own CSS
import mainCss from '../css/main.scss';

render(<ContactComponent/>, document.querySelector('contact-component'));

console.log('main.js working...');

