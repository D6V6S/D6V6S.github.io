
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


// hamburger 
const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navBarShow() {
  var x = document.getElementById("navBar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 