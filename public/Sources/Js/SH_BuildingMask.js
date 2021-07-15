 AFRAME.registerShader('SH_BuildingMask',{
	schema: {
		src : {type:'map', is: 'uniform'},
		cutOut : {type: 'number', is: 'uniform'},
		roughness : {type: 'number', is: 'uniform', default: 0.0},
		metalness : {type: 'number', is: 'uniform', default: 0.15},
//		env : {type:'cubemap'},
		charPosition : {type:'vec3', is:'uniform'},
		fogColor :{type:'vec3', is:'uniform'}
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
	'varying vec3 ViewReflectWorld;',
	'varying vec3 vPosition;',

	'uniform sampler2D src;',
	'uniform float cutOut;',
	'uniform vec3 charPosition;',
	'uniform vec3 fogColor;',
	'uniform float roughness;',
	'uniform float metalness;',


	'void main(){',
		'vec4 col = texture2D (src , vUv);',

		'vec3 colRefl = vec3(col.rgb);',
		'float fogD = sqrt(pow((vPosition.x - charPosition.x), 2.0)+pow((vPosition.y - charPosition.y), 2.0)+pow((vPosition.z - charPosition.z), 2.0));',
		'vec3 colFog = mix(colRefl,fogColor, clamp(float(fogD * 0.00060),0.0,1.0));',
		'float cutTex = (col.a * float(2.0)) - cutOut;',
		'gl_FragColor = vec4 (colFog , cutTex);',

		'if(cutTex < 0.5) discard;',
	'}'
].join('\n'),
});