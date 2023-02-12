
var message1 = "Holding your hand feels warm, I also love it when you hold my arm.";
var message2 = "Your butt is fluffy, so you can't really blame me. :)";
var message3 = "Taking care of yourself emotionally, mentally, and physically is a major turn on for me.";
var message4 = "I find it fun how you famously chew your food, makes me think you're about to laugh.";
var message5 = "You positively influenced my sense of humor, more than half of it is yours.";
var message6 = "I always find your smile sublime, it gets me everytime.";
var message7 = "I love how you make decisions for us, it's effective most of the time.";
var message8 = "The way you make an outfit suits you. Your sense of style is something.";
var message9 = "I love that you're doing well with your studies and your dedication to achieve success.";
var message10 = "I love how thoughtful you are as a sister, as a daughter, as a lover, and as a person in general.";
var message11 = "You're a very creative artist, your passion for art will definitely get you somewhere you belong.";
var message12 = "I love how optimistic and fun you are. You radiate positive vibes to people.";
var message13 = "I love how pretty and cute you are inside-out. You're literally the definition of the word \"beautiful\".";
var message14 = "Your feelings towards everything are always pure and genuine.";

var array = [message1, message2, message3, message4, message5, message6, message7, message8, message9, message10, message11, message12, message13, message14];



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
		array.push(message1, message2, message3, message4, message5, message6, message7, message8, message9, message10, message11, message12, message13, message14);
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


var con = 
		['#DFFF00',
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
		'#40826D'];




const jsConfetti = new JSConfetti()


var confetti = new Audio('confetti.mp3');

var yes = document.getElementById("yes");
var inv = document.getElementById("invitation");

if (yes || inv) {

}


document.getElementById("yes").addEventListener("click", function () {



	setTimeout(function () {
		jsConfetti.addConfetti({
			confettiNumber: 500,
			confettiColors: con,


		})

	}, 400)

	confetti.play();

	document.getElementById("wybmv").classList.toggle("hide");
	document.getElementById("answer-btns").classList.toggle("hide");

	inv.classList.toggle("hide");


});

inv.addEventListener("click", function () {
	setTimeout(function () {
		jsConfetti.addConfetti({
			confettiNumber: 500,
			confettiColors: con,


		})

	}, 400)
	confetti.play();
})


var no = document.getElementById("no");

no.addEventListener("mouseover", function () {
	no.classList.toggle("move-away-btn");
	no.classList.add("no");
})



