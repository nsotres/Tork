#pragma strict

/*	JetPack
*	By: Nestor Sotres (4/10/12)
*
*	Info:
*		- JetPack emmits a steam jet from underneath itself when the player jumps (esthetics only)
*
*	Functionality Overview:
*		- Steam is created at the transpose of the jetPack
*
*	Setup:
*		- Just needs to be attached to the JetPack prefab
*/

//prefab items
var jetSteam: Transform;		//holds jetSteam prefab
var jetPack: Transform;			//holds jetPack transform
//position vectors
var deployPosition: Vector3;	//position to deploy steam
var currentPosition: Vector3;	//holds current position of jetPack
static var Instance: JetPack;	//instance used to call method from CharacterController_v2.js

function Awake(){
	//create instance of self
	Instance = this;
}
function Start () {
	//do nothing
}

function Update () {
	//do nothing
}

//creates steam underneath jetpack 
function Steam(){
	//get current position of self (jetPack)
	currentPosition = transform.position;
	//this will be the deployment transform for the steam
	deployPosition = Vector3(currentPosition.x, currentPosition.y,currentPosition.z);
	//create jet thrust
	Instantiate(jetSteam, currentPosition , Quaternion.identity);
	//set parent (parent transform of a prefab is disabled by Unity engine to prevent data corruption)
	//jetSteam.parent= jetPack;
}