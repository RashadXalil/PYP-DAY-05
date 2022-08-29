let arr = [1, 2, 3, 4, 5]
let stringArr = ['hmtl', 'css', 'sass', 'js']
// Custom Map Func
Array.prototype.customMap = function (cb) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]))
  }
  return newArr
}
//---------------------------------------------
// Custom Some Function
Array.prototype.customSome = function (cb) {
  let result = false
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      result = true
    }
  }
  return result
}
//---------------------------------------------
//Custom Every Method
Array.prototype.customEvery = function (cb) {
  let result = true
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i])) {
      result = false
    }
  }
  return result
}
//---------------------------------------------
// Custom Filter Method
Array.prototype.customFilter = function (cb) {
  let result = []

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      result.push(this[i])
    }
  }
  return result
}
//---------------------------------------------
// custom Foreach Method
Array.prototype.customForeach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i])
  }
}
//Custom Reverse Method
//---------------------------------------------
Array.prototype.customReverse = function () {
  let reversearr = []

  for (let i = this.length - 1; i >= 0; i--) {
    reversearr.push(this[i])
  }
  return reversearr
}
//---------------------------------------------
//Custom Join Method
Array.prototype.customJoin = function (string) {
  let joinedStr = ''

  for (let i = 0; i < this.length; i++) {
    joinedStr += this[i]
    if (i != this.length - 1) {
      joinedStr += string
    }
  }
  return joinedStr
}
//--------------------------------------------
// Custom Includes Method
Array.prototype.customIncudes = function (target) {
  let result = false
  for (let i = 0; i < this.length; i++) {
    if (target === this[i]) {
      result = true
    }
  }
  return result
}
//---------------------------------------------
// Custom Reduce Method
Array.prototype.customReduce = function (callback, initial) {
  let result
  if (initial != undefined) result = initial
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i])
  }
  return result
}
//---------------------------------------------
// Custom Flat Method
Array.prototype.customFlat = function () {
  var flatedArr = []
  for (var i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      flatedArr = flatedArr.concat(this[i].customFlat())
    } else {
      flatedArr.push(this[i])
    }
  }
  return flatedArr
}
