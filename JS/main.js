//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={be1fc406944f287cb38a91655d63aa8d}

let zip = document.getElementById("inputZip");
//console.log(zip)

function getAPI() {
    fetch("api.openweathermap.org/data/2.5/weather?zip=" + zip.value + ",&appid=be1fc406944f287cb38a91655d63aa8d");
    return Response
}
