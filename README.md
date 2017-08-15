# HousePoints

How to set up the bot.

1. Go to https://www.google.com/script/start/ and click start scripting
2. Name your project
3. Copy Code.gs on github into Code.gs in Google Scripts
4. click file -> new -> script file and name it constants
5. Copy Constants.gs on github into constants.gs in Google Scripts
6. create new script file (step 4) and name it findMethod
7. copy FindMethod.gs into findMethod.gs
8. create new script file (tep 4) and name it findNameMethod
9. copy FindNameMethod.gs into FindNameMethod.gs
10. Create a new spread sheet in google drive and copy the format posted in points.xslx
11. fill in your information
12. click on constants.gs and update the section that says //CHANGE THIS
      You will need to update the address for your spreadsheet, 
      Starting and ending row for houses and the abreviations for your floors
13. Click on "Select Function" on the top bar and choose "test" from the drop down Menu
14. Click the play button. If Google asks permission, choose advanced options and click through to give permissions. If cell D2 has a value 1, it works.
13. Save the code and click publish -> publish as web app 
14. Fill in information in publish form. (when updating the code, you will need to republish the code. Choose a new project version and comment on changes)
15. Save the app URL (copy and write down somewhere)
16. Go on group me and create a new chat for your bot
17. Go to https://dev.groupme.com/bots
18. Sign in to your group me account and select create bot
19. On the drop down menu, select the chat that you just created
20. Name the bot and paste the copied link from step 15 and submit
21. Copy the bot ID and paste into the bot ID section in constants.gs (Must be in quotes)
22. Publish the app again (step 15,16)
23. Test bot in group me, making sure to verify it worked on the google spreadsheet


Now you should be set up. If it isn't working, message me.
