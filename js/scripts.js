//this is just a function that runs other functions
function changeEverything(){
    darkToggle();
    darkDiv();
    changeImage();
}

//this changes text color
function darkToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//darkDiv and changeImage change elements like divs and the switch betwee ndark and light mode
var lights = true;
function darkDiv(){
    var element = document.body;
    if(lights){
        var x = document.getElementsByClassName("darkDiv");
        for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(37, 39, 38, 0.9)";
        }
    }else{
        var x = document.getElementsByClassName("darkDiv");
        for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(255, 255, 255, 0.9)";
        }
    }
}

function changeImage()
{
    if(lights){
        var img = document.getElementsByClassName("image");
        for(var i = 0; i < img.length; i++){
            img[i].src = "images/switchOFF.png";
        }
        lights = false;
    }else{
        var img = document.getElementsByClassName("image");
        for(var i = 0; i < img.length; i++){
            img[i].src = "images/switchON.png";
        }
        lights = true;
    }
}

//below is the scripting for the bio page
function charBorder(){
    if(!lights){
        document.getElementById("character").style.border = "white 2px solid";
    }else{
        document.getElementById("character").style.border = "black 2px solid";
    }
}
var phoenix = "Phoenix Wright is the protagonist. He is a new defense attorney who is determined to get the not guilty verdict for his client.";
var mia = "Mia Fey is Phoenix's superior and the chief of Fey & Co. Law Offices. She is often looked up to as a really good defense attorney, and this shows in Phoenix's skills coming from her.";
var maya = "Maya Fey is Mia's little sister. She is also a powerful spirit medium. Her skills as a medium are shown when she channels Mia to assist Phoenix in court. Unfortuneately, she tends to be accused of murder more than the average person.";
var miles = "Miles Edgeworth is Phoenix's main rival for a long portion of the show. He is often described as cold and brutal in the courthouse. He was even accused of using forged evidence to get his guilty verdict";
var gumshoe = "Detective Gumshoe is the dectective the Phoenix runs into on most of his cases. He can be described as absentminded and fun to be around. He seems to be on very close terms with Edgeworth, as whenever Edgeworth was in trouble, Gumshow was usually the first to take action.";
var characters = ["images/phoenix.png","images/mia.png", "images/maya.png", "images/miles.png", "images/gumshoe.png"];
var charName = ["Phoenix Wright", "Mia Fey","Maya Fey", "Miles Edgeworth", "Detective Gumshoe"];
var content = [phoenix, mia, maya, miles, gumshoe];
var currentChar = 0;
function switchPortraitN(){
    var img = document.getElementById("character");

    currentChar++;
    if(currentChar > characters.length - 1){
        currentChar = characters.length - 1;
    }else{
        img.src = characters[currentChar];
        document.getElementById("charName").innerHTML = charName[currentChar];
        document.getElementById("charContent").innerHTML = content[currentChar];
    }
}
function switchPortraitP(){
    var img = document.getElementById("character");
    currentChar--;
    if(currentChar < 0){
        currentChar++;
    }else{
        img.src = characters[currentChar];
        document.getElementById("charName").innerHTML = charName[currentChar];
        document.getElementById("charContent").innerHTML = content[currentChar];
    }
}