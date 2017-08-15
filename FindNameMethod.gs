function findName(first, last){
  var i = 2
  var end = endS
  for(i; i<end; i++){
    var found = getData("B"+i)
    if(first == found){
      if(last == getData("C"+i)){
        return i;
      }
    }
  }
  return -1;
  
}
