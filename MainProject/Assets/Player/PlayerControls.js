#pragma strict
//Movement parameters
var ableToMove : boolean;
var moveSpeed : float;
var moveForwardFactor : float;
var moveBackwardFactor : float;
var moveSidewaysFactor : float;
private var moveFactor : float;

//Attack parameters
var ableToAttack : boolean;
var hitboxL0 : Rigidbody;
var baseAttackDamageL0 : float;
var baseAttackRangeL0 : float;
var baseAttackDurationL0 : float;
var baseAttackHitstunDurationL0 : float;
var attackMovementSpeedL0 : float;
var attackWindupPeriodL0 : float;
var attackStrikingPeriodL0 : float;
var attackCooldownPeriodL0 : float;
var attackForwardFactorL0 : float;
var attackBackwardFactorL0 : float;
var attackSidewaysFactorL0 : float;
var finalHitL0 : int;
var currentHitL0 : int;
private var attackFactorL0 : float;
private var attackingL0 : boolean;
var hitboxL1 : Rigidbody;
var baseAttackDamageL1 : float;
var baseAttackRangeL1 : float;
var baseAttackDurationL1 : float;
var baseAttackHitstunDurationL1 : float;
var attackMovementSpeedL1 : float;
var attackWindupPeriodL1 : float;
var attackStrikingPeriodL1 : float;
var attackCooldownPeriodL1 : float;
var attackForwardFactorL1 : float;
var attackBackwardFactorL1 : float;
var attackSidewaysFactorL1 : float;
var finalHitL1 : int;
var currentHitL1 : int;
private var attackFactorL1 : float;
private var attackingL1 : boolean;
var hitboxL2 : Rigidbody;
var baseAttackDamageL2 : float;
var baseAttackRangeL2 : float;
var baseAttackDurationL2 : float;
var baseAttackHitstunDurationL2 : float;
var attackMovementSpeedL2 : float;
var attackWindupPeriodL2 : float;
var attackStrikingPeriodL2 : float;
var attackCooldownPeriodL2 : float;
var attackForwardFactorL2 : float;
var attackBackwardFactorL2 : float;
var attackSidewaysFactorL2 : float;
var finalHitL2 : int;
var currentHitL2 : int;
private var attackFactorL2 : float;
private var attackingL2 : boolean;
var hitboxL3 : Rigidbody;
var baseAttackDamageL3 : float;
var baseAttackRangeL3 : float;
var baseAttackDurationL3 : float;
var baseAttackHitstunDurationL3 : float;
var attackMovementSpeedL3 : float;
var attackWindupPeriodL3 : float;
var attackStrikingPeriodL3 : float;
var attackCooldownPeriodL3 : float;
var attackForwardFactorL3 : float;
var attackBackwardFactorL3 : float;
var attackSidewaysFactorL3 : float;
var finalHitL3 : int;
var currentHitL3 : int;
private var attackFactorL3 : float;
private var attackingL3 : boolean;
var hitboxR0 : Rigidbody;
var baseAttackDamageR0 : float;
var baseAttackRangeR0 : float;
var baseAttackDurationR0 : float;
var baseAttackHitstunDurationR0 : float;
var attackWindupPeriodR0 : float;
var attackStrikingPeriodR0 : float;
var attackCooldownPeriodR0 : float;

//Dodge parameters
var ableToDodge : boolean;
var dodgeMovementSpeed : float;
var dodgeWindupPeriod : float;
var dodgeMovementPeriod : float;
var dodgeCooldownPeriod : float;
var dodgeForwardFactor : float;
var dodgeBackwardFactor : float;
var dodgeSidewaysFactor : float;
private var dodgeFactor : float;
private var dodging : boolean;

//Special parameters
var ableToSpecial : boolean;

//Health parameters
var amIDead : boolean;

//Other parameters
var baseMassa : GameObject;
var chocoMassa : GameObject;
var gummyMassa : GameObject;
var lolliMassa : GameObject;
var playerTransformation : int;
var gravity : float;
var ableToRotate : boolean;
var cameraTarget : GameObject;
private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;

function Start () {
	amIDead = false;
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);
	AbleToRotate(true);
	controller = GetComponent(CharacterController);
}

