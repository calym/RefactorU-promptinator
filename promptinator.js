
//To Do: subject verb agreement for single vs. multiple people
//array formatting to add spaces between names, or display some other nice way


var howmany = prompt("How many disaster victims will you add to our records?");
howmany = parseInt(howmany);
console.log(howmany);

var victimsname = new Array();
var victimsphone = new Array();
var victimstreet = new Array();

for (var i=0; i<howmany; i++) {

	var vname = prompt("Please enter victim "+(i + 1)+"'s name.");
	victimsname.push(vname);
	
	var vphone = prompt("Please enter victim "+(i + 1)+"'s phone number.");
	victimsphone.push(vphone);

	var vstreet = prompt("Please enter victim "+(i + 1)+"'s street.");
	victimstreet.push(vstreet);
}

console.log(victimsname, victimsphone, victimstreet);

window.confirm("Thank you!");

var volunteernum = prompt("How many volunteers can you add to our records?");
volunteernum = parseInt(volunteernum);
console.log(volunteernum);

var volunteername = new Array();
var volunteerphone = new Array();
var volunteerstreet = new Array();

for (var i=0; i<volunteernum; i++) {

	var volname = prompt("Please enter volunteer "+(i + 1)+"'s name.");
	volunteername.push(volname);
	
	var volphone = prompt("Please enter volunteer "+(i + 1)+"'s phone number.");
	volunteerphone.push(volphone);

	var volstreet = prompt("Please enter volunteer "+(i + 1)+"'s street.");
	volunteerstreet.push(volstreet);
}

console.log(volunteername, volunteerphone, volunteerstreet);

window.confirm("Thank you!");

alert("Thanks for your help. \nOur records now show that "+ howmany + " people are in need, \
and we have "+ volunteernum + " more people that can help. The names of those in need are:\n\
"+victimsname+" \nand the names of volunteers are "+volunteername);


