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
*/const navigation = document.getElementbyId("navbar__list");
//section var
const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navbuild = () =>{
  
  let navul =''
  //loop over all sections
  sections.forEach(Section => (
    
  const sectionID = section.ID;
    const Sectiondata= Section.data.nav;
    
    navul + = <li><a class="menu_link" href="#$(sectionID)">$[sectiondata]</li>
    });
  //append elements to navigation
        navigation.innerHTML= navul;
  
}
navbuild();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

