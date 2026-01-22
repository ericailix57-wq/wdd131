// 1. Footer Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

// 2. Weather Variables (Static for now)
const temperature = 28; // Celsius (Nigeria is hot!)
const windSpeed = 5;    // km/h

// 3. Display Static Data
document.getElementById("temp").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;

// 4. Calculate Wind Chill
function calculateWindChill(temp, wind) {
    // Formula for Celsius: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
}

// 5. Check Conditions and Output
// Metric conditions: Temp <= 10°C and Wind > 4.8 km/h
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
} else {
    // If it's too hot for wind chill (like in Nigeria), display N/A
    windChill = "N/A";
}

document.getElementById("chill").textContent = windChill;
