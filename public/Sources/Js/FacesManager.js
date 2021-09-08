let ghostClick=0;
var containerMurals;
var backButton ;
var ButtonAr ;

var face0;

document.addEventListener("DOMContentLoaded", function() {
    ButtonAr = document.querySelector("#clickAr");
    containerMurals = document.querySelector("#MuralSelected");
    backButton = document.querySelector("#backbutton");
    face0= document.querySelector("#face0");
});

AFRAME.registerComponent('face0', {
    init: function () {
        console.log("detec face trying add click event");
        face0.addEventListener('click', function (evt) {
            console.log("here");
        });
    }
});

AFRAME.registerComponent('face2', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
            EnableAndSetParamentersToFace();
        });
    }
});

function EnableAndSetParamentersToFace() {
    console.log("aaa");
    if (ghostClick>0) {
        containerMurals.style.display="block";
        ButtonAr.style.display="block";
        backButton.style.display="block";
    }else{
        ghostClick++;

    }
}