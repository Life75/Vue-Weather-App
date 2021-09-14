var LOCATION_API_LINK = "https://us1.locationiq.com/v1/reverse.php?key=";
var LOCATION_KEY = "pk.3af66cb0b58e34d555ab8b604c40db2c";
function getLocation() {
    var cityName;
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function error(err) {
        console.warn("error");
    }
    function success(pos) {
        var crd = pos.coords;
        var lat = crd.latitude.toString();
        var long = crd.longitude.toString();
        getCity(lat, long);
        return;
    }
    function getCity(lat, long) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "" + LOCATION_API_LINK + LOCATION_KEY + "\n        &lat=" + lat + "\n        &lng=" + long + "\n        &format=json", true);
        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);
        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                var city = response.address.city;
                console.log(city);
                return city;
            }
        }
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
    return "cityName";
}
