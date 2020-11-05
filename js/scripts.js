function changeEverything(){
    darkToggle();
    darkDiv();
    changeImage();
}

function darkToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var lights = true;
function darkDiv(){
    var element = document.body;
    if(lights){
        document.getElementById("darkDiv").style.backgroundColor = "#333333";
        document.getElementById("header").style.backgroundColor = "#222222";
        document.getElementById("link").style.color = "white";
    }else{
        document.getElementById("darkDiv").style.backgroundColor = "#777777";
        document.getElementById("header").style.backgroundColor = "yellow";
        document.getElementById("link").style.color = "black";
    }
}

function changeImage()
{
    if(lights){
        var img = document.getElementById("image");
        img.src="images/switchOFF.png";
        lights = false;
    }else{
        var img = document.getElementById("image");
        img.src="images/switchON.png";
        lights = true;
    }
}