function Update () {
	if (amIDead == true) {
		AbleToMove(false);
		AbleToAttack(false);
		AbleToDodge(false);
		AbleToSpecial(false);
		AbleToRotate(false);
	}
	
	//Receive rotational input from the other object and assign it to myself
	if (ableToRotate == true) {
		transform.rotation = cameraTarget.transform.rotation;
	}

	//Movement input
	if (ableToMove == true) {
		if (Input.GetKey(KeyCode.W)) {
			moveFactor = moveForwardFactor;
			moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
			controller.Move(moveDirection * moveSpeed * moveFactor * Time.deltaTime);
			BroadcastMessage("PlayMassaRun");
		}
		if (Input.GetKey(KeyCode.S)) {
			moveFactor = moveBackwardFactor;
			moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
			controller.Move(moveDirection * moveSpeed * moveFactor * Time.deltaTime);
			BroadcastMessage("PlayMassaRun");
		}
		if (Input.GetKey(KeyCode.D)) {
			moveFactor = moveSidewaysFactor;
			moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
			controller.Move(moveDirection * moveSpeed * moveFactor * Time.deltaTime);
			BroadcastMessage("PlayMassaRun");
		}
		if (Input.GetKey(KeyCode.A)) {
			moveFactor = moveSidewaysFactor;
			moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
			controller.Move(moveDirection * moveSpeed * moveFactor * Time.deltaTime);
			BroadcastMessage("PlayMassaRun");
		}
		else if (!Input.GetKey(KeyCode.W) && !Input.GetKey(KeyCode.S) && !Input.GetKey(KeyCode.D) && !Input.GetKey(KeyCode.A)) {
			BroadcastMessage("PlayMassaIdle");
		}
	}
	
	//Attack input
	if (ableToAttack == true) {
		if (playerTransformation == 0) {
			if (Input.GetMouseButtonDown(0)) {
				if (Input.GetKey(KeyCode.W)) {
					attackFactorL0 = attackForwardFactorL0;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.S)) {
					attackFactorL0 = attackBackwardFactorL0;
					moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.D)) {
					attackFactorL0 = attackSidewaysFactorL0;
					moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
					AttackWindupPhaseL0();
				}
				else if (Input.GetKey(KeyCode.A)) {
					attackFactorL0 = attackSidewaysFactorL0;
					moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
					AttackWindupPhaseL0();
				}
				else {
					attackFactorL0 = attackForwardFactorL0;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL0();
				}
			}
			if (Input.GetMouseButtonDown(1)) {
				if (Input.GetKey(KeyCode.W)) {
					AttackWindupPhaseR0();
				}
				else if (Input.GetKey(KeyCode.S)) {
					AttackWindupPhaseR0();
				}
				else if (Input.GetKey(KeyCode.D)) {
					AttackWindupPhaseR0();
				}
				else if (Input.GetKey(KeyCode.A)) {
					AttackWindupPhaseR0();
				}
				else {
					AttackWindupPhaseR0();
				}
			}
		}
		
		if (playerTransformation == 1) {
			if (Input.GetMouseButtonDown(0)) {
				if (Input.GetKey(KeyCode.W)) {
					attackFactorL1 = attackForwardFactorL1;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL1();
				}
				else if (Input.GetKey(KeyCode.S)) {
					attackFactorL1 = attackBackwardFactorL1;
					moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
					AttackWindupPhaseL1();
				}
				else if (Input.GetKey(KeyCode.D)) {
					attackFactorL1 = attackSidewaysFactorL1;
					moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
					AttackWindupPhaseL1();
				}
				else if (Input.GetKey(KeyCode.A)) {
					attackFactorL1 = attackSidewaysFactorL1;
					moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
					AttackWindupPhaseL1();
				}
				else {
					attackFactorL1 = attackForwardFactorL1;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL1();
				}
			}
			if (Input.GetMouseButtonDown(1)) {
				GetComponentInChildren(MeltyTruffle).MeltyTruffle();
			}
		}
		
		if (playerTransformation == 2) {
			if (Input.GetMouseButtonDown(0)) {
				if (Input.GetKey(KeyCode.W)) {
					attackFactorL2 = attackForwardFactorL2;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL2();
				}
				else if (Input.GetKey(KeyCode.S)) {
					attackFactorL2 = attackBackwardFactorL2;
					moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
					AttackWindupPhaseL2();
				}
				else if (Input.GetKey(KeyCode.D)) {
					attackFactorL2 = attackSidewaysFactorL2;
					moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
					AttackWindupPhaseL2();
				}
				else if (Input.GetKey(KeyCode.A)) {
					attackFactorL2 = attackSidewaysFactorL2;
					moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
					AttackWindupPhaseL2();
				}
				else {
					attackFactorL2 = attackForwardFactorL2;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL2();
				}
			}
			if (Input.GetMouseButtonDown(1)) {
				GetComponentInChildren(StickySlide).StickySlide();
			}
		}
		
		if (playerTransformation == 3) {
			if (Input.GetMouseButtonDown(0)) {
				if (Input.GetKey(KeyCode.W)) {
					attackFactorL3 = attackForwardFactorL3;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL3();
				}
				else if (Input.GetKey(KeyCode.S)) {
					attackFactorL3 = attackBackwardFactorL3;
					moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
					AttackWindupPhaseL3();
				}
				else if (Input.GetKey(KeyCode.D)) {
					attackFactorL3 = attackSidewaysFactorL3;
					moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
					AttackWindupPhaseL3();
				}
				else if (Input.GetKey(KeyCode.A)) {
					attackFactorL3 = attackSidewaysFactorL3;
					moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
					AttackWindupPhaseL3();
				}
				else {
					attackFactorL3 = attackForwardFactorL3;
					moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
					AttackWindupPhaseL3();
				}
			}
			if (Input.GetMouseButtonDown(1)) {
				GetComponentInChildren(TruffleFrag).TruffleFrag();
			}
		}
	}
	
	if (attackingL0 == true) {
		controller.Move(moveDirection * attackMovementSpeedL0 * attackFactorL0 * Time.deltaTime);
	}
	
	if (attackingL1 == true) {
		controller.Move(moveDirection * attackMovementSpeedL1 * attackFactorL1 * Time.deltaTime);
	}
	
	if (attackingL2 == true) {
		controller.Move(moveDirection * attackMovementSpeedL2 * attackFactorL2 * Time.deltaTime);
	}
	
	if (attackingL3 == true) {
		controller.Move(moveDirection * attackMovementSpeedL3 * attackFactorL3 * Time.deltaTime);
	}
	
	//Dodge input
	if (ableToDodge == true && Input.GetKeyDown("space")) {
		if (Input.GetKey(KeyCode.W)) {
			dodgeFactor = dodgeForwardFactor;
			moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
			DodgeWindupPhase();
		}
		else if (Input.GetKey(KeyCode.S)) {
			dodgeFactor = dodgeBackwardFactor;
			moveDirection = Vector3(-transform.forward.x, gravity, -transform.forward.z);
			DodgeWindupPhase();
		}
		else if (Input.GetKey(KeyCode.D)) {
			dodgeFactor = dodgeSidewaysFactor;
			moveDirection = Vector3(transform.right.x, gravity, transform.right.z);
			DodgeWindupPhase();
		}
		else if (Input.GetKey(KeyCode.A)) {
			dodgeFactor = dodgeSidewaysFactor;
			moveDirection = Vector3(-transform.right.x, gravity, -transform.right.z);
			DodgeWindupPhase();
		}
		else {
			dodgeFactor = dodgeForwardFactor;
			moveDirection = Vector3(transform.forward.x, gravity, transform.forward.z);
			DodgeWindupPhase();
		}
	}
	
	if (dodging == true) {
		controller.Move(moveDirection * dodgeMovementSpeed * dodgeFactor * Time.deltaTime);
	}
	
	//Special input
	if (ableToSpecial == true) {
		
	}
}

