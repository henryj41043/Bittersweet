#pragma strict
var NextStyle: GUIStyle;
var BackStyle: GUIStyle;
private var buttonWidth: int = 220;
private var buttonHeight: int = 50;
private var nextX = 850;
private var nextY = 550;
private var backX = 50;
private var backY = 550;


function OnGUI () {

	if(GUI.Button(Rect(nextX, nextY, buttonWidth, buttonHeight),"Next -->",NextStyle))
	{
		Application.LoadLevel("Help5");
	
	}

	if(GUI.Button(Rect(backX, backY, buttonWidth, buttonHeight),"<-- Back",BackStyle))
	{
		Application.LoadLevel("Help3");
	
	}
	
}