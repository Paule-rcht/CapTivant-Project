// Détection dynamique de la langue active ("fr" par défaut)
const langueActive = localStorage.getItem("langue") || "fr";

// Initialisation par défaut de la carte Leaflet sur la France
var map = L.map('map').setView([46.603354, 1.888334], 6);

// Fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Liste des ports avec gestion des extensions d'images
const ports = [
    { name: "Lorient", coords: [47.7489, -3.3666], image: "images/lorient.jpg" },
    { name: "Concarneau", coords: [47.875, -3.9183], image: "images/concarneau.jpeg" },
    { name: "Bordeaux", coords: [44.8378, -0.5792], image: "images/bordeaux.jpg" },
    { name: "Vannes", coords: [47.6559, -2.7603], image: "images/vannes.jpeg" },
    { name: "Brest", coords: [48.3904, -4.4861], image: "images/brest.jpg" },
    { name: "Marseille", coords: [43.2965, 5.3698], image: "images/marseille.png" }
];

// Dictionnaire pour stocker les marqueurs
const marqueursParNom = {};

// Choix de la source de données de bateaux selon la langue
const sourceBateaux = (langueActive === "en" && typeof bateauxEN !== 'undefined') ? bateauxEN : (typeof bateaux !== 'undefined' ? bateaux : []);

// Création des marqueurs sur la carte
ports.forEach(port => {
    let boatCount = 0;
    if (Array.isArray(sourceBateaux)) {
        boatCount = sourceBateaux.filter(b => b.port && b.port.toLowerCase() === port.name.toLowerCase()).length;
    }

    const marker = L.marker(port.coords, {
        icon: L.icon({
            iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        })
    }).addTo(map);

    marqueursParNom[port.name.toLowerCase()] = marker;

    // Traduction dynamique des textes
    const texteBateaux = (langueActive === "en")
        ? `${boatCount} boat${boatCount !== 1 ? 's' : ''} available`
        : `${boatCount} bateau${boatCount > 1 ? 'x' : ''} disponible${boatCount > 1 ? 's' : ''}`;

    const texteBouton = (langueActive === "en") ? "See offers" : "Voir les offres";

    const tooltipContent = `
        <div style="text-align:center; max-width: 200px;">
            <strong style="color:#333;">${port.name}</strong><br>
            <img src="${port.image}" alt="${port.name}" style="width: 100%; border-radius: 8px; margin: 5px 0;">
            <p style="margin: 5px 0; color:#555;">${texteBateaux}</p>
            <a href="offre.html?port=${encodeURIComponent(port.name)}" 
               style="display: inline-block; margin-top: 5px; padding: 6px 12px; background-color: #f29066; 
               color: white; border-radius: 6px; text-decoration: none; font-weight: bold; font-family: 'DM Serif Display', serif;">
               ${texteBouton}
            </a>
        </div>
    `;

    marker.bindTooltip(tooltipContent, {
        direction: 'top',
        offset: [0, -20],
        permanent: false,
        sticky: true,
        opacity: 0.95,
        className: 'custom-tooltip'
    });

    marker.bindPopup(`
        <div class="popup-content" style="text-align: center;">
            <h3 style="margin-top: 0; color:#577550;">${port.name}</h3>
            <img src="${port.image}" alt="${port.name}" style="max-width: 100%; border-radius: 6px; margin: 5px 0;">
            <p style="margin: 5px 0;">${texteBateaux}</p>
            <br>
            <a href="offre.html?port=${encodeURIComponent(port.name)}" style="color:#577550; font-weight:bold; text-decoration:underline;">
                ${texteBouton}
            </a>
        </div>
    `);

    marker.on('click', () => {
        window.location.href = `offre.html?port=${encodeURIComponent(port.name)}`;
    });
});

// Lecture des paramètres URL
function getParametreURL(nom) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nom);
}

// Zoom automatique sur un port si des coordonnées sont passées dans l'URL
const lat = parseFloat(getParametreURL("lat"));
const lng = parseFloat(getParametreURL("lng"));
const zoom = parseInt(getParametreURL("zoom")) || 10;
const portDemande = getParametreURL("port");

if (!isNaN(lat) && !isNaN(lng)) {
    map.setView([lat, lng], zoom);

    if (portDemande && marqueursParNom[portDemande.toLowerCase()]) {
        marqueursParNom[portDemande.toLowerCase()].openPopup();
    }
}