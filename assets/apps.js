
let timer = {

	number: 31,

	run: function () {

		counter = setInterval(timer.increment, 1000);

	},

	increment: function() {

		timer.number--;

      	$('#timeMachine').html('<h2>' + timer.number + '</h2>');

      	if (timer.number === 0){

        	timer.stop();

		}

	},

	stop: function() {

		clearInterval(counter);

	}

};



const quiz = [ {

    question:" What control the battlefield  of chess game?",
    choices:["pawns","queen","knight","bishops"],
    right:0,},


   {question:" who is the world chess champion?",
    choices:[" Karpov,","Magnus Carlsen","Anand","Hikaru"],
    right:1,
},
{ question:" What shape does knight makes when it moves?",
   choices:["five-squares up and 1 left","a circle","zig-zag","L-shape" ],
   right:3,
},
{
  question:" how many pieces are there in total",
  choices:["16","32","48","64"],
  right:1,
},
{
  question:"chess comes from what origin",
  choices:["Africa","China","England","idk","India"],
  right:3,

}];


let numQuestions = quiz.length;

let numCorrect = 0;

let counter = 0;









$('input[name="choice"]').hide;



// display question function

function checkMate(){



	$('#questions').text(quiz[counter].question);


	$('#answer0').text(quiz[counter].choices[0]);

	$('#answer1').text(quiz[counter].choices[1]);

	$('#answer2').text(quiz[counter].choices[3]);

	$('#answer3').text(quiz[counter].choices[1]);

    $('#answer4').text(quiz[counter].choices[3]);

}







function validate() {

	if ($('input').is(':checked')) {



		checkMate(); //  go to the next question

	}

	else {

		alert("Make a legal move.");

		counter--;

	}

}



// display first question

checkMate();





// next button function

$('#nextBtn').on('click', function() {

	var answer = ($('input[name="choice"]:checked').val());



	// increment score if answer is correct

	if (answer == quiz[counter].right) {

		numCorrect++;

	}



	counter++;





	// display score screen

	if (counter >= numQuestions) {

		$('#main').hide().fadeIn("slow");

        document.getElementById('main').innerHTML="Quiz Complete! You scored " + numCorrect + " out of " + numQuestions + "!";
        
       
		return; 

	}



	validate();



	// fade in new question

	$('.card').hide().fadeIn("slow");

	

	// clear previous selection

	$('input[name="choice"]').prop('checked', false);

});





// back button function

$('#backBtn').on('click', function() {

	if (quiz[counter] == 0) {

		$('.card').hide().fadeIn("slow");



	} else {

		// fade out current question and fade in previous question

		$('.card').hide().fadeIn("slow");

		numCorrect--;
        

		picture: 'assets/images/lose.jpg',
		counter--;

	}



	

	

	// display previous question

	checkMate();	

});
