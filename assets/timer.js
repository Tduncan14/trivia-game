

$(document).ready(function(){


// create a questions holder array/ or object both.
// create the answers holder

// add a timer.
// if else condition statement.
// keep the total points 
//

// ==============================================================================================================
let winCounter = 0;
let loseCounter = 0;





console.log("today");


let questionsToday = [{
        question:" What control the battlefield  of chess game?",
        choices:["pawns","queen","knight","bishops"],
        right:[0],},


       {question:" who is the world chess champion?",
        choices:[" Karpov,","Magnus Carlsen","Anand","Hikaru"],
        right:[1],
    },
    { question:" What shape does knight makes when it moves?",
       choices:["five-squares up and 1 left","a circle","zig-zag","L-shape" ],
       right:[3],
    },
    {
      question:" how many pieces are there in total",
      choices:["16","32","48","64"],
      right:[1],
    },
    {
      question:"chess comes from what origin",
      choices:["Africa","China","England","idk","India"],
      right:[3],
    }
];
// hopefully chooses a question out the array of objects
let choices = questionsToday.length;

console.log(questionsToday.length);

var x = setInterval(function() {

  


  distance =40;
  
  // Find the dist

  // d seconds
  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("timeMachines").innerHTML = seconds + "s ";
  
  // If the count down is over, write some text 
  }
, 1000);

});