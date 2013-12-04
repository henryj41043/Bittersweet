#pragma strict

var player : GameObject;

var cameraShakeXRange : Vector2;
var cameraShakeYRange : Vector2;
var cameraShakeZRange : Vector2;

private var cameraIsShaking : boolean;
private var shakeDuration : float;

function Start () {

}

function Update () {
	if (cameraIsShaking == true) {
		transform.position.x += Random.Range(cameraShakeXRange.x * shakeDuration, cameraShakeXRange.y * shakeDuration);
		transform.position.y += Random.Range(cameraShakeYRange.x * shakeDuration, cameraShakeYRange.y * shakeDuration);
		transform.position.z += Random.Range(cameraShakeZRange.x * shakeDuration, cameraShakeZRange.y * shakeDuration);
	}
	else {
		transform.position = player.transform.position;
	}
}

function CameraShake(receivedDuration : float) {
	shakeDuration = receivedDuration;
	cameraIsShaking = true;
	Invoke("EndCameraShake", shakeDuration);
}

function EndCameraShake() {
	cameraIsShaking = false;
}