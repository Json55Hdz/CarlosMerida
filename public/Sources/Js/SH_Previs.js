 AFRAME.registerShader('SH_Previs',{

	schema: {
		color : {type: 'vec3', is: 'uniform'},
		hover : {type: 'number', is: 'uniform'},
		colorHover : {type: 'vec3', is:'uniform'},
		transpFront : {type: 'number', is:'uniform'},
	},

	vertexShader: [
	'varying vec3 vNormal;',
	'varying vec3 viewSpNormal;',

	'void main() {',
		'vNormal = normal;',
		'viewSpNormal = vec3(modelViewMatrix * vec4(normal,0.0));',
		'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
	'}'
	].join('\n'),
	fragmentShader: [
	'varying vec3 vNormal;',
	'varying vec3 viewSpNormal;',

	'uniform vec3 color;',
	'uniform float transpFront;',
	'uniform float hover;',
	'uniform vec3 colorHover;',

	'void main() {',
		'float hoverCl = clamp(ceil(hover),0.0,4.0);',
		'vec3 viewNormalNorm = normalize(viewSpNormal);',

		'float normalSelecR = (vNormal.r + 1.0)*abs(vNormal.r);',
		'float normalSelecB = (vNormal.b + 2.0 )*abs(vNormal.b);',
		'float normalSelec = (normalSelecR + normalSelecB+ 1.0);',
		'float selectedFace = clamp(1.0-abs(normalSelec-hoverCl),0.0,1.0);',

		'float facing = abs(viewNormalNorm.b);',
		'float light = facing+clamp(abs(viewNormalNorm.r)-0.6,0.0,1.0);',
		'float opacFace = clamp(ceil(viewNormalNorm.b) + transpFront +selectedFace, 0.0, 1.0);',

		'vec3 lightCol = mix(vec3(light,light,light)*color,colorHover,selectedFace);',

		'gl_FragColor = vec4 (lightCol, opacFace);',

	'}'
	].join('\n'),
});