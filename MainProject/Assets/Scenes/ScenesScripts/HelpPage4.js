﻿#pragma strict
var NextStyle: GUIStyle;
var BackStyle: GUIStyle;
private var buttonWidth: int = 97;
private var buttonHeight: int = 66;
private var nextX = 800;
private var nextY = 515;
private var backX = 75;
private var backY = 515;


function OnGUI () {

	if(GUI.Button(Rect(nextX, nextY, buttonWidth, buttonHeight),"",NextStyle))
	{
		Application.LoadLevel("Help5");
	
	}

	if(GUI.Button(Rect(backX, backY, buttonWidth, buttonHeight),"",BackStyle))
	{
		Application.LoadLevel("Help3");
	
	}
	
}