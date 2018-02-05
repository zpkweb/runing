function canvasSupport() {
	return !!document.createElement('testcanvas').getContext();
}

function myAddEvent(obj, ev, fn) {
	if (obj.attachEvent) {
		obj.attachEvent('on' + ev, fn);
	} else {
		obj.addEventListener(ev, fn, false);
	}
}



function shareWeixin() {
	// wx.onMenuShareTimeline({
	// 	title: '奔跑吧2016',
	// 	link: 'http://movie.douban.com/subject/25785114/',
	// 	imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
	// 	trigger: function(res) {
	// 		// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
	// 		alert('用户点击分享到朋友圈');
	// 	},
	// 	success: function(res) {
	// 		alert('已分享');
	// 	},
	// 	cancel: function(res) {
	// 		alert('已取消');
	// 	},
	// 	fail: function(res) {
	// 		alert(JSON.stringify(res));
	// 	}
	// });

	document.getElementById('share-finger-box').style.display = 'block';
	myAddEvent(document.getElementById('share-finger-box'), 'click', function() {
		document.getElementById('share-finger-box').style.display = 'none';
	});

}

function drawLoading() {
	context.fillStyle = '#f00';
	context.fillRect(0, 0, loadingProgress, 50);
	if (loadingProgress == 100) {
		loadingEnd = true;
		//document.getElementById('canvas').parentNode.removeChild(document.getElementById('canvas')); 
	} else {
		loadingAnimateFrame = requestAnimationFrame(arguments.callee)
	}

}

function drawRunMeters() {
	//标题
	context.font = runMetersTextAttr.fontStyle + " " + runMetersTextAttr.fontWeight + " " + runMetersTextAttr.fontSize + "px " + runMetersTextAttr.fontFace;
	context.fillStyle = runMetersTextAttr.fillColor;
	context.fillText(runMetersTextAttr.fillText, runMetersTextAttr.x, runMetersTextAttr.y);
	drawRunMetersBg();
}

function drawRunMetersBg() {
	var runMetersTotal = Math.ceil(runMeters / 10);
	var metersToString = runMetersTotal.toString();
	var metersLength = metersToString.length;
	for (var i = 0; i < metersLength; i++) {

		//背景
		var posX = (runMetersAttrBgAttr.x) + i * runMetersAttrBgAttr.width;

		var posY = (runMetersAttrBgAttr.y);
		var width = runMetersAttrBgAttr.width;
		var height = runMetersAttrBgAttr.height;
		context.fillStyle = runMetersAttrBgAttr.fontColor;
		context.fillRect(posX, posY, width, height);
		//数字
		var text = metersToString.substr(i, 1);
		var textPosX = posX + width / 2 - 5;
		var textPosY = posY + height / 2 + 10 //(runMetersAttrBgAttr.height/2)+runMetersAttr.fontSize/2;
		context.font = runMetersAttr.fontStyle + " " + runMetersAttr.fontWeight + " " + runMetersAttr.fontSize + "px " + runMetersAttr.fontFace;
		context.fillStyle = runMetersAttr.fillColor;
		context.fillText(text, textPosX, textPosY);

		if (i) {
			//context.fillStyle = runMetersAttr.fillColor;
			context.clearRect(posX - 1, posY + 5, 1, height - 10);
		}
	}
}

function drawImagesBg(img) {
	context.drawImage(img, 0, 0, photoBgWidth, photoBgHeight, 0, 0, wWindow, hWindow);
}

function drawMonkey() {
	var frameNumber = parseInt(monkeyCurrentFrames / monkeySpeed);
	//console.log(frameNumber+';'+monkeyFrames+';'+monkeySpeed)
	if (frameNumber >= monkeyFrames) {
		monkeyCurrentFrames = 0;
		frameNumber = 0;
	}

	if (monkeySpeedRate) {
		frameNumber = monkeySpeedRate
	}
	//runRoadBottomWidthItem
	//var x = runRoadBottomPos[monkeyRunRoad].x  - monkeyAttr.width / 2;
	//var y = runRoadBottomPos[monkeyRunRoad].y - monkeyAttr.height;
	//monkeyAttr.y = runRoadBottomPos[monkeyRunRoad].y -75;
	//context.drawImage(monkeyImage, 0, 1300 * frameNumber, 1300, 1300, x, y , monkeyAttr.width, monkeyAttr.height);
	var sx = 280;
	var sy = 1300 * frameNumber + 140;
	var swidth = 900;
	var sheight = 900;
	var x = runRoadBottomPos[monkeyRunRoad].x - runRoadBottomWidthItem;
	var y = runRoadBottomPos[monkeyRunRoad].y - runRoadBottomWidthItem;
	var x = runRoadBottomPos[monkeyRunRoad].x - (runRoadBottomWidthItem / 4);
	var y = runRoadBottomPos[monkeyRunRoad].y - (runRoadBottomWidthItem / 2);
	var width = runRoadBottomWidthItem / 2;
	var height = runRoadBottomWidthItem / 2;
	context.drawImage(monkeyImage, sx, sy, swidth, sheight, x, y, width, height);
	monkeyCurrentFrames++;
}

