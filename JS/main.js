let zip = document.getElementById("inputZip");


let result;
function getAPI() {
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip.value + ",&appid=be1fc406944f287cb38a91655d63aa8d")
        .then((response) => {
            result = response.json();

        })

        .then((data) => {
            console.log(data.coord);

        });

    //add catch
}
