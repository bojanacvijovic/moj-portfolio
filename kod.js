import { data } from './podaci.js';

const mojiPodaci = data;

document.addEventListener("DOMContentLoaded", function () {
    initializePage(); 
});

const rastuceDugme = document.getElementById('sortiraj-rastuce');
rastuceDugme.addEventListener('click', function () {
    sortirajPodatke(true);
    createCards(mojiPodaci);
});

const opadajuceDugme = document.getElementById('sortiraj-opadajuce');
opadajuceDugme.addEventListener('click', function () {
    sortirajPodatke(false);
    createCards(mojiPodaci);
});

const crvenaCheckbox = document.getElementById('crvena-checkbox');
const plavaCheckbox = document.getElementById('plava-checkbox');
const zelenaCheckbox = document.getElementById('zelena-checkbox');

crvenaCheckbox.addEventListener('change', filterByColor);
plavaCheckbox.addEventListener('change', filterByColor);
zelenaCheckbox.addEventListener('change', filterByColor);

function initializePage() {

    createCards(mojiPodaci);

    const colorCheckboxes = [crvenaCheckbox, plavaCheckbox, zelenaCheckbox];

    colorCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterByColor);
    });
}

function sortirajPodatke(rastuce) {
    if (rastuce) {
        mojiPodaci.sort((a, b) => a.number - b.number);
    } else {
        mojiPodaci.sort((a, b) => b.number - a.number);
    }
}

function createCards(data) {
    const container = document.getElementById('card-container');
    container.innerHTML = ""; 

    data.forEach(entry => {
        if (entry.isVisible) {
            const card = document.createElement('div');
            card.className = 'grid-item';
            card.style.color = entry.color;
            card.textContent = entry.number;

            container.appendChild(card);
        }
    });
}

function filterByColor() {
    const selectedColors = [];

    if (crvenaCheckbox.checked) {
        selectedColors.push('red');
    }

    if (plavaCheckbox.checked) {
        selectedColors.push('blue');
    }

    if (zelenaCheckbox.checked) {
        selectedColors.push('green');
    }

    if (selectedColors.length === 0) {
        mojiPodaci.forEach(entry => entry.isVisible = true);
    } else {
        mojiPodaci.forEach(entry => entry.isVisible = selectedColors.includes(entry.color));
    }

    createCards(mojiPodaci);
}
