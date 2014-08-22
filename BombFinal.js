#pragma strict

/*
*	BombChute v3-0	(Bomb script)
*	By: Nestor Sotres (4/16/13)
*	
*	Added Functionality:
*		- Added random direction and bounce force
*
*	Functionality Overview:
*		-Bomb will bounce right/left when it touches any platform
*		-Bomb will be destoryed after colliding with any object, and platform (after 3 bounces)
*		-Bomb imposes explosion force on the object (with rigidbody) it touches
*		-If bomb falls below y= -22 (world position) it will be destroyed
*		-If bomb hits a bombChute it will bounce the right/left way and be destroyed
*		-Sound
*			-Sound that plays at deployment of bomb was made in the Unity Editor (not script)
*			-Splash at objects Destroy() was added
*			-Boing on bounce
*
*	Setup:
*		-Please tag all platforms as "Platform"
*		-Please tag all bombChutes as "BombChute"
*
*	Note:
*		-You may have to play with some of the variables (force, power)
*/

@script RequireComponent(Rigidbody)

var bounceCounter : int = 4;	//keeps record of number of bounces
var second: boolean = true;		//first bounce no sound
var force : int = 55;		//force to push bomb with (left/right)
var dir : int = 0;			//direction to move bomb in (1=left, else right)
var balloonPosition: Vector3 = Vector3(0,0,0);	//vector used to test fall
//explosive force variables
var power : float = 100.0;
var radius : float= 2.0;
var upModifier : float = 0.0;
//sound
public var splash: AudioClip;	//for destroy object
public var boing: AudioClip;	//for bounce

function Start () {
	//set direction
	dir = Random.Range(0,2);
	
}

function Update () {
	//if transform falls really low, then kill object
	balloonPosition= this.transform.position;	//on update get current transform
	//if the balloon falls past a certain point, destroy it
	if(balloonPosition.y < -22){
		Destroy(this.gameObject, .2); //destroy after .2 seconds
	}
}
//get direction of bomb
function getDirection(){
	if(dir==1){
		return "left, val=0";
	}else{
		return "right, val=!0";
	}
}
//set direction of bomb (int)
function setDirection(val: int){
	dir= val;
}
//get force to push bomb with
function getForce(){
	return force;
}
//set force to push bomb with
function setForce(sForce: int){
	force = sForce;
}
	
//get the number of bounces needed to kill bomb
function getBounceCounter(){
	return bounceCounter;
}
//set the number of bounces needed to kill bomb (must be int)
function setBounceCounter(hit: int){
	bounceCounter = hit;
}

//movement, bomb collision events
function OnCollisionEnter(bCollision : Collision){

	//bomb touches platforms
	if(bCollision.gameObject.tag == "Platform"){
		bounceCounter-=1;	//decrement bounce counter
		//print("BounceCounter: " + bounceCounter); //testing
		
		//call method to push the bomb
		PushBomb(dir);		
		//if bomb bounces on floor 2 or more times destroy
		if(bounceCounter <= 0){
			//play splash
	  		audio.PlayClipAtPoint(splash, this.transform.position);
			Destroy(gameObject, .01); //destroy after .01 second
		}else{
			//play boing
			audio.PlayClipAtPoint(boing, this.transform.position);
		}
	}else if(bCollision.gameObject.tag == "BombChute"){
		//bomb touches BombChute
		
		//print("BounceCounter: " + bounceCounter); //testing
		
		//call method to push the bomb
		PushBomb(dir);		
		//if bomb bounces on floor 2 or more times destroy
		if(bounceCounter <= 0){
			//play splash
	  		audio.PlayClipAtPoint(splash, this.transform.position);
			Destroy(gameObject, .01); //destroy after .1 second
		}else{
			//do nothing for now sound needs to be worked on
		}
	}else if(bCollision.gameObject.rigidbody) {
		//explosive force on object (with rigid body) that the bomb touches
		for(var contact in bCollision.contacts) {
				bCollision.gameObject.rigidbody.AddExplosionForce(power, contact.point, radius, upModifier);
		}
		//play splash
	    audio.PlayClipAtPoint(splash, this.transform.position);
		Destroy(this.gameObject, .02); //destroy after .2 seconds
	}
	//bomb gets hit by bullet	
    if( bCollision.gameObject.tag == "Bullet" ) {
      //play splash
	  audio.PlayClipAtPoint(splash, this.transform.position);
      //destroy bomb if hit by bullet
      Destroy(gameObject,.01); //destroy after .1 seconds
    }else if( bCollision.gameObject.tag == "Player" ) {
      //play splash
	  audio.PlayClipAtPoint(splash, this.transform.position);
      //Bomb touches player, destroy bomb
      Destroy(gameObject, .02); //destroy after .2 seconds
    }
}
//pushes bomb in a direction
function PushBomb(direction){
	//set random force to push
	force = Random.Range(55, 113);
	
	//if direction =1 push left, else push right
	if(direction == 1){
		this.transform.rigidbody.AddForce(Vector3.left*force);
	}else{
		this.transform.rigidbody.AddForce(Vector3.right*force);
	}
}