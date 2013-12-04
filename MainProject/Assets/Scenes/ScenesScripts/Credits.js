#pragma strict
var backStyle : GUIStyle;
private var backWidth = 140;
private var backHeight = 100;
private var backX = 30;
private var backy = 435;

private var buttonWidth = 200;
private var buttonHeight = 200;

var alexStyle : GUIStyle;
private var alexX = 302;
private var alexY = 35;

var annaStyle : GUIStyle;
private var annaX = 500;
private var annaY = 35;

var jessieStyle : GUIStyle;
private var jessieX = 710;
private var jessieY = 35;

var jirakitStyle : GUIStyle;
private var jirakitX = 20;
private var jirakitY = 230;

var joshStyle : GUIStyle;
private var joshX = 235;
private var joshY = 230;

var kailinStyle : GUIStyle;
private var kailinX = 442;
private var kailinY = 230;

var kennethStyle : GUIStyle;
private var kennethX = 645;
private var kennethY = 230;

var linaStyle : GUIStyle;
private var linaX = 145;
private var linaY = 384;

var rachelStyle : GUIStyle;
private var rachelX = 350;
private var rachelY = 384;

var stevenStyle : GUIStyle;
private var stevenX = 546;
private var stevenY = 384;

function OnGUI () {
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
	
	if(GUI.Button(Rect(backX, backy, backWidth, backHeight), "", backStyle))
	{
		Application.LoadLevel("TitleScene");
		var menuMusic : GameObject = GameObject.Find("MenuMusic");
		    if (menuMusic) {
		        // kill menu music
		        Destroy(menuMusic);
		    }
		
		
	
	}
}