//Movement functions

//Attack functions
function AttackWindupPhaseL0 () {
	CountCurrentHitL0();
	if (currentHitL0 == 1) {
		BroadcastMessage("PlayMassaAttack1");
	}
	if (currentHitL0 == 2) {
		BroadcastMessage("PlayMassaAttack2");
	}
	if (currentHitL0 == 3) {
		BroadcastMessage("PlayMassaAttack3");	
	}
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	attackingL0 = true;
	Invoke("AttackStrikingPhaseL0", attackWindupPeriodL0);
}

function AttackStrikingPhaseL0 () {
	attackingL0 = false;
	var hitboxL0 : Rigidbody = Instantiate(hitboxL0, transform.position, transform.rotation);
	hitboxL0.velocity = transform.TransformDirection(Vector3(0, 0, baseAttackRangeL0));
	hitboxL0.SendMessage("Damage", baseAttackDamageL0);
	hitboxL0.SendMessage("Duration", baseAttackDurationL0);
	hitboxL0.SendMessage("HitstunDuration", baseAttackHitstunDurationL0);
	if (currentHitL0 == finalHitL0) {
		hitboxL0.SendMessage("FinalHit");
		ResetCurrentHit();
	}
	Invoke("AttackCooldownPhaseL0", attackStrikingPeriodL0);
}

function AttackCooldownPhaseL0 () {
	Invoke("AttackEndPhaseL0", attackCooldownPeriodL0);
}

function AttackEndPhaseL0 () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