function drawMonkeyAcceleration() {
	var x = runRoadBottomPos[monkeyRunRoad].x;
	var y = runRoadBottomPos[monkeyRunRoad].y;
	//context.drawImage(accelerateImage, 0, 0, 640, 960, accelerationAttr.x, accelerationAttr.y, accelerationAttr.width, accelerationAttr.height);
	// 	context.save();
	// 	context.translate(x, y);
	//console.log(runRoadBottomPos[monkeyRunRoad].x+';'+runRoadBottomPos[monkeyRunRoad].y)
	//console.log(accelerationAttr.x+';'+accelerationAttr.y+';'+runRoadBottomPos[monkeyRunRoad].x+';'+runRoadBottomPos[monkeyRunRoad].y)

	var x = runRoadBottomPos[monkeyRunRoad].x - accelerationAttr.x;
	var y = runRoadBottomPos[monkeyRunRoad].y - accelerationAttr.y;
	//console.log(x+';'+y)
	context.drawImage(accelerateImage, 0, 0, 640, 960, x, y, accelerationAttr.width, accelerationAttr.height);
	// context.restore();
}

function newMonkeyPos(startPos, endPos) {
	var distance = getDistance(startPos, endPos);
	var angle = Math.atan2(endPos.x - startPos.x, endPos.y - startPos.y) * 180 / Math.PI;
	var sin = Math.sin(angle * Math.PI / 180);
	var cos = Math.cos(angle * Math.PI / 180);
	//monkeyAttr.x = Math.ceil(distance * sin);
	//monkeyAttr.y = Math.ceil(distance * cos);
	return {
		'width': runRoadBottomWidthItem / 2,
		'x': Math.ceil(distance * sin),
		'y': Math.ceil(distance * cos)
	}
}
//障碍物
function drawObstacle(randomPosIndex, obstacleIndex) {

	var thisObstacle = obstacleArray[obstacleIndex];
	var startPos = thisObstacle.startPos;
	var endPos = thisObstacle.endPos;

	var distance = getDistance(startPos, endPos);

	if (thisObstacle.moveDistance < distance - (thisObstacle.height / 2)) {
		//thisObstacle.acceleration += thisObstacle.acceleration/50;
		//thisObstacle.moveDistance += thisObstacle.speed + Math.ceil(thisObstacle.acceleration);
		thisObstacle.moveDistance += thisObstacle.speed;
	} else {
		obstacleArray.splice(obstacleIndex, 1);
		return false;
	}
	context.save();
	context.translate(startPos.x, startPos.y);
	//var movesLength = parseInt(distance / thisObstacle.speed);
	var angle = Math.atan2(endPos.x - startPos.x, endPos.y - startPos.y) * 180 / Math.PI;
	var sin = Math.sin(angle * Math.PI / 180);
	var cos = Math.cos(angle * Math.PI / 180);
	//thisObstacle.x = Math.ceil(thisObstacle.moveDistance * sin);
	//thisObstacle.y = Math.ceil(thisObstacle.moveDistance * cos);

	var currentWidth = currentRunRoadWidth(runRoadTopPos[0], runRoadBottomPos[0], thisObstacle.y);
	var currentHeight = Math.ceil(currentWidth / (thisObstacle.swidth / thisObstacle.sheight));

	//thisObstacle.width =  currentWidth;


	thisObstacle.sx = thisObstacle.sx;
	thisObstacle.sy = thisObstacle.sy;
	thisObstacle.swidth = thisObstacle.swidth;
	thisObstacle.sheight = thisObstacle.sheight;
	thisObstacle.x = Math.ceil(thisObstacle.moveDistance * sin) - (runRoadTopWidthItem / 2);
	thisObstacle.y = Math.ceil(thisObstacle.moveDistance * cos) - (runRoadTopWidthItem / 2);
	thisObstacle.width = runRoadTopWidthItem;
	thisObstacle.height = runRoadTopWidthItem;
	collide(newMonkeyPos(startPos, runRoadBottomPos[monkeyRunRoad]), thisObstacle, function() {
		//console.log(JSON.stringify(obstacleArray))
		//console.log(JSON.stringify(rewardGoodsArray))
		console.log("碰到障碍物");
		obstacleArray = [];
		gameover = true;
		monkeySpeedRate = 5;

	})
	context.drawImage(obstacleImage, thisObstacle.sx, thisObstacle.sy, thisObstacle.swidth, thisObstacle.sheight, thisObstacle.x, thisObstacle.y, thisObstacle.width, thisObstacle.height);
	context.restore();
}
//奖励物品
function drawRewardGoods(randomPosIndex, rewardGoodsIndex) {

	var thisRewardGoods = rewardGoodsArray[rewardGoodsIndex];
	var startPos = thisRewardGoods.startPos;
	var endPos = thisRewardGoods.endPos;

	var distance = getDistance(startPos, endPos);
	if (thisRewardGoods.moveDistance < distance - thisRewardGoods.height / 2) {
		// thisRewardGoods.acceleration += thisRewardGoods.acceleration/50;
		// thisRewardGoods.moveDistance += thisRewardGoods.speed + Math.ceil(thisRewardGoods.acceleration);
		thisRewardGoods.moveDistance += thisRewardGoods.speed;
	} else {
		rewardGoodsArray.splice(rewardGoodsIndex, 1);
		return false;
	}
	context.save();
	context.translate(startPos.x, startPos.y);
	var movesLength = parseInt(distance / thisRewardGoods.moveDistance);
	var angle = Math.atan2(endPos.x - startPos.x, endPos.y - startPos.y) * 180 / Math.PI;
	var sin = Math.sin(angle * Math.PI / 180);
	var cos = Math.cos(angle * Math.PI / 180);


	var currentWidth = currentRunRoadWidth(runRoadTopPos[0], runRoadBottomPos[0], thisRewardGoods.y);
	var currentHeight = Math.ceil(currentWidth / (thisRewardGoods.swidth / thisRewardGoods.sheight));
	//thisRewardGoods.width = currentWidth;
	//thisRewardGoods.height =  currentWidth;
	//thisRewardGoods.width = (currentWidth+currentHeight)/2;
	//thisRewardGoods.height = (currentWidth+currentHeight)/2;


	thisRewardGoods.sx = thisRewardGoods.sx;
	thisRewardGoods.sy = thisRewardGoods.sy;
	thisRewardGoods.swidth = thisRewardGoods.swidth;
	thisRewardGoods.sheight = thisRewardGoods.sheight;
	thisRewardGoods.x = Math.ceil(thisRewardGoods.moveDistance * sin) - runRoadTopWidthItem / 2;
	thisRewardGoods.y = Math.ceil(thisRewardGoods.moveDistance * cos) - runRoadTopWidthItem / 2;
	thisRewardGoods.width = runRoadTopWidthItem;
	thisRewardGoods.height = runRoadTopWidthItem;

	collide(newMonkeyPos(startPos, runRoadBottomPos[monkeyRunRoad]), thisRewardGoods, function() {
		console.log("碰到奖励物品");
		monkeySpeedRate = 4;
		accelerate = true;
		accelerateMeters = true;
		accelerateWardMeters = parseInt(thisRewardGoods.wardMetes);
		rewardGoodsArray.splice(rewardGoodsIndex, 1);

		
		
	})
	context.drawImage(rewardGoodsImage, thisRewardGoods.sx, thisRewardGoods.sy, thisRewardGoods.swidth, thisRewardGoods.sheight, thisRewardGoods.x, thisRewardGoods.y, thisRewardGoods.width, thisRewardGoods.height);
	context.restore();
}


