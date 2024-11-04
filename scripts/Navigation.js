function openFoodWebsite() {
    window.open("https://www.allrecipes.com", "_blank");
}

function incrementSmoothieCount() {
    const counterElement = document.getElementById("smoothie-counter");
    let currentCount = parseInt(counterElement.textContent, 10);
    counterElement.textContent = currentCount + 1;
}