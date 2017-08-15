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
      var name = message[1];
      var identifier = name.substring(0,2);
      if( identifier == northSymbol || identifier == southSymbol){
        if(message.length != 3){
          sendText("Incorrect Parameters. Correct usage is !point <RoomNumber> <point type> If that is what you typed, check spaces."); 
          return;
        }
        var type = message[2];
        if(type < 0 || type > 21){
          sendText("No option with that value. Type !ways to see options");
          return;
        }
        saveDataWithNumber(name, type);
      }
      else{
        var last = message[2];
        var type = message[3];
        if(message.length != 4){
          sendText("Incorrect Parameters. Correct usage is !point <First> <Last> <point type> If that is what you typed, check spaces and spelling."); 
          return;
        }
        if(type < 0 || type > 21){
          sendText("No option with that value. Type !ways to see options");
          return;
        }
        saveDataWithName(name, last,type);
      }
    }
    else if(message[0] == "!ways"){
      postPointWays();
    }
    else{
      sendText("Unkown command");
    }
  }
}


function saveDataWithName(first,last, type){
  var found = findName(first, last)
  if(found == -1){
    sendText("Could not find Person");
    return;
  }
  var code = String.fromCharCode(parseInt(type) + 67) + found
  saveData(code,type);
  
}

function saveDataWithNumber(number, type){
  var found = findWithNumber(number);
  if(found == -1){
    sendText("Could not find room number");
    return;
  }
  var code = String.fromCharCode(parseInt(type) + 67) + found
  saveData(code,type);
  
}

//does the data saving
function saveData(code,type){
  
  var currentValue = parseInt(getData(code));
  if((""+ currentValue) == "NaN"){
    currentValue = 0;
  }
  sheet.getRange(code).setValue(currentValue + 1);
  
  var msg = ""
  if(type <=6){
    msg = "1";
  }
  else if(type <= 11){
    msg = "3";
  }
  else if(type <= 16){
    msg = "5";
  }
  else {
   msg = "10" 
  }
  var message = "For "+ pointWays[(type - 1)] +", "+msg
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
   UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}

//required methods
function doGet() {}

function postPointWays(){
  var msg = ""
  for(var i = 0; i < pointWays.length; i++){
    msg = msg + (i+1) + ". "+pointWays[i] + "\\n";
  }
  Logger.log(msg);
}
