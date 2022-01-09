
var hours = document.getElementById("slchr");
var minutes = document.getElementById("slcmin");
var seconds = document.getElementById("slcsec");
var hrs = 0;
var min = 0;
var sec =0 ;
var interval;

function timer(){
    seconds.innerHTML--;
    if(seconds.innerHTML==1){
        minutes.innerHTML--;
        seconds.innerHTML=sec;
        if(minutes.innerHTML==1){
            hours.innerHTML--;
            minutes.innerHTML=min;

        }
        if(hours.innerHTML==1){
            hours.innerHTML=hrs;
        }
    }
}
function start(){
    interval =  setInterval(timer, 10)
    var startBtn =document.getElementById("btn1");
    startBtn.disabled = true

}
function reset(){
    hrs=0;
    min=0;
    sec=0;
    hours.innerHTML=hrs;
    minutes.innerHTML=min;
    seconds.innerHTML=sec;
    var startBtn =document.getElementById("btn2");
    startBtn.disabled = false

}
function stop(){
    clearInterval(interval)
        var startBtn =document.getElementById("btn2");
        startBtn.disabled = false
}