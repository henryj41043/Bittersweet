#pragma strict
var NextStyle: GUIStyle;
var BackStyle: GUIStyle;
private var buttonWidth: int = 97;
private var buttonHeight: int = 66;
private var nextX = 645;
private var nextY = 515;
private var backX = 55;
private var backY = 515;


function OnGUI () {

	if(GUI.Button(Rect(nextX, nextY, buttonWidth, buttonHeight),"",NextStyle))
	{
		Application.LoadLevel("Help2");
	
	}

	if(GUI.Button(Rect(backX, backY, buttonWidth, buttonHeight),"",BackStyle))
	{
		Application.LoadLevel("TitleScene");
	
	}
	
}
