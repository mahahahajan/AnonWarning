var number;
var picture;
var image_width = 70;
var image_height = 70;
var minutes;
var error;
var audio = new Audio("http://www.oringz.com/oringz-uploads/d0_oringz-pack-nine-06.mp3");
// var name = prompt("Target's name?")
// var message = prompt("Enter your message");
// sendSms(message);
// contacts = ["415-298-4987"];
function checkNum(e){
  if(e.which == 13) {
    enterNum();
  }
}
function numValid(){
  if($('#victimNum').val().split("").length===7){
    error = "Please input the area code of number you are trying to text";
  }
  else if($('#victimNum').val().split("").length<=6||$('#victimNum').val().split("").length>12){
    error = "Please input a valid number";
  }
  else{
    return true;
  }
  $('#errormsg').show();
  return false;
}
function enterNum() {
  if(numValid()===true){
    number = $('#victimNum').val();
    // console.log("num"+$('#victimNum').text())
    $('#victimNum').hide();
    $('h1').html("Creeper Bot");
    return true;
  }
  else{
    console.log("error");
    $('#errormsg').html(error)
    return false;
  }
}
$('#victimNum').keypress(function(e) {
  checkNum(e);
});
$('#newMsg').keypress(function(e) {
  if(e.which == 13) {
    sendSms();
  }
});
Twilio.recieveSms(function(reply){
  audio.play();
  $('#messageIntro').append('<p class = "you">' + '<img style = "width: '+image_width+'px; height: '+image_height+'px;" src ="https://s-media-cache-ak0.pinimg.com/736x/a0/d8/8f/a0d88f742bd61c61320a35b5a295fb5b.jpg">'+'<b>'+'Victim: '+'</b>'+reply.Body+'<br>'+(new Date()).toTimeString().substr(0,5)+'</p>');
  $('#welcome').hide();
  // console.log("reply: "+reply.Body); //prints the number that sent a message to twilio-number
});
function sendSms(){
  if(enterNum()===false){
    enterNum();
  }
  var msg = $('#newMsg').val();
  Twilio.sendSms(number, msg);

  if(!(/\S/.test($('#newMsg').val()))){
    console.log("homg")
    error = "please type a message before sending";
    $('#errormsg').show();
    $('#errormsg').html(error)
    return false;
  }
  if(enterNum()===true){
    console.log("display")
    $('#errormsg').hide();
    var msg = $('#newMsg').val();
    Twilio.sendSms(number, msg);
    // var date = new Date();
    // fixMinutes(date);
    // contacts.push = number;
    // console.log("num: "+number+"msg: "+msg);
    // console.log("sent!");
    $('#messageIntro').append('<p class = "me">' + '<img style = "width: '+image_width+'px; height: '+image_height+'px;" src ="http://imgs.tuts.dragoart.com/how-to-draw-jigsaw-jigsaw-saw_1_000000009688_5.jpg">'+'<b>'+' Me: '+'</b>'+msg+'<br>'+(new Date()).toTimeString().substr(0,5)+'</p>');
    $('#welcome').hide();
    $('#newMsg').val(" ");
  }
}
