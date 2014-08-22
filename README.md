Tork
====

Video Game Project codedin JavaScript  with team members both at UIC and LSU 

Authors
=======

Nestor S.<br>
Michael K.<br>
Josh P.<br>
Mason G.<br>
Andrew H.<br>
Anthony L.<br>


Contents
========

These are the code files I created or collaborated in the project along with a brief description of their use.

<dl>
<dt>BombChuteDeployFinal.js</dt>	
		<dd>- BombChute will deploy a bomb below itself at a constant rate</dd>
		<dd>- Bomb will initially bounce right/left</dd>
		<dd>- BombChute WILL deploy if it is facing in any other way other than world down</dd>
		<dd>- If BombChute is shot by Player (collision with projectile object) it will deploy bombs that bounce in the opposite direction than they originally bounced in</dd>
<dt>BombFinal.js</dt>
		<dd>- Bomb will bounce right/left when it touches any platform</dd>
		<dd>- Bomb will be destoryed after colliding with any object, and platform (after 3 bounces)</dd>
		<dd>- Bomb imposes explosion force on the object (with rigidbody) it touches</dd>
		<dd>- If bomb falls below y= -22 (world position) it will be destroyed</dd>
		<dd>- If bomb hits a bombChute it will bounce the right/left way and be destroyed</dd>
		<dd>- Sound that plays at deployment of bomb was made in the Unity Editor (not script)</dd>
		<dd>- Splash at objects Destroy() was added</dd>
		<dd>- Boing on bounce also added</dd>
<dt>JetPack.js</dt>
		<dd>- JetPack emmits a steam jet from underneath itself when the player jumps (esthetics only)</dd>
		<dd>- Steam is created at the transpose of the jetPack</dd>
<dt>JetThrust.js</dt>
		<dd>- Just a destroy command so that the "steam" from the jet pack gets cleaned up</dd>
		<dd>- After 2 seconds the steam object will get destroyed</dd>
<dt>Transporter.js</dt>
		<dd>- Transports the player from one transporter to the next</dd>
		<dd>- Activated when player steps on platform</dd>
		<dd>- Steam and sound come out, then player is transported to the next transport</dd>
<dt>Projectile2.js (collaboration)</dt>
		<dd>Michael K. (edited by Nestor S.)</dd>
		<dd>- Script is for a main pipe projectile, it has been slightly modified so that it shoots further</dd>
		<dd>- Part of creating a seperate script was so that editing it would not disrupt the	other elements in the game</dd>
<dt>Elevator.js (collaboration)</dt>
		<dd>Josh P. and Nestor S.</dd>
		<dd>- Moves a platform from left to right</dd>
<dt>ElevatorUpDown.js (collaboration)</dt>
		<dd>Josh P. and Nestor S.</dd> 
		<dd>- Moves a platform up and down</dd>
</dl>
Message
=======

These files can be uploaded into Unity and attached to prefabs. Otherwise, any file editor can open up the code files.
