#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float t;

varying vec2 vTextureCoord;


void main() {


	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.x*cos(0.45),aVertexPosition.y*cos(0.45),aVertexPosition.z, 1.0);

  vTextureCoord = aTextureCoord;
}
