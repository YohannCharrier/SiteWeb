//Bouton Menu
function printMenu(){
	let liste = document.getElementById("on-essaie");
	let menu = document.getElementById("menu");
	if(liste.style.visibility == "visible"){
		liste.style.visibility = "hidden";
		menu.innerHTML = 'Menu';
	}
	else{
		liste.style.visibility = "visible";
		menu.innerHTML = 'X';
	}
}
function button(){
	let button = document.getElementById("menu-button");
	button.addEventListener("click",printMenu);
}

//lecture Video
function playGif(){
	document.getElementById("video").src = "Images/ELSA_2.gif";
}
function staticGif(){
	document.getElementById("video").src = "Images/ELSA_2_static.gif";
}
function listenVideo(){
	let video = document.getElementById("video");
	video.addEventListener("mouseover",playGif);
	video.addEventListener("mouseout",staticGif);
}

//image mardi
function printImage(){
	let image = document.getElementById("mardi3");
	image.style.visibility = "visible";
}
function hideImage(){
	let image = document.getElementById("mardi3");
	image.style.visibility = "hidden";
}
function imageMardi(){
	let image = document.getElementById("mardi4");
	let image2 = document.getElementById("mardi3");
	image.addEventListener("mouseover",printImage);
	image2.addEventListener("mouseout",hideImage);
	
}


function main(){
	button();
	listenVideo();
	imageMardi();
}


main();