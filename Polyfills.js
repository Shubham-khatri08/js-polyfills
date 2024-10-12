// Map
Array.prototype.myMap = function(cb) {
  let temp = [];
  for(let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
}

// Filter
Array.prototype.myFilter = function(cb) {
  let temp = [];
  for(let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
}

// Reduce
Array.prototype.myReduce = function(cb, initialValue) {
  let result = initialValue;
  for (let i = 0; i < this.length; i++) {
    result = result ? cb(result, this[i], i, this) : this[i];
  }
  return result;
}

// Call
Function.prototype.myCall = function(context = {}, ...args) {
  if(typeof this !== "function") {
    throw new Error(this + " is not callable");
  }
  context.fn = this;
  context.fn(...args);
}
