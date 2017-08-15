//where is a string in the format "N4XXXa" or "S4XXXa"
function findWithNumber(where) {
  Logger.log("Where: "+where);
  var floor = where.split('')[0];
  if(floor == 'N'){
     return findNorthNum(where);
  }
  else if(floor == 'S'){
    return findSouthNum(where);
  }

  else{
    return -1;
  }
}



//gets the data
function getData(loc){
  val = sheet.getRange(loc).getValue()
  return ""+ val
}


// wehre is the input room while found is what is gotten from the doc
// will return 0 for same, 
// 1 for where is larger and 
// -1 for where is smaller
function compareNumber(where, found){
  var whr = parseInt(where.substring(1));
  var fnd = parseInt(found.substring(1));
  if(whr > fnd){
    return 1;
  }
  else if(whr == fnd){
     if(where.split('')[5] == found.split('')[5]){
       return 0;
     }
     else{
       return 1;
     }
  }
  else{
    return -1;
  }
}

function findNorthNum(where){
  var i = 2;
  var comp = 0
  for(i; i < endN; i++){
    comp = compareNumber(where,getData("A"+i))
    if( comp == 0){
      return i;
    }
    if( comp < 0){
      return -1;
    }
  }
  return -1;
  
}
function findSouthNum(where){
  var i = startS;
  for(i; i < (endS + 1); i++){
    if(compareNumber(where,getData("A"+i)) == 0){
      return i;
    }
  }
  return -1;
  
}
