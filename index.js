const mapToNegativize = (arr) => {
  let new_arr = [];

  arr.forEach(ele => {
    new_arr.push(-ele);
  });

  return new_arr;
};

const mapToNoChange = (arr) => {
  return arr;
}

const mapToDouble = (arr) => {
  let new_arr = [];

  arr.forEach(ele => {
    new_arr.push(ele*2)
  });

  return new_arr;
};

const mapToSquare = (arr) => {
  let new_arr = [];

  arr.forEach(ele => {
    new_arr.push(ele**2)
  });

  return new_arr;
};

const reduceToTotal = (arr, startingPoint) => {
  let sum = 0;
  
  if (startingPoint) {
   sum = 0 + startingPoint;
  }
  arr.forEach(num => {
    sum += num;
  });

  return sum;
};

const reduceToAllTrue = (arr) => {
  let reduced = true;

  arr.forEach(ele => {
    if (!ele)
      reduced = false;
  });

  return reduced;
}

const reduceToAnyTrue = (arr) => {
  let reduced = false;

  arr.forEach(ele => {
    if (ele)
      reduced = true;
  });

  return reduced;
};