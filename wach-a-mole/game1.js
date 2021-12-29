var score = document.getElementById('score');
var timeLeft = document.getElementById('time-left');

var squares = document.querySelectorAll('.square');
var mole = document.querySelector('.mole');

var highScores = document.getElementById("highScores");
currentScore = document.getElementById("totScore");


var myAudio = document.getElementById("myAudio");

/*=============== Move Mole Randomly ================ */

function randomSquare(){
    for(square of squares){
        square.classList.remove('mole');
    }
    
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    // console.log(randomSquare)
    hitMole = randomSquare.id;
}

c = setInterval(randomSquare, 1000);

/*================ Hit Mole =============== */

let result = 0;
let highScore1 = localStorage.getItem("highScore1");
let highScore2 = localStorage.getItem("highScore2");
let highScore3 = localStorage.getItem("highScore3");



function playAudio() {
    
    myAudio.play();
}
function muteAudio(){
    
    myAudio.pause();
}
for(square of squares){
    square.addEventListener("click", (function(s){
        return function(){
            // console.log(s)
            // console.log(s.id)
            // console.log(hitMole)
            if(s.id == hitMole){
                result++;
                // console.log(result)
                
                // localStorage.removeItem("highScore", result)
                

                score.innerHTML = result;
                // res1 = result;
                // currentScore.innerHTML = res1;
            }else if(s.id != hitMole){
                if(result > 0){
                    result --;
                    score.innerHTML = result;
                }
            }
        }
    })(square))
}

// squares.forEach(square => {
//     square.addEventListener("mousedown", function(){
//         if((square.id == hitMole)){
//             result++;
//             score.innerHTML = result;
            
//         }
//         else if(square.id != hitMole){           
//             if(result > 0)
//             result --;
//             score.innerHTML = result;
            
//         }
        
//     })
// })

/*============= Run Timer =============== */
let count = 60;
function gameTimer(){
    count --;
    if(result > highScore1){
        localStorage.setItem("highScore1", result);
    }
    timeLeft.innerHTML = count;
    if(count == 0 && result < 5){
        clearInterval(timeOver);
        alert("Game Over");
        
    }else if(count == 0 && result >= 5){
        clearInterval(timeOver);
        alert("Well Done your score is "+ result);
        /*============ Start Level two ===============*/

        var sure = confirm("are you sure to up to level 2");
        if(sure == true){
            count = 30;
            result =0
            score.innerHTML = result;
            // res2 = result;
            // currentScore.innerHTML = res2;
            function levelTwoTimer(){
                count --;
                if(result > highScore2){
                    
                    localStorage.setItem("highScore2", result);
                }
                timeLeft.innerHTML = count;
                if(count == 0 && result < 10){
                    clearInterval(timeOver);
                    alert("Game Over");
                }else if(count == 0 && result >= 10){
                    clearInterval(timeOver);
                    alert("Well Done your score is "+ result);
                    

                    /*=========== Start Level Three =============*/

                    var sure2 = confirm("are you sure to up to level 3");
                    if(sure2 == true){
                        count = 15;
                        result = 0;
                        score.innerHTML = result;
                        // res3 = result;
                        // currentScore.innerHTML = res3;
                        function levelThreeTimer(){
                            count --;
                            if(result > highScore3){
                                
                                localStorage.setItem("highScore3", result);
                            }
                            timeLeft.innerHTML = count;
                            addScores = parseInt(highScore1) + parseInt(highScore2) + parseInt(highScore3)
                            
                            if(count == 0 && result <5){
                                clearInterval(timeOver);
                                alert("Game Over");
                            }else if(count == 0 && result>=5){
                                clearInterval(timeOver);
                                alert("Congratulation you passed the game");
                                // res = res1 + res2 + res3;
                                // currentScore.innerHTML = res;
                                highScores.innerHTML = addScores;
                                
                            }
                            
                        }
                        

                        timeOver = setInterval(levelThreeTimer, 500);
                        
                        
                    }else{
                        document.getElementById("d1").innerHTML = "I am proud of doing your best";
                    }
                    /*============ End Level Three ============*/
                }

            }
            timeOver = setInterval(levelTwoTimer, 1000);

        }else{
            document.getElementById("d1").innerHTML = "OK have a nice day";
        }
        /*============ End Level Two ===========*/
    }

}

timeOver = setInterval(gameTimer, 1000);
// currentScore.innerHTML = res1+res2+res3;

/*============ End Level One =============*/
