var map;
var mapDiv = $("#map")[0]
var chicago = { lat: 41.8781, lng: -87.6298 }

function initMap() {

    //load base map
    map = new google.maps.Map(mapDiv, {
        center: {  lat: -37.759859, lng: 145.128708 }, //watch item - it seems that lng will show up as positive for USA but should be negative or you'll be in China
        zoom: 8
    });

    //load markers
    var markers = locations.map(function(loc, i) {
        //console.log(loc)
        return new google.maps.Marker({
            position: { lat: loc.lat, lng: loc.lng },
            //title: loc.name,
            map: map
        });
    });

    markers.map(function(item, i) {

        var infoWindow = new google.maps.InfoWindow({

            content: locations[i]['name']  //this could be a big string that we create with lots of data..

        });

        item.addListener('mouseover', function() {

            infoWindow.open(map, item)

        });

        item.addListener('mouseout', function() {

            infoWindow.close(map, item)

        });

    });

};

var locations = [
    { lat: -31.563910, lng: 147.154312, name: "loc1" },
    { lat: -33.718234, lng: 150.363181, name: "loc2" },
    { lat: -33.727111, lng: 150.371124, name: "loc3" },
    { lat: -33.848588, lng: 151.209834, name: "loc4" },
    { lat: -33.851702, lng: 151.216968, name: "loc5" },
    { lat: -34.671264, lng: 150.863657, name: "loc6" },
    { lat: -35.304724, lng: 148.662905, name: "loc7" },
    { lat: -36.817685, lng: 175.699196, name: "loc8" },
    { lat: -36.828611, lng: 175.790222, name: "loc9" },
    { lat: -37.750000, lng: 145.116667, name: "loc10" },
    { lat: -37.759859, lng: 145.128708, name: "loc11" },
    { lat: -37.765015, lng: 145.133858, name: "loc12" },
    { lat: -37.770104, lng: 145.143299, name: "loc13" },
    { lat: -37.773700, lng: 145.145187, name: "loc14" },
    { lat: -37.774785, lng: 145.137978, name: "loc15" },
    { lat: -37.819616, lng: 144.968119, name: "loc16" },
    { lat: -38.330766, lng: 144.695692, name: "loc17" },
    { lat: -39.927193, lng: 175.053218, name: "loc18" },
    { lat: -41.330162, lng: 174.865694, name: "loc19" },
    { lat: -42.734358, lng: 147.439506, name: "loc20" },
    { lat: -42.734358, lng: 147.501315, name: "loc21" },
    { lat: -42.735258, lng: 147.438000, name: "loc22" },
    { lat: -43.999792, lng: 170.463352, name: "loc23" }
]