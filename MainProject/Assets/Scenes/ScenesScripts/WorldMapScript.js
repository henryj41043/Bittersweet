﻿#pragma strict
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

private var castleX = 404;
private var castleY = 306;

private var backX = 20;
private var backY = 515;

private var lollipopLevel3X = 142;
private var lollipopLevel3Y = 146;

private var lollipopLevel4X = 80;
private var lollipopLevel4Y = 142;

private var lollipopLevel5X = 22;
private var lollipopLevel5Y = 188;

function Start(){
	if(!PlayerPrefs.HasKey("lollipopLevel3")){ PlayerPrefs.SetInt("lollipopLevel3", 0); }
	if(!PlayerPrefs.HasKey("lollipopLevel4")){ PlayerPrefs.SetInt("lollipopLevel4", 0); }
	if(!PlayerPrefs.HasKey("lollipopLevel5")){ PlayerPrefs.SetInt("lollipopLevel5", 0); }
}

function OnGUI () {
	//if(PlayerPrefs.GetInt("lollipopLevel3") == 1){
		if(GUI.Button(Rect(lollipopLevel3X, lollipopLevel3Y, buttonWidth, buttonHeight), "", lollipopLevel3Style))
		{
			Application.LoadLevel("Main");
		}
	//}
	
	//if(PlayerPrefs.GetInt("lollipopLevel4") == 1){
		if(GUI.Button(Rect(lollipopLevel4X, lollipopLevel4Y, buttonWidth, buttonHeight), "", lollipopLevel4Style))
		{
		
		}
	//}
	
	//if(PlayerPrefs.GetInt("lollipopLevel5") == 1){
		if(GUI.Button(Rect(lollipopLevel5X, lollipopLevel5Y, starWidth, starHeight), "", lollipopLevel5Style))
		{
		
		}
	//}
	
	if(GUI.Button(Rect(castleX, castleY, starWidth, starHeight), "", castleStyle))
	{
		Application.LoadLevel("Comic1");
	}
	
	if(GUI.Button(Rect(backX, backY, backWidth, backHeight), "", backStyle))
	{
		Application.LoadLevel("TitleScene");
	}
}
