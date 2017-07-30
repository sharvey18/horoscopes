$(document).ready(function () {

  // $.ajax({
  //   url: "http://rest-service.guides.spring.io/greeting"
  // }).then(function(data) {
  //   $('.greeting-id').append(data.id);
  //   $('.greeting-content').append(data.content);
  // });

  $('#submitWeather').on('click', function() {

    var city = $('#city').val();

    if(city != '') {

      $.ajax({

        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=1236d6a559a0489eb4c6b1277de90fce",
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
          var widget = show(data);

          $('#show').html(widget);

          $('#city').val('');

        }

      })

    } else {
      $('#error').html("Field cannot be empty");
    }

  });
});

function show(data) {
  return "<h2>Current Weather for " + data.name + ", "  + data.sys.country + "</h2>" +
         "<h3><strong>Weather</strong>:" + data.weather[0].main + "</h3>" +
         "<h3><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> " + data.weather[0].description + "</h3>" +
         "<h3><strong>Temperature</strong>:" + data.main.temp + "&deg;F</h3>" +
         "<h3><strong>Pressure</strong>:" + data.main.pressure + "hPa</h3>" +
         "<h3><strong>Humidity</strong>:" + data.main.humidity + "%</h3>" +
         "<h3><strong>Min. Temperature</strong>:" + data.main.temp_min + "&deg;F</h3>" +
         "<h3><strong>Max. Temperature</strong>:" + data.main.temp_max + "&deg;F</h3>" +
         "<h3><strong>Wind Speed</strong>:" + data.wind.speed + "m/s</h3>" +
         "<h3><strong>Wind Direction</strong>:" + data.wind.deg + "&deg;</h3>";
}
