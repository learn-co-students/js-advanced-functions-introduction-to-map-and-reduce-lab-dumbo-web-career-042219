// Your code here
const mapToNegativize = (sourceArray) => {
	let negativeArray = [];
	let i;
	for ( i = 0; i < sourceArray.length; i++ ) {
		negativeArray.push(sourceArray[i] * -1)
	}
	return negativeArray;
}

const mapToNoChange = (sourceArray) => {
	let sameOldSong = [];
	let i;
	for ( i = 0; i < sourceArray.length; i++ ) {
		sameOldSong.push(sourceArray[i])
	}
	return sameOldSong;
}

const mapToDouble = (sourceArray) => {
	let twoTimes = [];
	let i;
	for ( i = 0; i < sourceArray.length; i++ ) {
		twoTimes.push(sourceArray[i] * 2)
	}
	return twoTimes;
}

const mapToSquare = (sourceArray) => {
	let dontBeASquareMaaan = [];
	let i;
	for ( i = 0; i < sourceArray.length; i++ ) {
		dontBeASquareMaaan.push(sourceArray[i] * sourceArray[i])
	}
	return dontBeASquareMaaan;
}

const reduceToTotal = (sourceArray, startingPoint) => {
	if (startingPoint == undefined){
		let myResult = 0
		let i;
	for ( i = 0; i < sourceArray.length; i++ ) {
		myResult += sourceArray[i]
	}
	return myResult;
	} else {
		let myResult = startingPoint;
		let i;
	for ( i = 0; i < sourceArray.length; i++ ) {
		myResult += sourceArray[i]
	}
	return myResult;
	}
}

const reduceToAllTrue = (sourceArray) => {
let i;
let bagOTricks = false
for (i = 0; i < sourceArray.length; i++ ) {
	if (!sourceArray[i]) return false
	}
	return true
}

const reduceToAnyTrue = (sourceArray) => {
let theAnswer = false
let i;
for (i = 0; i < sourceArray.length; i++ ) {
	theAnswer = sourceArray[i] ? true : false;
	}
return theAnswer;
}