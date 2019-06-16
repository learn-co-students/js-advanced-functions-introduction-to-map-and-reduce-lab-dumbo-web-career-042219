// Your code here
const mapToNegativize = (sourceArray) => {
  let r = []
  for (let i = 0; i < sourceArray.length; i++) {
    r.push(-1 * sourceArray[i])
  }
  return r
}

const mapToNoChange = (sourceArray) => {
  let r = []
  for (let i = 0; i < sourceArray.length; i++) {
    r.push(sourceArray[i])
  }
  return r
}

const mapToDouble = (sourceArray) => {
  let r = []
  for (let i = 0; i < sourceArray.length; i++) {
    r.push(2*sourceArray[i])
  }
  return r
}

const mapToSquare = (sourceArray) => {
  let r = []
  for (let i = 0; i < sourceArray.length; i++) {
    r.push(sourceArray[i]**2)
  }
  return r
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++) {
    total = total +sourceArray[i]
  }
  return total
}

const reduceToAllTrue = (sourceArray) => {
  for (let i = 0; i< sourceArray.length; i++) {
    if (!sourceArray[i]) return false
    }
      return true
  }

const reduceToAnyTrue = (sourceArray) => {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) return true
  }
  return false
}
