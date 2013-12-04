#pragma strict
private var buttonWidth : float = 180;
private var buttonHeight : float = 180;

var BackStyle: GUIStyle;
private var backWidth = 97;
private var backHeight = 66;
private var backX = 15;
private var backY = 470;

// Alex variables
var alexStyle: GUIStyle;
private var alexX : float = 537;
private var alexY : float = 233;

// Anna variables
var annaStyle: GUIStyle;
private var annaX : float = 240;
private var annaY : float = 58;

// Jessie variables
var jessieStyle: GUIStyle;
private var jessieX : float = 424;
private var jessieY : float = 58;

// Jirakit variables
var jirakitStyle: GUIStyle;
private var jirakitX : float = 450;
private var jirakitY : float = 402;

// Josh variables
var joshStyle: GUIStyle;
private var joshX : float = 268;
private var joshY : float = 402;

// Kai Lin variables
var kailinStyle: GUIStyle;
private var kailinX : float = 370;
private var kailinY : float = 233;

// Kenneth variables
var kennethStyle: GUIStyle;
private var kennethX : float = 90;
private var kennethY : float = 402;

// Lina variables
var linaStyle: GUIStyle;
private var linaX : float = 602;
private var linaY : float = 58;

// Rachel variables
var rachelStyle: GUIStyle;
private var rachelX : float = 15;
private var rachelY : float = 233;

// Steven variables
var stevenStyle: GUIStyle;
private var stevenX : float = 191;
private var stevenY : float = 233;

function OnGUI () {	
	// need to add a back button
	
	if(GUI.Button(Rect(alexX, alexY, buttonWidth, buttonHeight), "", alexStyle)){}
	if(GUI.Button(Rect(annaX, annaY, buttonWidth, buttonHeight), "", annaStyle)){}
	if(GUI.Button(Rect(jessieX, jessieY, buttonWidth, buttonHeight), "", jessieStyle)){}
	if(GUI.Button(Rect(jirakitX, jirakitY, buttonWidth, buttonHeight), "", jirakitStyle)){}
	if(GUI.Button(Rect(joshX, joshY, buttonWidth, buttonHeight), "", joshStyle)){}
	if(GUI.Button(Rect(kailinX, kailinY, buttonWidth, buttonHeight), "", kailinStyle)){}
	if(GUI.Button(Rect(kennethX, kennethY, buttonWidth, buttonHeight), "", kennethStyle)){}
	if(GUI.Button(Rect(linaX, linaY, buttonWidth, buttonHeight), "", linaStyle)){}
	if(GUI.Button(Rect(rachelX, rachelY, buttonWidth, buttonHeight), "", rachelStyle)){}
	if(GUI.Button(Rect(stevenX, stevenY, buttonWidth, buttonHeight), "", stevenStyle)){}
	
	if(GUI.Button(Rect(backX, backY, backWidth, backHeight),"",BackStyle))
	{
		Application.LoadLevel("TitleScene");
	
	}
}