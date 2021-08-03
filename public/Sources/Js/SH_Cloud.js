 AFRAME.registerShader('SH_Cloud',{
	schema: {
		src : {type:'map', is: 'uniform'},
		Alpha : {type: 'number', is: 'uniform', default: 1.0}
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

	'uniform sampler2D src;',
	'uniform float Alpha;',

	'void main(){',
		'vec4 col = texture2D (src , vUv);',
		'float alphApl = clamp(float(col.a - Alpha) , 0.0 , 1.0);',
		'vec4 colAlp = vec4(col.rgb , alphApl);',
		'gl_FragColor = colAlp;',
		'if(alphApl< 0.001) discard;',
	'}',
].join('\n'),
});