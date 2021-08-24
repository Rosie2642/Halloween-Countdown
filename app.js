
var countDownDate = new Date("Oct 31, 2021").getTime();

var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    

var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    

document.getElementById("days").innerHTML = days + "d "
document.getElementById("hours").innerHTML = hours + "h " 
document.getElementById("minutes").innerHTML = minutes + "m " 
document.getElementById("seconds").innerHTML = seconds + "s " 
    

if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("minutes").innerHTML = ""
    document.getElementById("seconds").innerHTML = ""
    document.getElementById("end").innerHTML = "HAPPY HALLOWEEN!";
}
}, 1000);




