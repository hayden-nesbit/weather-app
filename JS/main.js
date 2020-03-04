let zip = document.getElementById("inputZip");

function getAPI() {
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip.value + ",&appid=be1fc406944f287cb38a91655d63aa8d")
        .then((response) => {
            let result = response.json();
            return result;
        })

        .then((data) => {
            console.log(data)
            let temp = data.main.temp;
            let city = data.name;
            let condition = data.weather[0].main;
            //let image = data.
            document.getElementById("temp").innerHTML = Math.floor(temp);
            document.getElementById("city").innerHTML = city;
            document.getElementById("condition").innerHTML = condition;
        
        });

        



    //add catch
}

