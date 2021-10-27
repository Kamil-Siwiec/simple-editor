import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO, take a look how it works, and have fun 🚀')

const textarea = document.querySelector('.textarea--js');
const save = document.querySelector('.load--js');
const load = document.querySelector('.save--js');
const clear = document.querySelector('.clear--js');


save.addEventListener('click', (e) => {
 localStorage.setItem('entry', textarea.value);
})

load.addEventListener('click', (e) => {
    textarea.value = localStorage.getItem('entry');
})