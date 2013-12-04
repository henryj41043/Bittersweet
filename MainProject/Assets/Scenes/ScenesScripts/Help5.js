#pragma strict
var backStyle : GUIStyle;

private var buttonWidth : int = 140;
private var buttonHeight : int = 80;

private var backX = 20;
private var backY = 515;

function OnGUI () {
	if(GUI.Button(Rect(backX, backY, buttonWidth, buttonHeight), "", backStyle))
	{
		Application.LoadLevel("Help4");
	
	}
}