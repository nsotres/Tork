#pragma strict
/* 	BombChuteTargetConstDeployFinal v3-0
*	By: Nestor Sotres (4/16/13)
*
*	Latest Update:
*		- Added a slightly random deploy delay
*		- Cleaned up some code (no left/right bomb needed, its just one)
*
*	Info:
*		-This is based off the basic BombChute script
*
*	Functionality Overview:
*		-BombChute will deploy a bomb below itself at a constant rate
*		-Bomb will initially bounce right/left
*		-BombChute WILL deploy if it is facing in any other way other than world down
*		-If BombChute is shot by Player (collision with projectile object) it will deploy bombs
*			that bounce in the opposite direction than they originally bounced in
*
*	Setup:
*		-Please tag all platforms as "Platform"
*		-Please tag all bombChutes as "BombChute"
*/

//prefab bomb
var bomb: Transform;		//used to deploy bomb 

//repeat bomb deployment
var startDeploy : float=3.0;	//first bomb deployment (in sec)
//var deployDelay : float=4.0;	//reoccurring bomb deployment (in sec)

internal var deployDelay: float;

function Start () {
	Random.seed = Time.time;
	//set a slightly random delay for launching bombs
	deployDelay = Random.Range(3,4);
	//start deployment of bombs right away
	InvokeRepeating("LaunchBomb", startDeploy, deployDelay);
}

//this is a reoccurring function for lauching bombs
function LaunchBomb(){
	//get current euler angles of bomb chute
	var eux= transform.eulerAngles.x;
	var euy= transform.eulerAngles.y;
	var euz= transform.eulerAngles.z;
	
	
	//if bomb chute's bottom is facing the game world down position deploy
	if(euz <=0 ){
		//deploy bomb prefab under center of bombchute
		Instantiate(bomb, transform.position - (Vector3.up * 0.2) , bomb.rotation);
	}else if(euz >=89 && euz <=91 ){
		//deploy bomb rotated 90 deg (from starting position) counter-clockwise
		//deploy bomb prefab under center of bombchute
		Instantiate(bomb, transform.position - (Vector3.up * 0.2) , bomb.rotation);
	}else if(euz >=179 && euz <=181 ){
		//deploy bomb rotated 180 deg (from starting position) counter-clockwise
		//deploy bomb prefab under center of bombchute
		Instantiate(bomb, transform.position - (Vector3.up * 0.2) , bomb.rotation);
	}else if(euz >=269 && euz <=271 ){
		//deploy bomb prefab under center of bombchute
		Instantiate(bomb, transform.position - (Vector3.up * 0.2) , bomb.rotation);
	}
}

//prints current euler angles of bombchute to the console
function Eulers(){
	Random.seed = Time.time;
	//get euler angles
	var eux= transform.eulerAngles.x;
	var euy= transform.eulerAngles.y;
	var euz= transform.eulerAngles.z;
	print("Euler Angles of Bomb Chute:\n"+
		"x: " + eux + " y: " + euy + " z: " + euz);
}