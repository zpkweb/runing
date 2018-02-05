//障碍物
var obstacleNum = 0; //障碍物递增数
var obstacleRandomTime = 100; //出现一个障碍物的间隔
var obstacleRandomPosIndex = 0;
var obstacleRandomPosArr = [1, 3, 5]; //障碍物随即出现的位置数组
var obstacleRandomPos = 0; //障碍物随即出现的位置
var obstacleArray = []; //屏幕上面的障碍物
var obstacleAnimateFrame = '';

var obstacleImage = new Image();
var obstacleSrc = "images/obstacle.png"; //障碍物坐标图片
var obstacleNumber = 6;
var obstacleImageWidth = 0;
var obstacleImageHeight = 0;
var obstacleImageRatio = 0;
var obstacleMoveDistance = 0; //
var obstacleSpeed = 5; //障碍物速率  难度
var obstacleAcceleration = 1; //加速度

var obstacleSWidth = 700;
var obstacleSHeight = 700;
var obstacleX = 0;
var obstacleY = 0;
var obstacleSX = 0;
var obstacleSY = 0;
var obstacleRandomArray = [{
	'id': '0',
	'speed': obstacleSpeed,
	'acceleration': 1,
	'moveDistance': 0,
	'sx': 200,
	'sy': 150,
	'swidth': 310,
	'sheight': 310,
	'x': 0,
	'y': 0,
	'width': 100,
	'height': 0
}, {
	'id': '1',
	'speed': obstacleSpeed,
	'acceleration': 1,
	'moveDistance': 0,
	'sx': 200,
	'sy': 580,
	'swidth': 340,
	'sheight': 340,
	'x': 0,
	'y': 0,
	'width': 100,
	'height': 0
}, {
	'id': '2',
	'speed': obstacleSpeed,
	'acceleration': 1,
	'moveDistance': 0,
	'sx': 200,
	'sy': 1060,
	'swidth': 340,
	'sheight': 340,
	'x': 0,
	'y': 0,
	'width': 100,
	'height': 0
}, {
	'id': '5',
	'speed': obstacleSpeed,
	'acceleration': 1,
	'moveDistance': 0,
	'sx': 170,
	'sy': 2340,
	'swidth': 360,
	'sheight': 360,
	'x': 0,
	'y': 0,
	'width': 100,
	'height': 0
}]


// var obstacleRandomArray = [{
// 	'id' : '0',
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 468,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 136
// },{
// 	'id' : '1',
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 468,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 136
// },{
// 	'id' : '2',
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 468,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 136
// },{
// 	'id' : '5',
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 388,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 136
// }]


// var obstacleRandomArray = [{
// 	'id' : '0',
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 468,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 136
// },{
// 	'id' : '1',
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 468,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 136
// },{
// 	'id' : '2',
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 468,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 136
// },{
// 	'id' : '3',
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 468,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 136
// },{
// 	'id' : '4',
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 468,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 136
// },{
// 	'id' : '5',
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 388,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 136
// }]