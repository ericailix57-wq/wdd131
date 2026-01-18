// --- Footer Date Logic ---
// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

// --- Hamburger Menu Logic ---
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Add click event listener to the hamburger button
hambutton.addEventListener('click', () => {
    mainnav.parentElement.classList.toggle('show'); // Toggle 'show' class on nav
    hambutton.classList.toggle('open'); // Toggle 'open' class on button (changes icon)
});
