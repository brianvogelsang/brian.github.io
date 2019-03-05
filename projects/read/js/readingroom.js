function setId(){
var rain = document.getElementById("myRain");
var fire = document.getElementById("myFire");
var library = document.getElementById("myLibrary");
var confirm = document.getElementById("currentPlaylistText");   
}


function stopSounds(){
var rain = document.getElementById("myRain");
var fire = document.getElementById("myFire");
var library = document.getElementById("myLibrary");
var confirm = document.getElementById("currentPlaylistText");
    
confirm.innerHTML='Leaving Room';
    
rain.pause();
fire.pause();
library.pause();
}



function startJungleRoom(){
var rain = document.getElementById("myRain");
var fire = document.getElementById("myFire");
var library = document.getElementById("myLibrary");
var confirm = document.getElementById("currentPlaylistText");
    
confirm.innerHTML='Starting: Jungle Room';

library.pause();
    
rain.loop = true;
rain.volume =0.2;
rain.autoplay = true;
rain.play();
rain.controls =true;
    
fire.loop = true;
fire.volume =0.35;
fire.autoplay = true;
fire.play();    
fire.controls = true;
    
}

function startLibrary(){
var rain = document.getElementById("myRain");
var fire = document.getElementById("myFire");
var library = document.getElementById("myLibrary");
var confirm = document.getElementById("currentPlaylistText");
    
confirm.innerHTML='Starting: Library';

rain.pause();
fire.pause();
    
library.loop = true;
library.volume =0.7;
library.autoplay = true;
library.play();
library.controls =true;
    
}


