#pragma strict

var chocolateDrop : GameObject;
var gummyDrop : GameObject;
var lollipopDrop : GameObject;
var manager : GameObject;
private var candyDrop : int;

var maximumHealth : int;
var ableToDrop : boolean;
private var currentHealth : int;

function Start () {
	currentHealth = maximumHealth;
	ableToDrop = true;
}

function ApplyDamage (damage : int) {
	currentHealth -= damage;
	if (currentHealth <= 0) {
		KillSelf();
	}
}

function KillSelf() {
	BroadcastMessage("PlayCCGDeath");
	DropCandy();
	Invoke("PreventDropCandy", 0.1);
}

function DropCandy() {
	candyDrop = Random.Range(1, 4);
	if (ableToDrop == true) {
		if (candyDrop == 1) {
			Instantiate(chocolateDrop, transform.position, Quaternion(0, 0, 0, 0));
		}
		if (candyDrop == 2) {
			Instantiate(gummyDrop, transform.position, Quaternion(0, 0, 0, 0));
		}
		if (candyDrop == 3) {
			Instantiate(lollipopDrop, transform.position, Quaternion(0, 0, 0, 0));
		}
	}
}

function PreventDropCandy () {
	ableToDrop = false;
}