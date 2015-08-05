var number = prompt("Enter target number");
var message = prompt("Enter your message");
maestro.Twilio.sendSms(number, message);

/*
if(whoYouGonnaCall == "Next"){
  maestro.Twilio.callAndSay("925-487-2366", "Hi this is Sam from 31 Flavors, if you can name 31 Flavors in 31 seconds you can win 31 thousand dollars, ready go!! Brought to you by Pulkit Industries");
}
if(whoYouGonnaCall == "Ishaan"){
  var message = "Hello. The password is Bambi. I repeat, the password is Bambi.";
  maestro.Twilio.callAndSay("925-998-6703", message);
}
if(whoYouGonnaCall == "Ghostbusters"){
  var audio = new Audio("http://kollegedaily.typepad.com/product_shop_nyc/files/totally_80s_ghostbusters_theme.mp3").play();
  alert("What a smartass...");
}
if(whoYouGonnaCall == "Swag"){
    var audio = new Audio("http://a.tumblr.com/tumblr_m8icg27PnV1r9dtawo1.mp3");
    maestro.Twilio.callAndPlay("925-998-6703", "http://a.tumblr.com/tumblr_m8icg27PnV1r9dtawo1.mp3");
}
*/
