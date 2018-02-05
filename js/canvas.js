function game(){
	
}
game.prototype.init = function(){
	//canvasAPP();
	if (!game.prototype.canvasSupport) {
		return;
	} else {
		var theCanvas = document.getElementById('canvas');
		theCanvas.setAttribute('width',wWindow);
		theCanvas.setAttribute('height',hWindow);
		
		context = theCanvas.getContext('2d');
	}

	//drawScreen();
}
game.prototype.canvasSupport = function(){
	console.log(3)
	return !!document.createElement('testcanvas').getContext();
}
var runingGame = new game();
//runingGame.init();
window.addEventListener('load',runingGame.init,false);
