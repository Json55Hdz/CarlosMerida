let cubo;
let tlCameraRot = gsap.timeline({repeat:-1});
let cameraPos = document.querySelector('#camera');
let cameraPivot = document.querySelector('#campivot');
let boolISetted = false;
AFRAME.registerComponent('pivotcam', {
    init: function () {
        this.aboutTotem = document.querySelector('#campivot');
      let yPos = 3.1416*2; 
      tlCameraRot.to(this.aboutTotem.object3D.rotation,   {y: yPos,duration:40, ease: "linear"},0);
    }
})

AFRAME.registerComponent('cubito', {
    init: function () {
        document.querySelector('#cubitosergios').addEventListener('click', function (evt) {
            if (!boolISetted){
                tlCameraRot.paused(true);
                MoveCamera(100,-100,300,0,-0.8,0,5,0,0.5,0,true);
            }else{
                console.log("ya esta seteado");
                MoveCamera(0,150,1000,-0.349066,0,0,5,0,0,0,false);
                setTimeout(() => 
                { 
                    tlCameraRot.paused(false);
                    tlCameraRot.restart();
                }, 5000);
            }
        });
    }
});

function MoveCamera (xPos,yPos,zPos,xRot,YRot,ZRot,duration,XPivotRot,yPivotRot,zPivotRot,boolSet){
    cameraPos = document.querySelector('#camera');
    cameraPivot = document.querySelector('#campivot');
    var tl = gsap.timeline({repeat:0});
                tl.to(cameraPos.object3D.position,{x:xPos, y:yPos, z:zPos,duration:duration, ease: Power2.easeInOut},0);
                tl.to(cameraPos.object3D.rotation,{x:xRot, y:YRot, z:ZRot, duration:duration,ease: Power2.easeInOut},0);
                tl.to(cameraPivot.object3D.rotation,{x:XPivotRot, y:yPivotRot, z:zPivotRot, duration:duration,ease: Power2.easeInOut},0);
                boolISetted = boolSet;
}