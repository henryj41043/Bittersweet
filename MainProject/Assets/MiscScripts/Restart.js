/*
Put this on a GameObject unattached to anything. Replace the Input.GetKeyDown with whatever you want restart to be.
*/

#pragma strict

function Update () {
	if (Input.GetKeyDown (KeyCode.Return)) {
		Screen.lockCursor = false; 
		Application.LoadLevel("WorldMap"); 
	}
}