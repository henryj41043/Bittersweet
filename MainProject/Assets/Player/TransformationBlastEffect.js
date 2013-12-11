#pragma strict

var damage : float;
var hitstunDuration : float;
var blastEffect : GameObject;
var blast : boolean;
var duration : float;

function Start () {
	Invoke("EnableBlast", 0.4);
	Invoke("DestroySelf", duration);
}

function EnableBlast () {
	blastEffect.SetActive(true);
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

function DestroySelf () {
	blast = false;
	Destroy(gameObject);
}