#pragma strict
var startButtonStyle : GUIStyle;
var helpButtonStyle : GUIStyle;
var creditsButtonStyle : GUIStyle;

private var buttonWidth : int = 220;
private var buttonHeight : int = 80;

private var startButtonX = 350;
private var startButtonY = 360;

private var helpButtonX = 350;
private var helpButtonY = 425;

private var creditsButtonX = 350;
private var creditsButtonY = 490;

function OnGUI () {
	if(GUI.Button(Rect(startButtonX, startButtonY,buttonWidth,buttonHeight),"",startButtonStyle))
	{
		Application.LoadLevel("WorldMap");
	
	}
	
	if(GUI.Button(Rect(helpButtonX, helpButtonY, buttonWidth, buttonHeight),"",helpButtonStyle))
	{
		Application.LoadLevel("Help1");
	
	}
	
	if(GUI.Button(Rect(creditsButtonX, creditsButtonY, buttonWidth, buttonHeight),"",creditsButtonStyle))
	{
		Application.LoadLevel("Credits");
	
	}
}
