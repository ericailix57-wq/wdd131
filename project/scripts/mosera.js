// 1. Dynamic Year & Footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = "Last Update: " + document.lastModified;

// 2. Hamburger Menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('open');
});

// 3. Car Array (Objects) - Required for Project
const cars = [
    {
        name: "Mosera GT",
        type: "sport",
        price: "$150,000",
        img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=60",
        desc: "The flagship sport model designed for speed."
    },
    {
        name: "Mosera X",
        type: "suv",
        price: "$120,000",
        img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=60",
        desc: "Luxury meets off-road capability."
    },
    {
        name: "Mosera E",
        type: "electric",
        price: "$180,000",
        img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=500&q=60",
        desc: "Zero emissions, 100% performance."
    },
    {
        name: "Mosera Classic",
        type: "sport",
        price: "$200,000",
        img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=500&q=60",
        desc: "A tribute to the golden age of racing."
    }
];

// 4. Function to Create Car Cards (Template Literals)
function createCarCard(filteredCars) {
    const gallery = document.getElementById("car-gallery");
    if (gallery) {
        gallery.innerHTML = "";
        filteredCars.forEach(car => {
            let card = document.createElement("div");
            card.className = "car-card";
            card.innerHTML = `
                <img src="${car.img}" alt="${car.name}" loading="lazy" width="400" height="250">
                <div class="car-details">
                    <h3>${car.name}</h3>
                    <p><strong>Type:</strong> ${car.type.toUpperCase()}</p>
                    <p><strong>Price:</strong> ${car.price}</p>
                    <p>${car.desc}</p>
                </div>
            `;
            gallery.appendChild(card);
        });
    }
}

// Initial Load
createCarCard(cars);

// 5. Event Listeners for Filtering
const buttons = document.querySelectorAll(".filter-buttons button");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "all") {
            createCarCard(cars);
        } else {
            createCarCard(cars.filter(car => car.type === btn.id));
        }
    });
});

// 6. LocalStorage: Visit Counter (For Contact Page)
const visitCountSpan = document.getElementById("visitCount");
if (visitCountSpan) {
    let visits = Number(window.localStorage.getItem("mosera-visits")) || 0;
    visits++;
    window.localStorage.setItem("mosera-visits", visits);
    visitCountSpan.textContent = visits;
}
