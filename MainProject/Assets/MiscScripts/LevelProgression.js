#pragma strict
private var numEnemies : int = -1;
var levelPortal : GameObject;
var player : GameObject;

function Start () {
	numEnemies = GameObject.FindGameObjectsWithTag("Enemy").Length;
}

function Update () {
	Debug.Log(numEnemies);
	if(numEnemies == 0 && Vector3.Distance(player.transform.position, levelPortal.transform.position) < 2){
		Screen.lockCursor = false;
		Application.LoadLevel("Win");
	}
}

function enemyDeath(){
	numEnemies = numEnemies - 1;
}