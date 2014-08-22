#pragma strict

/*	JetThust
*	By: Nestor Sotres (4/10/12)
*
*	Info:
*		- Just a destroy command so that the "steam" from the jet pack gets cleaned up
*
*	Functionality Overview:
*		- After 2 seconds the steam object will get destroyed
*	Setup:
*		- Just needs to be attached to the JetThrust prefab
*/

function Start () {
	//upon creation, destroy object in 2 seconds
	Destroy(this.gameObject, 2.0);
}

function Update () {
	//do nothing for now
}

