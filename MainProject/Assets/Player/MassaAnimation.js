#pragma strict

var idle : AudioClip;
var run : AudioClip;
var attack1 : AudioClip;
var attack2 : AudioClip;
var attack3 : AudioClip;
var attackR : AudioClip;
var special : AudioClip;
var dodge : AudioClip;
var death : AudioClip;
var recoil : AudioClip;

var previousPosition : Vector3;
var velocity : Vector3;

var playerControls : GameObject;

function Update() {
	velocity = (transform.position - previousPosition) / Time.deltaTime;
	previousPosition = transform.position;
}

function PlayMassaChocoTransform() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("ChocoTransform");
	}
}

function PlayMassaGummyTransform() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("GummyTransform");
	}
}

function PlayMassaLolliTransform() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("LolliTransform");
	}
}

function PlayMassaIdle() {
	if (!animation.IsPlaying("Death") && !animation.IsPlaying("ChocoTransform") && !animation.IsPlaying("GummyTransform") && !animation.IsPlaying("LolliTransform")) {
		transform.rotation=Quaternion.LookRotation(transform.forward);
		animation.Play("Idle");
		audio.clip = idle;
		audio.Play();
	}
}

function PlayMassaRun() {
	if (!animation.IsPlaying("Death")) {
		transform.rotation=Quaternion.LookRotation(velocity);
		animation.Play("Run");
		audio.clip = run;
		if(!audio.isPlaying)
		{		
			audio.Play();
		}
	}
}

function PlayMassaAttack1() {
	if (!animation.IsPlaying("Death")) {
		transform.rotation=Quaternion.LookRotation(playerControls.transform.forward);
		animation["Attack1"].speed = 2.0;
		animation.Play("Attack1");
		audio.clip = attack1;
		audio.Play();
	}
}

function PlayMassaAttack2() {
	if (!animation.IsPlaying("Death")) {
		transform.rotation=Quaternion.LookRotation(playerControls.transform.forward);
		animation["Attack2"].speed = 2.0;
		animation.Play("Attack2");
		audio.clip = attack2;
		audio.Play();
	}
}

function PlayMassaAttack3() {
	if (!animation.IsPlaying("Death")) {
		transform.rotation=Quaternion.LookRotation(playerControls.transform.forward);
		animation["Attack3"].speed = 3.0;
		animation.Play("Attack3");
		audio.clip = attack3;
		audio.Play();
	}
}

function PlayMassaAttackR() {
	if (!animation.IsPlaying("Death")) {
		transform.rotation=Quaternion.LookRotation(playerControls.transform.forward);
		animation.Play("AttackR");
		audio.clip = attackR;
		audio.Play();
	}
}

function PlayMassaSpecial() {
	if (!animation.IsPlaying("Death")) {
		transform.rotation=Quaternion.LookRotation(playerControls.transform.forward);
		animation.Play("Special");
		audio.clip = special;
		audio.Play();
	}
}

function PlayMassaDeath() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Death");
		audio.clip = death;
		audio.Play();
	}
}

function PlayMassaDodge() {
	if (!animation.IsPlaying("Death")) {
		transform.rotation=Quaternion.LookRotation(velocity);
		animation.Play("Dodge");
		audio.clip = dodge;
		audio.Play();
	}
}

function PlayMassaRecoil() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Recoil");
		audio.clip = recoil;
		audio.Play();
	}
}
