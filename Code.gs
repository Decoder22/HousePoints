//!ways
//!point room number argument


function test(){
  sheet.getRange("D2").setValue(1);

}


// format !command argument
function doPost(e) {
  var post = JSON.parse(e.postData.getDataAsString());
  var text = post.text;
  var message = text.split(" ");
  if(text.split('')[0] == '!'){
    if(message[0] == "!point"){
      if(text.indexOf("[")!= -1){
        var firstSplit = text.split("[");
        var secondSplit = firstSplit[1].split("]");
        if(firstSplit.length != 2 || secondSplit.length != 2){
          sendText("Incorrect Parameters. Check correct placement of brackets");
          return;
        }
        var names = secondSplit[0].split(",");
        var array = ["!point",,,];
        array[3] = secondSplit[1];
        for each ( var nm in names){
          if(nm.charAt(0) == " "){
           nm = nm.substring(1); 
          }
          if(nm.split(" ").length != 2){
            sendText("Incorrect Usage");
          }
          array[1] = nm.split(" ")[0];
          array[2] = nm.split(" ")[1];
          handlePointMessage(array);
        }
      }
      else{
        handlePointMessage(message);
      }
    }
    else if(message[0] == "!ways"){
      postPointWays();
    }
    else if(message[0] == "!help"){
      help();
    }
    else{
      sendText("Unkown command");
    }
  }
}

function handlePointMessage(message){
  var name = message[1];
  var identifier = name.substring(0,2);
  if( identifier == northSymbol ){
    if(message.length != 3){
      sendText("Incorrect Parameters. Correct usage is !point <RoomNumber> <point type> If that is what you typed, check spaces."); 
      return;
    }
    var type = message[2];
    var typeList = type.split(",");
    for each(var t in typeList){
      if(t < 0 || t > 34){
        sendText("No option with that value. Type !ways to see options");
        return;
      }
      saveDataWithNumber(name, t);
    }
  }
  else{
    var last = message[2];
    var type = message[3];
    if(message.length != 4){
      sendText("Incorrect Parameters. Correct usage is !point <First> <Last> <point type> If that is what you typed, check spaces and spelling.");
      return;
    }
    var typeList = type.split(",");
    for each(var t in typeList){
      if(t < 0 || t > 34){
        sendText("No option with that value. Type !ways to see options");
        return;
      }
      saveDataWithName(name,last, t);
    }
  }
}
   


function saveDataWithName(first,last, type){
  var found = findName(first, last)
  if(found == -1){
    sendText("Could not find Person");
    return;
  }
  var code = getCharForType(type) + found
  saveData(code,type,found);
  
}

function saveDataWithNumber(number, type){
  var found = findWithNumber(number); // int
  if(found == -1){
    sendText("Could not find room number");
    return;
  }
  var code = getCharForType(type) + found //D2
  saveData(code,type,found);
  
}

function getCharForType(type){
  //<24
  var number = parseInt(type)
  var code = ""
  if(number < 24){
    code = String.fromCharCode(number + 67)
  }
  else{
    code = "A"+String.fromCharCode(number + 41)
  }
  return code
}

//does the data saving
function saveData(code,type,found){
  
  var currentValue = parseInt(getData(code));
  if((""+ currentValue) == "NaN"){
    currentValue = 0;
  }
  Logger.log("Save with code: "+code)
  sheet.getRange(code).setValue(currentValue + 1);
  var name = getData("B"+found);
  
  var msg = ""
  if(type <=7){
    msg = "1";
  }
  else if(type <= 14){
    msg = "3";
  }
  else if(type <= 21){
    msg = "5";
  }
  else {
   msg = "10" 
  }
  var message = "For "+name +" "+ pointWays[(type - 1)] +", "+msg
  if(msg == "1"){
    message = message + " point";
  }
  else{
    message = message + " points";
  }
  message = message + " to Gryffindor!";
  sendText(message);
}



//sends text to the group chat
function sendText(text){
   //Logger.log(text);
   UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}

//required methods
function doGet() {}

function postPointWays(){
  var msg = ""
  var endIndex = 0
  for(var i = 0; i < pointWays.length; i++){
    msg = msg + (i+1) + ". "+pointWays[i] + "\\n";
    if(msg.length > 1000){
     sendText(msg.substring(0,endIndex))
     msg = msg.substring(endIndex)
    }
    else{
     endIndex = msg.length 
    }
  }
  sendText(msg);
}


function help(){
  helpWithPointName();
  helpWithPointRoom();
  helpWithWays();
}

function helpWithPointName(){
  sendText("HELP\\n\\n!point <First> <Last> <Type>\\n\\n!point - The command that adds points to a resident.\\n\
<First> - The first name of the resident.\\n<Last> - The last name of the resident.\\n\
<Type> - a number 1-34 that represents the reason that they are getting points. \
Type !ways to see the reasons and their corresponding ids.");
  sendText("HELP !!!UPDATED!!!! \\n\\n!point [<First> <Last>,...] <Type1>,<Type2>,<...>\\n\\n");
}
function helpWithPointRoom(){
  sendText("HELP\\n\\n!point <Room> <Type>\\n\\n!point - The command that adds points to a resident.\\n\
<Room> - The room number in the format N1XXXa or S1XXXXa where XXXX is the 4 digit room number and a is their location in room.\\n\
<Type> - a number 1-20 that represents the reason that they are getting points. \
Type !ways to see the reasons and their corresponding ids.");
}

function helpWithWays(){
  sendText("HELP\\n\\n!ways \\n\\n This command lists the ways to earn points as well as the ID number that matches. Use the id number when giving points with !point.");
}
