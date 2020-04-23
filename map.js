'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiamFtbmFkZWwiLCJhIjoiY2s4NmdpMW93MGhicjNscnEyNTVzNDQzbCJ9.duijjHslyNDxEtAfMBvh-w'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jamnadel/ck9c3bg4506ei1ilu2hogirdt',
    center: [-73.967925,40.772752],
    zoom: 10
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})