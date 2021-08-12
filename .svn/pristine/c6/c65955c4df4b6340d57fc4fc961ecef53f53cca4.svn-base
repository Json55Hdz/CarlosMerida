let cubo;
let tlCameraRot = gsap.timeline({repeat:-1});
let cameraPos = document.querySelector('#camera');
let cameraPivot = document.querySelector('#campivot');
let boolISetted = false;
let Camera;


function InitCamera () {
    this.Camera = document.querySelector('#camera');
    var tl = gsap.timeline({repeat:0});
    tl.to(this.Camera.object3D.position,   {x:0, y:150, z:1000,duration:5, ease: Power2.easeInOut},0);
    tl.to(this.Camera.object3D.rotation,   {x:-0.401426, y:0, z:0,duration:3.5, ease: Power2.easeInOut},2);
    tl.eventCallback("onComplete", function() {
      StartCameraRot ();
    });
}

AFRAME.registerComponent('floorreflectives', {
    init: function () {
        this.el.addEventListener('model-loaded', () => {
            CheckElementsLoaded();
        });
        this.Camera = document.querySelector('#camera');
    }
 });

function StartCameraRot ()  
{
    this.aboutTotem = document.querySelector('#campivot');
    let yPos = 3.1416*2; 
    tlCameraRot.restart();
    tlCameraRot.to(this.aboutTotem.object3D.rotation,   {y: yPos,duration:40, ease: "linear"},0);    
}

AFRAME.registerComponent('cubito', {
    init: function () {
        var cameraPosMural = document.querySelector('#mural1');
        document.querySelector('#cubitosergios').addEventListener('click', function (evt) {
            if (!boolISetted){
                tlCameraRot.paused(true);
                MoveCamera(cameraPosMural.object3D.position.x+30,cameraPosMural.object3D.position.y-170,cameraPosMural.object3D.position.z+30,-0.1,-0.5,0,5,0,0.5,0,true);
                AnimateBuildOne (1);
            }else{
                console.log("ya esta seteado");
                MoveCamera(0,150,1000,-0.349066,0,0,5,0,0,0,false);
                setTimeout(() => 
                { 
                    tlCameraRot.paused(false);
                    tlCameraRot.restart();
                }, 5000);
                AnimateBuildOne (0);
            }
        });
    }
});

function AnimateBuildOne (objetive) {
  //  document.querySelector('#build').setAttribute('material', {cutOut: 1});
    var tarj = 0;
    var mat = document.querySelector('#build').getAttribute('material');
    var timeLineAnim = gsap.timeline({repeat:0});
    if (objetive == 1) {
        timeLineAnim.to({}, {
            duration: 5,
            onUpdate() {
              tarj+=(1/5)/60;
              console.log(tarj);
              document.querySelector('#build').setAttribute('material', {cutOut: tarj});
            }
          });
    }else{
        tarj=1;
        timeLineAnim.to({}, {
            duration: 5,
            onUpdate() {
              tarj-=(1/5)/60;
              console.log(tarj);
              document.querySelector('#build').setAttribute('material', {cutOut: tarj});
            }
          });
    }
   
}


//Esta amdre es el shader que no sirvio de sergios xd
//AFRAME.registerShader('shFloor', {​​​​​​​
//  schema: {​​​​​​​
//     color : {​​​​​​​type: 'color', is: 'uniform'}​​​​​​​,
//    bakeTex: {​​​​​​​type: 'map', is: 'uniform'}​​​​​​​
//}​​​​​​​,
//vertexShader: "varying vec2 vUv; void main (){​​​​​​​  vUv = uv;  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}​​​​​​​",


//fragmentShader:"varying vec2 vUv;uniform vec3 color;uniform texture bakeTex; void main() {​​​​​​​  vec2 distanceT = vUv * vec2(2.0, 2.0) -vec2(1.0 , 1.0);    vec2 distApl = distanceT * distanceT /2.0 + 0.5;    float distAplEnv = distApl.r*distApl.g;    vec4 malditaDist = vec4 (distAplEnv ,distAplEnv ,distAplEnv ,distAplEnv );  vec4 colordeTex = texture (bakeTex, vUv);  vec4 finalColor = vec4 (color, 1) * colordeTex * malditaDist ;  gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);}​​​​​​​"}
//​​​​​​​);


function MoveCamera (xPos,yPos,zPos,xRot,YRot,ZRot,duration,XPivotRot,yPivotRot,zPivotRot,boolSet){
    cameraPos = document.querySelector('#camera');
    cameraPivot = document.querySelector('#campivot');
    var tl = gsap.timeline({repeat:0});
                tl.to(cameraPos.object3D.position,{x:xPos, y:yPos, z:zPos,duration:duration, ease: Power2.easeInOut},0);
                tl.to(cameraPos.object3D.rotation,{x:xRot, y:YRot, z:ZRot, duration:duration,ease: Power2.easeInOut},0);
                tl.to(cameraPivot.object3D.rotation,{x:XPivotRot, y:yPivotRot, z:zPivotRot, duration:duration,ease: Power2.easeInOut},0);
                boolISetted = boolSet;
}