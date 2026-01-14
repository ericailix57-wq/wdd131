// Get the current year
const currentYear = new Date().getFullYear();

// Output the current year to the span with id "currentyear"
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Output the last modified date to the paragraph with id "lastModified"
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;
