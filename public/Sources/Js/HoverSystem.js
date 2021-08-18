AFRAME.registerComponent('hoverbank', {
    init: function () {
        //Hover system
        this.el.addEventListener('mouseenter', (e) => {
            this.el.setAttribute('material', 'hover', 1.0);
        });
        this.el.addEventListener('mouseleave', (e) => {
            this.el.setAttribute('material', 'hover', 0.0);
        });
        //Click actions
        var cameraPosMural = document.querySelector('#mural1');
        this.el.addEventListener('click', function (evt) {
            if (!boolISetted){
                boolCameraControls = true;
                tlCameraRot.paused(true);
                MoveCamera(cameraPosMural.object3D.position.x+27,cameraPosMural.object3D.position.y-182,cameraPosMural.object3D.position.z-15,-0.05,-0.98,0,5,0,0.5,0,true,3);
                ManageClassRaycast(false);
                AnimateBuildOne (1);
            }else{
                boolCameraControls = false;
                MoveCamera(0,150,1000,-0.349066,0,0,5,0,0,0,false,4);
                setTimeout(() => 
                { 
                    tlCameraRot.paused(false);
                    tlCameraRot.restart();
                }, 5000);
                AnimateBuildOne (0);
            }
        });
    },
});
AFRAME.registerComponent('hoverigss', {
    init: function () {
        //Hover system
        this.el.addEventListener('mouseenter', (e) => {
            this.el.setAttribute('material', 'hover', 1.0);
          });
          this.el.addEventListener('mouseleave', (e) => {
            this.el.setAttribute('material', 'hover', 0.0);
          });
          //Click Actions
        var cameraPosMural = document.querySelector('#mural0');
        this.el.addEventListener('click', function (evt) {
            document.querySelector('#paredCredit').setAttribute('visible',false);
            document.querySelector('#muralCreditVisible').setAttribute('visible',false);

            if (!boolISetted){
                boolCameraControls = true;
                tlCameraRot.paused(true);
                ManageClassRaycast(false);
                MoveCamera(cameraPosMural.object3D.position.x-210,cameraPosMural.object3D.position.y-178,cameraPosMural.object3D.position.z+40,-0.07,-1.14,0,5,0,0.5,0,true,0);
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
    },
});
AFRAME.registerComponent('hovercredit', {
    init: function () {
        //hover system
        this.el.addEventListener('mouseenter', (e) => {
            this.el.setAttribute('material', 'hover', 1.0);
          });
          this.el.addEventListener('mouseleave', (e) => {
            this.el.setAttribute('material', 'hover', 0.0);
          });
          //click Actions
        var cameraPosMural = document.querySelector('#mural3');
        this.el.addEventListener('click', function (evt) {
            if (!boolISetted){
                boolCameraControls = true;
                tlCameraRot.paused(true);
                ManageClassRaycast(false);
                MoveCamera(cameraPosMural.object3D.position.x+10,cameraPosMural.object3D.position.y-179,cameraPosMural.object3D.position.z+230,-0.07,-0.84,0,5,0,0.5,0,true,2);
                AnimateBuildTwo(1);
            }else{
                boolCameraControls = false;
                MoveCamera(0,350,1400,-0.349066,0,0,5,0,0,0,false,4);
                AnimateBuildTwo(0);
                setTimeout(() => 
                { 
                    tlCameraRot.paused(false);
                    tlCameraRot.restart();
                }, 5000);
            }
        });
    },
});

function ManageClassRaycast (booleanAdd) {
    console.log(booleanAdd);
    var obj = document.querySelector('#triggerCredito1');
    var obj1 = document.querySelector('#triggerIGSS1');
    var obj2 = document.querySelector('#triggerBank1');
    if (booleanAdd) {
        obj.setAttribute( "class", "clickable");
        obj1.setAttribute( "class", "clickable");
        obj2.setAttribute( "class", "clickable");
    }else{
        obj.setAttribute( "class", "Noclickable");
        obj1.setAttribute( "class", "Noclickable");
        obj2.setAttribute( "class", "Noclickable");
    }
}