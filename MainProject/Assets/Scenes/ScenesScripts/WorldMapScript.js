#pragma strict
var lollipopLevel1Style : GUIStyle;

private var buttonWidth : int = 40;
private var buttonHeight : int = 40;

private var lollipopLevel1X = 160;
private var lollipopLevel1Y = 244;

function OnGUI () {
	if(GUI.Button(Rect(lollipopLevel1X, lollipopLevel1Y, buttonWidth, buttonHeight), "", lollipopLevel1Style))
	{
		Application.LoadLevel("Main");
	}
}
