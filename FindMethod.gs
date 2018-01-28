//where is a string in the format "N4XXXa" or "S4XXXa"
// return int
function findWithNumber(where) {
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
  var letter = String(loc.match("[A-Z]*"));
  var num = parseInt(loc.match("[0-9]+"));
  if (dataSheet == null){
    dataSheet = sheet.getSheetValues(1,1,numberOfResidents,numOfCat);
  }
  var pos = letter.charCodeAt(0) - "A".charCodeAt(0);
  if(letter.length > 1){
   pos = 26 + letter.charCodeAt(1) -"A".charCodeAt(0); 
  }
  Logger.log(num+" "+pos);
  return ""+ dataSheet[num-1][pos];
  
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

//Returns integer of row
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

//returns integer of row
function findSouthNum(where){
  var i = startS;
  for(i; i < (endS + 1); i++){
    if(compareNumber(where,getData("A"+i)) == 0){
      return i;
    }
  }
  return -1;
  
}
