 AFRAME.registerShader('SH_BuildingMask',{

	schema: {
		src : {type:'map', is: 'uniform'},
		cutOut : {type: 'number', is: 'uniform'},
		fogColor :{type:'vec3', is:'uniform'},

	},

vertexShader: [
	'varying vec2 vUv;',
	'varying vec3 vPosition;',
	
	'void main() {',
		'vUv = uv;',
		'vPosition = position;',
        'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

    '}'
].join('\n'),
fragmentShader: [
	'varying vec2 vUv;',
	'varying vec3 vPosition;',

	'uniform sampler2D src;',
	'uniform float cutOut;',
	'uniform vec3 fogColor;',

	'void main(){',
		'vec4 col = texture2D (src , vUv);',

		'vec3 colRefl = vec3(col.rgb*vec3(0.8,0.8,0.8));',
		'float fogD = sqrt(pow((vPosition.x - cameraPosition.x), 2.0)+pow((vPosition.y - cameraPosition.y), 2.0)+pow((vPosition.z - cameraPosition.z), 2.0));',
		'float colFog = mix(0.6,0.0, clamp(float(fogD * 0.00015),0.0,1.0));',
		'float cutTex = (col.a * float(1.3)) - cutOut;',
		'gl_FragColor = vec4 (colRefl, colFog);',

		'if(cutTex < 0.1) discard;',
	'}'
].join('\n'),
});
