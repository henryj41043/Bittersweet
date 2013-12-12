#pragma strict
var castleStyle : GUIStyle;
var lollipopLevel3Style : GUIStyle;
var lollipopLevel4Style : GUIStyle;
var lollipopLevel5Style : GUIStyle;
var backStyle : GUIStyle;

private var buttonWidth : int = 60;
private var buttonHeight : int = 60;
private var starWidth : int = 100;
private var starHeight : int = 100;
private var backWidth : int = 140;
private var backHeight : int = 80;

private var castleX = 404;
private var castleY = 306;

private var backX = 20;
private var backY = 515;

private var lollipopLevel3X = 142;
private var lollipopLevel3Y = 146;

private var lollipopLevel4X = 80;
private var lollipopLevel4Y = 142;

private var lollipopLevel5X = 22;
private var lollipopLevel5Y = 188;

var newMusic: AudioClip;

function Start(){	
	// all the ones not implemented yet
	
	GameObject.Find("icecreamLevel1Green").SetActive(false);
	GameObject.Find("icecreamLevel2Green").SetActive(false);
	GameObject.Find("icecreamLevel3Green").SetActive(false);
	GameObject.Find("icecreamLevel4Green").SetActive(false);
	GameObject.Find("icecreamLevel5Green").SetActive(false);
	
	GameObject.Find("cookieLevel1Green").SetActive(false);
	GameObject.Find("cookieLevel2Green").SetActive(false);
	GameObject.Find("cookieLevel3Green").SetActive(false);
	GameObject.Find("cookieLevel4Green").SetActive(false);
	GameObject.Find("cookieLevel5Green").SetActive(false);
	
	GameObject.Find("chocolateLevel1Green").SetActive(false);
	GameObject.Find("chocolateLevel2Green").SetActive(false);
	GameObject.Find("chocolateLevel3Green").SetActive(false);
	GameObject.Find("chocolateLevel4Green").SetActive(false);
	GameObject.Find("chocolateLevel5Green").SetActive(false);
	
	GameObject.Find("gummyLevel1Green").SetActive(false);
	GameObject.Find("gummyLevel2Green").SetActive(false);
	GameObject.Find("gummyLevel3Green").SetActive(false);
	GameObject.Find("gummyLevel4Green").SetActive(false);
	GameObject.Find("gummyLevel5Green").SetActive(false);
	
	GameObject.Find("icecreamLevel1Gray").SetActive(true);
	GameObject.Find("icecreamLevel2Gray").SetActive(true);
	GameObject.Find("icecreamLevel3Gray").SetActive(true);
	GameObject.Find("icecreamLevel4Gray").SetActive(true);
	GameObject.Find("icecreamLevel5Gray").SetActive(true);
	
	GameObject.Find("cookieLevel1Gray").SetActive(true);
	GameObject.Find("cookieLevel2Gray").SetActive(true);
	GameObject.Find("cookieLevel3Gray").SetActive(true);
	GameObject.Find("cookieLevel4Gray").SetActive(true);
	GameObject.Find("cookieLevel5Gray").SetActive(true);
	
	GameObject.Find("chocolateLevel1Gray").SetActive(true);
	GameObject.Find("chocolateLevel2Gray").SetActive(true);
	GameObject.Find("chocolateLevel3Gray").SetActive(true);
	GameObject.Find("chocolateLevel4Gray").SetActive(true);
	GameObject.Find("chocolateLevel5Gray").SetActive(true);
	
	GameObject.Find("gummyLevel1Gray").SetActive(true);
	GameObject.Find("gummyLevel2Gray").SetActive(true);
	GameObject.Find("gummyLevel3Gray").SetActive(true);
	GameObject.Find("gummyLevel4Gray").SetActive(true);
	GameObject.Find("gummyLevel5Gray").SetActive(true);
	
	// Lollipop levels
	
	GameObject.Find("lollipopLevel1Green").SetActive(false);
	GameObject.Find("lollipopLevel2Green").SetActive(false);
		
	GameObject.Find("lollipopLevel1Gray").SetActive(true);
	GameObject.Find("lollipopLevel2Gray").SetActive(true);
	
	// Update the dots
	if(PlayerPrefs.GetInt("lollipopLevel3") == 0){
		GameObject.Find("lollipopLevel3Green").SetActive(false);
		GameObject.Find("lollipopLevel3Gray").SetActive(true);
	}
	
	if(PlayerPrefs.GetInt("lollipopLevel4") == 0){
		GameObject.Find("lollipopLevel4Green").SetActive(false);
		GameObject.Find("lollipopLevel4Gray").SetActive(true);
	}

	if(PlayerPrefs.GetInt("lollipopLevel5") == 0){
		GameObject.Find("lollipopLevel5Green").SetActive(false);
		GameObject.Find("lollipopLevel5Gray").SetActive(true);
	}
	
	if(PlayerPrefs.GetInt("lollipopLevel3") == 2){
		GameObject.Find("lollipopLevel3Green").SetActive(true);
		GameObject.Find("lollipopLevel3Gray").SetActive(false);
	}
	
	if(PlayerPrefs.GetInt("lollipopLevel4") == 2){
		GameObject.Find("lollipopLevel4Green").SetActive(true);
		GameObject.Find("lollipopLevel4Gray").SetActive(false);
	}

	if(PlayerPrefs.GetInt("lollipopLevel5") == 2){
		GameObject.Find("lollipopLevel5Green").SetActive(true);
		GameObject.Find("lollipopLevel5Gray").SetActive(false);
	}
	
	if(PlayerPrefs.GetInt("castle") == 2){
		GameObject.Find("castleGreen").SetActive(true);
		GameObject.Find("castleGray").SetActive(false);
	}
}

function OnGUI () {
	if(PlayerPrefs.GetInt("lollipopLevel3") == 1){
		if(GUI.Button(Rect(lollipopLevel3X, lollipopLevel3Y, buttonWidth, buttonHeight), "", lollipopLevel3Style))
		{
			Application.LoadLevel("Main");
		}
	}
	
	if(PlayerPrefs.GetInt("lollipopLevel4") == 1){
		if(GUI.Button(Rect(lollipopLevel4X, lollipopLevel4Y, buttonWidth, buttonHeight), "", lollipopLevel4Style))
		{
		
		}
	}
	
	if(PlayerPrefs.GetInt("lollipopLevel5") == 1){
		if(GUI.Button(Rect(lollipopLevel5X, lollipopLevel5Y, starWidth, starHeight), "", lollipopLevel5Style))
		{
		
		}
	}
	
	if(PlayerPrefs.GetInt("castle") == 1){
		if(GUI.Button(Rect(castleX, castleY, starWidth, starHeight), "", castleStyle))
		{
			Application.LoadLevel("Comic1");
		}
	}
	
	if(GUI.Button(Rect(backX, backY, backWidth, backHeight), "", backStyle))
	{
		Application.LoadLevel("TitleScene");
		
		var menuMusic : GameObject = GameObject.Find("MenuMusic");
    	if (menuMusic) {
        // kill menu music
        	Destroy(menuMusic);
   		 }
   		 // make sure we survive going to different scene
		
	}
}
