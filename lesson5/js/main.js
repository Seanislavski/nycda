// console.log('Hello Moon');

// var x = 1;

// while (x < 13) {
// 	console.log(x + '<br>');
// 	x++;
// }

// var name = 'Sean'
// var title = 'Sir '
// var aftaName = ' the fantastic'
// var greet = 'Hey you, you! ... I mean '

// document.write(greet + title + name + aftaName)

// var numChildren = '2';
// var partnerName = 'Kelsey';
// var georaphicLocation = 'New York';
// var jobTitle = 'Web Developer';
// var fortune = '<p>' + 'You will be a ' + jobTitle + " in " + georaphicLocation + " and married to " + partnerName + ' with ' + numChildren + ' kids.';

// document.write(fortune);

// var currentYear = 2015;
// var birthYear = 1983;

// document.write ( '<p>' + 'You oldy! You\'re either ' + (currentYear-- - birthYear) + ' or ' + (currentYear - birthYear));

// var currentAge = (currentYear - birthYear);
// var maxAge = 90;
// var amtPerDay = 3;

// document.write ('<p>' + 'You will need ' + ((maxAge - currentAge) * 365 * amtPerDay) + ' meals to last you to the ripe old age of ' + maxAge);

// var circRadius = 3;

// document.write('<p>' + 'The circumference is ' + ((Math.PI * 2) * circRadius));

// document.write('<br>' + 'The area is ' + (Math.PI * (circRadius * circRadius)));

// var celsTemp = 24; // what! a comment!
// var fahrTemp = 75;

// document.write('<p>' + celsTemp + '°C is ' + (((celsTemp * 9) / 5) + 32) + '°F');

// document.write('<br>' + fahrTemp + '°F is ' + (((fahrTemp - 32) * 5) / 9) + '°C');

function celsToFahr(cels) {
	var result = ((cels * 9) / 5) + 32;
	// console.log(result);
	document.getElementById("here").innerHTML = result;
	return result;
}

function fahrToCels(fahr) {
	var result = (((fahr - 32) * 5) / 9);
	// console.log(result);
	document.getElementById("there").innerHTML = result;
	return result;
}


// var toChange = getElementByID ;//prompt('What temp (in °C)?');

// var answa = celsToFahr(toChange);

// document.write('<p>' + toChange + '°C is ' + answa + '°F');

// var threeChange = 0;//prompt('What temp (in °F)?');

// var answo = fahrToCels(threeChange);

// document.write('<p>' + threeChange + '°F is ' + answo + '°C');

