/*AFRAME.registerComponent('hoverbank', {
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
                SetCurrentparameters(2,cameraPosMural);
                MoveCamera(posx,posy,posz,-0.05,roty,0,5,0,0.5,0,true,3);
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
                SetCurrentparameters(0,cameraPosMural);
                MoveCamera(posx,posy,posz,-0.07,roty,0,5,0,0.5,0,true,0);
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
                SetCurrentparameters(1,cameraPosMural);
                MoveCamera(posx,posy,posz,-0.07,-0.84,0,5,0,0.5,0,true,2);
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
}*/
var _0xdf24=["\x68\x6F\x76\x65\x72\x62\x61\x6E\x6B","\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72","\x6D\x61\x74\x65\x72\x69\x61\x6C","\x68\x6F\x76\x65\x72","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x65\x6C","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x6D\x6F\x75\x73\x65\x6C\x65\x61\x76\x65","\x23\x6D\x75\x72\x61\x6C\x31","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x63\x6C\x69\x63\x6B","\x70\x61\x75\x73\x65\x64","\x72\x65\x73\x74\x61\x72\x74","\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74","\x68\x6F\x76\x65\x72\x69\x67\x73\x73","\x23\x6D\x75\x72\x61\x6C\x30","\x76\x69\x73\x69\x62\x6C\x65","\x23\x70\x61\x72\x65\x64\x43\x72\x65\x64\x69\x74","\x23\x6D\x75\x72\x61\x6C\x43\x72\x65\x64\x69\x74\x56\x69\x73\x69\x62\x6C\x65","\x68\x6F\x76\x65\x72\x63\x72\x65\x64\x69\x74","\x23\x6D\x75\x72\x61\x6C\x33","\x6C\x6F\x67","\x23\x74\x72\x69\x67\x67\x65\x72\x43\x72\x65\x64\x69\x74\x6F\x31","\x23\x74\x72\x69\x67\x67\x65\x72\x49\x47\x53\x53\x31","\x23\x74\x72\x69\x67\x67\x65\x72\x42\x61\x6E\x6B\x31","\x63\x6C\x61\x73\x73","\x63\x6C\x69\x63\x6B\x61\x62\x6C\x65","\x4E\x6F\x63\x6C\x69\x63\x6B\x61\x62\x6C\x65"];AFRAME[_0xdf24[13]](_0xdf24[0],{init:function(){this[_0xdf24[5]][_0xdf24[6]](_0xdf24[1],(_0x4d5dx1)=>{this[_0xdf24[5]][_0xdf24[4]](_0xdf24[2],_0xdf24[3],1.0)});this[_0xdf24[5]][_0xdf24[6]](_0xdf24[7],(_0x4d5dx1)=>{this[_0xdf24[5]][_0xdf24[4]](_0xdf24[2],_0xdf24[3],0.0)});var _0x4d5dx2=document[_0xdf24[9]](_0xdf24[8]);this[_0xdf24[5]][_0xdf24[6]](_0xdf24[10],function(_0x4d5dx3){if(!boolISetted){boolCameraControls= true;tlCameraRot[_0xdf24[11]](true);SetCurrentparameters(2,_0x4d5dx2);MoveCamera(posx,posy,posz,-0.05,roty,0,5,0,0.5,0,true,3);ManageClassRaycast(false);AnimateBuildOne(1)}else {boolCameraControls= false;MoveCamera(0,150,1000,-0.349066,0,0,5,0,0,0,false,4);setTimeout(()=>{tlCameraRot[_0xdf24[11]](false);tlCameraRot[_0xdf24[12]]()},5000);AnimateBuildOne(0)}})}});AFRAME[_0xdf24[13]](_0xdf24[14],{init:function(){this[_0xdf24[5]][_0xdf24[6]](_0xdf24[1],(_0x4d5dx1)=>{this[_0xdf24[5]][_0xdf24[4]](_0xdf24[2],_0xdf24[3],1.0)});this[_0xdf24[5]][_0xdf24[6]](_0xdf24[7],(_0x4d5dx1)=>{this[_0xdf24[5]][_0xdf24[4]](_0xdf24[2],_0xdf24[3],0.0)});var _0x4d5dx2=document[_0xdf24[9]](_0xdf24[15]);this[_0xdf24[5]][_0xdf24[6]](_0xdf24[10],function(_0x4d5dx3){document[_0xdf24[9]](_0xdf24[17])[_0xdf24[4]](_0xdf24[16],false);document[_0xdf24[9]](_0xdf24[18])[_0xdf24[4]](_0xdf24[16],false);if(!boolISetted){boolCameraControls= true;tlCameraRot[_0xdf24[11]](true);ManageClassRaycast(false);SetCurrentparameters(0,_0x4d5dx2);MoveCamera(posx,posy,posz,-0.07,roty,0,5,0,0.5,0,true,0)}else {boolCameraControls= false;MoveCamera(0,150,1000,-0.349066,0,0,5,0,0,0,false,4);setTimeout(()=>{tlCameraRot[_0xdf24[11]](false);tlCameraRot[_0xdf24[12]]()},5000)}})}});AFRAME[_0xdf24[13]](_0xdf24[19],{init:function(){this[_0xdf24[5]][_0xdf24[6]](_0xdf24[1],(_0x4d5dx1)=>{this[_0xdf24[5]][_0xdf24[4]](_0xdf24[2],_0xdf24[3],1.0)});this[_0xdf24[5]][_0xdf24[6]](_0xdf24[7],(_0x4d5dx1)=>{this[_0xdf24[5]][_0xdf24[4]](_0xdf24[2],_0xdf24[3],0.0)});var _0x4d5dx2=document[_0xdf24[9]](_0xdf24[20]);this[_0xdf24[5]][_0xdf24[6]](_0xdf24[10],function(_0x4d5dx3){if(!boolISetted){boolCameraControls= true;tlCameraRot[_0xdf24[11]](true);ManageClassRaycast(false);SetCurrentparameters(1,_0x4d5dx2);MoveCamera(posx,posy,posz,-0.07,-0.84,0,5,0,0.5,0,true,2);AnimateBuildTwo(1)}else {boolCameraControls= false;MoveCamera(0,350,1400,-0.349066,0,0,5,0,0,0,false,4);AnimateBuildTwo(0);setTimeout(()=>{tlCameraRot[_0xdf24[11]](false);tlCameraRot[_0xdf24[12]]()},5000)}})}});function ManageClassRaycast(_0x4d5dx5){console[_0xdf24[21]](_0x4d5dx5);var _0x4d5dx6=document[_0xdf24[9]](_0xdf24[22]);var _0x4d5dx7=document[_0xdf24[9]](_0xdf24[23]);var _0x4d5dx8=document[_0xdf24[9]](_0xdf24[24]);if(_0x4d5dx5){_0x4d5dx6[_0xdf24[4]](_0xdf24[25],_0xdf24[26]);_0x4d5dx7[_0xdf24[4]](_0xdf24[25],_0xdf24[26]);_0x4d5dx8[_0xdf24[4]](_0xdf24[25],_0xdf24[26])}else {_0x4d5dx6[_0xdf24[4]](_0xdf24[25],_0xdf24[27]);_0x4d5dx7[_0xdf24[4]](_0xdf24[25],_0xdf24[27]);_0x4d5dx8[_0xdf24[4]](_0xdf24[25],_0xdf24[27])}}