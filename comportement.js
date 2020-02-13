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
function playVideo(){
	document.getElementById("video").play();
}
function pauseVideo(){
	document.getElementById("video").pause();
}
function listenVideo(){
	let video = document.getElementById("video");
	video.addEventListener("mouseenter",playVideo);
	video.addEventListener("mouseout",pauseVideo);
}

//image mardi
function imageMardi(){
	let image = document.getElementById("mardi3");
	image.addEventListener("mouseenter",)
}


function main(){
	button();
	listenVideo();
}


main();