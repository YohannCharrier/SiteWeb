function printMenu(){
	event.target.style.visibility = "visible" ;
}

function main(){
	let button = document.getElementById("menu-button");
	button.addEventListener("click",printMenu);
}


main();