// Hozzávalók kiválasztása
const cheese = document.getElementById('cheese');
const pepperoni = document.getElementById('pepperoni');
const mushrooms = document.getElementById('mushrooms');
const salami = document.getElementById('salami');
const cucumber = document.getElementById('cucumber');

// Gombok kiválasztása
const cheeseButton = document.getElementById('cheeseButton');
const pepperoniButton = document.getElementById('pepperoniButton');
const mushroomButton = document.getElementById('mushroomButton');
const salamiButton = document.getElementById('salamiButton');
const cucumberButton = document.getElementById('cucumberButton');

// Eseménykezelők
cheeseButton.addEventListener('click', () => {
    toggleIngredient(cheese, 'cheeseImage');
});

pepperoniButton.addEventListener('click', () => {
    toggleIngredient(pepperoni, 'pepperoniImage');
});

mushroomButton.addEventListener('click', () => {
    toggleIngredient(mushrooms, 'mushroomImage');
});

salamiButton.addEventListener('click', () => {
    toggleIngredient(salami, 'salamiImage');
});

cucumberButton.addEventListener('click', () => {
    toggleIngredient(cucumber, 'cucumberImage');
});

// Funkció egy hozzávaló hozzáadására vagy eltávolítására
function toggleIngredient(ingredient, imageId) {
    const imageElement = document.getElementById(imageId);

    if (ingredient.classList.contains('show')) {
        ingredient.classList.remove('show');
        imageElement.classList.remove('show-image');
    } else {
        ingredient.classList.add('show');
        
        // Szín megjelenítése
        setTimeout(() => {
            imageElement.classList.add('show-image');

            // Kép eltüntetése
            setTimeout(() => {
                ingredient.classList.remove('show');
                imageElement.classList.remove('show-image');
            }, 2000); // 2 másodperc
        }, 500); // 0.5 másodperc
    }
}
