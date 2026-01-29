// 1. Footer Data
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// 2. Hamburger Menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('open');
});

// 3. Temple Array (9 Objects as required)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slc-temple-2015-dusk-1566662-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-main.jpeg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
  }
];

// 4. Function to generate cards
function createTempleCard(filteredTemples) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; // Clear current gallery

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.className = "card";
        
        let name = document.createElement("h3");
        name.textContent = temple.templeName;
        
        let location = document.createElement("p");
        location.className = "card-content";
        location.innerHTML = `<span class="card-label">Location:</span> ${temple.location}`;
        
        let dedicated = document.createElement("p");
        dedicated.className = "card-content";
        dedicated.innerHTML = `<span class="card-label">Dedicated:</span> ${temple.dedicated}`;
        
        let area = document.createElement("p");
        area.className = "card-content";
        area.innerHTML = `<span class="card-label">Size:</span> ${temple.area} sq ft`;
        
        let img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy"; // Required by rubric
        img.width = 400;
        img.height = 250;
        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);
        
        gallery.appendChild(card);
    });
}

// 5. Filter Event Listeners
document.querySelector("#home").addEventListener("click", () => {
    document.querySelector("main h2").textContent = "Home";
    createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    document.querySelector("main h2").textContent = "Old Temples (Before 1900)";
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    document.querySelector("main h2").textContent = "New Temples (After 2000)";
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
    document.querySelector("main h2").textContent = "Large Temples (> 90k sq ft)";
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    document.querySelector("main h2").textContent = "Small Temples (< 10k sq ft)";
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

// Initial Load
createTempleCard(temples);
