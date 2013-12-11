#pragma strict

var MeltyTrufflePrimaryEffect : Rigidbody;
var MeltyTruffleLandingZone : GameObject;

var startingDistance : float;
var distance : float;
var speed : float;
var width : float;
var damage : float;
var trailPlacementIntervals : float;
var trailDuration : float;
var hitstunDuration : float;

function MeltyTruffle () {
	var MeltyTruffle : Rigidbody = Instantiate(MeltyTrufflePrimaryEffect, transform.position + (transform.forward * startingDistance), transform.rotation);
	MeltyTruffle.velocity = transform.TransformDirection(Vector3(0, 0, speed));
	var MeltyTruffleLandingZone : GameObject = Instantiate(MeltyTruffleLandingZone, transform.position + (transform.forward * distance), transform.rotation);
	MeltyTruffle.SendMessage("Width", width);
	MeltyTruffle.SendMessage("Damage", damage);
	MeltyTruffle.SendMessage("HitstunDuration", hitstunDuration);
	//MeltyTruffle.SendMessage("TrailDuration", trailDuration);
}