#pragma strict

var strike1 : GameObject;
var strike2 : GameObject;
var strike3 : GameObject;

private var damage : float;
private var hitstunDuration : float;
private var finalHit : boolean;

function Start () {
	finalHit = false;
}

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		object.SendMessage("ApplyDamage", damage);
		object.SendMessage("HitstunImmobilizationPhase", hitstunDuration);
		if (finalHit == true) {
			object.SendMessage("DropCandy");
			finalHit = false;
		}
	}
}

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}

function HitstunDuration (receivedHitstunDuration : float) {
	hitstunDuration = receivedHitstunDuration;
}

function FinalHit () {
	finalHit = true;
}

function Duration (receivedAttackDuration : float) {
	Invoke("DestroySelf", receivedAttackDuration);
}

function DestroySelf () {
	Destroy(gameObject);
}

function StrikeAnimation (receivedStrikeAnimation : int) {
	if (receivedStrikeAnimation == 1) {
		strike1.SetActive (true);
	}
	else if (receivedStrikeAnimation == 2) {
		strike2.SetActive (true);	
	}
	
	else if (receivedStrikeAnimation == 3) {
		strike3.SetActive (true);	
	}
}