const pass = (password)=>{

	let lengthScore = 0;
	let numberScore = 0;
	let specialScore = 0;
	let upperCaseScore = 0;
	let lowerCaseScore = 0;
	let score = 0;
	let special = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
    if(special.test(password)){
    	specialScore+=2;
    }
	if(password.length > 8)
		lengthScore+=2;
	for(let i=0; i < password.length; i++){
		if(!isNaN(parseInt(password[i], 10))){
			if(numberScore < 2)
				numberScore++;
		}
		
		if(!special.test(password[i])){

			if(password[i].toUpperCase() === password[i] && upperCaseScore < 1)
				upperCaseScore++;
			if(password[i].toLowerCase() === password[i] && lowerCaseScore < 1)
				lowerCaseScore++;
		}


		}

           score = lengthScore + numberScore + specialScore + upperCaseScore +
           lowerCaseScore;

		return {

			score: score,

			strength: function() {
                 
                 if(this.score > 6 ){

                 	return "Very Strong";
                 }
                 else if(this.score == 6){
                 	return "Strong";
                 }

                 else if(this.score >= 4 && this.score <= 5){
                 	return "Average";
                 }
                  else {
                  	return "Poor";
                  }
               
			}

		}
}

module.exports = pass;