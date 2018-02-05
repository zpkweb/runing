document.body.addEventListener("touchmove", function() {
	event.preventDefault();
});
/*
function loadImages(ctx,sources,callback){
    var loadedImages = 0;    
    var numImages = 0;  
    ctx.font='14px bold';
    ctx.lineWidth=5;
    var clearWidth=canvas.width;
    var clearHeight=canvas.height;
    // get num of sources    
    for (var src in sources) {    
        numImages++;    
    }    
    var images = 0;

    for (var i in sources) {
    	var that = i;
    	var src = sources[i]
    	console.log(src)
        that = new Image();
        that.src = src
        console.log(sources[i])
       //把sources中的图片信息导入images数组  
       //that.src = sources[src];    
        //当一张图片加载完成时执行    
        that.onload = function(){ 
            //重绘一个进度条
            ctx.clearRect(0,0,clearWidth,clearHeight);
            ctx.fillText('Loading:'+loadedImages+'/'+numImages,200,280);
            ctx.save();
            ctx.strokeStyle='#555';
            ctx.beginPath();
            ctx.moveTo(200,300);
            ctx.lineTo(600,300);
            ctx.stroke();
            ctx.beginPath();
            ctx.restore();
            ctx.moveTo(200,300);
            ctx.lineTo(loadedImages/numImages*400+200,300);  
            ctx.stroke();
            //当所有图片加载完成时，执行回调函数callback
            if (++loadedImages >= numImages) {    
                if(callback){
                	callback();  
                }  
            }    
        };  
        that.src = sources[i]; 
    }    
}   
*/ 
var currentProgress = Math.ceil(100 / 10);
var loadingProgress = 0;
var progressAnimationFrame = '';
//function progress(ctx,currentProgress) {

particle_no = 225;

var width = wWindow * 0.8;
var height = 25;
var x = wWindow * 0.1;
var y = hWindow - 45;
var endProgress = width * (currentProgress / 100);
var speed = 5;
var counter = 0;
var particles = [];
// var w = 400, h = 200;
// canvas.width = w;
// canvas.height = h;

function reset() {
	//ctx.fillStyle = "#272822";
	//ctx.fillRect(0,0,width,height);
	context.drawImage(loadingImage, 0, 0, loadingImage.width, loadingImage.height, 0, 0, wWindow, hWindow);
	ctx.fillStyle = "#171814";
	//ctx.fillStyle = "#f00";
	ctx.fillRect(x, y, width, height);
}

function progressbar() {
	this.widths = 0;
	this.hue = 0;

	this.draw = function() {
		ctx.save();
		ctx.fillStyle = 'hsla(' + this.hue + ', 100%, 40%, 1)';
		ctx.fillRect(x, y, this.widths, height);
		var grad = ctx.createLinearGradient(0, 0, 0, 130);
		grad.addColorStop(0, "transparent");
		grad.addColorStop(1, "rgba(0,0,0,0.5)");
		ctx.fillStyle = grad;
		ctx.fillRect(x, y, this.widths, height);
		context.restore();
	}
}

function particle() {
	this.x = x + bar.widths;
	this.y = y;

	this.vx = 0.8 + Math.random() * 1;
	this.v = Math.random() * 5;
	this.g = 1 + Math.random() * 3;
	this.down = false;

	this.draw = function() {
		ctx.save();
		ctx.fillStyle = 'hsla(' + (bar.hue + 0.3) + ', 100%, 40%, 1)';;
		var size = Math.random() * 2;
		ctx.fillRect(this.x, this.y, size, size);
		context.restore();
	}
}

bar = new progressbar();

function draw() {
	reset();
	counter++

	bar.hue += 0.8;

	bar.widths += speed;
	if (bar.widths > width) {
		// bar.hue = 0;
		// bar.widths = 0;
		// currentProgress = 0;
		// counter = 0;
		// cancelAnimationFrame(progressAnimationFrame);
		//return false;
		// if (counter > 215) {
		// 	reset();
		// 	bar.hue = 0;
		// 	bar.widths = 0;
		// 	counter = 0;
		// 	particles = [];
		// } else {
		// 	bar.hue = 126;
		// 	bar.widths = 351;
		// 	bar.draw();
		// }
	} else {
		bar.draw();
		for (var i = 0; i < particle_no; i += 10) {
			particles.push(new particle());
		}
	}
	update();
}