function getDistance(startPos, endPos) {
	var roadX = endPos.x - startPos.x;
	var roadY = endPos.y - startPos.y;
	var distance = Math.sqrt(roadX * roadX + roadY * roadY);
	return distance;
}

function drawRunRoad(startPos, endPos, shape) {

	context.save();
	context.translate(startPos.x, startPos.y);

	var angle = Math.atan2(endPos.x - startPos.x, endPos.y - startPos.y) * 180 / Math.PI;
	var sin = Math.sin(angle * Math.PI / 180);
	var cos = Math.cos(angle * Math.PI / 180);

	var roadPosArr = [];
	var line = Math.ceil(runRoadHeight / runRoadSpacingItem);
	var lineSin = Math.ceil(line * sin);
	var lineCos = Math.ceil(line * cos);
	var roadIntervalWidthSin = Math.ceil(runRoadSpacing * sin);
	var roadIntervalWidthCos = Math.ceil(runRoadSpacing * cos);
	var runRoadNumSin = Math.ceil(runRoadNum * sin);
	var runRoadNumCos = Math.ceil(runRoadNum * cos)
	context.strokeStyle = runRoadColor;
	context.lineWidth = runRoadWidth;
	context.lineCap = 'square';

	for (var i = 0; i <= runRoadSpacingItem; i++) {

		roadPosArr.push({
			'x': Math.ceil(lineSin * i),
			'y': Math.ceil(lineCos * i)
		})

	}

	var roadPosArrLength = roadPosArr.length - 1;
	var roadPosArr2 = [{
		'x': 0,
		'y': 0
	}];
	context.beginPath();
	for (var i = 0; i < roadPosArrLength; i++) {
		var moveToX = Math.ceil(roadPosArr[i].x + runRoadNumSin);
		var moveToY = Math.ceil(roadPosArr[i].y + runRoadNumCos);
		var lineToX = Math.ceil(roadPosArr[i + 1].x - roadIntervalWidthSin + runRoadNumSin);
		var lineToY = Math.ceil(roadPosArr[i + 1].y - roadIntervalWidthCos + runRoadNumCos);
		context.moveTo(moveToX, moveToY);
		context.lineTo(lineToX, lineToY);

		var roadPosArrX = 0;

		if (Math.abs(lineToX) >= Math.abs(roadPosArr[roadPosArrLength].x) && lineToY >= roadPosArr[roadPosArrLength].y) {
			roadPosArr2.push({
				'x': lineToX - roadPosArr[roadPosArrLength].x,
				'y': lineToY - roadPosArr[roadPosArrLength].y
			})
			var roadPosArr2Length = roadPosArr2.length - 1;
			for (var j = 0; j < roadPosArr2Length; j++) {
				if (j >= 1) {
					var moveToX = Math.ceil(roadPosArr2[j].x + roadIntervalWidthSin);
					var moveToY = Math.ceil(roadPosArr2[j].y + roadIntervalWidthCos);
				} else {
					if (Math.abs(roadPosArr2[j + 1].x) > Math.abs(lineSin) - Math.abs(roadIntervalWidthSin)) {
						var moveToX = Math.ceil(roadPosArr2[j + 1].x - lineSin + roadIntervalWidthSin);
						var moveToY = Math.ceil(roadPosArr2[j + 1].y - lineCos + roadIntervalWidthCos);
					} else {
						var moveToX = Math.ceil(roadPosArr2[j].x);
						var moveToY = Math.ceil(roadPosArr2[j].y);
					}
				}
				var lineToX = Math.ceil(roadPosArr2[j + 1].x);
				var lineToY = Math.ceil(roadPosArr2[j + 1].y);
				context.moveTo(moveToX, moveToY);
				context.lineTo(lineToX, lineToY);
			}
		}
	}
	context.stroke();
	if (runRoadNum >= runRoadHeight) {
		runRoadNum = 0;
	}

	context.closePath();
	context.restore();
}
//碰撞检测
function collide(obj1, obj2, callback) {
	var dx = obj2.x - obj1.x,
		dy = obj2.y - obj1.y,
		dist = Math.sqrt(dx * dx + dy * dy);
	if (dist >= (obj1.width / 2 + obj2.width / 2)) {
		return false;
	} else {
		if (callback) {
			callback();
		}
	}
}

function currentRunRoadWidth(startPos, endPos, currentPosY) {
	context.save();
	context.translate(startPos.x, startPos.y);
	var angle = Math.atan2(endPos.x - startPos.x, endPos.y - startPos.y) * 180 / Math.PI;
	var tan = Math.abs(Math.tan(angle * Math.PI / 180));
	var currenWidth = runRoadTopNumWidth + Math.ceil(currentPosY * tan);
	context.restore();
	return currenWidth
}