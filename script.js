
var timer =60
var score =0;
var hitrn;
function makeBubble(){

  let clutter="" ;
  
  for(var i=1 ; i<=140 ;i++){
    let rn = Math.floor(Math.random()*10)
    clutter +=` <div class="bubble">${rn}</div>`
  }
  
  document.querySelector('.pbtm').innerHTML=clutter;
}



function runTimer(){
  
  var timerInt = setInterval(function(){
    if(timer>0)
      {
        
        timer--;
        document.querySelector('#timerVal').textContent=timer;
    }
    else{
      clearInterval(timerInt)
      document.querySelector('.pbtm').innerHTML =`<h1>Game Over</h1>`
    }
  },1000)
  
  
}


function hitCount(){
  hitrn = Math.floor(Math.random()*10)
  document.querySelector("#hitVal").textContent =hitrn;
}

function increaseScore(){
  document.querySelector('#scoreVal').textContent = score;
  score +=10;
}


document.querySelector('.pbtm').addEventListener('click',function(dets){
    var clickedNumber = Number(dets.target.textContent)
    if(clickedNumber === hitrn){
      increaseScore()
      makeBubble()
      hitCount()
    }
    else{

    }
})

makeBubble()
runTimer()
hitCount()