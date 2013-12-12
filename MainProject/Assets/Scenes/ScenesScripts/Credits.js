#pragma strict
var backStyle : GUIStyle;
private var backWidth = 140;
private var backHeight = 100;
private var backX = 30;
private var backy = 435;

function OnGUI () {
	if(GUI.Button(Rect(backX, backy, backWidth, backHeight), "", backStyle))
	{
		Application.LoadLevel("TitleScene");
		var menuMusic : GameObject = GameObject.Find("MenuMusic");
		    if (menuMusic) {
		        Destroy(menuMusic);
		    }
		
		
	
	}
}