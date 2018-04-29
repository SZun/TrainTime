
var apiID = "cac71658"
var apiKey = "4dc9de38439fea1667db9cf4d47b67f7"
var queryURL = "https://transportapi.com/v3/uk/train/station/WAT/live.json?app_id="+apiID+"&app_key="+apiKey+"&darwin=true&train_status=passenger"

function trains(response){

  var dataArrayLength = response.departures.all.length

  for(var i = 0; i < dataArrayLength; i++){

    var originName = response.departures.all[i].origin_name
    var platform = response.departures.all[i].platform

    var name = originName +" - "+ platform
    var namePElement = $("#name").append(name + "<br>")

    var destination = response.departures.all[i].destination_name
    var destinationPElement = $("#destination").append(destination + "<br>")

    var next = response.departures.all[i].aimed_departure_time
    var nextPElement = $("#next").append(next +  moment().format("a") + "<br>")
  
    next = next.toString()
    next = next.split('')

    var min = next[3]+next[4]
    var currentMinute = moment().format("mm")

    var away = Math.abs(min - currentMinute)
    var awayPElement = $("#away").append(away + "<br>")

    var frequency = Math.abs(moment(min).diff(moment(),"years"))
    if (isNaN(frequency) === true){
      frequency = 10
    }
    var frequencyPElement = $("#frequency").append(frequency + "<br>")
    
  }
}

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    trains(response);    

  });

