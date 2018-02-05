function RunningGame() {

}
function initCanvas() {
	// if (!canvasSupport) {
	// 	return;
	// } else {
	// 	if(!document.getElementById('canvas')){
	// 		var canvas = document.createElement("canvas");
	// 		canvas.id = 'canvas';
	// 		canvas.innerText = 'Your browser does not support HTML5 Canvas.';
	// 		document.body.appendChild(canvas);

	// 		theCanvas = document.getElementById('canvas');
	// 		theCanvas.setAttribute('width', wWindow);
	// 		theCanvas.setAttribute('height', hWindow);
	// 		context = theCanvas.getContext('2d');
	// 	}
		
	// }

	//跑了多少米
	runMeters = 0;
	//清空障碍物
	obstacleNum = 0;
	obstacleArray = [];
	obstacleMoveDistance = 0;
	//清空奖励物品
	rewardGoodsNum = 0;
	rewardGoodsArray = [];
	rewardGoodsMoveDistance = 0;

	//跑道长度
	runRoadHeight = getDistance(runRoadTopPos[2], runRoadBottomPos[2]);
	runRoadSpacing = (runRoadHeight / runRoadSpacingItem) * runRoadHeightFactor;
		//猴子的初始化属性
	monkeySpeedRate = 0;
	//monkeyRunRoad = 3;
	monkeyAttr = {
		'x': wWindow / 2,
		'y': hWindow,
		'width': runRoadBottomWidthItem,
		'height': runRoadBottomWidthItem
	}
	//障碍物初始速度
	obstacleSpeed = 5;
}

function randomPosIndex(number) {
	var posIndex = parseInt(Math.random() * obstacleRandomPosArr.length);
	if (Math.abs(obstacleNum - rewardGoodsNum) <= 500 && posIndex == number) {
		if (posIndex == 0) {
			posIndex = 1
		} else if (posIndex == 1) {
			posIndex = 2
		} else if (posIndex == 2) {
			posIndex = 0;
		}
	}
	return posIndex;
}
function obstacleAnimate() {
	//随机障碍物
	console.log(obstacleNum + ';' + obstacleRandomTime)
	if (obstacleNum == obstacleRandomTime) {
		//obstacleRandomPosIndex = parseInt(Math.random()*obstacleRandomPosArr.length);
		obstacleRandomPosIndex = randomPosIndex(rewardGoodsRandomPosIndex);
			//console.log('障碍物：'+obstacleRandomPosIndex + ';奖励物品：' + rewardGoodsRandomPosIndex)
		var randomObstacleIndex = parseInt(Math.random() * obstacleRandomArray.length);
		var random = obstacleRandomArray[randomObstacleIndex];
		var randomSy = 0;
		for (var i = 0; i < randomObstacleIndex; i++) {
			randomSy += obstacleRandomArray[i].sheight
		}
		obstacleArray.push({
			"startPos": runRoadTopPos[obstacleRandomPosArr[obstacleRandomPosIndex]],
			"endPos": runRoadBottomPos[obstacleRandomPosArr[obstacleRandomPosIndex]],
			"randomIndex": obstacleRandomPosArr[obstacleRandomPosIndex],
			"speed": obstacleSpeed, //random.speed,
			"acceleration": random.acceleration,
			"moveDistance": random.moveDistance,
			"sx": random.sx,
			"sy": random.sy,
			"swidth": random.swidth,
			"sheight": random.sheight,
			"x": random.x,
			"y": random.y,
			"width": random.width,
			"height": random.height
		})
		obstacleNum = 0;
	}
	if (obstacleArray.length) {
		for (var i = 0; i < obstacleArray.length; i++) {
			drawObstacle(obstacleArray[i].randomIndex, i);
		}
	}
	obstacleAnimateFrame = requestAnimationFrame(arguments.callee);
}

