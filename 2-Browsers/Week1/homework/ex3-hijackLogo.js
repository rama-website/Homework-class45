'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/

// TODO your code goes in here
function hijackGoogleLogo() {
  const googleLogo = document.querySelector('#hplogo'); // Assuming the logo has an id of 'hplogo'

  // Replace the Google logo with the HackYourFuture logo
  googleLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  googleLogo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
}

hijackGoogleLogo();
