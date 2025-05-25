// Default map view centered on France
var map = L.map('map').setView([46.603354, 1.888334], 6);

// Map background (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// List of ports
const ports = [
    { name: "Lorient", coords: [47.7489, -3.3666], image: "images/lorient.jpg" },
    { name: "Concarneau", coords: [47.875, -3.9183], image: "images/concarneau.jpeg" },
    { name: "Bordeaux", coords: [44.8378, -0.5792], image: "images/bordeaux.jpg" },
    { name: "Vannes", coords: [47.6559, -2.7603], image: "images/vannes.jpg" },
    { name: "Brest", coords: [48.3904, -4.4861], image: "images/brest" },
    { name: "Marseille", coords: [43.2965, 5.3698], image: "images/marseille.png" }
];

// Used to retrieve the marker of a specific port
const markersByName = {};

// Create markers
ports.forEach(port => {
    let boatCount = 0;
    if (typeof bateaux !== 'undefined' && Array.isArray(bateaux)) {
        boatCount = bateaux.filter(b => b.port && b.port.toLowerCase() === port.name.toLowerCase()).length;
    }

    const marker = L.marker(port.coords, {
        icon: L.icon({
            iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        })
    }).addTo(map);

    markersByName[port.name.toLowerCase()] = marker;

    const tooltipContent = `
        <div style="text-align:center; max-width: 200px;">
            <strong>${port.name}</strong><br>
            <img src="${port.image}" alt="${port.name}" style="width: 100%; border-radius: 8px; margin: 5px 0;">
            <p>${boatCount} boat${boatCount !== 1 ? 's' : ''} available</p>
            <a href="offre.php?port=${encodeURIComponent(port.name)}" 
               style="display: inline-block; margin-top: 8px; padding: 8px 16px; background-color: #f29066; 
               color: white; border-radius: 8px; text-decoration: none; font-family: 'DM Serif Display', serif;">
               View offers
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
            <h3>${port.name}</h3>
            <img src="${port.image}" alt="${port.name}" style="max-width: 100%; margin: 0 auto;">
            <p>${boatCount} boat${boatCount !== 1 ? 's' : ''} available</p>
        </div>
    `);

    marker.on('click', () => {
        window.location.href = `offre.php?port=${encodeURIComponent(port.name)}`;
    });
});

// 📌 Utility function to get URL parameters
function getURLParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// 🔍 Check if URL contains coordinates
const lat = parseFloat(getURLParameter("lat"));
const lng = parseFloat(getURLParameter("lng"));
const zoom = parseInt(getURLParameter("zoom")) || 10;
const requestedPort = getURLParameter("port");

// 📍 If valid coordinates → zoom on the requested port
if (!isNaN(lat) && !isNaN(lng)) {
    map.setView([lat, lng], zoom);

    if (requestedPort && markersByName[requestedPort.toLowerCase()]) {
        markersByName[requestedPort.toLowerCase()].openPopup();
    }
}
