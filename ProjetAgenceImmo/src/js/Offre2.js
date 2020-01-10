
function initMap(listener) {
    // les coordonnées de Lille
    let lilleAgence = {
        lat : 50.630259,
        lng: 3.056648
    };

    let content = "<h5>Ville de Lille</h5> <p>rue Solférino</p><p>59800 Lille</p>";

    let affichePlace = document.querySelector("#maps");

    let map = new google.maps.Map( affichePlace, {
        zoom: 15,
        center: lilleAgence
    });


    let marker = new google.maps.Marker({
        position: lilleAgence,
        map: map
    });

    let infos = new google.maps.InfoWindow({
        content: content,
        position: lilleAgence
    });

    /* marker.addListener("click", function () {
         infos.open(map);
     });
     */
    marker.addListener("mouseover", () => {
        infos.open(map);

    });

    marker.addListener("mouseout", () => {
        infos.close(map);

    });


    let laMadeleine = {
        lat : 50.65501662167807,
        lng : 3.0690647587421704
    };

    let marker1 = new google.maps.Marker({
        position: laMadeleine,
        map: map
    });

    let content1 = "<h5>Rue Gambetta</h5> <p></p><p>59110 La Madeleine</p>";

    let infos1 = new google.maps.InfoWindow({
        content: content1,
        position: laMadeleine
    });

    marker1.addListener("mouseover", () => {
        infos1.open(map);


    });

    marker1.addListener("mouseout", () => {
        infos1.close(map);

    });

    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer({'map': map});
    let request = {
        origin: lilleAgence,
        destination: laMadeleine,
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

