//Function that converts decimal to binary
function decToBinary(dec, signed) {
	//signed by default
	if (signed == undefined) {
		signed = true;
	} 
	//if signed
	if (signed) {
		//if dec greater than or equal to zero make sure leading bit is 0
		if (dec >= 0) {
			return ("0" + (dec >>> 0).toString(2));
		//if dec is less than zero clear leading 1s
		} else {
			var binString = (dec >>> 0).toString(2);
			var i = 0;
			//Loop while not zero and string still has chars
			while (binString[i] != "0" && i < binString.length) {
				i++;
			}
			//remove excess leading 1s
			binString = binString.slice(i-1);
			return binString;
		}
	//if unsigned
	} else {
		return (dec >>> 0).toString(2);
	}
}
//function to convert decimal to hex
function decToHex(number, signed) {
	var hex = "";
	//default signed as true
	if (signed == undefined) {
		signed = true;
	}
	//calculate hex as signed
	if (signed) {
		if (number >= 0) {
			number = number.toString(16);
			
			hex = number;
		} else {
			number = -1 * number;
			var temp = number.toString(16);

			for (var i = 0; i < temp.length; i++) {
				hex += (15 - parseInt(temp[i], 16)).toString(16);
			}
			while (hex.length < 4) {
				hex = "F" + hex;
			} 
		}
	//calculate hex as unsigned
	} else {
		hex = number.toString(16);
	}
	return hex.toUpperCase();
}
//Function to convert binary to decimal
function binToDec(bin, signed) {
	//default signed to true
	if (signed == undefined) {
		signed = true;
	}
	//Parse bin as signed
	if (signed) {
		//if bin is postive parse as usual
		if (bin[0] == "0") {
			return Number.parseInt(bin, 2);
		//convert based on 2s complement
		} else {
			var tempBin = "";
			//calculate the not of the number
			for (var i = 0; i < bin.length; i++) {
				if (bin[i] == "0") {
					tempBin += "1";
				}  else {
					tempBin += "0";
				}
			}
			//Add 1 and multiple by negatibe 1
			return (Number.parseInt(tempBin, 2) + 1) * -1;
		}
	//parse bin as unsigned
	} else {
		return Number.parseInt(bin,2);
	}
}
//function to convert binary to hex
function binToHex(bin) {
	var hex = "";
	for (var i = 0; i < bin.length; i += 4) {
		hex += parseInt(bin.slice(i, i+4), 2).toString(16);
	}
	return hex.toUpperCase();
}
//function to convert hex to binary
function hexToBin(hex) {
	var bin = "";
	for (var i = 0; i < hex.length; i++) {
		var temp = hexToDec(hex[i], false).toString(2);
		while (temp.length < 4) {
			temp = "0" + temp;
		}

		bin += temp;
	}
	return bin;
}
//function to convert hex to decimal
function hexToDec(hex, signed) {
	if (signed == undefined) {
		signed = true;
	}

	if (signed) {
		if (parseInt(hex[0], 16) < 8) {
			return parseInt(hex, 16);
		} else {
			var temp = "";
			for (var i = 0; i < hex.length; i++) {
				temp = temp + (15-parseInt(hex[i], 16)).toString(16);
			}
			return (parseInt(temp, 16)) * -1;
		}
	} else {
		return parseInt(hex, 16);
	}
}
//function to sign extend binary
function binSignExtend(bin, bits) {
	//default num bits to 16
	if (bits == undefined) {
		bits = 16;
	}
	var tempBin = "";
	//if leading bit is 1, extend 1s until bits length
	if (bin[0] == "1") {
		for (var i = 0; i < bits-bin.length; i++) {
			tempBin = tempBin + "1";
		}
		tempBin += bin;
	//if leading bit is 0, extend 0s until bits length
	} else {
		for (var i = 0; i < bits-bin.length; i++) {
			tempBin = tempBin + "0";
		}
		tempBin += bin;
	}
	return tempBin;
}
//Function to sign extend hex numbers
function hexSignExtend(hex, bits) {
	var temp = "";
	//default length to 4
	if (bits == undefined) {
		bits = 4;
	}
	//Extend for negative or positive respectively
	if (parseInt(hex[0], 16) >= 8) {
		for (var i = 0; i < bits-hex.length; i++) {
				temp = temp + "F";
		}
	} else {
		for (var i = 0; i < bits-hex.length; i++) {
				temp = temp + "0";
		}
	}
	temp += hex;
	return temp;
}
