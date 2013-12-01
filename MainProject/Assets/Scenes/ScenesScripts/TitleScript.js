#pragma strict
// start button variables
var startButtonStyle: GUIStyle;
private var startX : float = 370;
private var startY : float = 352;
private var startWidth : float = 196;
private var startHeight : float = 80;

// help button variables
var helpButtonStyle : GUIStyle;
private var helpX : float = 370;
private var helpY : float = 415;
private var helpWidth : float = 196;
private var helpHeight : float = 80;

// credits button vairables
var creditButtonStyle : GUIStyle;
private var creditX : float = 370;
private var creditY : float = 478;
private var creditWidth : float = 196;
private var creditHeight : float = 80;

function OnGUI () {

	if(GUI.Button(Rect(startX, startY, startWidth, startHeight), "", startButtonStyle)){
		Application.LoadLevel("WorldMap");	
	}
	
	if(GUI.Button(Rect(helpX, helpY, helpWidth, helpHeight), "", helpButtonStyle)){
		Application.LoadLevel("Help1");
	}
	
	if(GUI.Button(Rect(creditX, creditY, creditWidth, creditHeight), "", creditButtonStyle)){
			
	}	
}
