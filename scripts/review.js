// 1. LocalStorage Counter Logic
// Get the current count from storage (convert to number), or default to 0
let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;

// Increment the count (because they just submitted a review to get here)
reviewCount++;

// Save the new count back to storage
localStorage.setItem("reviewCount-ls", reviewCount);

// Display the count on the page
document.getElementById("reviewCount").textContent = reviewCount;

// 2. Footer Date Logic (Reused)
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
