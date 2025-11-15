// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Pricing Calculator
const usersSlider = document.getElementById("users");
const storageSlider = document.getElementById("storage");
const projectsSlider = document.getElementById("projects");
const apiCallsSlider = document.getElementById("api-calls");

const usersValue = document.getElementById("users-value");
const storageValue = document.getElementById("storage-value");
const projectsValue = document.getElementById("projects-value");
const apiCallsValue = document.getElementById("api-calls-value");

const totalPrice = document.getElementById("total-price");
const priceBreakdown = document.getElementById("price-breakdown");
const priceLabel = document.getElementById("price-label");
const billingToggle = document.getElementById("billing-toggle");
const monthlyEffective = document.getElementById("monthly-effective");

// Pricing configuration
const pricing = {
    base: 29,
    userPrice: 2,
    storagePrice: 0.1,
    projectPrice: 5,
    apiCallPrice: 0.05
};

// Update slider value displays
function updateSliderDisplay(slider, displayElement, formatFn) {
    displayElement.textContent = formatFn(slider.value);
}

// Format functions
const formatUsers = (value) => value;
const formatStorage = (value) => `${value} GB`;
const formatProjects = (value) => value;
const formatApiCalls = (value) => `${value}k`;

// Calculate total price
function calculatePrice() {
    const users = parseInt(usersSlider.value);
    const storage = parseInt(storageSlider.value);
    const projects = parseInt(projectsSlider.value);
    const apiCalls = parseInt(apiCallsSlider.value);
    const isYearly = billingToggle.checked;

    const baseCost = pricing.base;
    const userCost = users * pricing.userPrice;
    const storageCost = storage * pricing.storagePrice;
    const projectCost = projects * pricing.projectPrice;
    const apiCost = apiCalls * pricing.apiCallPrice;

    let monthlyTotal = baseCost + userCost + storageCost + projectCost + apiCost;
    let total = monthlyTotal;

    // Apply yearly pricing with 20% discount
    if (isYearly) {
        total = monthlyTotal * 12 * 0.8; // 20% discount
        const monthlyEffectiveCost = total / 12;
        priceLabel.textContent = "Estimated Yearly Cost";
        monthlyEffective.style.display = "block";
        monthlyEffective.textContent = `$${Math.round(monthlyEffectiveCost)}/month (effective)`;
    } else {
        priceLabel.textContent = "Estimated Monthly Cost";
        monthlyEffective.style.display = "none";
    }

    // Update total price with animation
    totalPrice.style.transform = "scale(1.1)";
    setTimeout(() => {
        totalPrice.style.transform = "scale(1)";
    }, 200);

    totalPrice.textContent = `$${Math.round(total)}`;

    // Update breakdown
    if (isYearly) {
        const yearlyBase = baseCost * 12 * 0.8;
        const yearlyUsers = userCost * 12 * 0.8;
        const yearlyStorage = storageCost * 12 * 0.8;
        const yearlyProjects = projectCost * 12 * 0.8;
        const yearlyApi = apiCost * 12 * 0.8;
        
        priceBreakdown.innerHTML = `
            <div>Base: $${Math.round(yearlyBase)}</div>
            <div>Users (${users}): $${Math.round(yearlyUsers)}</div>
            <div>Storage (${storage}GB): $${Math.round(yearlyStorage)}</div>
            <div>Projects (${projects}): $${Math.round(yearlyProjects)}</div>
            <div>API Calls (${apiCalls}k): $${Math.round(yearlyApi)}</div>
        `;
    } else {
        priceBreakdown.innerHTML = `
            <div>Base: $${baseCost}</div>
            <div>Users (${users}): $${Math.round(userCost)}</div>
            <div>Storage (${storage}GB): $${Math.round(storageCost)}</div>
            <div>Projects (${projects}): $${Math.round(projectCost)}</div>
            <div>API Calls (${apiCalls}k): $${Math.round(apiCost)}</div>
        `;
    }
}

// Event listeners for sliders
usersSlider.addEventListener("input", () => {
    updateSliderDisplay(usersSlider, usersValue, formatUsers);
    calculatePrice();
});

storageSlider.addEventListener("input", () => {
    updateSliderDisplay(storageSlider, storageValue, formatStorage);
    calculatePrice();
});

projectsSlider.addEventListener("input", () => {
    updateSliderDisplay(projectsSlider, projectsValue, formatProjects);
    calculatePrice();
});

apiCallsSlider.addEventListener("input", () => {
    updateSliderDisplay(apiCallsSlider, apiCallsValue, formatApiCalls);
    calculatePrice();
});

// Event listener for billing toggle
billingToggle.addEventListener("change", () => {
    calculatePrice();
});

// Initialize calculator on page load
updateSliderDisplay(usersSlider, usersValue, formatUsers);
updateSliderDisplay(storageSlider, storageValue, formatStorage);
updateSliderDisplay(projectsSlider, projectsValue, formatProjects);
updateSliderDisplay(apiCallsSlider, apiCallsValue, formatApiCalls);
calculatePrice();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href !== "#" && href !== "#contact") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});

