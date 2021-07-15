let numElementsLoaded = 0;
let totalElements = 2;


AFRAME.registerComponent('sky', {
    init: function () {
        this.el.addEventListener('model-loaded', () => {
            CheckElementsLoaded();
        });
     },
 });

 AFRAME.registerComponent('build', {
    init: function () {
        this.el.addEventListener('model-loaded', () => {
            
        });
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

