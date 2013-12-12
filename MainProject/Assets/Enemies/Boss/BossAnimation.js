#pragma strict
var idle : AudioClip;
var rangedAttack : AudioClip;
var meleeAttack : AudioClip;
var shuffle : AudioClip;
var death : AudioClip;
var spawn : AudioClip;

function PlayBossIdle() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Idle");
		audio.clip = idle;
		audio.Play();
	}
}

function PlayBossRangedAttack() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("RangedAttack");
		audio.clip = rangedAttack;
		audio.Play();
	}
}

function PlayBossMeleeAttack() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("MeleeAttack");
		audio.clip = meleeAttack;
		audio.Play();
	}
}

function PlayBossShuffle () {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Shuffle");
		audio.clip = shuffle;
		audio.Play();
	}
}

function PlayBossDeath() {
	animation.Play("Recoil");
	audio.clip = death;
	audio.Play();
}

function PlayBossSpawn () {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Spawn");
		audio.clip = spawn;
		audio.Play();
	}
}