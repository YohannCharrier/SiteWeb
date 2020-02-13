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

function playVideo(){
	document.getElementById("video").play();
}
function pauseVideo(){
	document.getElementById("video").pause();
}
function main(){
	let button = document.getElementById("menu-button");
	button.addEventListener("click",printMenu);
	let video = document.getElementById("video");
	video.addEventListener("mouseenter",playVideo);
	video.addEventListener("mouseout",pauseVideo);
}


main();