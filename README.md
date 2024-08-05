# Vanilla JavaScript Scrolling Project

## Table of Contents

- [Overview](#overview)
  - [The Project](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
 Project based in vanilla javascript on how to create a navbar that "slides down when scrolling and then stays at a fixed position at a certain height.

### About the Project
    This project is built with Vanilla JavaScript, and is simply how to create a navbar that slides down when scrolling and then stays at a fixed position at a certain height.

### Screenshot

### Links
    Tutorial with timestamp:
    https://www.youtube.com/watch?v=3PHXvlpOkf4&t=5943s

    FreeCodeCamp Article, "JavaScript Porjects for Beginners":
    https://www.freecodecamp.org/news/javascript-projects-for-beginners/#how-to-create-a-color-flipper

## My Process
    I set up the files before I let the tutorial run, in the order of index.html, styles.css and script.js.I have Github desktop make the repository with a README.md file automatically prior to this, and is expanded upon throughout the learning process. But I added and edited this template from FrontendMentor.io to be more appropriate for reviewing finished tutorials and the key concepts it covered.
    Unfortunately, I'm still in the habit of using the ! shortcut for my html boilerplates.
    The CSS, links section and logo.svg were copied from John Smilga's repository of this project, which were linked to in the video tutorial description. All else was typed out by myself.
    I have been consistently writing notes and predictions to test my knowledge in both the CSS and JS files. This has helped a lot with my self-confidence in what I really do know and don't know with JavaScript. The notes are also to act as a way of pseudo-coding before typing out the project as well.

### Built With
- Semantic HTML5 markup
- CSS custom properties
- Vanilla JavaScript

### Key Concepts Covered:
document.getElementById()
getFullYear()
getBoundingClientRect()
slice method
window.scrollTo()

### What I Learned
Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

| // Element.getBoundingClientRect() method returns the size of an element and its positiom relative to the viewport.
| // pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
| // slice extracts a section of a string without modifying original string
| // offsetTop - A number, representing the top position of the element, in pixels.

| const navHeight = navbar.getBoundingClientRect().height;

Deprecated in programming means that a piece of code was marked as no longer useful because it had been superseded by newer code. That happened to when I used offsetTop, according to when I hover over it. Though it doesn't tell me what it was superseded by.

### Continued development
Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

I feel like I have a overthinking understanding on what the method .getBoundingClientRect() does. It pulls the height of the element or selector, and helps assign it to the JavaScript variable being made. In action, it seems very useful for making a seamless and less cluttered UI, especially when a clicked link scrolls to the respective portion of the site. It prevents the fixed navbar from taking too much space from the content.
I'd like to figure out what superseded the pageYOffset.
I didn't understand the use of the slice method for the href.

### Useful resources
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [The Markdown Guide](https://www.markdownguide.org/) - If you want more help with writing markdown, we'd recommend checking it out to learn more.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) - Guide and reference for Frontend languages; HTML, CSS and JavaScript
- [How to Learn to Code and Get a Developer Job [Full Book]](https://www.freecodecamp.org/news/learn-to-code-book/) - Quincy Larson's free book on learning how to code, and get a job as a developer. Free audiobook included.

## Author
- GitHub - [K Tafalla](https://github.com/SoftxReset?tab=overview&from=2024-04-01&to=2024-04-30)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.