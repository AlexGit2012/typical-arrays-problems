
exports.min = function min (array) {
    if ((array!==undefined && array.length!==0) && (array.every(el=>typeof el==="number"))) {
        let newArr = array.sort((a,b)=>a-b)
        return newArr[0]
    }
  return 0;
}

exports.max = function max (array) {
    if ((array!==undefined && array.length!==0) && (array.every(el=>typeof el==="number"))) {
        let newArr = array.sort((a,b)=>b-a)
        return newArr[0]
    }
    return 0;
}

exports.avg = function avg (array) {
    if ((array!==undefined && array.length!==0) && (array.every(el=>typeof el==="number"))) {
        let value = array.reduce((acc,el)=>acc+el)
        return value/array.length
    }
    return 0;
}
