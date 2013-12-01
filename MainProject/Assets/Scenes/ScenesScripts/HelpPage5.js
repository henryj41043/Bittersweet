#pragma strict
var BackStyle: GUIStyle;
private var buttonWidth: int = 220;
private var buttonHeight: int = 50;
private var backX = 50;
private var backY = 550;


function OnGUI () {

	if(GUI.Button(Rect(backX, backY, buttonWidth, buttonHeight),"<-- Back",BackStyle))
	{
		Application.LoadLevel("Help4");
	
	}
	
}
