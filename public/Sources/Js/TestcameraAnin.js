let cubo;
let tlCameraRot = gsap.timeline({repeat:-1});
let cameraPos = document.querySelector('#camera');
let cameraPivot = document.querySelector('#campivot');
let boolISetted = false;
let Camera;
let boolCameraControls = false;

function InitCamera () {
    this.Camera = document.querySelector('#camera');
    var cloud0 = document.querySelector('#cloud0');
    var cloud1 = document.querySelector('#cloud1');
    var cloud2 = document.querySelector('#cloud2');
    var cloud3 = document.querySelector('#cloud3');
    var alphaCloud = 0.3;
    var tl = gsap.timeline({repeat:0});
    tl.to(this.Camera.object3D.position,   {x:0, y:350, z:1400,duration:5, ease: Power2.easeInOut},0);
    tl.to(this.Camera.object3D.rotation,   {x:-0.35, y:0, z:0,duration:3.5, ease: Power2.easeInOut},2);
    tl.to({}, {
        duration: 3,
        onUpdate() {
            alphaCloud+=(1/3)/60;
            cloud0.setAttribute('material', {Alpha: alphaCloud});
            cloud1.setAttribute('material', {Alpha: alphaCloud});
            cloud2.setAttribute('material', {Alpha: alphaCloud});
            cloud3.setAttribute('material', {Alpha: alphaCloud});
        }
      },1);
    tl.eventCallback("onComplete", function() {
        CameraEndFirtsTravel();
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
    tlCameraRot.to(this.aboutTotem.object3D.rotation,   {y: yPos,duration:70, ease: "linear"},0);    
}

/*AFRAME.registerComponent('municipalidad', {
    init: function () {
        var cameraPosMural = document.querySelector('#mural2');
        document.querySelector('#triggerMunicipalidad').addEventListener('click', function (evt) {
            if (!boolISetted){
                boolCameraControls = true;
                tlCameraRot.paused(true);
                MoveCamera(cameraPosMural.object3D.position.x,cameraPosMural.object3D.position.y-150,cameraPosMural.object3D.position.z+150,-0.07,0.3,0,5,0,0.5,0,true,1);
            }else{
                boolCameraControls = false;
                MoveCamera(0,150,1000,-0.349066,0,0,5,0,0,0,false,4);
                setTimeout(() => 
                { 
                    tlCameraRot.paused(false);
                    tlCameraRot.restart();
                }, 5000);
            }
        });
    }
});*/
function AnimateBuildOne (objetive) {
    var tarj = 0;
    var mat = document.querySelector('#build').getAttribute('material');
    var timeLineAnim = gsap.timeline({repeat:0});
    if (objetive == 1) {
        timeLineAnim.to({}, {
            duration: 5,
            onUpdate() {
                if (tarj < 1) {
                    tarj+=(1/10)/60;
                }
              document.querySelector('#build').setAttribute('material', {cutOut: tarj});
            }
          });
    }else{
        tarj=1;
        timeLineAnim.to({}, {
            duration: 5,
            onUpdate() {
                if (tarj > 0) {
                    tarj-=(1/10)/60;
                }
              document.querySelector('#build').setAttribute('material', {cutOut: tarj});
            }
          });
    }
   
}

function AnimateBuildTwo (objetive) {
    var tarj = 0;
    var mat = document.querySelector('#build1').getAttribute('material');
    var timeLineAnim = gsap.timeline({repeat:0});
    if (objetive == 1) {
        timeLineAnim.to({}, {
            duration: 5,
            onUpdate() {
                if (tarj < 1) {
                    tarj+=(1/10)/60;
                }
              document.querySelector('#build1').setAttribute('material', {cutOut: tarj});
            }
          });
    }else{
        tarj=1;
        timeLineAnim.to({}, {
            duration: 5,
            onUpdate() {
                if (tarj > 0) {
                    tarj-=(1/10)/60;
                }
              document.querySelector('#build1').setAttribute('material', {cutOut: tarj});
            }
          });
    }
   
}

function MoveCamera (xPos,yPos,zPos,xRot,YRot,ZRot,duration,XPivotRot,yPivotRot,zPivotRot,boolSet,idBuilding){
    cameraPos = document.querySelector('#camera');
    cameraPivot = document.querySelector('#campivot');
    var tl = gsap.timeline({repeat:0});
                tl.to(cameraPos.object3D.position,{x:xPos, y:yPos, z:zPos,duration:duration, ease: Power2.easeInOut},0);
                tl.to(cameraPos.object3D.rotation,{x:xRot, y:YRot, z:ZRot, duration:duration,ease: Power2.easeInOut},0);
                tl.to(cameraPivot.object3D.rotation,{x:XPivotRot, y:yPivotRot, z:zPivotRot, duration:duration,ease: Power2.easeInOut},0);
                boolISetted = boolSet;
    tl.eventCallback("onComplete", function() {
                    ManageCameraControls(boolCameraControls);
                    CallActionById(idBuilding);
                });
}

function MoveCameraAndRotate (xPos,yPos,zPos,xRot,YRot,ZRot,duration,XPivotRot,yPivotRot,zPivotRot,boolSet,idBuilding){
    cameraPos = document.querySelector('#camera');
    cameraPivot = document.querySelector('#campivot');
    var tl = gsap.timeline({repeat:0});
                tl.to(cameraPos.object3D.position,{x:xPos, y:yPos, z:zPos,duration:duration, ease: Power2.easeInOut},0);
                tl.to(cameraPos.object3D.rotation,{x:xRot, y:YRot, z:ZRot, duration:duration,ease: Power2.easeInOut},0);
                tl.to(cameraPivot.object3D.rotation,{x:XPivotRot, y:yPivotRot, z:zPivotRot, duration:duration,ease: Power2.easeInOut},0);
                boolISetted = boolSet;
                tl.eventCallback("onComplete", function() {
                    StartCameraRot ();
                    ManageClassRaycast(true);
                });
}

function CallActionById (id) {
    if (id != 4){
        document.querySelector('#CCText').style.display = "none";

    }
    switch (id) {
        case 0:
            OnIGSSAnimationEnd();
            break;
        case 1:
            OnMunicipalidadAnimationEnd();
            break;
        case 2:
            OnCreditoHipotecarioAnimationEnd();
            break;
        case 3:
            OnBankAnimationEnd();
            break;
        case 4:
            OnCameraReturnToCivicCenter();
            ManageClassRaycast(true);
            document.querySelector('#CCText').style.display = "block";
            break;
    }
}

function ManageCameraControls (bool) {
   // document.querySelector('#camera').setAttribute('look-controls', 'enabled', boolCameraControls);
   // let controls = document.querySelector('#camera').components['look-controls'];
   // controls.pitchObject.rotation.y = -0.05;
   // controls.yawObject.rotation.y = -0.488;
   // console.log(controls);
}