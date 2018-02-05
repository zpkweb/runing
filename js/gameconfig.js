//浏览器宽度和高度
var wWindow = document.body.offsetWidth;
var hWindow = document.body.offsetHeight;
//游戏
var runningGame = '';
var gameTimes = 0;
var difficulty = 600; //每过n秒难度加1 (1s=60)
var oneClick = true;
//点击分享手指
var clickImage = new Image();
var clickImageSrc = 'images/share-finger.png';
var clickImageWidth = 0;
var clickImageHeight = 0;
//结束背景
var isGameoverFrame = '';
var gameoverImage = new Image();
var gameoverImageSrc = 'images/gameover.jpg';

//初始化加载图片
var loading = '';
var loadingImage = new Image();
var loadingImageSrc = 'images/home.jpg';
var loadingTime = 0;
var loadingProgress = 0;
var loadingEnd = false;
var loadingAnimateFrame = '';
var isLoadingEndAnimateFrame = '';

//跑了多少米
var runMeters = 0;
var runMetersTextInterval = 10;

//画布背景
var photoBgImage = new Image();
//photoBgImage.src = "images/bg1.png";
var photoBgWidth = 0;
var photoBgHeight = 0;

var photoBgImageArray = ["images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg"];
var photoBgImage1 = new Image();
var photoBgImageSrc1 = photoBgImageArray[0];
var photoBgImage2 = new Image();
var photoBgImageSrc2 = photoBgImageArray[1];
var photoBgImage3 = new Image();
var photoBgImageSrc3 = photoBgImageArray[2];

var canvasAnimateFrame = '';
//canvas
var theCanvas = '';
var context = '';

//猴子
var monkeyImage = new Image();
//monkeyImage.src = monkeySrc;
var monkeySrc = "images/monkey.png";
var monkeyFrames = 3; //猴子一共多少帧图片
var monkeyCurrentFrames = 0; //
var monkeySpeed = 10; //猴子速度
var monkeySpeedRate = 0; //0-3跑步帧数4加速度5晕倒
var monkeyRunRoad = 3; //猴子在那个跑道
var monkeyAttr = {
	width: 200,
	height: 200
}
var monkeyBottom = 75;
var canvasAnimateMonkeyFrame = ''

//加速度效果
var accelerateImage = new Image();
var accelerate = false;
var accelerateMeters = false;
var accelerateWardMeters = 0;
var accelerationSrc = "images/accelerate.png";
var accelerateTime = 50;
var accelerateNum = 0;
var accelerationAttr = {
	sx: 300,
	sy: 576,

	x: (300 / 640) * wWindow,
	y: (576 / 960) * hWindow,
	width: wWindow,
	height: hWindow
}
var accelerateAnimateFrame = '';
//跑道
var runRoadAnimateFrame = '';
var runRoadNum = 0; //叠加数
var runRoadItem = 6; //跑道条数
var runRoadIndex = 3; //跑道序号
var runRoadSpeed = 2; //跑道速度
var runRoadColor = '#fff'; //跑道颜色
var runRoadHeight = 0; //跑道长度
var runRoadHeightFactor = 0.5 //跑道间隔长度系数
var runRoadWidth = 6; //跑道宽度
var runRoadSpacingItem = 3; //跑道间距个数
var runRoadSpacing = 0; //跑道间距长度
var runRoadSin = ''; //跑道正炫
var runRoadCos = ''; //跑道余炫
var runRoadTopWidth = Math.ceil((228.40 / 640) * wWindow);
var runRoadTopHeight = Math.ceil((280 / 960) * hWindow);
var runRoadBottomWidth = wWindow;
var runRoadBottomHeight = hWindow;

var runRoadTopWidthItem = Math.ceil(runRoadTopWidth / runRoadIndex);
var runRoadBottomWidthItem = Math.ceil(runRoadBottomWidth / runRoadIndex);

var runRoadPos = [];
var runRoadTopPos = [];
var runRoadBottomPos = [];

var runRoadTopNumWidth = Math.ceil(runRoadTopWidth / runRoadItem);
var runRoadBottomNumWidth = Math.ceil(runRoadBottomWidth / runRoadItem);
//跑道平均分成6份，每一份的坐标
for (var i = 0; i <= runRoadItem; i++) {
	runRoadTopPos.push({
		"x": Math.ceil(runRoadTopNumWidth * i + (wWindow - runRoadTopWidth) / 2),
		"y": Math.ceil(runRoadTopHeight)
	})
	runRoadBottomPos.push({
			"x": Math.ceil(runRoadBottomNumWidth * i),
			"y": Math.ceil(hWindow)
		})
		// runRoadTopPos.push(Math.round(runRoadTopNumWidth*i));
		// runRoadBottomPos.push(Math.round(runRoadBottomNumWidth*i));
}


var runMetersTextAttr = {
	"fontStyle": "normal",
	"fontWeight": "normal",
	"fontSize": 22,
	"fontFace": "serif",
	"fillColor": "#f3482d",
	"fillText": "已跑路程",
	"x": 20,
	"y": 30
}
var runMetersAttrBgAttr = {
	"width": 44,
	"height": 44,
	"fontColor": "#f3482d",
	"x": 20,
	"y": 40
}
var runMetersAttr = {
	"fontStyle": "normal",
	"fontWeight": "normal",
	"fontSize": 33,
	"fontFace": "serif",
	"fillColor": "#fff",
	//"x": 20,
	//"y": 10
}
var deawRunAnimateFrame = '';
//结束
var gameOverSrc = "images/gameover.jpg"
var gameoverAttr = {
	"fontStyle": "normal",
	"fontWeight": "normal",
	"fontSize": 72,
	"fontFace": "serif",
	"fillColor": "#f00",
	"fillText": "游戏结束！",
	"x": wWindow / 2 - 180,
	"y": hWindow / 2 - 36
}
var gameover = false;
var gameoverAnimate = '';

//再来一次按钮width:213px;height:55px;
var againGameButton = '';
var againGameTopLeftPos = {
	'x': Math.ceil((65 / 428) * wWindow),
	'y': Math.ceil((470 / 642) * hWindow)
}
var againGameBottomRightPos = {
		'x': Math.ceil(((65 + 213) / 428) * wWindow),
		'y': Math.ceil(((470 + 55) / 642) * hWindow)
	}
	//分享按钮
var shareButton = '';
var shareButtonTopLeftPos = {
	'x': Math.ceil((228 / 428) * wWindow),
	'y': Math.ceil((470 / 642) * hWindow)
}
var shareButtonBottomRightPos = {
	'x': Math.ceil(((228 + 213) / 428) * wWindow),
	'y': Math.ceil(((470 + 55) / 642) * hWindow)
}

//游戏玩法
var gameShows = '';
var gameShowsSrc = 'images/gameShows.jpg';
var gameShowsImage = new Image();
var gameShowsWidth = 0;
var gameShowsHeight = 0;