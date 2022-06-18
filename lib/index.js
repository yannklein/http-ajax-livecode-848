import { stalkSomeone } from './clearbit';


// 2. Listen to a click on submit btn (use preventDefault)
const button = document.querySelector('#clearbitSubmit');
button.addEventListener('click', stalkSomeone);