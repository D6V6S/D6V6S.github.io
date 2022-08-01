'use strict';
// underline menu

document.querySelectorAll('a.nav-link-underline').forEach(elem => {

  elem.onmouseenter =
  elem.onmouseleave = e => {

    const tolerance = 10;

    const left = 0;
    const right = elem.clientWidth;

    let pageOfset = (window.innerWidth - document.querySelector('.container').offsetWidth)/2;
    
    let x = e.pageX - pageOfset - elem.offsetLeft;

    if (x - tolerance < left) x = left;
    if (x + tolerance > right) x = right;

    elem.style.setProperty('--x', `${x}px`);

    
  };

});


// hamburger v2
const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    document.getElementById("navBar").classList.toggle("show");
    })
    ;
});