
var message1 = "Dear Susyl, <br><br>I am really happy you came into my life. You have brought me joy and I to you.";
var message2 = "ksaaaaaaaaaa asdsad sad";
var message2 = "ksaaaaaaaaaa asdsad sad ";
var message3 = "lksdjalksdjalsdja";

var array = [message1, message2, message3];







//////////////////////////

var x = document.querySelector("i");
var something = new Audio('something.mp3');

if (array.length === 0) {
	document.getElementById("messages").innerHTML = "all done!";
}


i = 0;
x.addEventListener("click", function () {

	something.play();
	x.classList.toggle("fa-envelope");
	x.classList.toggle("fa-envelope-open");
	x.classList.toggle("shake");


	setTimeout(function () {
		x.classList.toggle("fa-envelope");
		x.classList.toggle("fa-envelope-open");


		x.classList.toggle("shake");
	}, 1000)


	if (array.length > 0) {
		var randomIndex = Math.floor(Math.random() * array.length);
		var randomValue = array[randomIndex];
		array.splice(randomIndex, 1);
		document.getElementById("messages").innerHTML = randomValue;

	} else {

	}


	function restoreArray() {
		array.push(message1, message2, message3);
	}

	// When all values have been picked
	if (array.length === 0) {
		restoreArray();
	}


	// if (i == 3) {
	//     i = 0;
	// }

})



//confetti






const jsConfetti = new JSConfetti()


var confetti = new Audio('confetti.mp3');


document.getElementById("yes").addEventListener("click", function () {



	confetti.play();

	setTimeout(function () {
		jsConfetti.addConfetti({
			confettiNumber: 500,
			confettiColors: ['#DFFF00',
				'#E4D00A',
				'#00FFFF',
				'#023020',
				'#7DF9FF',
				'#50C878',
				'#5F8575',
				'#4F7942',
				'#228B22',
				'#7CFC00',
				'#008000',
				'#355E3B',
				'#00A36C',
				'#2AAA8A',
				'#4CBB17',
				'#90EE90',
				'#32CD32',
				'#478778',
				'#0BDA51',
				'#98FB98',
				'#8A9A5B',
				'#0FFF50',
				'#ECFFDC',
				'#808000',
				'#C1E1C1',
				'#C9CC3F',
				'#B4C424',
				'#93C572',
				'#96DED1',
				'#8A9A5B',
				'#2E8B57',
				'#9FE2BF',
				'#009E60',
				'#00FF7F',
				'#008080',
				'#40E0D0',
				'#C4B454',
				'#40B5AD',
				'#40826D'],


		})

	}, 400)




	document.querySelector("h2").innerHTML = "Let's go!!!!";

	setTimeout(function(){
		document.querySelector("h2").innerHTML = "Will you be my valentine?";
	},5000)

	
})

var no = document.getElementById("no");

no.addEventListener("mouseover",function(){
	no.classList.toggle("move-away-btn");
	no.classList.add("no");
})



