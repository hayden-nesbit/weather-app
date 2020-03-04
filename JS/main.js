let zip = document.getElementById("inputZip");

document.getElementById("main wrapper").style.display = "none";

let kelvin = 0;

function getAPI() {
    document.getElementById("main wrapper").style.display = "block";

    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip.value + ",&appid=be1fc406944f287cb38a91655d63aa8d")
        .then((response) => {
            let result = response.json();
            return result;
        })

        .then((data) => {
            console.log(data)
            let temp = data.main.temp;
            kelvin = temp;
            let far = (kelvin - 273.15) * (9 / 5) + 32;
            let celcius = (far - 32) * (5 / 9);
            let city = data.name;
            let condition = data.weather[0].main;
            let icon = data.weather[0].icon;

            document.getElementById("city").innerHTML = city;
            document.getElementById("condition").innerHTML = condition;
            document.getElementById("temp").innerHTML = Math.floor(temp) + " K";
            document.getElementById("pic").setAttribute("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");

        });


    catch()
}

let view = 0;
function change() {

    let far = (kelvin - 273.15) * (9 / 5) + 32;
    let celcius = (far - 32) * (5 / 9);
    switch (view) {
        case 1:
            document.getElementById("temp").innerHTML = Math.floor(celcius) + " C";
            break;

        case 2:
            document.getElementById("temp").innerHTML = Math.floor(far) + " F";
            break;

    }
}

function nextView() {
    view++;
    change();
}

