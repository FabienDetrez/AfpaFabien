
function initMap(listener) {
    // les coordonnées de Lille
    let lille = {
        lat : 50.630259,
        lng: 3.056648
    };
    
    let content = "<h5>Ville de Lille</h5> <p>rue Solférino</p><p>59800 Lille</p>";

    let affichePlace = document.querySelector("#maps");

    let map = new google.maps.Map( affichePlace, {
        zoom: 15,
        center: lille
    });


    let marker = new google.maps.Marker({
        position: lille,
        map: map
    });

    let infos = new google.maps.InfoWindow({
        content: content,
        position: lille
    });

    /* marker.addListener("click", function () {
         infos.open(map);
     });
     */
    marker.addListener("click", () => {
        infos.open(map);


    });

    let saintAndreLezLille = {
        lat : 50.659127,
        lng : 3.044233
    };

    let marker1 = new google.maps.Marker({
        position: saintAndreLezLille,
        map: map
    });

    let content1 = "<h5>Ville de Saint André lez Lille</h5> <p>rue de Lambersart</p><p>59350 Saint André lez Lille</p>";

    let infos1 = new google.maps.InfoWindow({
        content: content1,
        position: saintAndreLezLille
    });

    marker1.addListener("click", () => {
        infos1.open(map);


    });

    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer({'map': map});
    let request = {
        origin: lille,
        destination: saintAndreLezLille,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        unitSystem: google.maps.DirectionsUnitSystem.METRIC
    };
    directionsService.route(request, function (response, status) {

        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setOptions({'suppressMarkers': true});
        }
    });

}


initMap();


