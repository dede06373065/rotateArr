function rotateArr(str,d){
    var len=str.length
    var a=d%len
    var newArr=str.slice(0,a)
    str.splice(0,a)
    return str.concat(newArr);
}

rotateArr([1,2,3,4,5],3)