function AttackWindupPhaseL1 () {
	CountCurrentHitL1();
	if (currentHitL1 == 1) {
		BroadcastMessage("PlayMassaAttack1");
	}
	if (currentHitL1 == 2) {
		BroadcastMessage("PlayMassaAttack2");
	}
	if (currentHitL1 == 3) {
		BroadcastMessage("PlayMassaAttack3");
	}
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	attackingL1 = true;
	Invoke("AttackStrikingPhaseL1", attackWindupPeriodL1);
}

function AttackStrikingPhaseL1 () {
	attackingL1 = false;
	var hitboxL1 : Rigidbody = Instantiate(hitboxL1, transform.position, transform.rotation);
	hitboxL1.velocity = transform.TransformDirection(Vector3(0, 0, baseAttackRangeL1));
	hitboxL1.SendMessage("Damage", baseAttackDamageL1);
	hitboxL1.SendMessage("Duration", baseAttackDurationL1);
	hitboxL1.SendMessage("HitstunDuration", baseAttackHitstunDurationL1);
	hitboxL1.SendMessage("StrikeAnimation", currentHitL1);
	if (currentHitL1 == finalHitL1) {
		hitboxL1.SendMessage("FinalHit");
		ResetCurrentHit();
	}
	Invoke("AttackCooldownPhaseL1", attackStrikingPeriodL1);
}

function AttackCooldownPhaseL1 () {
	Invoke("AttackEndPhaseL1", attackCooldownPeriodL1);
}

function AttackEndPhaseL1 () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

function AttackWindupPhaseL2 () {
	CountCurrentHitL2();
	if (currentHitL2 == 1) {
		BroadcastMessage("PlayMassaAttack1");
	}
	if (currentHitL2 == 2) {
		BroadcastMessage("PlayMassaAttack2");
	}
	if (currentHitL2 == 3) {
		BroadcastMessage("PlayMassaAttack3");	
	}
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	attackingL2 = true;
	Invoke("AttackStrikingPhaseL2", attackWindupPeriodL2);
}

function AttackStrikingPhaseL2 () {
	attackingL2 = false;
	var hitboxL2 : Rigidbody = Instantiate(hitboxL2, transform.position, transform.rotation);
	hitboxL2.velocity = transform.TransformDirection(Vector3(0, 0, baseAttackRangeL2));
	hitboxL2.SendMessage("Damage", baseAttackDamageL2);
	hitboxL2.SendMessage("Duration", baseAttackDurationL2);
	hitboxL2.SendMessage("HitstunDuration", baseAttackHitstunDurationL2);
	if (currentHitL2 == finalHitL2) {
		hitboxL2.SendMessage("FinalHit");
		ResetCurrentHit();
	}
	Invoke("AttackCooldownPhaseL2", attackStrikingPeriodL2);
}

function AttackCooldownPhaseL2 () {
	Invoke("AttackEndPhaseL2", attackCooldownPeriodL2);
}

function AttackEndPhaseL2 () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

function AttackWindupPhaseL3 () {
	CountCurrentHitL3();
	if (currentHitL3 == 1) {
		BroadcastMessage("PlayMassaAttack1");
	}
	if (currentHitL3 == 2) {
		BroadcastMessage("PlayMassaAttack2");
	}
	if (currentHitL3 == 3) {
		BroadcastMessage("PlayMassaAttack3");	
	}
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	attackingL3 = true;
	Invoke("AttackStrikingPhaseL3", attackWindupPeriodL3);
}

function AttackStrikingPhaseL3 () {
	attackingL3 = false;
	var hitboxL3 : Rigidbody = Instantiate(hitboxL3, transform.position + (transform.forward * 1), transform.rotation);
	hitboxL3.velocity = transform.TransformDirection(Vector3(0, 0, baseAttackRangeL3));
	hitboxL3.SendMessage("Damage", baseAttackDamageL3);
	hitboxL3.SendMessage("Duration", baseAttackDurationL3);
	hitboxL3.SendMessage("HitstunDuration", baseAttackHitstunDurationL3);
	hitboxL3.SendMessage("StrikeAnimation", currentHitL3);
	if (currentHitL3 == finalHitL3) {
		hitboxL3.SendMessage("FinalHit");
		ResetCurrentHit();
	}
	Invoke("AttackCooldownPhaseL3", attackStrikingPeriodL3);
}

function AttackCooldownPhaseL3 () {
	Invoke("AttackEndPhaseL3", attackCooldownPeriodL3);
}

function AttackEndPhaseL3 () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

function AttackWindupPhaseR0 () {
	BroadcastMessage("PlayMassaAttackR");
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	Invoke("AttackStrikingPhaseR0", attackWindupPeriodR0);
}

