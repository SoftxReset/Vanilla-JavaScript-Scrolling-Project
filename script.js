// Element.getBoundingClientRect() method returns the size of an element and its positiom relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A number, representing the top position of the element, in pixels.

// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// () = "envoke"

// close links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle("show-links");
    // This approach is fine, but there will be times where you'll have to calculate the height dynamically. Cannot always manually pad the class.
    const containerHeight = linksContainer.getBoundingClientRect().height;
    //console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    //console.log(linksHeight);

    if(containerHeight === 0){
        // dynamically add height to the container, because it is zero. FN + ESC for backtick `
        // the following is inline (css) style
        // this is a dynamic (height) set up for navigation toggle
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// fixed navbar
window.addEventListener("scroll", function() {
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// smooth scroll - precise smooth scrolling, specifically

// select links
const scrollLinks = document.querySelector('.scroll-link');

// nothing in the following is hardcoded, as is the recommended way of coding, especially in interactible projects
scrollLinks.forEach(function(link) {
    link.addEventListener("click", function (e) {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        // console.log(id);
        const element = document.getElementById(id);
        // calculate the heights, can be put where it affects globally
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        // variable to hold the value if the navbar is fixed or not, by testing if true or not
        // check the navbar isn't fixed, then assign a different value, due to 'user error' taking it out of the normal flow of the navbars
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        // to check if the navbar is fixed or not: respectively will have one value, or different values.
        // console.log(position);

        // remove the navbar from the normal flow after scrolling has begun.
        if(!fixedNav) {
            position = position - navHeight;
        };
        // The 82 is a set up for the top of the navbar, meaning that the links are open.
        if(navHeight > 82) {
            position = position + containerHeight;
        };

        window.scrollTo({
            left: 0, 
            top: position,
        });
        linksContainer.style.height = 0;
    });
});