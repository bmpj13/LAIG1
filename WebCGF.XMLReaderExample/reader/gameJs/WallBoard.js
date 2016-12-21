/**
* WallBoard
* @constructor
*/
function WallBoard(scene,texture) {
	CGFobject.call(this,scene);
  this.scene=scene;

  this.material = new CGFappearance(scene);
  this.material.setTexture(texture);

  var greenTex=new CGFtexture(scene, "resources\\images\\green.png");
  var blueTex=new CGFtexture(scene, "resources\\images\\blue.jpg");

  var elementNormalTex=new CGFtexture(scene, "resources\\images\\rocket_body.jpg");
  var elementSelectedTex=new CGFtexture(scene, "resources\\images\\rocket_top.jpg");
  var elementSelectableTex=new CGFtexture(scene, "resources\\images\\neptune.jpg");

  this.base = new Cube(scene);


  //green Walls - Vertically
  this.greenWall =  new  BoardElement(scene,1000,elementNormalTex,elementSelectedTex,elementSelectableTex,0,0);
  this.greenWall.setPiece(new Wall(scene,greenTex,"v"));
  //blue Walls - horizontally
  this.blueWall = new  BoardElement(scene,1001,elementNormalTex,elementSelectedTex,elementSelectableTex,0,0);
  this.blueWall.setPiece(new Wall(scene,blueTex,"h"));

}

WallBoard.prototype = Object.create(CGFobject.prototype);
WallBoard.prototype.constructor = WallBoard;


WallBoard.prototype.display = function() {

//body
  this.scene.pushMatrix();

  this.scene.translate(5,0,0);
  this.scene.scale(2,0.2,4);
  this.material.apply();
  this.base.display();

	this.scene.popMatrix();

//walls
  this.scene.pushMatrix();

  this.scene.translate(5,0,0);
  this.scene.scale(1,0.5,1);
//green
  this.scene.pushMatrix();
  this.scene.translate(0,0.4,1);
	this.scene.rotate(-Math.PI/2,1,0,0);

  this.greenWall.display();
  this.scene.popMatrix();
//blue
  this.scene.pushMatrix();
  this.scene.translate(0,0.4,-1);
	this.scene.rotate(-Math.PI/2,1,0,0);
  this.blueWall.display();
  this.scene.popMatrix();

  this.scene.popMatrix();

}

WallBoard.prototype.handleSelection = function(enable) {
	this.greenWall.handleSelection(enable);
  this.blueWall.handleSelection(enable);
}