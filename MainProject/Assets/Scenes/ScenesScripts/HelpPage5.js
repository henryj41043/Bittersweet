#pragma strict
var BackStyle: GUIStyle;
private var buttonWidth: int = 97;
private var buttonHeight: int = 66;
private var backX = 55;
private var backY = 515;


function OnGUI () {

	if(GUI.Button(Rect(backX, backY, buttonWidth, buttonHeight),"",BackStyle))
	{
		Application.LoadLevel("Help4");
	
	}
	
}
