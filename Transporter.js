#pragma strict

/*	Transporter v1-0 
*	By: Nestor Sotres (4/11/13)
*
*	Info:
*		- Transports the player from one transporter to the next
*
*	Functionality Overview:
*		- Activated when player steps on platform
*		- Steam and sound come out, then player is transported to the next transport
*
*	Setup:
*		- Just need to add proper Transforms
*/

var respawn = false;

//Transform objects
var destTrans: Transform;		//holds transform of destination
var tranSteam: Transform;		//holds steam for transport
//position vectors
var destVect : Vector3; 		//used to hold destination pos
var destSteam: Vector3;			//used to create steam at destination postion
var currentPosition: Vector3;	//holds current position of jetPack
var deployPosition: Vector3;	//position to deploy steam
//sound
public var steam: AudioClip;	//for destroy object
var active1: boolean = true;		//turns transport on and off

function Start () {
	//UpdateDestPos();
}

function Update () {
	
}

//If player touches platform then transport
function OnCollisionEnter (tCollision : Collision){
	if(active1){
		//bomb touches platforms
		if(tCollision.gameObject.tag == "Player"){
			//deactivate transport
			active1 = false;
			UpdateDestPos(tCollision.transform.position);
			
			if( !respawn ) {
				//create steam at current transporter
				Instantiate(tranSteam, deployPosition , Quaternion.identity);
				//wait 1.5 seconds to move player to destination
				yield WaitForSeconds (1.0);
				//play steam at this trasport
		  		audio.PlayClipAtPoint(steam, this.transform.position);
		  		//wait 1.5 seconds to move player to destination
				yield WaitForSeconds (0.65);
				//create steam at destination transporter
				Instantiate(tranSteam, destSteam , Quaternion.identity);
				//wait 0.2 seconds to move player to destination
				yield WaitForSeconds (0.2);
				//play steam at destination trasport
		  		audio.PlayClipAtPoint(steam, destTrans.position);
		  		//wait for 1 sec to reactivate transport
		  		yield WaitForSeconds (1.0);
	  		} else {
	  			PlateController.lives--;
	  		}
			//move player to destination transport
			tCollision.transform.position = destVect;
	  		active1 = true;
		}
	}
	
	
}

/*If player touches platform then transport [TESTING]*/
/*function OnTriggerEnter (tCollision : Collider){
	if(active1){
		//bomb touches platforms
		if( gameObject.transform.up == Vector3.up &&  tCollision.gameObject.tag == "Player"){
			//deactivate transport
			active1 = false;
			UpdateDestPos(tCollision.transform.position);
			//create steam at current transporter
			if(showSteam) Instantiate(tranSteam, deployPosition , Quaternion.identity);
			//wait 1.5 seconds to move player to destination
			yield WaitForSeconds (1.0);
			//play steam at this trasport
	  		if(showSteam)audio.PlayClipAtPoint(steam, this.transform.position);
	  		//wait 1.5 seconds to move player to destination
			yield WaitForSeconds (0.65);
			//create steam at destination transporter
			Instantiate(tranSteam, destSteam , Quaternion.identity);
			//wait 0.2 seconds to move player to destination
			yield WaitForSeconds (0.2);
			//move player to destination transport
			tCollision.transform.position = destVect;
			//play steam at destination trasport
	  		if(showSteam)audio.PlayClipAtPoint(steam, destTrans.position);
	  		//wait for 1 sec to reactivate transport
	  		yield WaitForSeconds (1.0);
	  		active1 = true;
		}
	}
	
	
}*/

function UpdateDestPos ( pos:Vector3 ) {
	//get destination to teleport player to
	destVect = Vector3(destTrans.position.x, destTrans.position.y, pos.z);
	//set location of steam for destination transport
	destSteam = Vector3(destTrans.position.x, destTrans.position.y+1.0, destTrans.position.z-1.7);
	//get position of this Transporter
	currentPosition = transform.position;
	//set deploy position for steam
	deployPosition = Vector3(currentPosition.x, currentPosition.y+1.2, currentPosition.z-1.7);

}