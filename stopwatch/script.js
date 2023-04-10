
//Global variables
const time=document.querySelector('.watch .time')
const startbtn=document.getElementById("start")
const pausebtn=document.getElementById("pause")
const resetbtn=document.getElementById("reset")

let seconds=0;
let interval=null;

//Eventlisteners

startbtn.addEventListener('click',start);
pausebtn.addEventListener('click',pause);
resetbtn.addEventListener('click',reset);

//updating timer
function timer(){
    seconds++;
   let secs=Math.floor(seconds%60);
   let hrs=Math.floor(seconds/3600);
   let mins=Math.floor((seconds-hrs*3600)/60);
   
   //formatting time

   if(hrs<10){hrs="0"+hrs;}
   if(mins<10){mins="0"+mins;}
   if(secs<10){secs="0"+secs;}

   time.innerHTML=hrs+":"+mins+":"+secs;

}

function start(){
    if(interval){
        return;
    }
  interval=setInterval(timer,1000);
   
}

function pause(){
    clearInterval(interval);
    interval=null;
}
function reset(){
    pause();
    seconds=0;
    time.innerHTML="00:00:00";
}

