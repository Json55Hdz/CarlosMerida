
AFRAME.registerComponent('aframe-mirror', 
{
	schema:{
	    textureOne: {default: undefined},
	    textureTwo: {default: undefined},
	    wrapOne: 
	    {
	    	type: 'vec2',
	    	default: {x: 1, y: 1}
	    },
	    wrapTwo: 
	    {
	    	type: 'vec2',
	    	default: {x: 1, y: 1}
	    },
	    invertedUV:
	    {
	    	type: 'bool',
	    	default: false
	    },
	    textureWidth: {default: 512},
	    textureHeight: {default: 512},
	    color: {default: new THREE.Color(0x7F7F7F)},
	    intensity: {default: 1.0},
	    blendIntensity: {default: 0.5},
		envMap: {default:''},
		fogColor : {default: new THREE.Color(0x7F7F7F)},
		charPos : {type: 'vec3' ,default:{x: 0.0, y:0.0, z:0.0}},
	},
	init: function () 
	{
		this.Camera = document.querySelector('#camera');

	    var scene = this.el.sceneEl;
	    var three_scene = scene.object3D;
	    var mirrorObj = this.el.getObject3D('mesh');

	    if(!mirrorObj)
	    {
	    	return;
	    }

	    var gscenereflector = Ashok.GroundSceneReflector(mirrorObj, scene.renderer, three_scene, this.data);
	},
	//jeison hizo bien su trabajo, sergio no :)
	/*tick: function () {
		this.charPos = {x: this.Camera.object3D.position.x,y:this.Camera.object3D.position.y,z:this.Camera.object3D.position.z};
		console.log(this.charPos);
    }*/
});