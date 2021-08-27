let numElementsLoaded = 0;
let totalElements = 6;
let build;
let build0;
let build1;
let build2;
let camera;
let rotation;

AFRAME.registerComponent('sky', {
    init: function () {
        this.el.addEventListener('model-loaded', () => {
        CheckElementsLoaded();
        });
     },
 });

 AFRAME.registerComponent('build', {
    init: function () {
        camera = document.querySelector('#campivot');
        rotation = camera.getAttribute('rotation');
        build = document.querySelector('#build');
        this.el.addEventListener('model-loaded', () => {
            CheckElementsLoaded();
        });
    },
    tick: function () {
      //  rotation = camera.getAttribute('rotation');
       // calculatePosition(build,rotation);
    }
});
AFRAME.registerComponent('build0', {
    init: function () {
        build0 = document.querySelector('#build0');
        this.el.addEventListener('model-loaded', () => {
            CheckElementsLoaded();
        });
    },
    tick: function () {
     //   calculatePosition(build0,rotation);
    }
});
AFRAME.registerComponent('build1', {
        init: function () {
            build1 = document.querySelector('#build1');
            this.el.addEventListener('model-loaded', () => {
                CheckElementsLoaded();
            });
        },
        tick: function () {
       //     calculatePosition(build1,rotation);

        }
});
AFRAME.registerComponent('build2', {
    init: function () {
        build2 = document.querySelector('#build2');
        this.el.addEventListener('model-loaded', () => {
            CheckElementsLoaded();
        });
    },
    tick: function () {
     //   calculatePosition(build2,rotation);
////
    }
}); 

function CheckElementsLoaded () {
    numElementsLoaded++;
    if (numElementsLoaded >= totalElements-1){
        setTimeout(() => 
        { 
            var splash = document.querySelector('#splash');
            InitCamera();
            splash.style.display = 'none';
        }, 500);
    }
}

function calculatePosition (BuildObject, rotationCamera) {
    BuildObject.setAttribute('material','charYRot',rotationCamera.y);
}

function DisableAllText() {
    document.querySelector('#imgIgss').style.display = "none";
    document.querySelector('#imgBank').style.display = "none";
    document.querySelector('#imgCredit').style.display = "none";
}

function SetUiForMural() {
    document.getElementById("backbutton").style.display = "block";
    document.getElementById("menu").style.display = "none";
}

function SetUIForCivicCenter() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("backbutton").style.display = "none";
    document.querySelector('#CCText').style.display = "block";
}

function EnableUiById(id) {
    document.getElementById(id).style.display = "block";
}