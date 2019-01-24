var buttons = document.getElementsByTagName('button');


function createHandeler(name){
	return function(){
		console.log(name);
	}
}

for(var i = 0; i < buttons.length; i += 1) {
	var button = buttons[i];
	var buttonName = button.innerHTML;
	button.addEventListener('click', createHandeler(buttonName));
}


