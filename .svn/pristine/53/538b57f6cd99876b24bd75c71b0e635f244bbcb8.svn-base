let numElementsLoaded = 0;
let totalElements = 2;
let build;
let camera;

AFRAME.registerComponent('sky', {
    init: function () {
        this.el.addEventListener('model-loaded', () => {
        CheckElementsLoaded();
        });
     },
 });

 AFRAME.registerComponent('build', {
    init: function () {
        build = document.querySelector('#build');
        camera = document.querySelector('#camera');
    },
    tick: function () {
      document.querySelector('#build').setAttribute('material', {charPosition: {x:camera.object3D.position.x, y: camera.object3D.position.y, z: camera.object3D.position.z}});
    }
});
AFRAME.registerComponent('build0', {
    init: function () {
        build = document.querySelector('#build0');
        camera = document.querySelector('#camera');
    },
    tick: function () {
      document.querySelector('#build0').setAttribute('material', {charPosition: {x:camera.object3D.position.x, y: camera.object3D.position.y, z: camera.object3D.position.z}});
    }
});
AFRAME.registerComponent('build1', {
        init: function () {
            build = document.querySelector('#build1');
            camera = document.querySelector('#camera');
        },
        tick: function () {
          document.querySelector('#build1').setAttribute('material', {charPosition: {x:camera.object3D.position.x, y: camera.object3D.position.y, z: camera.object3D.position.z}});
        }
});
AFRAME.registerComponent('build2', {
    init: function () {
        build = document.querySelector('#build2');
        camera = document.querySelector('#camera');
    },
    tick: function () {
      document.querySelector('#build2').setAttribute('material', {charPosition: {x:camera.object3D.position.x, y: camera.object3D.position.y, z: camera.object3D.position.z}});
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