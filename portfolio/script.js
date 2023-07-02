const navLinks = document.querySelectorAll('.nav-links li a');
const sections = document.querySelectorAll('.section');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    
    sections.forEach((section) => {
      section.style.display = 'none';
    });
    
    targetSection.style.display = 'block';
    
    navLinks.forEach((navLink) => {
      navLink.classList.remove('selected');
    });
    
    link.classList.add('selected');
  });
});

const typewriterElement = document.getElementById('typewriter');
const texts = ["Programmer","Web Developer", "Problem Solver","Manas Bakhru"];
let index = 0;
let typingText = "";
let isDeleting = false;

function typewriterEffect() {
  const currentText = texts[index];
  
  if (isDeleting) {
    typingText = currentText.substring(0, typingText.length - 1);
  } else {
    typingText = currentText.substring(0, typingText.length + 1);
  }
  
  typewriterElement.innerHTML = typingText;
  
  if (!isDeleting && typingText === currentText) {
    isDeleting = true;
    setTimeout(typewriterEffect, 2000);
  } else if (isDeleting && typingText === "") {
    isDeleting = false;
    index = (index + 1) % texts.length;
    setTimeout(typewriterEffect, 50);
  } else {
    setTimeout(typewriterEffect, 30);
  }
}

typewriterEffect();

// to set the about as default section 
function showDefaultSection() {
  const defaultSection = "about";
  const defaultSectionElement = document.getElementById(defaultSection);
  defaultSectionElement.classList.add("active-section");

  // Smoothly scroll to the default section
  window.scrollTo({
    top: defaultSectionElement.offsetTop,
    behavior: "smooth",
  });

  // Hide other sections
  const allSections = document.querySelectorAll(".section");
  allSections.forEach((section) => {
    if (section !== defaultSectionElement) {
      section.style.display = "none";
    }
  });
}

// run the function when the page is loaded
window.addEventListener("load", showDefaultSection);


