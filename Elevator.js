#pragma strict

/*
*	Elevator
*	By: Josh P. and Nestor S. (4/16/13)
*	
*
*	Functionality Overview:
*		- Moves a platform from left to right
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
var speed = .5;
var length = .2;
internal var originalLocalPosition : Vector3;
var upDown = true;
 
function Start ()
{
    // when the object starts, we record its initial local position
    originalLocalPosition = transform.localPosition;
}
 
function Update ()
{

	if(upDown) {
		// Oscilate along the y axis according to a sin function
    	transform.localPosition.y = originalLocalPosition.y + Mathf.Sin(Time.time * speed) * length;
    } else {
    	// Oscilate along the x axis according to a sin function
    	transform.localPosition.x = originalLocalPosition.x + Mathf.Sin(Time.time * speed) * length;
    }
    
	/*	
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

function OnCollisionStay(collisionInfo : Collision) {
	//Debug.Log(collisionInfo.gameObject.name + " has collided with the elevator");
	if (collisionInfo.gameObject.tag == "Player") {
		collisionInfo.transform.parent = transform;
	}
}

function OnCollisionExit(collisionInfo : Collision) {
	//Debug.Log(collisionInfo.gameObject.name + " has left the collision with the elevator");
	if (collisionInfo.gameObject.tag == "Player") {
		collisionInfo.transform.parent = null;
	}
}