function rewardGoodsAnimate() {
	
	//随机奖励物
	//console.log(rewardGoodsNum + ';' + rewardGoodsRandomTime)
	if (rewardGoodsNum == rewardGoodsRandomTime) {
		//rewardGoodsRandomPosIndex = parseInt(Math.random()*rewardGoodsRandomPosArr.length);
		rewardGoodsRandomPosIndex = randomPosIndex(obstacleRandomPosIndex);
		var randomRewardGoodsIndex = parseInt(Math.random() * rewardGoodsRandomArray.length);
		var random = rewardGoodsRandomArray[randomRewardGoodsIndex];
		var randomSy = 0;
		for (var i = 0; i < randomRewardGoodsIndex; i++) {
			randomSy += rewardGoodsRandomArray[i].sheight
		}
		rewardGoodsArray.push({
			"startPos": runRoadTopPos[rewardGoodsRandomPosArr[rewardGoodsRandomPosIndex]],
			"endPos": runRoadBottomPos[rewardGoodsRandomPosArr[rewardGoodsRandomPosIndex]],
			"randomIndex": rewardGoodsRandomPosArr[rewardGoodsRandomPosIndex],
			"wardMetes": random.wardMetes,
			"speed": random.speed,
			"acceleration": random.acceleration,
			"moveDistance": random.moveDistance,
			"sx": random.sx,
			"sy": random.sy,
			"swidth": random.swidth,
			"sheight": random.sheight,
			"x": random.x,
			"y": random.y,
			"width": random.width,
			"height": random.height
		})
		rewardGoodsNum = 0;
	}
	if (rewardGoodsArray.length) {
		for (var i = 0; i < rewardGoodsArray.length; i++) {
			drawRewardGoods(rewardGoodsArray[i].randomIndex, i);
		}
	}
	rewardGoodsAnimateFrame = requestAnimationFrame(arguments.callee);
}
function drawRunMetersAnimate() {
	//跑步距离
	runMeters++;
	deawRunAnimateFrame = requestAnimationFrame(arguments.callee);
}
function runRoadAnimate() {
	runRoadNum += runRoadSpeed;
	runRoadAnimateFrame = requestAnimationFrame(arguments.callee);
}
function accelerateAnimate() {
	// monkeySpeedRate = 4;
	// accelerate = true;
	// accelerateMeters = true;
	//accelerateWardMeters = parseInt(thisRewardGoods.wardMetes);
	if (accelerate) {
		if (accelerateMeters) {
			runMeters += accelerateWardMeters;
			accelerateMeters = false;
		}
		accelerateNum++;
		if (accelerateNum < accelerateTime) {
			drawMonkeyAcceleration();
		} else {
			accelerateNum = 0;
			monkeySpeedRate = 0;
			accelerate = false;
		}
	}
	accelerateAnimateFrame = requestAnimationFrame(arguments.callee)
}
function animate() {
	// gameTimes++;
	// var difficultyNum = parseInt(gameTimes/difficulty);
	// if(difficultyNum){
	// 	gameTimes=0;
	// 	obstacleRandomTime -= 60;
	// }
	
	obstacleNum++;
	rewardGoodsNum++;
	//换背景
	if (runMeters < 10000) {
		drawImagesBg(photoBgImage1);
	} else if (runMeters >= 10000 && runMeters <= 30000) {
		drawImagesBg(photoBgImage2);
	} else if (runMeters > 30000) {
		drawImagesBg(photoBgImage3);
	}
	//增加速度
	if (parseInt(runMeters % 1000)==0) {

		obstacleSpeed++;
		// console.log(obstacleRandomTime)
		if(obstacleRandomTime>10){
			obstacleNum=0;
			obstacleRandomTime-=10;
		}
		
	}
	//跑步距离
	drawRunMeters();
	//画左边跑道
	drawRunRoad(runRoadTopPos[2], runRoadBottomPos[2]);
	//画右边跑道
	drawRunRoad(runRoadTopPos[4], runRoadBottomPos[4]);

	canvasAnimateFrame = requestAnimationFrame(arguments.callee)
}
function animateMonkey() {
	//画猴子
	drawMonkey();
	canvasAnimateMonkeyFrame = requestAnimationFrame(arguments.callee)
}
function difficulty() {

}
function canvastouch() {
	touch.on(theCanvas, 'swipeleft swiperight', function(ev) {
		if (ev.type == "swipeleft") {
			if (monkeyRunRoad > 1) {
				monkeyRunRoad -= 2;
			}
		} else if (ev.type == "swiperight") {
			if (monkeyRunRoad < 5) {
				monkeyRunRoad += 2;
			}
		}
	});
}
function isGameOver(){
	if(gameover){
		gameOver();
	}
	isGameoverFrame = requestAnimationFrame(arguments.callee)
}
function gameOver() {

	cancelAnimationFrame(canvasAnimateFrame);
	cancelAnimationFrame(obstacleAnimateFrame);
	cancelAnimationFrame(rewardGoodsAnimateFrame);
	cancelAnimationFrame(deawRunAnimateFrame);
	cancelAnimationFrame(runRoadAnimateFrame);
	cancelAnimationFrame(accelerateAnimateFrame);
	cancelAnimationFrame(canvasAnimateMonkeyFrame);

	//document.getElementById('canvas').parentNode.removeChild(document.getElementById('canvas')); 
	var gameoverHtml = '';
	gameoverHtml += '<div class="share-finger-box" id="share-finger-box"><div class="share-finger-shadow"></div><div class="share-finger" id="share-finger"></div></div>';
	gameoverHtml += '<div class="run-meters">我跑了' + Math.ceil(runMeters / 10) + '米！<br><a class="share-text-a" href="http://www.caicui.com/weixin/login.do?cardCode=NID3&actvCode=VQSX">奔跑吧，猴年，来点加速度，送中博财萃ACCA体验课程</a></div>';
	gameoverHtml += '<div class="gameover-button-box">';
	gameoverHtml += '<a class="gameover-button againGame-button" id="againGame-button" href="javascript:;">再玩一次</a>';
	gameoverHtml += '<a class="gameover-button share-button" id="share-button" href="javascript:;">炫耀一下</a>';
	gameoverHtml += '</div>';
	var div = document.createElement("div");
	div.id = 'gameover';
	div.innerHTML = gameoverHtml;

	//setTimeout(function(){
	document.body.appendChild(div);
	document.title = '我跑了' + Math.ceil(runMeters / 10) + '米，不服来战！';
	myAddEvent(document.getElementById('againGame-button'), 'click', againGame);
	myAddEvent(document.getElementById('share-button'), 'click', shareWeixin);
	gameover = false;
	return false;
	//},500)



}

function againGame() {
	document.getElementById('gameover').parentNode.removeChild(document.getElementById('gameover'));
	init();
}

function init() {
	isGameOver()
	initCanvas();

	animate();
	obstacleAnimate();

	rewardGoodsAnimate();
	drawRunMetersAnimate();
	runRoadAnimate();
	accelerateAnimate();
	animateMonkey();

}
window.addEventListener('load', function() {
	// loadingInit();

	// runningGame = new RunningGame();
	// runningGame.init();
	// runningGame.touch();


	//loadingEnd = true;
	
	loadingInit();
	(function isLoadingEnd() {

		if (loadingEnd) {
			cancelAnimationFrame(isLoadingEndAnimateFrame);

			touch.on(window, 'hold tap doubletap', function(ev) {
				if (oneClick) {
					oneClick = false;
					init();
					canvastouch();
				}
			});

		} else {
			isLoadingEndAnimateFrame = requestAnimationFrame(arguments.callee);
		}

	})();
	
}, false);