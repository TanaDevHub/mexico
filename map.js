// Inicializar el mapa centrado en México con un nivel de zoom ajustado y límites específicos
const map = L.map('map', {
    center: [22.0, -102.0], // Coordenadas centrales ajustadas más hacia el centro-sur
    zoom: 6, // Nivel de zoom inicial adecuado para mostrar México desde Aguascalientes hacia el sur
    maxZoom: 6, // Zoom máximo permitido
    minZoom: 6, // Zoom mínimo permitido
    maxBounds: [ // Límites ajustados (Aguascalientes al norte)
        [22.0, -117.0], // Norte-Oeste (aproximadamente Aguascalientes y áreas al oeste)
        [14.54, -82.0] // Sur-Este (más libertad hacia el este)
    ]
});

// Añadir una capa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Crear un ícono personalizado para los marcadores
const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/14090/14090489.png', // Icono personalizado
    iconSize: [30, 35], // Ajustar el tamaño
    iconAnchor: [15, 35], // Punto de anclaje
    popupAnchor: [0, -35] // Popup justo encima del ícono
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

// Añadir marcadores con popups que se muestran al pasar el ratón
civilizaciones.forEach(civ => {
    const marker = L.marker(civ.coords, { icon: customIcon }).addTo(map);

    // Crear un popup con la información de la civilización
    const popupContent = `
        <b>${civ.nombre}</b><br>
        ${civ.descripcion}<br>
        <i>${civ.fecha}</i>
    `;
    marker.bindPopup(popupContent);

    // Mostrar el popup automáticamente al pasar el ratón
    marker.on('mouseover', function () {
        this.openPopup();
    });

    // Cerrar el popup cuando se quita el ratón
    marker.on('mouseout', function () {
        this.closePopup();
    });
});

// Limitar el arrastre del mapa dentro de los límites definidos
map.on('drag', function() {
    map.panInsideBounds(map.options.maxBounds);
});
