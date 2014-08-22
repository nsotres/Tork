#pragma strict
/*
*	ElevatorUpDown
*	By: Josh P. and Nestor S. (4/16/13)
*	
*
*	Functionality Overview:
*		- Moves a platform up and down
*
*	Setup:
*		- Plese attach to platform
*
*	Note:
*		- This is a working progress as the physics with the player are still not 
* 			acting 100% as expected
*		-You may have to play with some of the variables 
*/
//initial global variables
var upRange : float = 1.0;
var downRange : float = 1.0;
var waveOffset: float = 0.0;

internal var yStartPos: float;
internal var upPos : float;
internal var downPos : float;

var speed : float = 0.2;

function Start ()
{
    // when the object starts, we record its initial local position
    yStartPos = transform.position.y; 
}
 
function FixedUpdate ()
{

	upPos = yStartPos +upRange;
	downPos = yStartPos - downRange;
	var weight : float = Mathf.Cos((Time.time + waveOffset) * speed * 2 * Mathf.PI) * 0.5 + 0.5;
	transform.position.y = upPos * weight + downPos * (1-weight);
    
	/*	[TESTING CAN COMMENT OUT]
	print("OrigPosLocal = " + originalLocalPosition);
	print("CurrPosLocal = " + transform.localPosition); 
	
	print("OrigPos = " + originalPosition);
	print("CurrPos = " + transform.position);    
	
    //print euler angles [TESTING CAN COMMENT OUT]
	var eux= transform.eulerAngles.x;
	var euy= transform.eulerAngles.y;
	var euz= transform.eulerAngles.z;
	print("x: " + eux + " y: " + euy + " z: " + euz);
	*/
}