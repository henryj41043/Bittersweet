#pragma strict
//var customSkin: GUISkin;
var NextStyle: GUIStyle;
var BackStyle: GUIStyle;



function OnGUI () {
	var buttonWidth: int = 220;
	var buttonHeight: int = 50;

	//GUI.skin = customSkin;
	
	//Next Instuction 1 page
	if(GUI.Button(Rect(700, 450,buttonWidth,buttonHeight),"Next",NextStyle))
	{
		Application.LoadLevel("TitleSence");
	
	}
	//Back to title sence
	if(GUI.Button(Rect(50, 450,buttonWidth,buttonHeight),"Back",BackStyle))
	{
		Application.LoadLevel("Instuction4");
	
	}
	
}
