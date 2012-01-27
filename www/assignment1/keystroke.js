/*
KEY CODES
-------------
UP 		38
DOWN	40
LEFT	37
RIGHT	39
-------------
*/
$(function( ){
 	$('#body').bind('keyup', typer);
});

function typer(event){
	var button;
	switch (event.keyCode){
		case 38:
			button = "up"
			break;
		case 40:
			button = "down"
			break;
		case 37:
			button = "left"
			break;
		case 39:
			button = "right"
			break;
		default:
			button = "an unknow button"
	}

	$('#output').text('You pressed '+ button);
}
