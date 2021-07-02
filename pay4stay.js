let bbidLocations = [
    {
        "bbid": "10002",
        "lat": "-33.952782",
        "lng": "18.80064",
        "name": "cozy bay",
        "picture1": "https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/14970/property/2881.jpg",
        "picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/14970/property/2881.jpg",
        "picture3": "https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/14970/property/2881.jpg"
    },{
        "bbid": "14970",
        "lat": "-33.922782",
        "lng": "18.80064",
        "name": "leker slaap",
        "picture1": "https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/14970/property/2881.jpg",
        "picture2": "https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/14970/property/1384.jpg",
        "picture3": "https://d1zyr4xmqw3mni.cloudfront.net/image/200/gallery/14970/property/1218.jpg"
    }
];

let guestHouses = [];

let map;
var marker;
var propertyMarkers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {lat: -33.952782, lng: 18.80064},
    });

    map.addListener("click", (e) => {
        $( "#lat").html(e.latLng.lat);
    $("#lng").html(e.latLng.lng);
    placeMarker(e.latLng, map);});
}

class GuestHouse {
    constructor(id, picture1, picture2, picture3, name, lat, lng) {
        this.url = "https://book.nightsbridge.com/" + id;
        this.picture1 = picture1;
        this.picture2 = picture2;
        this.picture3 = picture3;
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
}

function drawResults(guestHouses) {

    var resultDiv = "";
    for (var i = 0, l = guestHouses.length; i < l; i++) {

        resultDiv = resultDiv + "<div><a href='" + guestHouses[i].url + "'>Book here!</a>"
            + "<br>"
            + "<label>" + guestHouses[i].name + "</label>"
            + "<br>"
            + "<image src = '" + guestHouses[i].picture2 + "'>"
            + "<image src = '" + guestHouses[i].picture2 + "'>"
            + "<image src = '" + guestHouses[i].picture3 + "'>"
            + "</div>"
        addGuesthouseMarker(guestHouses[i],map);
    }
    $("#searchResults").html(resultDiv);
}

function addGuesthouseMarker(guestHouse, map) {
   var bbPosition = new google.maps.LatLng(guestHouse.lat, guestHouse.lng);
   var localMarker = new google.maps.Marker({
        position: bbPosition,
        label: guestHouse.name,
        map: map,
    });

    propertyMarkers.push(localMarker);
}

function removeMarkers(){
    for(i=0; i<propertyMarkers.length; i++){
        propertyMarkers[i].setMap(null);
    }
}

function populateProperties(position) {
    var distance = $("#distance").val()*1000;
    var resultSize = $("#resultSize").val();
    guestHouses = [];
    $("#searchResults").html("");
    removeMarkers();
    for (var i = 0, l = bbidLocations.length; i < l; i++) {

        console.log(resultSize);
        var bb = bbidLocations[i];
        var bbPosition = new google.maps.LatLng(bb.lat, bb.lng);
        var distanceBetween = google.maps.geometry.spherical.computeDistanceBetween(bbPosition, position);
        if (distanceBetween < distance) {
            let guestHouse = new GuestHouse(bb.bbid, bb.picture1, bb.picture2, bb.picture3, bb.name, bb.lat, bb.lng);
            guestHouses.push(guestHouse);
        }
        if (guestHouses.length >= resultSize){
            break;
        }

    }
    drawResults(guestHouses);
}

function placeMarker(position, map) {
    if (marker == null) {
        marker = new google.maps.Marker({
            position: position,
            map: map
        });
    } else {
        marker.setPosition(position);
    }
    map.panTo(position);
    populateProperties(position);
}




