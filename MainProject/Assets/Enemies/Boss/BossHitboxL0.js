#pragma strict

private var damage : float;
private var hitstunDuration : float;
private var velocity : Vector3;
var knockback : boolean;
var knockbackFactor : float;
var knockbackDuration : float;

function Start () {
	velocity = rigidbody.velocity;
}

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Player") {
		object.SendMessage("ApplyDamage", damage);
		object.SendMessage("HitstunImmobilizationPhase", hitstunDuration);
		if (knockback == true) {
			object.SendMessage("KnockbackMovementPhase", velocity * knockbackFactor);
			object.SendMessage("KnockbackDuration", knockbackDuration);
		}
		DestroySelf();
	}
}

function Damage (receivedDamage : float) {
	damage = receivedDamage;
}

function HitstunDuration (receivedHitstunDuration : float) {
	hitstunDuration = receivedHitstunDuration;
}

function Duration (receivedAttackDuration : float) {
	Invoke("DestroySelf", receivedAttackDuration);
}

function Knockback () {
	
}

function DestroySelf () {
	Destroy(gameObject);
}