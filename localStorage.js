var storage = window.localStorage;
var keyArr = new Array(),valueArr = new Array();
for(let i=0;i<storage.length;i++){
  var key = storage.key(i); keyArr.push(key);
  var value = storage.value(i);valueArr.push(value);
}
console.log(keyArr);
console.log(valueArr);
