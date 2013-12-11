#pragma strict


private var damageTick : boolean;
private var trailTickInterval : float;
var trailDuration : float;

function Start () {
	damageTick = true;
	Invoke("DestroySelf", trailDuration);
}

/*function Update () {
	if (animation["Take001"].time == trailDuration) {
		DestroySelf();
	}
}*/

function DamageTickIsOff () {
	Invoke("TurnDamageTickOn", trailTickInterval);
}

function TurnDamageTickOn () {
	damageTick = true;
}


function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy"/* && damageTick == true*/) {
		//object.SendMessage("HitstunImmobilizationPhase", 1);
		//damageTick = false;
		//DamageTickIsOff();
	}
}

function TrailDuration (receivedTrailDuration : float) {
	trailDuration = receivedTrailDuration;
	Invoke("DestroySelf", receivedTrailDuration);
}

function DestroySelf () {
	Destroy(gameObject);
}