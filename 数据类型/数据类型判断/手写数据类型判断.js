function _typeof(obj){
  var s = Object.prototype.toString.call(obj)
  return s.match(/\[object(.*?)\]/)[1].toLowerCase()
}

_typeof([1,2,3]) // array
_typeof(null)  // null
_typeof({})  // object