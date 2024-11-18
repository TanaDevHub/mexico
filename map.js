// Inicializar el mapa centrado en México con un nivel de zoom predeterminado
const map = L.map('map', {
    center: [23.634501, -102.552784], // Coordenadas centrales de México
    zoom: 5, // Zoom inicial
    maxZoom: 7, // Zoom máximo
    minZoom: 5, // Zoom mínimo
    maxBounds: [ // Límites del mapa para no salir de México
        [33.0, -118.0], // Norte-Oeste
        [14.0, -86.0]   // Sur-Este
    ]
});

// Añadir una capa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Crear un ícono personalizado para los marcadores
const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/14090/14090489.png', // Icono de marcador
    iconSize: [30, 40], // Tamaño del icono
    iconAnchor: [15, 40], // Punto donde el icono se ancla
    popupAnchor: [0, -40] // Punto donde el popup aparece
});

// Lista de civilizaciones con coordenadas y fechas
const civilizaciones = [
    { 
        nombre: "Olmecas", 
        coords: [18.2, -94.2], 
        descripcion: "Primera civilización mesoamericana.", 
        fecha: "1200 a.C. - 400 a.C." 
    },
    { 
        nombre: "Mayas", 
        coords: [20.684, -88.567], 
        descripcion: "Cultura avanzada en matemáticas y astronomía.", 
        fecha: "2000 a.C. - 1500 d.C." 
    },
    { 
        nombre: "Mexicas", 
        coords: [19.4326, -99.1332], 
        descripcion: "Fundadores de Tenochtitlán.", 
        fecha: "1325 d.C. - 1521 d.C." 
    },
    { 
        nombre: "Zapotecas", 
        coords: [17.058, -96.721], 
        descripcion: "Monte Albán y el Valle de Oaxaca.", 
        fecha: "700 a.C. - 1521 d.C." 
    },
    { 
        nombre: "Toltecas", 
        coords: [19.798, -99.221], 
        descripcion: "Influyeron en la arquitectura y cultura mexica.", 
        fecha: "900 d.C. - 1168 d.C." 
    }
];

// Añadir marcadores para cada civilización
civilizaciones.forEach(civ => {
    L.marker(civ.coords, { icon: customIcon })
        .addTo(map)
        .bindPopup(`<b>${civ.nombre}</b><br>${civ.descripcion}<br><i>${civ.fecha}</i>`);
});

// Añadir un evento al mapa para limitar interacciones fuera de México
map.on('drag', function() {
    map.panInsideBounds(map.options.maxBounds);
});
