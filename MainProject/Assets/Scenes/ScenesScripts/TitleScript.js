#pragma strict
var customSkin: GUISkin;
//var startButton: GUISkin;
var startButtonStyle: GUIStyle;
var InstuctionButtonStyle: GUIStyle;



function OnGUI () {
	var buttonWidth: int = 220;
	var buttonHeight: int = 50;
	
	//var halfScreenWidth: float = Screen.width/2;
	//var halfButtonWidth: float = buttonWidth/2;
	
	GUI.skin = customSkin;
	//GUI.skin = startButton;

	//350,450
	//start button
	if(GUI.Button(Rect(350, 380,buttonWidth,buttonHeight),"WorldMap",startButtonStyle))
	{
		Application.LoadLevel("WorldMap");
	
	}
	//Instuction button
	if(GUI.Button(Rect(350, 450,buttonWidth,buttonHeight),"Instuction1",InstuctionButtonStyle))
	{
		Application.LoadLevel("Instuction1");
	
	}
	
}
