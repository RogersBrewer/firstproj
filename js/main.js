

var zodiacSign = [ {
	signName: "aquarius",
	signImg: "img/aquarius.jpg",
	SignInfo: "Positive Qualities of Aquarius : Truthfulness, Just, Curious, Affectionate Personality, Frank and Imaginative. Negative Qualities of Aquarius : Unpredictable, Detachment, Tendency to go off-track, and Inefficiency. Possible Health Concerns: The Aquarius-born people must be very careful of any kind of addiction.",
},

{
	signName: "pisces",
	signImg: "img/pisces.jpg",
	SignInfo: "Their ruling planet is Neptune, so Pisces are more intuitive than others and have an artistic talent. Neptune is connected to music, so Pisces reveal music preferences in the earliest stages of life. They are generous, compassionate and extremely faithful and caring.",
},

{
	signName: "aries",
	signImg: "img/aries.png",
	SignInfo: "Aries Traits: Enterprising, Incisive, Spontaneous, Daring, Active, Courageous and Energetic, the Aries are the proverbial infants, guileless and optimistic to the fault. However, they also are impatient, impetuous, vain, proud and egoistic.",
},

{
	signName: "taurus",
	signImg: "img/taurus.jpg",
	SignInfo: "Known for being reliable, practical, ambitious and sensual, the people born under the Zodiac Sign Taurus have an eye for beauty. They tend to be good with finances, and hence, make efficient financial managers. However, like everyone else, a Taurus also has both positive and negative traits.",
},

{
	signName: "gemini",
	signImg: "img/gemini.jpg",
	SignInfo: "Gemini traits. Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless.",
},

{
	signName: "cancer",
	signImg: "img/cancer.jpg",
	SignInfo: "Cancer traits. Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close.",
},
{
	signName: "leo",
	signImg: "img/leo.jpg",
	SignInfo: "Leo Traits. Warm, action-oriented and driven by the desire to be loved and admired, the Leo have an air royalty about them. They love to be in the limelight, which is why many of them make a career in the performing arts. The personality of a Leo is made up of some positive as well as negative traits.",
},

{
	signName: "virgo",
	signImg: "img/virgo.jpg",
	SignInfo: " Virgo is the perfectionist of the zodiac, typically professional (outwardly calm, reserved and precise) while seeking to improve any process that they are involved in.",
},

{
	signName: "libra",
	signImg: "img/libra.jpg",
	SignInfo: "Libra Traits. The people born under the Sign Libra are kind, gentle and lovers of beauty, harmony and peace. However, in their effort to keep everyone happy, they find it difficult to say 'NO' to anyone, and as a result, they end up getting stressed. They have a lot of positive traits, but some negative ones, too.",
},

{
	signName: "scorpio",
	signImg: "img/scorpio.jpg",
	SignInfo: "Scorpio is nothing, if not fierce! The 8th Sign of the Zodiac, the Scorpio loves a good fight, and can give 'intensity' a run for its money (worth). Well, to put it simply, the Scorpions are strong, commanding, intense, passionate and zealous. Driven, dedicated and loyal, they also are ambitious and security-loving.",
},

{
	signName: "sagittarius",
	signImg: "img/sagittarius.jpg",
	SignInfo: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes.",
},

{
	signName: "capicorn",
	signImg: "img/capicorn.jpg",
	SignInfo: "Capricorn Traits : The Capricorn-born people are the most determined of the entire Zodiac. The most prominent qualities of the Goats, as they are called, are that they are ambitious, conservative, determined, practical and helpful.",
},
]

// // ____________________________________

// 1. why does it matter where you put for loop?
   // 2' how do you know what order to put thing in?

// _____________________________________





// 
function getSign () {
	
	var userInput = document.getElementById("user-input")
	console.log(userInput)
	console.log("user Input is: " + userInput.value)
	//looping thru the zodiacSign
for (var i = 0; i < zodiacSign.length; i++) {
	//zodiacSign[i]
	
	console.log("current zodiac sign in loop is: " + zodiacSign[i].signName)
	if(userInput.value === zodiacSign[i].signName) {
			// confirm the if statement ran
			console.log("if statement ran")
			// check some values in the console before updating HTML
			console.log("users typed in: " + userInput.value)
			console.log("current image value is: " + zodiacSign[i].src)
			console.log("current fortune value is: " + zodiacSign[i].SignInfo)

			// get element with id="userSign" and change the text to the user input
			document.getElementById("user-sign").textContent = userInput.value
			// get element with id="icon" and change source attribute to current zodiac image path
			document.getElementById("sign-pic").src = zodiacSign[i].signImg
			// // get element with id="yourHoroscope" and change the content to this concatenated string
			document.getElementById("horoscope").textContent = "You're best attributes are: " + zodiacSign[i].SignInfo

			// stop the function because we found a match and added the data to the screen!!!
			return
		}

		// confirm no matches are found if that's the case
		console.log("no matches were found, user failed to type in a correct zodiac sign")
		// if no match is found, do opposite of above, mostly clearing content and images
		document.getElementById("user-sign").textContent = "Not one of the signs. Try again!"
		document.getElementById("horoscope").textContent = ""
		document.getElementById("sign-pic").src = ""
	 
	// var userSign = document.getElementById('user-sign').innerHTML = userInput
	// console.log(userSign)
	
};	
	
var newp = document.createElement('p')
var userI = document.getElementById("user-sign").textContent = userInput.value
userI.appendChild(zodiacSign[i])
console.log(newP)


}




