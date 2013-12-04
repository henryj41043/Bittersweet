#pragma strict
var lollipopNode1: GUIStyle;
private var lollipopNode1Width : int = 40;
private var lollipopNode1Height : int = 40;
private var lollipopNode1X : int = 126;
private var lollipopNode1Y : int = 244;

function OnGUI () {	
	if(GUI.Button(Rect(lollipopNode1X, lollipopNode1Y, lollipopNode1Width, lollipopNode1Height),"",lollipopNode1))
	{	
		Application.LoadLevel("Main");
	}
}
