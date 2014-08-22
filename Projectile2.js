#pragma strict
/*
*	Projectile v1.0
*
*	Michael Kray (edited by Nestor S.)
*
*	Setup: Attach this to a projectilie
*
*	Function: (below is by Nestor)
*				- Script is for a main pipe projectile, it has been slightly modified so that it shoots further
*				- Part of creating a seperate script was so that editing it would not disrupt the other elements in the game.
*
*/
var maxDistance:float = 70;

internal var startPosition:Vector3;

function Start () {
	startPosition = transform.position;
}

function Update () {
	
	/*Removed as logic compares to a set int
	if( transform.position.x < -60 || transform.position.y < -100 || transform.position.z < -60
		|| transform.position.x > 60 || transform.position.z > 60 ) {
		Destroy(gameObject);
	} */
	//improved method measures based on a varianble
	var totalDistance = Vector3.Distance(transform.position,startPosition);
	//if projectile goes past the maxDistance destroy it
	if(totalDistance >= maxDistance) {
		Destroy(gameObject);
	}

}
//Behavior when projectile hits an in game object
function OnCollisionEnter(collision : Collision) {
   if( collision.gameObject.tag == "Player" || collision.gameObject.tag == "PipeHead" || collision.gameObject.tag == "PlayerIgnore") {
      //Do nothing
    } else {
    	//destroy projectile
       Destroy(gameObject);
    }
}