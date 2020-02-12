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

function main(){
	let button = document.getElementById("menu-button");
	button.addEventListener("click",printMenu);
}


main();