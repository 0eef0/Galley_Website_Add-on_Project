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

//below is the scripting for the episode list
var tableBorders = document.getElementsByClassName("mainTable");
function changeTable()
{
    if(!lights){
        for(var i = 0; i < tableBorders.length; i++){
            tableBorders[i].style.border = "1px solid white";
            //console.log("first");
        }
    }else{
        for(var i = 0; i < tableBorders.length; i++){
            tableBorders[i].style.border = "1px solid black";
            //console.log("second");
        }
    }
}
function changeTitle(){
    if(lights){
        document.getElementById("eTitle").style.color = "black";
    }else{
        document.getElementById("eTitle").style.color = "white";
    }
}

//huge huge HUGE thanks to http://pojo.sodhanalibrary.com/string.html for allowing me to convert my table into a string
var season1 = '<tr class="mainTable">'+
'                <td colspan="3" class="mainTable"><strong>Season 1</strong></td>'+
'            </tr>'+
'            <tr class="mainTable">'+
'                <td class="mainTable e"><strong>Episode</strong></td>'+
'                <td class="mainTable t"><strong>Title</strong></td>'+
'                <td class="mainTable d"><strong>Air Date</strong></td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">1</td>'+
'                <td class="mainTable t">"The First Turnabout"</td>'+
'                <td class="mainTable d">April 2, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">2</td>'+
'                <td class="mainTable t">"Turnabout Sisters - 1st Trial"</td>'+
'                <td class="mainTable d">April 9, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">3</td>'+
'                <td class="mainTable t">"Turnabout Sisters - 2nd Trial"</td>'+
'                <td class="mainTable d">April 16, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">4</td>'+
'                <td class="mainTable t">"Turnabout Sisters - Last Trial"</td>'+
'                <td class="mainTable d">April 23, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">5</td>'+
'                <td class="mainTable t">"Turnabout Samurai - 1st Trial"</td>'+
'                <td class="mainTable d">April 30, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">6</td>'+
'                <td class="mainTable t">"Turnabout Samurai - 2nd Trial"</td>'+
'                <td class="mainTable d">May 7, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">7</td>'+
'                <td class="mainTable t">"Turnabout Samurai - Last Trial"</td>'+
'                <td class="mainTable d">May 14, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">8</td>'+
'                <td class="mainTable t">"Turnabout Goodbyes - 1st Trial"</td>'+
'                <td class="mainTable d">May 21, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">9</td>'+
'                <td class="mainTable t">"Turnabout Goodbyes - 2nd Trial"</td>'+
'                <td class="mainTable d">May 28, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">10</td>'+
'                <td class="mainTable t">"Turnabout Goodbyes - 3rd Trial"</td>'+
'                <td class="mainTable d">June 4, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">11</td>'+
'                <td class="mainTable t">"Turnabout Goodbyes - 4th Trial"</td>'+
'                <td class="mainTable d">June 11, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">12</td>'+
'                <td class="mainTable t">"Turnabout Goodbyes - Last Trial"</td>'+
'                <td class="mainTable d">June 18, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">13</td>'+
'                <td class="mainTable t">"Turnabout Promise"</td>'+
'                <td class="mainTable d">June 25, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">14</td>'+
'                <td class="mainTable t">"Reunion and Turnabout - 1st Trial"</td>'+
'                <td class="mainTable d">July 9, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">15</td>'+
'                <td class="mainTable t">"Reunion and Turnabout - 2nd Trial"</td>'+
'                <td class="mainTable d">July 16, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">16</td>'+
'                <td class="mainTable t">"Reunion and Turnabout - 3rd Trial"</td>'+
'                <td class="mainTable d">July 23, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">17</td>'+
'                <td class="mainTable t">"Reunion and Turnabout - Last Trial"</td>'+
'                <td class="mainTable d">July 30, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">18</td>'+
'                <td class="mainTable t">"Turnabout Big Top - 1st Trial"</td>'+
'                <td class="mainTable d">August 6, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">19</td>'+
'                <td class="mainTable t">"Turnabout Big Top - 2nd Trial"</td>'+
'                <td class="mainTable d">August 13, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">20</td>'+
'                <td class="mainTable t">"Turnabout Big Top - Last Trial"</td>'+
'                <td class="mainTable d">August 20, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">21</td>'+
'                <td class="mainTable t">"Farewell, My Turnabout - 1st Trial"</td>'+
'                <td class="mainTable d">September 3, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">22</td>'+
'                <td class="mainTable t">"Farewell, My Turnabout - 2nd Trial"</td>'+
'                <td class="mainTable d">September 10, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">23</td>'+
'                <td class="mainTable t">"Farewell, My Turnabout - 3rd Trial"</td>'+
'                <td class="mainTable d">September 17, 2016</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">24</td>'+
'                <td class="mainTable t">"Farewell, My Turnabout - Last Trial"</td>'+
'                <td class="mainTable d">September 24, 2016</td>'+
'            </tr>';
var season2 = '<tr class="mainTable">'+
'                <td colspan="3" class="mainTable"><strong>Season 2</strong></td>'+
'            </tr>'+
'            <tr class="mainTable">'+
'                <td class="mainTable e"><strong>Episode</strong></td>'+
'                <td class="mainTable t"><strong>Title</strong></td>'+
'                <td class="mainTable d"><strong>Air Date</strong></td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">25</td>'+
'                <td class="mainTable t">"The Lost Turnabout"</td>'+
'                <td class="mainTable d">October 6, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">26</td>'+
'                <td class="mainTable t">"The Stolen Turnabout - 1st Trial"</td>'+
'                <td class="mainTable d">October 13, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">27</td>'+
'                <td class="mainTable t">"The Stolen Turnabout - 2nd Trial"</td>'+
'                <td class="mainTable d">October 20, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">28</td>'+
'                <td class="mainTable t">"The Stolen Turnabout - 3rd Trial"</td>'+
'                <td class="mainTable d">October 27, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">29</td>'+
'                <td class="mainTable t">"The Stolen Turnabout - Last Trial"</td>'+
'                <td class="mainTable d">November 3, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">30</td>'+
'                <td class="mainTable t">"Sound the Turnabout Melody"</td>'+
'                <td class="mainTable d">November 10, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">31</td>'+
'                <td class="mainTable t">"Recipe for Turnabout - 1st Trial"</td>'+
'                <td class="mainTable d">November 17, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">32</td>'+
'                <td class="mainTable t">"Recipe for Turnabout - 2nd Trial"</td>'+
'                <td class="mainTable d">November 24, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">33</td>'+
'                <td class="mainTable t">"Recipe for Turnabout - Last Trial"</td>'+
'                <td class="mainTable d">December 1, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">34</td>'+
'                <td class="mainTable t">"Northward, Turnabout Express - 1st Trial"</td>'+
'                <td class="mainTable d">December 8, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">35</td>'+
'                <td class="mainTable t">"Northward, Turnabout Express - 2nd Trial"</td>'+
'                <td class="mainTable d">December 15, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">36</td>'+
'                <td class="mainTable t">"Northward, Turnabout Express - Last Trial"</td>'+
'                <td class="mainTable d">December 22, 2018</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">37</td>'+
'                <td class="mainTable t">"Turnabout Memories"</td>'+
'                <td class="mainTable d">January 19, 2019</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">38</td>'+
'                <td class="mainTable t">"Hear the Waves of Turnabout"</td>'+
'                <td class="mainTable d">January 26, 2019</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">39</td>'+
'                <td class="mainTable t">"Turnabout Beginnings - 1st Trial"</td>'+
'                <td class="mainTable d">February 2, 2019</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">40</td>'+
'                <td class="mainTable t">"Turnabout Beginnings - Last Trial"</td>'+
'                <td class="mainTable d">February 9, 2019</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">41</td>'+
'                <td class="mainTable t">"Bridge to the Turnabout - 1st Trial"</td>'+
'                <td class="mainTable d">February 16, 2019</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">42</td>'+
'                <td class="mainTable t">"Bridge to the Turnabout - 2nd Trial"</td>'+
'                <td class="mainTable d">February 23, 2019</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">43</td>'+
'                <td class="mainTable t">"Bridge to the Turnabout - 3rd Trial"</td>'+
'                <td class="mainTable d">March 2, 2019</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">44</td>'+
'                <td class="mainTable t">"Bridge to the Turnabout - 4th Trial"</td>'+
'                <td class="mainTable d">March 9, 2019</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">45</td>'+
'                <td class="mainTable t">"Bridge to the Turnabout - 5th Trial"</td>'+
'                <td class="mainTable d">March 16, 2019</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">46</td>'+
'                <td class="mainTable t">"Bridge to the Turnabout - 6th Trial"</td>'+
'                <td class="mainTable d">March 23, 2019</td>'+
'            </tr>'+
'            <tr class="mainTable"> '+
'                <td class="mainTable e">47</td>'+
'                <td class="mainTable t">"Bridge to the Turnabout - Last Trial"</td>'+
'                <td class="mainTable d">March 30, 2019</td>'+
'            </tr>' +
'            <tr><td colspan="3"><p></p></td></tr>';
	
function switchTable(){
    document.getElementById("episodeTable").innerHTML = season1;
    document.getElementById("tab2").innerHTML = "Season 2";
    document.getElementById("tab1").innerHTML = "<strong>Season 1</strong>";
}
function switchTable2(){
    document.getElementById("episodeTable").innerHTML = season2;
    document.getElementById("tab1").innerHTML = "Season 1";
    document.getElementById("tab2").innerHTML = "<strong>Season 2</strong>";
}