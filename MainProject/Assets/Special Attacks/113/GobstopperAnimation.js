﻿#pragma strict

function Update () {
	transform.Rotate(Vector3.forward * Time.deltaTime * 500);
}