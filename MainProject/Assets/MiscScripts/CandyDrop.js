#pragma strict

var player : GameObject;
var dropRange : float;
var dropped : boolean;

var candyIdentifier : int;

var sparkle : ParticleEmitter;

function Start () {
	Invoke("FinishDrop", 0.1);
}

function OnTriggerEnter (object:Collider) {
	if (object.tag == "Player") {
		object.SendMessage("addCandy");
		DestroyCandyDrop();
	}
	if (object.tag == "ChocolateDrop" || object.tag == "GummyDrop" || object.tag == "LollipopDrop") {
		if (dropped == false) {
			transform.position.x += Random.Range(-dropRange, dropRange);
			transform.position.z += Random.Range(-dropRange, dropRange);
		}
	}
}

function DestroyCandyDrop () {
	sparkle.transform.parent = null;
	sparkle.emit = false;
	Destroy(sparkle, 2.0);
	Destroy(gameObject);
}

function FinishDrop () {
	dropped = true;
}