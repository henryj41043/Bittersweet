#pragma strict

var chocolateDrop : GameObject;
var gummyDrop : GameObject;
var lollipopDrop : GameObject;
private var candyDrop : int;

var hitboxL0 : Rigidbody;
var baseAttackDamageL0 : float;
var baseAttackRangeL0 : float;
var baseAttackDurationL0 : float;
var baseAttackHitstunDurationL0 : float;
var attackDetectionRangeL0 : float;
var attackWindupPeriodL0 : float;
var attackStrikingPeriodL0 : float;
var attackCooldownPeriodL0 : float;
var hitboxR0 : Rigidbody;
var spikeCount : int;
var maxSpikes : int;
var baseAttackDamageR0 : float;
var baseAttackRangeR0 : float;
var baseAttackDurationR0 : float;
var baseAttackHitstunDurationR0 : float;
var attackDetectionRangeR0 : float;
var attackWindupPeriodR0 : float;
var attackStrikingPeriodR0 : float;
var attackCooldownPeriodR0 : float;

var ableToAttack : boolean;
var ableToRotate : boolean;

var deathDuration : float;
var hitParticles : ParticleEmitter;
var amIDead : boolean;

private var controller : CharacterController;
private var player : GameObject;

function Start () {
	controller = GetComponent(CharacterController);
	player = GameObject.FindGameObjectWithTag("Player");
	BroadcastMessage("PlayBossSpawn");
	yield WaitForSeconds(1.8);
	AbleToRotate(true);
	AbleToAttack(true);
}

function Update () {
	
	if (amIDead == true) {
		AbleToRotate(false);
		AbleToAttack(false);
	}
	
	if (ableToRotate == true) {
		transform.LookAt(player.transform);
		transform.rotation.x = 0;
		transform.rotation.z = 0;
	}

	if (ableToAttack == true) {
		if (Vector3.Distance(transform.position, player.transform.position) < attackDetectionRangeL0) {
			SmashWindupPhase();
		}
		else if (Vector3.Distance(transform.position, player.transform.position) < attackDetectionRangeR0) {
			SpikesWindupPhase();
		}
	}
}

function SmashWindupPhase () {
	AbleToAttack(false);
	BroadcastMessage("PlayBossMeleeAttack");
	Invoke("SmashStrikingPhase", attackWindupPeriodL0);
}

function SmashStrikingPhase () {
	AbleToRotate(false);
	var hitboxInstantiated = Instantiate(hitboxL0, transform.position + (transform.forward * 2), transform.rotation);
	hitboxInstantiated.velocity = transform.TransformDirection(Vector3(0, 0, baseAttackRangeL0));
	hitboxInstantiated.SendMessage("Damage", baseAttackDamageL0);
	hitboxInstantiated.SendMessage("Duration", baseAttackDurationL0);
	hitboxInstantiated.SendMessage("HitstunDuration", baseAttackHitstunDurationL0);
	Invoke("SmashCooldownPhase", attackStrikingPeriodL0);
}

function SmashCooldownPhase () {
	Invoke("SmashEndPhase", attackCooldownPeriodL0);
}

function SmashEndPhase () {
	AbleToRotate(true);
	AbleToAttack(true);
}

function SpikesWindupPhase () {
	AbleToAttack(false);
	BroadcastMessage("PlayBossRangedAttack");
	AbleToRotate(false);
	Invoke("SpikesStrikingPhase", attackWindupPeriodR0);	
}

function SpikesStrikingPhase () {
	while (spikeCount < maxSpikes) {
		var hitboxInstantiated = Instantiate(hitboxR0, transform.position + (transform.forward * 2), transform.rotation);
		hitboxInstantiated.transform.Rotate(270 + Random.Range(-10.0, 10.0), Random.Range(-10.0, 10.0), Random.Range(-10.0, 10.0));
		hitboxInstantiated.velocity = transform.TransformDirection(Vector3(0, 0, baseAttackRangeR0));
		hitboxInstantiated.SendMessage("Damage", baseAttackDamageL0);
		hitboxInstantiated.SendMessage("Duration", baseAttackDurationL0);
		hitboxInstantiated.SendMessage("HitstunDuration", baseAttackHitstunDurationL0);
		spikeCount++;
	}
	if (spikeCount == maxSpikes || amIDead == true) {
		Invoke("SpikesCooldownPhase", attackStrikingPeriodR0);
	}
}

function SpikesCooldownPhase () {
	Invoke("SpikesEndPhase", attackCooldownPeriodR0);
}

function SpikesEndPhase () {
	spikeCount = 0;
	AbleToRotate(true);
	AbleToAttack(true);
}

function HitstunImmobilizationPhase(hitstunDuration : float) {
	if (amIDead == false) {
		hitParticles.Emit(10);
	}
}

function AbleToRotate (receivedInput : boolean) {
	ableToRotate = receivedInput;
}

function AbleToAttack (receivedInput : boolean) {
	ableToAttack = receivedInput;
}

function PlayBossDeath () {
	if (amIDead == false) {
		AbleToRotate(false);
		AbleToAttack(false);
		hitParticles.Emit(100);
		Physics.IgnoreCollision(collider, player.collider);
		GameObject.Find("GameManager").SendMessage("enemyDeath");
		Destroy(gameObject, deathDuration);
		amIDead = true;	
	}
}