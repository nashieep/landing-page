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
 * //navigation var
*/
const navigation = document.getElementById('navbar__list');

//section var
const section = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// create navbar from section id names from querySelectorAll
function createNavbar() {
  sectionsElements.forEach((section) => {
    navigation.appendChild(createNavbarItem(section));
  });
    navList +='<li><a class="nav__link" "menu__link" href="#${section.id}"id="navli">${section.dataset.nav}</a></li>';
  });
navbarUL.innerHTML = navList;
createNavbar();

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuild = () => {
  
  let navUI ='';
  //loop over all sections
  sections.forEach(Section => {
     const sectionId = section.id;
    const sectionDataNav= section.dataset.nav;
    
    navUI += '<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</li>';
  //append elements to navigation
        navigation.innerHTML= navul;
  
}

// Add class 'active' to section when near top of viewport
const addActivesection = () => {
  const id = section.getAttribute('id');
  document.querySelector(`#${id}`).classList.add('your-active-class');
}

// Scroll to anchor ID using scrollTO event
const handleLinkClick = (e) => {
	e.preventDefault();
	const sectionId = e.target.getAttribute('href');
	const section = document.querySelector(sectionId);
	window.scrollTo({
		top: section.offsetTop,
		behavior: 'smooth',
	});
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navBuilt();
// Scroll to section on link click
const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach((link) => link.addEventListener('click', handleLinkClick));
// Set sections as active
window.addEventListener('scroll', detectActiveSection);
