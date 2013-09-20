
var victimsname = new Array();
var victimsphone = new Array();
var victimstreet = new Array();

function addVictim() {
	var vname = prompt("Please enter the name of someone in need.");
	victimsname.push(vname);
	
	var vphone = prompt("Please enter their phone number.");
	victimsphone.push(vphone);

	var vstreet = prompt("Please enter their street.");
	victimstreet.push(vstreet);

	if (confirm('Would you like to add another person?')) {
		addVictim();
		}
	}

if (confirm('Thank you for visiting. Click OK to add a person in need to our records.')) {
		addVictim();
	}

alert("Thank you for your help!");
	
console.log(victimsname, victimsphone, victimstreet);

var volunteername = new Array();
var volunteerphone = new Array();
var volunteerstreet = new Array();

function addVolunteer() {
	var volname = prompt("Please enter the name of someone who can help.");
	volunteername.push(volname);
	
	var volphone = prompt("Please enter their phone number.");
	volunteerphone.push(volphone);

	var volstreet = prompt("Please enter their street.");
	volunteerstreet.push(volstreet);

	if (confirm('Would you like to add another person?')) {
		addVolunteer();
		}
	}


if (confirm('Click OK if you can add a person who can help to our records.')) {
		addVolunteer();
	}

for (var i=0; i<victimsname.length; i++)
	victimsname[i] = " " + victimsname[i]

for (var i=0; i<volunteername.length; i++)
	volunteername[i] = " " + volunteername[i]

var subject = " people ";
var verb = " are ";

if (victimsname.length === 1) {
	subject = " person ";
	verb = " is ";
}

if (volunteername.length === 1) {
	subject = " person ";
	verb = " is ";
}

alert("Thank you for your help! \nOur records now show that "+victimsname.length+ subject + verb +  "in need:\n\
"+victimsname + "\nOur records also show that "+volunteername.length+ subject+ "can help:\n\
"+volunteername);

console.log(volunteername, volunteerphone, volunteerstreet);

var needshelp = prompt("Volunteer match! Enter the name of someone who needs help, and we'll give you names of volunteers nearby.");

//display an alert that lists all the volunteers that are on the same street
//Use indicies of arrays and conditional statements? Loop through the volunteer address array
//

