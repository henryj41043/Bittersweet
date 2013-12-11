public static var maxHealth : int = 10;
private var curHealth : int;
var heartGUI:GUITexture;
private var Xstart:float = 0.072;
private var spacingX:float;
private var spacingY:float = -0.06;
private var Xinterval:float = 0.025;
private var hearts = new Array();
var ableToTakeDamage : boolean;

function Start () {
	ableToTakeDamage = true;
	curHealth = maxHealth;
	AddHearts();
}

function UpdateHealthPlayer(){
	curHealth = maxHealth;
	AddHearts();
}

function AddHearts(){
	spacingX = Xstart;
	for(var j = 0; j < hearts.length; j++){
		Destroy(hearts[j]);
	}
	for(var i = 0; i < curHealth ; i++){
		hearts[i] = Instantiate(heartGUI, Vector3(spacingX, spacingY, 0), Quaternion.identity );
		spacingX += Xinterval;
	}
}

function ApplyDamage (damage : int) {
	if (ableToTakeDamage == true) {
		if(curHealth <= 0){
			return;
		}
		
		ModifyHearts(damage);
		
		if(curHealth <= 0){
			Die();
		}	
	}
}

private var windowRect : Rect;
	
function Die () {
	BroadcastMessage("PlayMassaDeath");
	Invoke("loadLoseScreen",3);
}

function ModifyHearts(lostHearts : int){
	for(var i = 0; i < lostHearts; i++){
    	hearts[curHealth - 1].active = false;
    	curHealth--;
    	if(curHealth <= 0){
    		break;
    	}
    }
}

function loadLoseScreen() {
	Screen.lockCursor = false;
	Application.LoadLevel("Lose");
}

function AbleToTakeDamage () {
	ableToTakeDamage = true;
}

function UnableToTakeDamage () {
	ableToTakeDamage = false;
}