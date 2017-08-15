//When you send messages in the groupie make sure room number is in the format : N4XXXa or S4XXXa

//CHANGE THIS


// sharing adress for the google drive spread sheet
var sheet = SpreadsheetApp.openByUrl('House spreadsheet url');

//first row that has information on north residence
var startN = 1;
//last row
var endN = 120;
// first row in south
var startS = 121;
// last row in south
var endS = 199;

//change these to the correct floor
var northSymbol = "N4";
var southSymbol = "S4";


//your bot id
var botId = "XXXXXXXXXXXXXXXXX";

//DONT CHANGE BELOW THIS





var scriptProps= PropertiesService.getScriptProperties();
var index = parseInt(scriptProps.getProperty("index"));

var pointWays = ["Attending a Club Callout", "Attending Floor Dinner", "Going to a Torch Tuesday Lunch", "Saying Hi to RHP","Contributing to RHP's Bulletin Board","Saying Hi to Student Staff","Attending RHP's Weekly Tradition",
                 "Attending a House Event","Taking a Question to Your Assigned Honors Advisor","Attending an Honors College Programming Committee Event","Joining an Honors College Programming Committee",
                 "Attending an Executove-In-Residences Program","Attending Cornerstone Neighborhood Forum","Attending a FAC+ Academic Program","Attending an Honors College Signature Programs Event","Applying for HCR Student Position",
                 "Attending a Visit Scholar Program Sponsored by HC","Being Selected for HCR Student Position","Earning a Leadership Position on Club on Campus","Presenting Research"];


