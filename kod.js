import { data } from './podaci.js';

const mojiPodaci = data;

document.addEventListener("DOMContentLoaded", function () {
    createCards(mojiPodaci);
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

function sortirajPodatke(rastuce) {
    if (rastuce) {
        mojiPodaci.sort((a, b) => a.number - b.number);
    } else {
        mojiPodaci.sort((a, b) => b.number - a.number);
    }
}

function createCards(data) {
    document.getElementById('card-container').replaceChildren();

    const container = document.getElementById('card-container');

    data.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'grid-item';
        card.style.color = entry.color; // Set card color
        card.textContent = entry.number

        container.appendChild(card);
    });
}
