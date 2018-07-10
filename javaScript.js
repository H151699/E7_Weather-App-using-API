$(document).ready(function(){

// Get Location

navigator.geolocation.getCurrentPosition(success, error);
function success(pos){
  var lat = pos.coords.latitude;
  var long = pos.coords.longitude;
  weather(lat,long);// sen to weahter API

}

function error(){
  console.log('error');
}

  // Call weather
  function weather(lat, long){
    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

    $.getJSON(URL, function(data){
      // console.log(data);
      updateDOM(data);//
    });
  }

  // weather(); // respons from API
  function updateDOM(data){

    var city = data.name;
    var temp = Math.round(data.main.temp_max);
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;

    $('#city').html(city);// replace html's city
    $('#temp').html(temp);
    $ ('#desc').html(desc);
    $ ('#icon').attr('src',icon); // change icon source
  }
});
