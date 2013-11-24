#pragma strict


var MeltyTruffleSecondaryEffect : GameObject;


var distanceToGround : float;
private var damage : float;
private var trailPlacementIntervals : float;
private var trailDuration : float;
private var hitstunDuration : float;


function Start () {
        Spawn();
}


function OnTriggerEnter (object : Collider) {
        if (object.tag == "Enemy") {
                object.SendMessage("ApplyDamage", damage);
                object.SendMessage("HitstunImmobilizationPhase", hitstunDuration);
        }
        if (object.name ==  "112LandingZonePrefab(Clone)") {
                Destroy(gameObject);
        }
}


function Width (receivedWidth : float) {
        transform.localScale = Vector3(receivedWidth, receivedWidth, receivedWidth);
}


function Damage (receivedDamage : float) {
        damage = receivedDamage;
}


function Spawn () {
        var MeltyTruffleSecondaryEffect : GameObject = Instantiate(MeltyTruffleSecondaryEffect, Vector3(transform.position.x, transform.position.y - distanceToGround, transform.position.z), transform.rotation);
        MeltyTruffleSecondaryEffect.SendMessage("TrailDuration", trailDuration);
        Invoke("Spawn", trailPlacementIntervals);
}


function TrailPlacementIntervals (receivedTrailPlacementIntervals : float) {
        trailPlacementIntervals = receivedTrailPlacementIntervals;
}


function TrailDuration (receivedTrailDuration : float) {
        trailDuration = receivedTrailDuration;
}


function HitstunDuration (receivedHitstunDuration : float) {
        hitstunDuration = receivedHitstunDuration;
}