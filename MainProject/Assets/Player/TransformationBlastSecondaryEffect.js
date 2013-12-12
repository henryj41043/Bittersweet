#pragma strict

var damage : float;
var hitstunDuration : float;

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		object.SendMessage("ApplyDamage", damage);
		object.SendMessage("HitstunImmobilizationPhase", hitstunDuration);
	}
}