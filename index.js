function updateObjectWithKeyAndValue(object, key, value){
  var objInternal;
  objInternal = Object.assign({}, object);
  objInternal[key] = value;
  return objInternal;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