function AttackStrikingPhaseR0 () {
	var hitboxR0 : Rigidbody = Instantiate(hitboxR0, transform.position, transform.rotation);
	hitboxR0.velocity = transform.TransformDirection(Vector3(0, 0, baseAttackRangeR0));
	hitboxR0.SendMessage("Damage", baseAttackDamageR0);
	hitboxR0.SendMessage("Duration", baseAttackDurationR0);
	hitboxR0.SendMessage("HitstunDuration", baseAttackHitstunDurationR0);
	Invoke("AttackCooldownPhaseR0", attackStrikingPeriodR0);
}

function AttackCooldownPhaseR0 () {
	Invoke("AttackEndPhaseR0", attackCooldownPeriodR0);
}

function AttackEndPhaseR0 () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

function CountCurrentHitL0 () {
	if (currentHitL0 < finalHitL0) {
		currentHitL0 += 1;
	}
}

function CountCurrentHitL1 () {
	if (currentHitL1 < finalHitL1) {
		currentHitL1 += 1;
	}
}

function CountCurrentHitL2 () {
	if (currentHitL2 < finalHitL2) {
		currentHitL2 += 1;
	}
}

function CountCurrentHitL3 () {
	if (currentHitL3 < finalHitL3) {
		currentHitL3 += 1;
	}
}

function ResetCurrentHit () {
	currentHitL0 = 0;
	currentHitL1 = 0;
	currentHitL2 = 0;
	currentHitL3 = 0;
}

//Dodge functions
function DodgeWindupPhase () {
	BroadcastMessage("PlayMassaDodge");
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	Invoke("DodgeMovementPhase", dodgeWindupPeriod);
}

function DodgeMovementPhase () {
	dodging = true;
	Physics.IgnoreLayerCollision(8, 9, true);
	Invoke("DodgeCooldownPhase", dodgeMovementPeriod);
}

function DodgeCooldownPhase () {
	dodging = false;
	Physics.IgnoreLayerCollision(8, 9, false);
	Invoke("DodgeEndPhase", dodgeCooldownPeriod);
}

function DodgeEndPhase () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

//Special functions


//Health functions
function HitstunImmobilizationPhase(hitstunDuration : float) {
	ResetCurrentHit();
	cameraTarget.SendMessage("CameraShake", hitstunDuration);
	BroadcastMessage("PlayMassaRecoil");
	CancelInvoke();
	AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);
	Invoke("HitstunRecoveryPhase", hitstunDuration);
}

function HitstunRecoveryPhase () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}

function PlayMassaDeath () {
	amIDead = true;
}

//Boolean controllers
function AbleToMove (receivedInput : boolean) {
	ableToMove = receivedInput;
}

function AbleToAttack (receivedInput : boolean) {
	ableToAttack = receivedInput;
}

function AbleToDodge (receivedInput : boolean) {
	ableToDodge = receivedInput;
}

function AbleToSpecial (receivedInput : boolean) {
	ableToSpecial = receivedInput;
}

function AbleToRotate (receivedInput : boolean) {
	ableToRotate = receivedInput;
}

function CurrentTransformation (receivedInput : int) {
	ResetCurrentHit();
	/*AbleToMove(false);
	AbleToAttack(false);
	AbleToDodge(false);
	AbleToSpecial(false);
	AbleToRotate(false);*/
	playerTransformation = receivedInput;
	if (receivedInput == 1) {
		baseMassa.SetActive(false);
		chocoMassa.SetActive(true);
		gummyMassa.SetActive(false);
		lolliMassa.SetActive(false);
		BroadcastMessage("PlayMassaChocoTransform");
	}
	if (receivedInput == 2) {
		baseMassa.SetActive(false);
		chocoMassa.SetActive(false);
		gummyMassa.SetActive(true);
		lolliMassa.SetActive(false);
		BroadcastMessage("PlayMassaGummyTransform");
	}
	if (receivedInput == 3) {
		baseMassa.SetActive(false);
		chocoMassa.SetActive(false);
		gummyMassa.SetActive(false);
		lolliMassa.SetActive(true);
		BroadcastMessage("PlayMassaLolliTransform");
	}
	if (receivedInput == 0) {
		baseMassa.SetActive(true);
		chocoMassa.SetActive(false);
		gummyMassa.SetActive(false);
		lolliMassa.SetActive(false);
	}
}

function TransformationBlast () {

}

function TransformationEnd () {
	AbleToMove(true);
	AbleToAttack(true);
	AbleToDodge(true);
	AbleToSpecial(true);	
	AbleToRotate(true);
}