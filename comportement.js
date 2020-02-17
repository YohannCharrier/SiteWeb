//Bouton Menu
function printMenu(){
	let liste = document.getElementById("on-essaie");
	let menu = document.getElementById("menu");
	if(liste.style.visibility == "visible"){
		liste.style.visibility = "hidden";
		menu.innerHTML = '=';
	}
	else{
		liste.style.visibility = "visible";
		menu.innerHTML = 'x';
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
	let image2 = document.getElementById("mardi4");
	image.style.visibility = "visible";
	image2.style.visibility = "hidden";
}
function hideImage(){
	let image = document.getElementById("mardi3");
	let image2 = document.getElementById("mardi4");
	image.style.visibility = "hidden";
	image2.style.visibility = "visible";
}
function imageMardi(){
	let image = document.getElementById("lien-mardi4");
	image.addEventListener("mouseover",printImage);
	image.addEventListener("mouseout",hideImage);
	
}
function changeIm(){
	let im = document.getElementById("rat");
	let im2 = document.getElementById("coupe");
	let im3 = document.getElementById("baignoire");
	im.style.width = "80%";
	im.style.height = "80%";
	im.style.transform = "rotate(0deg)";
	im2.style.width = "80%";
	im2.style.height = "80%";
	im2.style.transform = "rotate(0deg)";
	im3.style.width = "80%";
	im3.style.height = "80%";
	im3.style.transform = "rotate(0deg)";
}
function returnIm(){
	let im = document.getElementById("rat");
	let im2 = document.getElementById("coupe");
	let im3 = document.getElementById("baignoire");
	im.style.width = "80%";
	im.style.height = "80%";
	im.style.transform = "rotate(-10deg)";
	im2.style.width = "90%";
	im2.style.height = "90%";
	im2.style.transform = "rotate(10deg)";
	im3.style.width = "75%";
	im3.style.height = "75%";
	im3.style.transform = "rotate(-10deg)";
}
function imageAccueil(){
	let im = document.getElementById("rat");
	let im2 = document.getElementById("coupe");
	let im3 = document.getElementById("baignoire");
	im.addEventListener("mouseover",changeIm);
	im.addEventListener("mouseout",returnIm);
	im2.addEventListener("mouseover",changeIm);
	im2.addEventListener("mouseout",returnIm);
	im3.addEventListener("mouseover",changeIm);
	im3.addEventListener("mouseout",returnIm);
}

function main(){
	button();
	listenVideo();
	imageMardi();
	imageAccueil();
}


main();