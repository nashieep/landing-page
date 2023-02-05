/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// navigation var
const navBar = document.getElementById('navbar__list');
// navList var
const navList = document.querySelector('#navbar__list');
//  section var
const sections = document.querySelectorAll('section');
//section var
document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//build nav
function Navbuild(){
    sections.forEach(section => {
        //Create  li elements contained inside the ul
        const navBar = document.createElement('li');
        //Insert the html text to  the li
        navBar.insertAdjacentHTML("afterbegin",`<a href="#${section}" class="menu__link">${section.dataset.nav}</a>`);
        //Append the li to the ul
        navList.appendChild(navBar);

        //scrollBehavior Function 
        scrollBehavior(navBar, section);
    });
    //Append the ul to the nav
    navBar.appendChild(navList);
}
// Start of Scroll to anchor ID using scrollTO event
function scrollBehavior(navBar, section){
    navBar.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}
//Start of Set the Section class 'active' when it near to the top of viewport
// give section a different appearance when viewed
function ActiveClass(){
  for (section of sections){
    //if section is in viewport
    if (sectionInViewPort(section)){
      // check if "your-active-class" already exist
      if (!section.classList.contains('your-active-class')){
        // add it
        section.classList.add('your-active-class');
      }
    } else { // remove 'your-active-class' if not in viewport
      section.classList.remove('your-active-class');
    }
  }
}
// Start of Toggle the NavBar According to User Scroll Activity
function toggleActiveSection(){
    let userScroll;
    //Default Settings for NavBar while scrolling
    header.style.css = 'opacity: 1; transition: ease 0.3s ;'
    // Cleartimeout throughout the scrolling
    window.Timeout( userScroll );
    //The Timeout to run after scrolling ends
    userScroll = setTimeout(function() {
      //The Settings Executed on NavBar after Timeout finished
        header.style.css = 'opacity: 0; transition: ease 0.3s ;'
    },5000);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
Navbuild();
// scroll to top using scrollTO event
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
// Set sections as active
window.addEventListener('scroll', (event)=>{
  activeSection();
  toggleActiveClass();
})
