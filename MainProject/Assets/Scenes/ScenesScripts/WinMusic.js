function Awake() {
    // see if we've got menu music still playing
    var gameMusic : GameObject = GameObject.Find("GameMusic");
    if (gameMusic) {
        // kill menu music
        Destroy(gameMusic);
    }
    // make sure we survive going to different scenes
    DontDestroyOnLoad(gameObject);
}