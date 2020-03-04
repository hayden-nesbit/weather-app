let zip = document.getElementById("inputZip");

document.getElementById("main wrapper").style.display = "none";
document.getElementById("pop").style.display = "none";

let kelvin = 0;

function getAPI() {

    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip.value + ",&appid=be1fc406944f287cb38a91655d63aa8d")
        .then((response) => {
            if (!response.ok) {
                throw response
            }
            let result = response.json();
            return result;
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

        //I have no idea how to explain this... Ian did it
        .catch((error) => {
            console.log(error)
            error.text().then(errMessage => {
                errMessage = JSON.parse(errMessage)

                document.getElementById("main wrapper").style.display = "none";
                document.getElementById("pop").style.display = "block";
                document.getElementById("pop").innerHTML = "Uh-oh! " + errMessage.message;
            })
        })
}

let view = 0;
function change() {

    let far = (kelvin - 273.15) * (9 / 5) + 32;
    let celcius = (far - 32) * (5 / 9);
    console.log(view)
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