function update() {
	for (var i = 0; i < particles.length; i++) {
		var p = particles[i];
		p.x -= p.vx;
		if (p.down == true) {
			p.g += 0.1;
			p.y += p.g;
		} else {
			if (p.g < 0) {
				p.down = true;
				p.g += 0.1;
				p.y += p.g;
			} else {
				p.y -= p.g;
				p.g -= 0.1;
			}
		}
		p.draw();
	}
}

function animloop() {
	//console.log(width+';'+bar.widths+';'+loadingProgress+';'+width*(loadingProgress/100));

	if (bar.widths < width * (loadingProgress / 100)) {
		draw();
	} else if (bar.widths >= width) {

		gameShow();
		loadingEnd = true;
		return false;
	};
	progressAnimationFrame = requestAnimationFrame(animloop);
}

//draw();
//animloop();
//}
var ctx = '';

function loadingInit() {

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
		ctx = theCanvas.getContext('2d');
		//loadImages(context,sources);
	}

	loadingImage.src = loadingImageSrc;
	loadingImage.onload = function() {
		//context.drawImage(loadingImage, 0, 0, loadingImage.width, loadingImage.height, 0, 0, wWindow, hWindow);
		//progress(context, currentProgress);


		animloop(); //进度条
		imagesInit();
	}
}

function imagesInit() {

	photoBgImage1.src = photoBgImageSrc1;
	photoBgImage1.onload = function() {
		loadingProgress += currentProgress;
		photoBgWidth = photoBgImage1.width;
		photoBgHeight = photoBgImage1.height;
	}
	photoBgImage2.src = photoBgImageSrc2;
	photoBgImage2.onload = function() {
		loadingProgress += currentProgress;
		photoBgWidth = photoBgImage2.width;
		photoBgHeight = photoBgImage2.height;
	}
	photoBgImage3.src = photoBgImageSrc3;
	photoBgImage3.onload = function() {
		loadingProgress += currentProgress;
		photoBgWidth = photoBgImage3.width;
		photoBgHeight = photoBgImage3.height;
	}

	monkeyImage.src = monkeySrc;
	monkeyImage.onload = function() {
		//setTimeout(function() {
		loadingProgress += currentProgress;
		//}, 1000)
	}
	accelerateImage.src = accelerationSrc;
	accelerateImage.onload = function() {
		//setTimeout(function() {
		loadingProgress += currentProgress;
		//}, 1500)
	}
	obstacleImage.src = obstacleSrc;
	obstacleImage.onload = function() {
		//setTimeout(function() {
		loadingProgress += currentProgress;
		//}, 1000)
		obstacleImageWidth = obstacleImage.width;
		obstacleImageHeight = obstacleImage.height;
		obstacleSHeight = Math.ceil(obstacleImageHeight / obstacleNumber);
		obstacleImageRatio = obstacleImageWidth / obstacleSHeight;

	}
	rewardGoodsImage.src = rewardGoodsSrc;
	rewardGoodsImage.onload = function() {
		//setTimeout(function() {
		loadingProgress += currentProgress;
		//}, 2500)
	}
	gameShowsImage.src = gameShowsSrc;
	gameShowsImage.onload = function() {
		gameShowsWidth = gameShowsImage.width;
		gameShowsHeight = gameShowsImage.height;
		loadingProgress += currentProgress;
	}
	clickImage.src = clickImageSrc;
	clickImage.onload = function() {
		clickImageWidth = clickImage.width;
		clickImageHeight = clickImage.height;
		loadingProgress += currentProgress;
	}

	gameoverImage.src = gameoverImageSrc;
	gameoverImage.onload = function() {
		loadingProgress += currentProgress;
	}
}

function gameShow() {
	context.drawImage(gameShowsImage, 0, 0, gameShowsImage.width, gameShowsImage.height, 0, 0, wWindow, hWindow);

}