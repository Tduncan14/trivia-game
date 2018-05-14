
$(document).on("click", "#start", function() {
    startGame();
});
  
// have if statements to tally up the points 
// have it display from right and wrong

// holds the setTimeout will be update
let timeMachine;
// for the answer that will be incorrect
let incorrect = 0;
// the answer that will be correct 
let correct = 0;
// the timer countdown
let timerCountDown = 110;

// questions that will be on the page an array of objects
const questions = [{
    question:" How many chess pieces are there?",
    answer : ["32", "12","18","30"],
    correct : "32",
},
 {
    question : "Who destroyed Olympus on the ps2?",
    answer : ["god of war","Kronos","Percy Jacksons","Kratos"],
    correct : "Kratos"
    },

    {
     question: " The main star of pokemon, that made the show popular ?",
     answer : ["pikachu"," Ash","Mewtwo","Brock"],
     correct : "pikachu"
    },
       {
       question : "What was the name of all 7 continents before they drifted apart?",
       answer : ["Alantis","Pangea","Mother land"," Golden age of China"],
        correct : "Pangea"
       },
       {
        question :" Who has the most NBA rings?",
        answer :[ "Michael Jordan","Phil Jackson","Saturn","Kobe Bryant" ],
        correct : "Phil Jackson"
       }


];

   // countdown function
  let machineCount =() => {
      -- timerCountDown
     // let timePrint = document.getElementById("timeMachine");
     // timePrint.innerHTML() = --timerCountDown;
     $("#timeMachine").html("<h2>" +timerCountDown + "</h2>");
    // create and if statement with an alert and start gameover when the clock hit 0
    if ( timerCountDown === 0){
        alert("gameOver , do you wish to play again");
        gameRestart();
        console.log ("tester");
    }
  }

   let startGame =()=>{
       timeMachine=setInterval(machineCount, 2000);
  //  $("#gameArea").prepend("<h2>"+--timerCountDown+"</h2>");
    $("#start").remove();
     // looping through the array of questions
    for( var i = 0; i <questions.length; i++){
     $("#gameArea").append("<h2>"+ questions[i].question+"</h2>");

        // loops through the answers in the array object
        for(var j = 0; j<questions[i].answer.length; j++){
          $("#gameArea").append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answer[j] + "''>" + questions[i].answer[j]);
          console.log("testing");
     }
    }
   }

   const gameFinish =() => {
       // testing
       console.log("works");

       // conditions to add the correct and incorrect for the quiz

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correct) {
        correct++;
      }
      else {
        incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[i].correct) {
        correct++;
      }
      else {
        incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correct) {
        correct++;
      }
      else {
        incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correct) {
        correct++;
      }
      else {
        incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correct) {
        correct++;
      }
      else {
        incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correct) {
        correct++;
      }
      else {
     incorrect++;
      }
     this.results();
    
    },

results: function() {

  clearInterval(timer);

  $("#gameArea").InnerHTML("<h2>All Done!</h2>");
  $("#gameArea").append("<h3>Correct Answers: " + correct + "</h3>");
  $("#gameArea").append("<h3>Incorrect Answers: " +incorrect + "</h3>");
});


  /*const results = () => {
      
    clearInterval(timeMachine);

  $("#gameArea")  .html("<h1> finished!</h1>");
   $("#gameArea") .append("<h3>Correct Answers: " + correct + "</h3>");
    $("#gameArea").append("<h3>Incorrect Answers: " + incorrect + "</h3>");
 
  }*/
  

$(document).on("click", "#doneButton", function() {
    gameFinish();
    $("#gameArea").remove();
  });
}

// have the results append to the page 
// have the timer stops when the page ends
// stop the timer from counting below zero