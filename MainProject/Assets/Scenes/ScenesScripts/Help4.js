#pragma strict
var backStyle : GUIStyle;
var nextStyle : GUIStyle;

private var buttonWidth : int = 140;
private var buttonHeight : int = 80;

private var backX = 20;
private var backY = 515;

private var nextX = 800;
private var nextY = 515;

function OnGUI () {
	if(GUI.Button(Rect(backX, backY, buttonWidth, buttonHeight), "", backStyle))
	{
		Application.LoadLevel("Help3");
	
	}
	
	if(GUI.Button(Rect(nextX, nextY, buttonWidth, buttonHeight), "", nextStyle))
	{
		Application.LoadLevel("Help5");
	
	}
}