#pragma strict
private var numEnemies : int = 18;
var levelPortal : GameObject;
var player : GameObject;

function Update () {
	if(numEnemies == 0 && Vector3.Distance(player.transform.position, levelPortal.transform.position) < 2){
		PlayerPrefs.SetInt("lollipopLevel4", 1);
		PlayerPrefs.SetInt("lollipopLevel3", 2);
		Screen.lockCursor = false;
		Application.LoadLevel("Complete");
	}
}

function enemyDeath(){
	numEnemies = numEnemies - 1;
}