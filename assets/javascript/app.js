
var apiID = "cac71658"
var apiKey = "4dc9de38439fea1667db9cf4d47b67f7"
var waterlooURL = "http://transportapi.com/v3/uk/places.json?query=waterloo&type=train_station&app_id="+apiID+"&app_key="+apiKey+"&train_status=passenger"
var birminghamURL = "http://transportapi.com/v3/uk/places.json?query=birmingham&type=train_station&app_id="+apiID+"&app_key="+apiKey+"&train_status=passenger"


$.ajax({
    url: waterlooURL,
    method: "GET"
  }).then(function(response) {

    var dataLength = response.member.length

    for(var i = 0; i < dataLength; i++){


        var name = response.member[i].name
        var namePElement = $("#name").append(name + "<br>")

        var destination = response.member[i].tiploc_code
        var namePElement = $("#destination").append(destination + "<br>")

        var Frequency = response.member[i].latitude
        var newFrequency = Math.floor(Math.random() * Frequency) + 10
        var frequencyPElement = $("#frequency").append(newFrequency + "<br>")

        var hours = Math.floor(Math.random() * 24)
        var seconds =  Math.floor(Math.random() * 60)
        var minutes =  Math.floor(Math.random() * 60)

        var nextPElement = $("#next").append(hours+":"+minutes+":"+seconds+ " pm" + "<br>")

        var awayPElement = $("#away").append((newFrequency -5 ) + "<br>")

    }

  });

  $.ajax({

    url: birminghamURL,
    method: "GET"
  }).then(function(response) {

    var dataLength = response.member.length



    for(var i = 0; i < dataLength; i++){


        var name = response.member[i].name
        var namePElement = $("#name").append(name + "<br>")

        var destination = response.member[i].tiploc_code
        var namePElement = $("#destination").append(destination + "<br>")


        var Frequency = response.member[i].latitude
        var newFrequency = Math.floor(Math.random() * Frequency) + 10
        var frequencyPElement = $("#frequency").append(newFrequency + "<br>")

        var hours = Math.floor(Math.random() * 24)
        var seconds =  Math.floor(Math.random() * 60)
        var minutes =  Math.floor(Math.random() * 60)

        var nextPElement = $("#next").append(hours+":"+minutes+":"+seconds+ " pm" + "<br>")

        var awayPElement = $("#away").append((newFrequency -5 ) + "<br>")


    }

  });
