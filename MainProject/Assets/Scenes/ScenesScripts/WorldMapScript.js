#pragma strict
private var dotWidth : int = 40;
private var dotHeight : int = 40;

private var starWidth : int = 40;
private var starHeight : int = 40;

var lollipopLevel1Style : GUIStyle;
private var lollipopLevel1X = 160;
private var lollipopLevel1Y = 244;

var backStyle : GUIStyle;
private var backWidth : int = 140;
private var backHeight : int = 80;
private var backX = 20;
private var backY = 515;

function OnGUI () {
	if(GUI.Button(Rect(lollipopLevel1X, lollipopLevel1Y, dotWidth, dotHeight), "", lollipopLevel1Style))
	{
		Application.LoadLevel("Main");
		var gameMusic : GameObject = GameObject.Find("GameMusic");
	    if (gameMusic) {
	        // kill game music
	        Destroy(gameMusic);
	    }
		
	}
	
	if(GUI.Button(Rect(backX, backY, backWidth, backHeight), "", backStyle))
	{
		Application.LoadLevel("TitleScene");
		var menuMusic : GameObject = GameObject.Find("MenuMusic");
	    if (menuMusic) {
	        // kill menu music
	        Destroy(menuMusic);
	    }
	}
}
