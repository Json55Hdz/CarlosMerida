 AFRAME.registerShader('SH_Hovers',{

	schema: {
		hover : {type: 'number', is: 'uniform'},
		color : {type: 'vec3', is:'uniform'},
	},
	vertexShader: [

	'varying vec2 vUv;',

	'void main() {',
		'vUv = uv;',
		'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
	'}'
	].join('\n'),
	fragmentShader: [
	'varying vec2 vUv;',
	'uniform float hover;',
	'uniform vec3 color;',

	'void main(){',
		'float str = clamp((1.0 - vUv.g - 1.0 + hover), 0.0, 1.0);',
		'gl_FragColor = vec4(color,str);',
		'if(str < 0.01) discard;',
	'}'
	].join('\n'),
});

