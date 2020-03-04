let zip = document.getElementById("inputZip");

function getAPI() {
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip.value + ",&appid=be1fc406944f287cb38a91655d63aa8d")
        .then((response) => {
            return response.json(); 
            // let result = response.json(); 
            // console.log(result)
        })
}
