#pragma strict

private var movement : CharacterMotor;

private var phaseChange1 : float;
private var phaseChange2 : float;

private var travelSpeed : float;
private var recoverSpeed : int;

private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;

private var sliding : boolean;

function StickySlidePhaseChange1(receivedPhaseChange1 : float) {
	phaseChange1 = receivedPhaseChange1;
}

function StickySlidePhaseChange2(receivedPhaseChange2 : float) {
	phaseChange2 = receivedPhaseChange2;
}

function StickySlideTravelSpeed(receivedTravelSpeed : float) {
	travelSpeed = receivedTravelSpeed;
}

function Start () {
	controller = GetComponent(CharacterController);
}

function Update () {
	moveDirection = Vector3(transform.forward.x, -10, transform.forward.z);
	if (sliding == true) {
		controller.Move(moveDirection * Time.deltaTime * travelSpeed);
	}
}

function StickySlideWindupPhase () {
	SendMessage("UnableToTakeDamage");
	SendMessage("AbleToMove", false);
	SendMessage("AbleToAttack", false);
	SendMessage("AbleToDodge", false);
	SendMessage("AbleToSpecial", false);
	SendMessage("AbleToRotate", false);
	Invoke("StickySlideMovementPhase", phaseChange1);
}

function StickySlideMovementPhase () {
	sliding = true;
	Physics.IgnoreLayerCollision(8, 9, true);
	Invoke("StickySlideCooldownPhase", phaseChange2);
}

function StickySlideCooldownPhase () {
	sliding = false;
	Physics.IgnoreLayerCollision(8, 9, false);
	Invoke("StickySlideEndPhase", 0);
}

function StickySlideEndPhase () {
	SendMessage("AbleToTakeDamage");
	SendMessage("AbleToMove", true);
	SendMessage("AbleToAttack", true);
	SendMessage("AbleToDodge", true);
	SendMessage("AbleToSpecial", true);
	SendMessage("AbleToRotate", true);
}