#pragma strict

var player : GameObject;
var parent : GameObject;
var landingZone : GameObject;
var candyIdentifier : int;
var sparkle : ParticleEmitter;
var landed : boolean;

private var hit : RaycastHit;

function Start () {
	Invoke("FinishDrop", 0.1);
	var landingDirection : int = Random.Range(1, 5);
	if (landingDirection == 1) {
		landingZone.transform.position.x += Random.Range(0.5, 1.0);
		landingZone.transform.position.z += Random.Range(0.5, 1.0);	
	}
	if (landingDirection == 2) {
		landingZone.transform.position.x += Random.Range(0.5, 1.0);
		landingZone.transform.position.z -= Random.Range(0.5, 1.0);	
	}
	if (landingDirection == 3) {
		landingZone.transform.position.x -= Random.Range(0.5, 1.0);
		landingZone.transform.position.z += Random.Range(0.5, 1.0);	
	
	}
	if (landingDirection == 4) {
		landingZone.transform.position.x -= Random.Range(0.5, 1.0);
		landingZone.transform.position.z -= Random.Range(0.5, 1.0);	
	}
}

function Update () {
	if (Physics.Raycast(transform.position, -Vector3.up, hit, 2.5) && rigidbody.isKinematic == false) {
		if (hit.collider.gameObject.CompareTag("Floor")) {
  		  rigidbody.isKinematic = true;
  		  landed = true;
		}
	}
}

function OnTriggerEnter (object:Collider) {
	if (object.tag == "Player") {
		object.SendMessage("addCandy");
		DestroyCandyDrop();
	}
}

function DestroyCandyDrop () {
	sparkle.transform.parent = null;
	sparkle.emit = false;
	Destroy(sparkle, 2.0);
	Destroy(parent);
}
