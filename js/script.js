var birthDate = new Date("September 22,2023 00:00:00").getTime();
console.log(birthDate);



var x = setInterval(function(){
var now = new Date().getTime();
console.log(now);

var difTime = birthDate - now;
console.log(difTime);

var days = Math.floor(difTime / (60*60*24*1000));
console.log(days);
var hours = Math.floor((difTime % (60*60*24*1000))/(60*60*1000));
console.log(hours);
var minutes = Math.floor((difTime % (60*60*1000))/(60*1000));
console.log(minutes);
var seconds = Math.floor((difTime % (60*1000))/(1000));
console.log(seconds);

document.getElementById("message").innerHTML = days + "d " + hours + "h " + minutes  + "m " + seconds + "s";

if(difTime < 0){
  clearInterval(x);
  document.getElementById("message").innerHTML = "Expired"
}

}, 1000);
