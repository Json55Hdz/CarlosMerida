let scene;
let three_scene;
let mirrorObj;
let gscenereflector;
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

	    scene = this.el.sceneEl;
	    three_scene = scene.object3D;
	    mirrorObj = this.el.getObject3D('mesh');

	    if(!mirrorObj)
	    {
	    	return;
	    }

	    gscenereflector = Ashok.GroundSceneReflector(mirrorObj, scene.renderer, three_scene, this.data);
	}
});