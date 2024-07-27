// import maplibregl from 'maplibre-gl';

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy: true})

function successLocation(position) {
 console.log(position)
 setupMap([position.coords.longitude,position.coords.latitude ]);
}

function errorLocation(position) {
 setupMap([-2.24, 53.48])
}

function setupMap(center){
const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    center: [77.5733936,13.0679315],
    zoom: 15,
    attributionControl: false
});

}


// [map.on("load" , () => {
//     const directions = new MapLibreGlDirections(map);
//     directions.interactive = true;
    
//     map.addControl(new LoadingIndicatorControl(directions));

//     directions.setWaypoints([
//         [-73.8271025, 40.8032906],
//         [-73.8671258, 40.82234996],
//       ]);

     

//     //   directions.removeWaypoint(0);

//     //   // Add waypoints
//     //   directions.addWaypoint([-73.8671258, 40.82234996], 0);
    
//     //   // Remove everything plugin-related from the map
//     //   directions.clear();
// })


