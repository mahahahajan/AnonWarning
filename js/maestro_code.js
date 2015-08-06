var number;
var entered;
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
    entered = true;
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
maestro.Twilio.recieveSms(function(reply){
  audio.play();
  $('#messageIntro').append('<img style = "width: '+image_width+'px; height: '+image_height+'px;" src ="http://media3.giphy.com/media/nQ8XtX3ctBCkE/giphy.gif">'+'<p>'+(new Date()).toTimeString().substr(0,5)+'<p class = "you">'+'<b>'+'Victim: '+'</b>'+reply.Body+'</p></p>');
  $('#welcome').hide();
  // console.log("reply: "+reply.Body); //prints the number that sent a message to twilio-number
});
function sendSms(){
  if(enterNum()===false){
    enterNum();
  }
  if($('#newMsg').val()===""){
    error = "please type a message before sending";
    error.show();
  }
  if(enterNum()===true){
    $('#errormsg').hide();
    console.log("entering & sending");
    var msg = $('#newMsg').val();
    maestro.Twilio.sendSms(number, msg);
    // var date = new Date();
    // fixMinutes(date);
    // contacts.push = number;
    // console.log("num: "+number+"msg: "+msg);
    // console.log("sent!");
    $('#messageIntro').append('<img style = "width: '+image_width+'px; height: '+image_height+'px;" src ="http://img.pandawhale.com/post-27657-crazy-hat-with-bread-on-head-g-Tnb2.gif">'+'<p>'+(new Date()).toTimeString().substr(0,5)+'<p class = "me"> <b>'+'Me: '+'</b>'+msg+'</p> </p>');
    $('#welcome').hide();
    $('#newMsg').val(" ");
  }
  console.log("sending?");
}
