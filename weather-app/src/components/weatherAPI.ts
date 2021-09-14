const LOCATION_API_LINK = `https://us1.locationiq.com/v1/reverse.php?key=`;
const LOCATION_KEY = `pk.3af66cb0b58e34d555ab8b604c40db2c`;

function getLocation(): string {
    var cityName: string;

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function error(err: GeolocationPositionError): void{
        console.warn(`error`);
    }
    function success(pos: GeolocationPosition) : void{
        const crd = pos.coords;
        const lat = crd.latitude.toString();
        const long = crd.longitude.toString();

        getCity(lat,long);

        return;
    }

    function getCity(lat: string, long: string){
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET', `${LOCATION_API_LINK}${LOCATION_KEY}
        &lat=${lat}
        &lng=${long}
        &format=json`,true);

        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);

        function processRequest(e: Event){
            if(xhr.readyState == 4 && xhr.status == 200) {
                const response = JSON.parse(xhr.responseText);
                const city = response.address.city;
                console.log(city);
                return city;
            }
        }
        
        
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    return `cityName`
}

export {getLocation}