const mapToNegativize = function(arr) {
  return arr.map(num => {
    return num * -1
  })
}

const mapToNoChange =  function(arr) {
  return arr.map(num => {
    return num
  })
}
const mapToDouble =  function(arr) {
  return arr.map(num => {
    return num * 2
  })
}
const mapToSquare =  function(arr) {
  return arr.map(num => {
    return num ** 2
  })
}

const reduceToTotal = function(sourceArray, startingPoint=0) {
  let reducer = function(accum, curr) {
    return accum + curr;
  }
  return sourceArray.reduce(reducer,startingPoint)
}

const reduceToAllTrue = function(sourceArray) {
  return sourceArray.reduce((accu, cur) => {
    return Boolean(accu) && Boolean(cur)
  })
}

const reduceToAnyTrue = function(sourceArray) {
  return sourceArray.reduce((acc, cur) => {
    return Boolean(acc) || Boolean(cur)
  })
}
