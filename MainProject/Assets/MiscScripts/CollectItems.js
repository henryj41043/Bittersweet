﻿private var StandingOverCandyDrop : int;

private var DestroyCandy : boolean;
private var time : double = 0.0;

private var transformEnabled = false;
private var candyBarSize = 5.0;
private var cooldownTime = 10.0;
private var cooldown = 0.0;
private var candyCount = 0.0;
public var inCooldown = false;
var stickyTruffleIcon : GUITexture;
var stickySlideIcon : GUITexture;
var truffleFragIcon : GUITexture;
var candyBarGUI : GUITexture;
var candyPickUp : AudioClip;
var candyFull : AudioClip;
var chocolateChange : AudioClip;
var gummyChange : AudioClip;
var lollipopChange : AudioClip;
private var candyBarGUIWidth = 0.0;

private var transformationIsEndable : boolean;

function Start () {
	candyBarGUIWidth = candyBarGUI.pixelInset.width;
	stickyTruffleIcon.enabled = false;
	stickySlideIcon.enabled = false;
	truffleFragIcon.enabled = false;
}

function Update () {
		
		if (StandingOverCandyDrop == 1){
		
			addCandy();
			DestroyCandy = true;
		}
	
	if(Input.GetKeyDown(KeyCode.E) && inCooldown == true){
		inCooldown = false;
		transformationIsEndable = false;
		candyCount = 0.0;
		cooldown = 0.0;
		GetComponent(PlayerControls).CurrentTransformation(0);
		if(stickyTruffleIcon.enabled){
			stickyTruffleIcon.enabled = false;
		}
		if(stickySlideIcon.enabled){
			stickySlideIcon.enabled = false;
		}
		if(truffleFragIcon.enabled){
			truffleFragIcon.enabled = false;
		}
	}	
	
	if (Input.GetKeyDown("0")){ 
		candyCount = candyCount + 1.0;
	}
		
	if(transformEnabled){
		if(Input.GetKeyDown("1")){
			stickyTruffleIcon.enabled = true;
			GetComponent(PlayerControls).CurrentTransformation(1);
			transformEnabled = false;
			transformationIsEndable = true;
			
			audio.clip = chocolateChange;
			if(!audio.isPlaying)
			{
				audio.Play();
			}
		}
		if(Input.GetKeyDown("2")){
			stickySlideIcon.enabled = true;
			GetComponent(PlayerControls).CurrentTransformation(2);
			transformEnabled = false;
			transformationIsEndable = true;
			
			audio.clip = gummyChange;
			if(!audio.isPlaying)
			{
				audio.Play();
			}
		}
		if(Input.GetKeyDown("3")){
			truffleFragIcon.enabled = true;
			GetComponent(PlayerControls).CurrentTransformation(3);
			transformEnabled = false;
			transformationIsEndable = true;
			
			audio.clip = lollipopChange;
			if(!audio.isPlaying)
			{
				audio.Play();
			}
		}
	}
	
	if(candyCount == candyBarSize && cooldown == 0.0){
		cooldown = cooldownTime;
		transformEnabled = true;
		audio.clip = candyFull;
		if(!audio.isPlaying)
		{
			audio.Play();
		}
		
	}
	
	if((cooldown == 0.0 && transformationIsEndable == true)){
		inCooldown = false;
		GetComponent(PlayerControls).CurrentTransformation(0);
		transformationIsEndable = false;
	}
	
	updateCandyBarGUI();

}

function TurnOffDestroyCandy() {
	DestroyCandy = false;
}

function ResetStanding () {
	StandingOverCandyDrop = 0;
}

function StandingOnChocolateDrop () {
	StandingOverCandyDrop = 1;
}

function StandingOnGummyDrop () {
	StandingOverCandyDrop = 1;
}

function StandingOnLollipopDrop () {
	StandingOverCandyDrop = 1;
}

function OnTriggerStay (object:Collider) {
	if (object.tag == "ChocolateDrop" || object.tag == "GummyDrop" || object.tag == "LollipopDrop") {
		if (DestroyCandy == true) {
			object.SendMessage("DestroyCandyDrop");
			
			audio.clip = candyPickUp;	
			audio.Play();
			
			DestroyCandy = false;
			ResetStanding();
		}
	}
}

function addCandy(){
	if(candyCount < candyBarSize && !inCooldown){
		candyCount = candyCount + 1.0;
	}
	if(inCooldown && cooldown > 0.0 && cooldown < cooldownTime){
		cooldown = cooldown + 1.0;
	}
}

function updateCandyBarGUI(){
	if(inCooldown == false){
		var candyBarFraction = Mathf.Clamp01(candyCount / candyBarSize);
		candyBarGUI.pixelInset.xMax = candyBarGUI.pixelInset.xMin + (candyBarGUIWidth * candyBarFraction);
	}
	if(inCooldown == true){
		time += Time.deltaTime;
		if(time >= 1.0){
			time -= 1.0;
			cooldown = cooldown - 1.0;
			var cooldownFraction = Mathf.Clamp01(cooldown / cooldownTime);
			candyBarGUI.pixelInset.xMax = candyBarGUI.pixelInset.xMin + (candyBarGUIWidth * cooldownFraction);
		}
		if(cooldown == 0.0){
			candyCount = 0.0;
			if(stickyTruffleIcon.enabled){
				stickyTruffleIcon.enabled = false;
			}
			if(stickySlideIcon.enabled){
				stickySlideIcon.enabled = false;
			}
			if(truffleFragIcon.enabled){
				truffleFragIcon.enabled = false;
			}
		}
	}
}