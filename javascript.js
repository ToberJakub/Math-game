//javascript.js
var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("startreset").onclick = function(){
    
    
    if(playing == true){
        
        location.reload();
        
    }else{
        
        
        playing = true;
        
        
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
     
        
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        
        hide("gameOver");
        
        document.getElementById("startreset").innerHTML = "Reset Game";
    
        
        startCountdown();
        
        
        generateQA();
    }
    
}


for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){   
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");   
            }, 1000);
            
            
            generateQA();
        }else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");   
            }, 1000);
        }
    }
}   
}