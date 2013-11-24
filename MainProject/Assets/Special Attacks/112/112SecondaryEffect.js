#pragma strict


private var damageTick : boolean;
private var trailTickInterval : float;


function Start () {
        damageTick = true;
}


function DamageTickIsOff () {
        Invoke("TurnDamageTickOn", trailTickInterval);
}


function TurnDamageTickOn () {
        damageTick = true;
}


function OnTriggerEnter (object : Collider) {
        if (object.tag == "Enemy"/* && damageTick == true*/) {
                //object.SendMessage("HitstunImmobilizationPhase", 1);
                //damageTick = false;
                //DamageTickIsOff();
        }
}


function TrailDuration (receivedTrailDuration : float) {
        Invoke("DestroySelf", receivedTrailDuration);
}


function DestroySelf () {
        Destroy(gameObject);
}