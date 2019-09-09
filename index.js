// Your code here
const mapToNegativize = array => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(-1 * array[i]);
  }
  return newArray;
};

const mapToNoChange = array => {
  return array;
};

const mapToDouble = array => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(2 * array[i]);
  }
  return newArray;
};

const mapToSquare = array => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * array[i]);
  }
  return newArray;
};

const reduceToTotal = (array, sp = 0) => {
  for (let i = 0; i < array.length; i++) {
    sp += array[i];
  }
  return sp;
};

const reduceToAllTrue = array => {
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) return false;
  }
  return true;
};

const reduceToAnyTrue = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) return true;
  }
  return false;
};
