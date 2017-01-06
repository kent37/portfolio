$(document).ready(function() {
  var units, deg, wind, mapUrl;
  
  var refresh = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + 
            position.coords.latitude +
            '&lon=' + position.coords.longitude + '&units=' + units +
            '&APPID=' + '3db83ed2802508059822b511371efa7b';
        $.getJSON(url, function(weather) {
          var desc = weather.weather[0].description;
          desc = desc[0].toUpperCase() + desc.slice(1);
          $('#at').html('in ' + weather.name);
          $('#weather').html(desc);
          $('#temp').html(Math.round(weather.main.temp) + deg);
          $('#wi').removeClass().addClass('wi wi-owm-'+ weather.weather[0].id);
          $('#wind').html('Wind ' + Math.round(weather.wind.speed) + ' ' + wind);
            
          mapUrl = 'https://www.google.com/maps/embed/v1/view?zoom=14&key=AIzaSyAyioCg5GgtIOV9zcHZaYcUDgP0xTQrZBs&center=' + 
                position.coords.latitude +
            ',' + position.coords.longitude;
        })
      });
    }
  }
  
  var setImperial = function() {
      units = 'imperial';
      deg = '&deg;F';
      wind = 'mph';
    
    refresh();
  }
  
  var setMetric = function() {
      units = 'metric';
      deg = '&deg;C';
      wind = 'kph';

    refresh();
  }
  
  $('.modal').on('shown.bs.modal', function() {
        $(this).find('iframe').attr('src',mapUrl);
    })
  
  $('#F').click(setImperial);
  $('#C').click(setMetric);
  
  setImperial();
})

