
var trainNames = []
var destination = []
var firstTime = []
var tFrequency = []

var apiID = 'cac71658';
var apiKey = '4dc9de38439fea1667db9cf4d47b67f7';

var queryURL = "https://transportapi.com/v3/uk/train/station/WAT/live.json?app_id="+apiID+"&app_key="+apiKey+"&darwin=false&train_status=passenger"
console.log(queryURL);

  var config = {
    apiKey: "AIzaSyDHwN5wT1HeJv472UL7vkZzdfQrDt3Nb48",
    authDomain: "myfirstfirebase-dd973.firebaseapp.com",
    databaseURL: "https://myfirstfirebase-dd973.firebaseio.com",
    projectId: "myfirstfirebase-dd973",
    storageBucket: "myfirstfirebase-dd973.appspot.com",
    messagingSenderId: "807640391676"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$(document).ready(function(){

  $.ajax({
       url: queryURL,
         method: "GET"
       }).then(function(response) { 

  let JSONData = response.departures.all

  for (var i = 0; i < JSONData.length; i ++){


    let JSONData = response.departures.all[i]

    if (JSONData.platform === null){
      JSONData.platform = Math.floor(Math.random() * 19) + 1
    }
      
      var name = JSONData.origin_name + " - " + JSONData.platform
      var where = JSONData.destination_name
      var time = JSONData.aimed_departure_time
      var leFrequency = Math.abs(JSONData.best_departure_estimate_mins) + 5

      var firstTimeConverted = moment(time, "hh:mm a").subtract(1, "years");
      var currentTime = moment();
      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      var tRemainder = diffTime % leFrequency;
      var tMinutesTillTrain = leFrequency - tRemainder;
      var nextTrain = moment().add(tMinutesTillTrain, "minutes");

      $("#name").append(name + "<br>")
      $("#destination").append(where + "<br>")
      $("#frequency").append(leFrequency + "<br>")
      $("#next").append(moment(nextTrain).format("hh:mm a") + "<br>")
      $("#away").append(tMinutesTillTrain + "<br>")

      trainNames.push(name)
      destination.push(where)
      tFrequency.push(leFrequency)

      console.log(trainNames);
      console.log(tFrequency);
      console.log(destination);

    }

    database.ref().push({
      TrainNames: trainNames,
      TrainFrequencies: tFrequency,
      TrainDestinations: destination
  })

  $("#submitBtn").on("click", function(){
    
    var nombre = $("#fName").val().trim()
    trainNames.push(nombre)
    var donde = $("#fDestination").val().trim()
    destination.push(donde)
    var tiempo = $("#fTime").val().trim()
    firstTime.push(tiempo)  
    var frequencia = $("#fFrequency").val().trim()
    tFrequency.push(frequencia)

    $("#name").append(nombre + "<br>")
    $("#destination").append(donde + "<br>")
    $("#frequency").append(frequencia + "<br>")

    var firstTimeConverted = moment(tiempo, "hh:mm a").subtract(1, "years");
    var currentTime = moment();
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var tRemainder = diffTime % frequencia;
    var tMinutesTillTrain = frequencia - tRemainder;
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");

    if(frequencia === "0"){ 
      tMinutesTillTrain = frequencia
    }

    $("#next").append(moment(nextTrain).format("hh:mm a") + "<br>")
    $("#away").append(tMinutesTillTrain + "<br>")

      database.ref().push({
        TrainNames: trainNames,
        TrainFrequencies: tFrequency,
        TrainDestinations: destination
    })
  })
})

})
