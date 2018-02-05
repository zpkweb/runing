function oneObstacle(){
	if (!canvasSupport) {
		return;
	} else {
		var canvas = document.createElement("canvas");
		canvas.id = 'canvas';
		canvas.innerText = 'Your browser does not support HTML5 Canvas.';
		document.body.appendChild(canvas);

		theCanvas = document.getElementById('canvas');
		theCanvas.setAttribute('width', wWindow);
		theCanvas.setAttribute('height', hWindow);
		context = theCanvas.getContext('2d');
	}
	theCanvas = document.getElementById('canvas');
	theCanvas.setAttribute('width', wWindow);
	theCanvas.setAttribute('height', hWindow);
	context = theCanvas.getContext('2d');

	obstacleImage.src = obstacleSrc;
	obstacleImage.onload = function() {
		// loadingProgress += currentProgress;
		// obstacleImageWidth = obstacleImage.width;
		// obstacleImageHeight = obstacleImage.height;
		// obstacleSHeight = Math.ceil(obstacleImageHeight / obstacleNumber);
		// obstacleImageRatio = obstacleImageWidth / obstacleSHeight;

	//}

	// var obstacleImage = new Image();
	// obstacleImage.src = obstacleSrc;
	// obstacleImage.onload = function(){
		var syAll = 0;
		var xAll = 0;
		var yAll = 0;
		
		for(var i = 0; i<obstacleRandomArray.length;i++){
			var that = obstacleRandomArray[i];
			var sx = that.sx;
			var sy = that.sy;
			var swidth = that.swidth;
			var sheight = that.sheight;
			var width = that.width;
			var height = that.width/(swidth/sheight);
			if(i>0){
				syAll += that.sheight;
				xAll += width;
				if(i%2==0){
					xAll = 0;
					yAll += height;
				}
			}
			//var sy = syAll;
			
			var x = xAll;
			var y = yAll;
			//context.drawImage(obstacleImage,0,0,700,448,0,0,200,136);
			context.drawImage(obstacleImage,sx,sy,swidth,sheight,x,y,width,height);
		}
		
	}
}
function oneWardGoods(){
	if (!canvasSupport) {
		return;
	} else {
		var canvas = document.createElement("canvas");
		canvas.id = 'canvas';
		canvas.innerText = 'Your browser does not support HTML5 Canvas.';
		document.body.appendChild(canvas);

		theCanvas = document.getElementById('canvas');
		theCanvas.setAttribute('width', wWindow);
		theCanvas.setAttribute('height', hWindow);
		context = theCanvas.getContext('2d');
	}
	theCanvas = document.getElementById('canvas');
	theCanvas.setAttribute('width', wWindow);
	theCanvas.setAttribute('height', hWindow);
	context = theCanvas.getContext('2d');
	rewardGoodsImage.src = rewardGoodsSrc;
	rewardGoodsImage.onload = function(){
		var syAll = 0;
		var xAll = 0;
		var yAll = 0;
		for(var i = 0; i<rewardGoodsRandomArray.length;i++){
			var that = rewardGoodsRandomArray[i];
			var sx = that.sx;
			var sy = that.sy;
			var swidth = that.swidth;
			var sheight = that.sheight;
			var width = that.width;
			var height = that.width/(swidth/sheight);
			if(i>0){
				syAll += that.sheight;
				xAll += width;
				if(i%2==0){
					xAll = 0;
					yAll += height;
				}
			}
			//var sy = syAll;
			var x = xAll;
			var y = yAll;
			//context.drawImage(rewardGoodsImage,0,0,700,448,0,0,200,136);
			context.drawImage(rewardGoodsImage,sx,sy,swidth,sheight,x,y,width,height);
		}
		
	}
}


//oneObstacle();
//oneWardGoods();



function drawMonkeyTest() {
	monkeyImage.src = monkeySrc;
	monkeyImage.onload = function(){
		if (!canvasSupport) {
			return;
		} else {
			var canvas = document.createElement("canvas");
			canvas.id = 'canvas';
			canvas.innerText = 'Your browser does not support HTML5 Canvas.';
			document.body.appendChild(canvas);

			theCanvas = document.getElementById('canvas');
			theCanvas.setAttribute('width', wWindow);
			theCanvas.setAttribute('height', hWindow);
			context = theCanvas.getContext('2d');
		}
		theCanvas = document.getElementById('canvas');
		theCanvas.setAttribute('width', wWindow);
		theCanvas.setAttribute('height', hWindow);
		context = theCanvas.getContext('2d');

		var frameNumber = parseInt(monkeyCurrentFrames / monkeySpeed);

		//console.log(frameNumber+';'+monkeyFrames+';'+monkeySpeed)
		// if (frameNumber >= monkeyFrames) {
		// 	monkeyCurrentFrames = 0;
		// 	frameNumber = 0;
		// }

		// if (monkeySpeedRate) {
		// 	frameNumber = monkeySpeedRate
		// }
		// var x = runRoadBottomPos[monkeyRunRoad].x  - monkeyAttr.width / 2;
		// var y = runRoadBottomPos[monkeyRunRoad].y - monkeyAttr.height;



		//monkeyAttr.y = runRoadBottomPos[monkeyRunRoad].y -75;
		var sx = 280;
		var sy = 1300 * frameNumber + 140;
		var swidth = 900;
		var sheight = 900;
		var x = 110;
		var y = 110;
		var x = runRoadBottomPos[monkeyRunRoad].x  - (runRoadBottomWidthItem );
		var y = runRoadBottomPos[monkeyRunRoad].y - (runRoadBottomWidthItem );
		console.log(x+';'+y)
		var width = runRoadBottomWidthItem;
		var height = runRoadBottomWidthItem;
		context.drawImage(monkeyImage, sx, sy, swidth, sheight, x, y ,width, height);
		//monkeyCurrentFrames++;
	}
}
//drawMonkeyTest()

