mapboxgl.accessToken = 'pk.eyJ1IjoibGFsaXRoLWsiLCJhIjoiY2x4eXZ4MDBxMDVheTJpcjJyMWhvdng3aCJ9.XyTxwam4BtTNyLaxsnW-RQ';

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy: true})

function successLocation(position) {
 console.log(position)
 setupMap([position.coords.longitude,position.coords.latitude ]);
}

function errorLocation(position) {
 setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
        center: center, 
        zoom :14,
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions,'top-left')
}

