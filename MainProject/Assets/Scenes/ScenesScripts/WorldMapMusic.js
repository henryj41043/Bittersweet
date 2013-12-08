#pragma strict

var newMusic: AudioClip;

function Awake (){
	var go= GameObject.Find("GameMusic");
	
	if(go.audio.clip != null && go.audio.clip != newMusic)
	{
		go.audio.clip = newMusic;
		
		go.audio.Play();
		
	}
}
