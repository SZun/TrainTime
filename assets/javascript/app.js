
var trainNames = ["The Godfather","The Dark Knight", "The Shawshank Redemption","The Silence of the Lambs","The Big Lebowski","The Empire Strikes Back","The Shining"]
var destination = ["New York","LA","Chicago","Seattle","Portland","Houston","Washington DC"]
var firstTime = ["07:20","04:35","06:26","03:30","09:44","02:10","07:55"]
var tFrequency = ["67","9","129","7","28","999","44"]

  // Initialize Firebase
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

  function trains(response){
  for (var i = 0; i < firstTime.length; i ++){

      var firstTimeConverted = moment(firstTime[i], "hh:mm a").subtract(1, "years");
      var currentTime = moment();
      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      var tRemainder = diffTime % tFrequency[i];
      var tMinutesTillTrain = tFrequency[i] - tRemainder;
      var nextTrain = moment().add(tMinutesTillTrain, "minutes");


      $("#name").append(trainNames[i] + "<br>")
      $("#destination").append(destination[i] + "<br>")
      $("#frequency").append(tFrequency[i] + "<br>")
      $("#next").append(moment(nextTrain).format("hh:mm a") + "<br>")
      $("#away").append(tMinutesTillTrain + "<br>")
    }
  }

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


    $("#next").append(moment(nextTrain).format("hh:mm a") + "<br>")
    $("#away").append(tMinutesTillTrain + "<br>")




      database.ref().push({
        TrainNames: trainNames,
        TrainFrequencys: tFrequency,
        TrainDestinations: destination
    })
  })

trains();

  database.ref().push({
    TrainNames: trainNames,
    TrainFrequencys: tFrequency,
    TrainDestinations: destination
  });
})
