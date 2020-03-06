let zip = document.getElementById("inputZip");

document.getElementById("main wrapper").style.display = "none";
document.getElementById("pop").style.display = "none";

let kelvin = 0;

function getAPI() {

    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip.value + ",&appid=be1fc406944f287cb38a91655d63aa8d")
        .then((response) => {
            if (!response.ok) {
                throw response
                    //this "throws"  the error to catch
            }

            return response.json();
            // this returns "response" as a javascript object

        })
        .then((data) => {

            document.getElementById("pop").style.display = "none";
            document.getElementById("main wrapper").style.display = "block";
            document.getElementById("city").innerHTML = data.name;
            document.getElementById("condition").innerHTML = data.weather[0].main;
            document.getElementById("pic").setAttribute("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
            document.getElementById("temp").innerHTML = Math.floor(data.main.temp) + " K";

            kelvin = data.main.temp;
            let far = (kelvin - 273.15) * (9 / 5) + 32;
            let celcius = (far - 32) * (5 / 9);
        })

    .catch((error) => {
        error.text().then(errMessage => {
            //reads full string of error and gets text only
            errMessage = JSON.parse(errMessage)
                //returns parsed json error string as JS object

            document.getElementById("main wrapper").style.display = "none";
            document.getElementById("pop").style.display = "block";
            document.getElementById("pop").innerHTML = "Uh-oh! " + errMessage.message;
            //gets "message" out of parsed json object
        })
    })
}

let view = 0;

function change() {

    let far = (kelvin - 273.15) * (9 / 5) + 32;
    let celcius = (far - 32) * (5 / 9);

    switch (view % 3) {

        case 1:
            document.getElementById("temp").innerHTML = Math.floor(celcius) + " C";
            break;

        case 2:
            document.getElementById("temp").innerHTML = Math.floor(far) + " F";
            break;
        default:
            document.getElementById("temp").innerHTML = Math.floor(kelvin) + " K";
            break;

    }
}

function nextView() {
    view++;
    change();
}