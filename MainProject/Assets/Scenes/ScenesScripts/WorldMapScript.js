#pragma strict
var castleStyle : GUIStyle;
var lollipopLevel3Style : GUIStyle;
var lollipopLevel4Style : GUIStyle;
var lollipopLevel5Style : GUIStyle;
var backStyle : GUIStyle;

private var buttonWidth : int = 60;
private var buttonHeight : int = 60;
private var starWidth : int = 100;
private var starHeight : int = 100;
private var backWidth : int = 140;
private var backHeight : int = 80;

private var castleX = 400;
private var castleY = 295;

private var backX = 20;
private var backY = 515;

private var lollipopLevel3X = 160;
private var lollipopLevel3Y = 144;

private var lollipopLevel4X = 82;
private var lollipopLevel4Y = 130;

private var lollipopLevel5X = 14;
private var lollipopLevel5Y = 174;

function OnGUI () {
	if(GUI.Button(Rect(lollipopLevel3X, lollipopLevel3Y, buttonWidth, buttonHeight), "", lollipopLevel3Style))
	{
		Application.LoadLevel("Main");
	}
	
	if(GUI.Button(Rect(lollipopLevel4X, lollipopLevel4Y, buttonWidth, buttonHeight), "", lollipopLevel4Style))
	{
		
	}
	
	if(GUI.Button(Rect(lollipopLevel5X, lollipopLevel5Y, starWidth, starHeight), "", lollipopLevel5Style))
	{
		
	}
	
	if(GUI.Button(Rect(castleX, castleY, starWidth, starHeight), "", castleStyle))
	{
		Application.LoadLevel("Comic1");
	}
	
	if(GUI.Button(Rect(backX, backY, backWidth, backHeight), "", backStyle))
	{
		Application.LoadLevel("TitleScene");
	}
}
