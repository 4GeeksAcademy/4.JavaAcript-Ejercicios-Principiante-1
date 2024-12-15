function getColor(selection) {
	switch (selection) {
		// Add more options here
		default:
			return false;  //returns false because the user picked an unavailable color
		case "red":
			return true;
		case "green":
			return true

		case "blue":
			return true
	}
}

let colorname = prompt('What color do you want?').trim();
let isAvailable = getColor(colorname);

if (isAvailable)
	console.log('Good news! That color is available');
else
	console.log('We are sorry, that color is not available');
