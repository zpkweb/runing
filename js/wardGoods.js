//奖励物品
var rewardGoodsNum = 0; //奖励物品递增数
var rewardGoodsRandomTime = 200; //出现一个奖励物品的间隔
var rewardGoodsRandomPosIndex = 0;
var rewardGoodsRandomPosArr = [1, 3, 5]; //奖励物品随即出现的位置数组
var rewardGoodsRandomPos = 0; //奖励物品随即出现的位置
var rewardGoodsArray = []; //屏幕上面的障碍物
var rewardGoodsAnimateFrame = '';

var rewardGoodsImage = new Image();
var rewardGoodsSrc = "images/fruits.png";
var rewardGoodsNumber = 8; //奖励物品个数
var rewardGoodsImageWidth = 0;
var rewardGoodsImageHeight = 0;
var rewardGoodsImageRatio = 0;
var rewardGoodsMoveDistance = 0; //
var rewardGoodsSpeed = 5; //奖励物品速率  难度
var rewardGoodsAcceleration = 1; //加速度
var rewardGoodsSWidth = 700;
var rewardGoodsSHeight = 700;
var rewardGoodsX = 0;
var rewardGoodsY = 0;
var rewardGoodsSX = 0;
var rewardGoodsSY = 0;
var wardMetesArray = [100, 200, 300, 400, 500, 600, 700, 800]

var rewardGoodsRandomArray = [{
	'id': '1',
	'wardMetes': 250,
	'speed': rewardGoodsSpeed,
	'acceleration': 1,
	'moveDistance': 0,
	'sx': 200,
	'sy': 580,
	'swidth': 370,
	'sheight': 370,
	'x': 0,
	'y': 0,
	'width': 100,
	'height': 0
}, {
	'id': '2',
	'wardMetes': 250,
	'speed': rewardGoodsSpeed,
	'acceleration': 1,
	'moveDistance': 0,
	'sx': 200,
	'sy': 1110,
	'swidth': 300,
	'sheight': 300,
	'x': 0,
	'y': 0,
	'width': 100,
	'height': 0
}, {
	'id': '4',
	'wardMetes': 250,
	'speed': rewardGoodsSpeed,
	'acceleration': 1,
	'moveDistance': 0,
	'sx': 200,
	'sy': 3150,
	'swidth': 300,
	'sheight': 300,
	'x': 0,
	'y': 0,
	'width': 100,
	'height': 0
}, {
	'id': '6',
	'wardMetes': 250,
	'speed': rewardGoodsSpeed,
	'acceleration': 1,
	'moveDistance': 0,
	'sx': 200,
	'sy': 2050,
	'swidth': 370,
	'sheight': 370,
	'x': 0,
	'y': 0,
	'width': 100,
	'height': 0
}]

// var rewardGoodsRandomArray = [{
// 	'id' : '0',
// 	'wardMetes' : 100,
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 500,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 0
// },{
// 	'id' : '1',
// 	'wardMetes' : 200,
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 540,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 0
// },{
// 	'id' : '2',
// 	'wardMetes' : 300,
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 500,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 0
// },{
// 	'id' : '3',
// 	'wardMetes' : 400,
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 470,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 0
// },{
// 	'id' : '4',
// 	'wardMetes' : 500,
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 500,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 0
// },{
// 	'id' : '5',
// 	'wardMetes' : 600,
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 550,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 0
// },{
// 	'id' : '6',
// 	'wardMetes' : 700,
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 500,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 0
// },{
// 	'id' : '7',
// 	'wardMetes' : 800,
// 	'speed' : 2,
// 	'acceleration' : 1,
// 	'moveDistance' : 0,
// 	'sx' : 0,
// 	'sy' : 0,
// 	'swidth' : 700,
// 	'sheight' : 460,
// 	'x' : 0,
// 	'y' : 0,
// 	'width' : 200,
// 	'height' : 0
// }]