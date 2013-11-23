var walk : AudioClip;
var rolling : AudioClip;
var rollingHit : AudioClip;
var attack : AudioClip;
var recoil : AudioClip;
var death : AudioClip;

function PlayMinerWalk() {

	if (!animation.IsPlaying("Death")) {
		animation.Play("Walk");
		audio.clip = walk;
		audio.Play();
	}
}

function PlayMinerRoll() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Roll");
		audio.clip = rolling;
		audio.Play();
	}
}

function PlayMinerRollHit() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Roll Hit");
		audio.clip = rollingHit;
		audio.Play();
	}
}

function PlayMinerAttack() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Attack");
		audio.clip = attack;
		audio.Play();
	}
}

function PlayMinerRecoil() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Recoil");
		audio.clip = recoil;
		audio.Play();
	}
}

function PlayMinerDeath() {
	if (!animation.IsPlaying("Death")) {
		animation.Play("Death");
		audio.clip = rollingHit;
		audio.Play();
	}
}