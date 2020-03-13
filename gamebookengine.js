var GAMENAME = '';
var OBJECTGLOBAL = ''; //Indicates the current OBJECT loaded.
var GAMECURPLAYER = ''; //Indicates the current player you control.
var GAMESCORE = '0';
var GLOBALSETCLS = false;

const OBJECTNAME = 0;
const OBJECTDESC = 1;
const OBJECTXSIZE = 2;
const OBJECTYSIZE = 3;
const OBJECTIMAGE = 4;
const OBJECTMOVIE = 5;

function doRoomLoad() {
   
   runAttributes(this.id, this.id);
    
    
    runSPANS();

}

function rtnStringInstances(string, searchinstance) {
//returns the number of times the search appears in the string.
  
eval("var regex = /" + searchinstance + "/gi, result, indices = [];");
while ( (result = regex.exec(string)) ) {
    indices.push(result);
    
}

return indices.length;
  
}


function runAttributes(id, room) {
    
     var elAttrib = document.getElementById(id);
    
var elVar = elAttrib.getAttribute('vars');

runElVars(elVar, room);
    
}

function runElVars(vars, room){
    
      if (vars != undefined) {

vars = vars.split(";"), i;    

for (i = 0; i < vars.length; i++) {
    
var attribsplit = vars[i].split(":");
var attribname = attribsplit[0];
var attribvalue = attribsplit[1];
var executevars = "window." + attribname + " = '" + attribvalue + "';";

eval(executevars);
}

}
LoadRoom(room);
}


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
} //end function ParsePlayerInput

function displayElVars(str) {
    
var myArray = str.split("@");

var len = myArray.length;

for(let i = len-1;i>=0;i--){  
   myArray[i] = myArray[i].replace(/-/g, '');
   if(i%2 == 0) {
       myArray.splice(i,1)
      
    if ( myArray[i] !== undefined) {
        
        var find = "@-" + myArray[i] + "-@";
        var replace = eval(myArray[i]);
        
        str = replaceAll(str, find, replace);
    }
    
   }
}

return str;

}

function LoadRoom(roomname) {
    //Loads the specified room and sets the global setting. If a movie file is specified, the engine will play the movie file first. Once the movie is done, it will load the room image. Currently, the video will only play thru once. Once it is played, it will just show an image. If no movie is specified, it will load simply the room background image. If no image is present, it will show no image.

    OBJECTGLOBAL = roomname;

    if (GameObjects[OBJECTGLOBAL][OBJECTMOVIE][1] != '') {

        document.getElementById("StartRoomLoad").innerHTML = '<video id="mainvid" onerror="hidevideo(OBJECTGLOBAL);" onended="hidevideo(OBJECTGLOBAL);" width="100%" height="" autoplay>' + '<source src="' + GameObjects[OBJECTGLOBAL][OBJECTMOVIE][1] + '" type="video/mp4"></video>';
    } else if (GameObjects[OBJECTGLOBAL][OBJECTIMAGE][1] != '') {
        //console.log(GameObjects[OBJECTGLOBAL][OBJECTIMAGE][1]);
        document.getElementById("StartRoomLoad").innerHTML = "<img src='" + GameObjects[OBJECTGLOBAL][OBJECTIMAGE][1] + "' id='RoomBackground' width='" + GameObjects[OBJECTGLOBAL][OBJECTXSIZE][1] + "' height='" + GameObjects[OBJECTGLOBAL][OBJECTYSIZE][1] + "'></image>";
    }
       $roomtext = displayElVars(GameObjects[OBJECTGLOBAL][OBJECTDESC][1]);
       document.getElementById("StartRoomText").innerHTML = $roomtext;
            

}



function hidevideo(roomname) {
    //This function is called once a video is played on room enter. It will close the video and then show the image if there is one. 

    var x = document.getElementById("mainvid");
    var y = document.getElementById("RoomBackground");

    x.style.display = "none";

    if (GameObjects[OBJECTGLOBAL][OBJECTIMAGE][1] != '') {
        document.getElementById("StartRoomLoad").innerHTML = "<img src='" + GameObjects[OBJECTGLOBAL][OBJECTIMAGE][1] + "' id='RoomBackground' width='" + GameObjects[OBJECTGLOBAL][OBJECTXSIZE][1] + "' height='" + GameObjects[OBJECTGLOBAL][OBJECTYSIZE][1] + "'></image>";
    }

}


OBJECTGLOBAL = 'titlescreen';
LoadRoom(OBJECTGLOBAL);




var spans = document.getElementsByTagName('objdc');
for (i = 0; i < spans.length; i++)
    spans[i].onclick = doRoomLoad;

function findBetween(text, firststring, secondstring) {
    
    
    //Function to text between two strings.
    var firstvariable = firststring;
    var secondvariable = secondstring;
    var text = text;

    var regExString = new RegExp("(?:" + firstvariable + ")((.[\\s\\S]*))(?:" + secondvariable + ")", "ig"); //set ig flag for global search and case insensitive

    var strResult = regExString.exec(text);
if (strResult != null) {
    return strResult[1];
    }

}

function strDelimiter(text, delimiter, pos){
 //Function to enter a string and divide it using a delimiter and return the string at the split position
  var textsep = text;
         textsep.split(delimiter);
  
  return textsep[pos];
  
}

function runSPANS() {
    var spans = document.getElementsByTagName('objdc');
    for (i = 0; i < spans.length; i++)

        spans[i].onclick = doRoomLoad;
}

//document.getElementsByTagName('objdc').addEventListener('click',doRoomLoad,false);

