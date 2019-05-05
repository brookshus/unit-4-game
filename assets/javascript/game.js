$(document).ready(function(){


	//list out variables that are required for the game


	var wins= 0;
    var losses = 0;
    var score = 0;
    var targetNumber = randomNum(19,120);
    var amethyst= randomNum(1, 12);
	var diamond= randomNum(1, 12);
	var quartz= randomNum(1, 12);
	var rose= randomNum(1, 12);

	
//create a function for generating a random number between 
	function randomNum(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min +1)) + min;
	}

//insert the generated random number into html	
	$("#target").html(targetNumber);

//create on click events to update the score as crystals get clicked
//update score counter when the amethyst element is pressed
//send current score counter to html
//call out the function for wins and losses
	$("#amethyst").on("click", function(){
        
        score += amethyst;
        $(playerScore).text(score);
		WinLoose();
		
		
    });
    


	$("#diamond").on("click", function(){
		score += diamond;
		WinLoose(); 
        $(playerScore).text(score);
		

	});

	$("#quartz").on("click", function(){
		score += quartz;
		WinLoose();
		$(playerScore).text(score);
		

	});

	$("#rose").on("click", function(){
		score += rose;
		WinLoose();
		$(playerScore).text(score);
		

	});

    //create a fuction to update the wins and losses as 
	function WinLoose (){

//if they lose
	if (score === targetNumber){
		wins += 1;
        $(win).text(wins);
        $(update).html("Winner");
		reset(); //call out reset function to generate a new number
//if they win 
	} else if(score > targetNumber){
		losses += 1;
        $(loss).text(losses);
        $(update).html("Loser");
		reset();
	}
	
}

//function to reset the game after a win or loss
function reset(){
    score = 0;
    $("#target").html(targetNumber);
    targetNumber = randomNum(19,120);
    $("#playerScore").text(score);
    amethyst= randomNum(1, 12);
    diamond= randomNum(1, 12);
    quartz= randomNum(1, 12);
    rose= randomNum(1, 12);




}
}); //This goes to the ready function. Leave it alone. 




	


