#pragma strict

var chocolateDrop : GameObject;
var gummyDrop : GameObject;
var lollipopDrop : GameObject;
var minimumDropRange : float;
var maximumDropRange : float;
private var candyDrop : int;

var ableToMove : boolean;
var moveSpeed : float;

var ableToAttack : boolean;
var hitbox : Rigidbody;
var hitboxInstantiated : Rigidbody;
var baseAttackDamage : float;
var baseAttackRange : float;
var baseAttackDuration : float;
var baseAttackHitstunDuration : float;
var attackDetectionRange : float;
var attackMovementSpeed : float;
var attackWindupPeriod : float;
var attackStrikingPeriod : float;
var attackCooldownPeriod : float;

var ableToRotate : boolean;

var gravity : float;

var deathDuration : float;
var hitParticles : ParticleEmitter;
var amIDead : boolean;

private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;
private var player : GameObject;

function Start () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToRotate(true);
	controller = GetComponent(CharacterController);
	player = GameObject.FindGameObjectWithTag("Player");
}

function Update () {
	transform.rotation.x = 0;
	
	if (amIDead == true) {
		AbleToMove(false);
		AbleToAttack(false);
		AbleToRotate(false);
	}
	
	if (ableToRotate == true) {
		transform.LookAt(player.transform);
	}
	
	if (ableToMove == true) {
		moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
		controller.Move(moveDirection * Time.deltaTime * moveSpeed);
		BroadcastMessage("PlayMinerWalk");
	}

	if (ableToAttack == true) {
		if ((Vector3.Distance(transform.position, player.transform.position) < attackDetectionRange)) {
			AttackWindupPhase();
		}
	}
}

function AttackWindupPhase () {
	controller.Move(Vector3(0, gravity, 0) * Time.deltaTime * moveSpeed);
	BroadcastMessage("PlayMinerAttack");
	AbleToMove(false);
	AbleToAttack(false);
	AbleToRotate(false);
	Invoke("AttackStrikingPhase", attackWindupPeriod);
}

function AttackStrikingPhase () {
	hitboxInstantiated = Instantiate(hitbox, transform.position + (transform.forward * 2), transform.rotation);
	hitboxInstantiated.velocity = transform.TransformDirection(Vector3(0, 0, baseAttackRange));
	hitboxInstantiated.SendMessage("Damage", baseAttackDamage);
	hitboxInstantiated.SendMessage("Duration", baseAttackDuration);
	hitboxInstantiated.SendMessage("HitstunDuration", baseAttackHitstunDuration);
	Invoke("AttackCooldownPhase", attackStrikingPeriod);
}

function AttackCooldownPhase () {
	Invoke("AttackEndPhase", attackCooldownPeriod);
}

function AttackEndPhase () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToRotate(true);
}

function AbleToMove (receivedInput : boolean) {
	ableToMove = receivedInput;
}

function AbleToAttack (receivedInput : boolean) {
	ableToAttack = receivedInput;
}

function AbleToRotate (receivedInput : boolean) {
	ableToRotate = receivedInput;
}

function HitstunImmobilizationPhase(hitstunDuration : float) {
	if (amIDead == false) {
		hitboxInstantiated.SendMessage("DestroySelf");
		hitParticles.Emit(10);
		BroadcastMessage("PlayMinerRecoil");
		CancelInvoke();
		AbleToMove(false);
		AbleToAttack(false);
		AbleToRotate(false);
		Invoke("HitstunRecoveryPhase", hitstunDuration);
	}
}

function HitstunRecoveryPhase () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToRotate(true);
}

function PlayMinerDeath () {
	if(amIDead == false){
		hitParticles.Emit(10);
		Physics.IgnoreCollision(collider, player.collider);
		Destroy(gameObject, deathDuration);
		GameObject.Find("GameManager").SendMessage("enemyDeath");
		amIDead = true;
	}
}