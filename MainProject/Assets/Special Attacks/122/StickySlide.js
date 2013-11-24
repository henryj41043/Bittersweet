#pragma strict

var StickySlideEffect : GameObject;

var damage : float;
var damageRadius : float;
var phaseChange1 : float;
var phaseChange2 : float;
var travelSpeed : float;
var recoverSpeed : int;

function StickySlide () {
	SendMessageUpwards("StickySlideWindupPhase");
	var StickySlideEffect : GameObject = Instantiate(StickySlideEffect, transform.position, transform.rotation);
	var StickySlideTransform = StickySlideEffect.transform;
	StickySlideTransform.parent = transform;
	SendMessageUpwards("StickySlidePhaseChange1", phaseChange1);
	SendMessageUpwards("StickySlidePhaseChange2", phaseChange2);
	SendMessageUpwards("StickySlideTravelSpeed", travelSpeed);
	SendMessageUpwards("StickySlideRecoverSpeed", recoverSpeed);
}