#pragma strict
var damage : float;
var duration : float;

function Start () {
	Invoke("EndStickySlide", duration);
}

function OnTriggerEnter (object : Collider) {
	if (object.tag == "Enemy") {
		object.SendMessage("ApplyDamage", damage);
	}
}

function EndStickySlide () {
	Debug.Log("EndStickySlide");
	Destroy(gameObject);
}