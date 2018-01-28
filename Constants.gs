//When you send messages in the groupie make sure room number is in the format : N4XXXa or S4XXXa

//CHANGE THIS


// sharing adress for the google drive spread sheet
var sheet = SpreadsheetApp.openByUrl('SpreadSheet URL');

//first row that has information on north residence
var numberOfResidents= XX;
var numOfCat = 37; //Number of categories for points
var endN = 124; // Last number in spreadsheet

//change these to the correct floor
var northSymbol = "N4";


//your bot id
var botId = "GROUP_ME_BOT_ID";

//DONT CHANGE BELOW THIS


var dataSheet = null;


var scriptProps= PropertiesService.getScriptProperties();
var index = parseInt(scriptProps.getProperty("index"));

var pointWays = ["Attending a Club Callout", "Attending Floor Dinner", "Going to a Torch Tuesday Lunch", "Saying Hi to RHP","Contributing to RHP's Bulletin Board","Saying Hi to Student Staff", "Participate in an IM Game",
                 "Attending RHP's Weekly Tradition","Attending a House Event","Taking a Question to Your Assigned Honors Advisor","Attending an Honors College Programming Committee Event","Joining an Honors College Programming Committee","Start an IM Team","Attend an HLC Rep's Office Hours",
                 "Attending an Executove-In-Residences Program","Attending Cornerstone Neighborhood Forum","Attending a FAC+ Academic Program","Attending an Honors College Signature Programs Event","Applying for HCR Student Position","Teach Passion at weekly tradition","Propose event to funding board",
                 "Attending a Visit Scholar Program Sponsored by HC","Being Selected for HCR Student Position","Earning a Leadership Position on Club on Campus","Presenting Research","Contract Honors Course","Host an event with RHP","Use funding board to host program","Interview for internship","Do undergrad research","Apply for grad school","Attend a research workshop","Apply for Study Away","Apply for Honors research funds"];

