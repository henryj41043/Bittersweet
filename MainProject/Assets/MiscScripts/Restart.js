/*
Put this on a GameObject unattached to anything. Replace the Input.GetKeyDown with whatever you want restart to be.
*/

#pragma strict

function Update () {
	if (Input.GetKeyDown (KeyCode.Return)) { 
		Application.LoadLevel("WorldMap");
		/*
		var menuMusic : GameObject = GameObject.Find("MenuMusic");
    if (menuMusic) {
        // kill menu music
        Destroy(menuMusic);
    }
    */
		
	}
}