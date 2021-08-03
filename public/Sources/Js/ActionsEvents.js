//estas funciones se llaman cuando un evento ocurre en el 3d

//esta funcion se llama cuando la animacion inicial (movimiento entre las montañas) de la camara termina
function CameraEndFirtsTravel() {
    console.log("Camera has been ended travel");
}

//esta funcion se llama cuando la animacion de la camara termina en el banco de guatemala
function OnBankAnimationEnd () {
    document.getElementById("backbutton").style.display = "block";
    console.log("Bank building has been clicked & ended his animation");
}

//esta funcion se llama cuando la animacion de la camara termina en el IGSS
function OnIGSSAnimationEnd () {
    document.getElementById("backbutton").style.display = "block";
    console.log("IGSS building has been clicked & ended his animation");
}

//esta funcion se llama cuando la animacion de la camara termina en Municipalidad
function OnMunicipalidadAnimationEnd () {
    document.getElementById("backbutton").style.display = "block";
    console.log("Municipalidad building has been clicked & ended his animation");
}

//esta funcion se llama cuando la animacion de la camara termina en el Credito Hipotecario
function OnCreditoHipotecarioAnimationEnd () {
    document.getElementById("backbutton").style.display = "block";
    console.log("Credito Hipotecario building has been clicked & ended his animation");
}

//Esta funcion se llama cuando la camara retorna a ver todos los edificios
function OnCameraReturnToCivicCenter () {
    document.getElementById("backbutton").style.display = "block";
    console.log("Camera has return to civic Center");
}

//llamar esta funcion cuando Quieran que la camara vuelva con tranccision al centro civico (ejemplo, en los botones de Back)
function ReturnCameraToCivicCenter () {
    document.getElementById("backbutton").style.display = "none";
    AnimateBuildOne (0);
    AnimateBuildTwo(0);
    MoveCameraAndRotate(0,150,1000,-0.349066,0,0,5,0,0,0,false,4);
}