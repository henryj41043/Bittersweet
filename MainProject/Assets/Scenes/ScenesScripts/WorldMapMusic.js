var newMusic: AudioClip;

function Start(){

	var go = GameObject.Find("MenuMusic");
	
	if(go.audio.clip != newMusic)
	{
		go.audio.clip = newMusic;
		
		go.audio.Play();
	
	}
}


