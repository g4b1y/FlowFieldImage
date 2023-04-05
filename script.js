var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.width = 900; //window.innerWidth; 
canvas.height = 900; //window.innerHeight;
context.fillStyle = '#fff';
context.strokeStyle = '#fff';
context.lineWidth = 1;
var Particle = /** @class */ (function () {
    function Particle(effect) {
        this.effect = effect;
        this.x = Math.floor(Math.random() * this.effect.width);
        this.y = Math.floor(Math.random() * this.effect.height);
        this.speedX;
        this.speedY;
        this.history = [{ x: this.x, y: this.y }];
        this.angle = 0;
        this.newAngle = 0;
        this.timer = this.maxLength * 2;
        this.colors = ['#2c026b', '#730d9e', '#9622c7', '#b44ae0', '#cd72f2', 'white'];
        this.red = 0;
        this.green = 250;
        this.blue = 0;
        this.color = 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';
        this.maxLength = Math.floor(Math.random() * 50 + 20);
        this.speedModifier = Math.random() * 3 + 1;
        this.angleCorrection = Math.random() + 0.05 + 0.01; //0.27;
    }
    Particle.prototype.draw = function (context) {
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);
        for (var i = 0; i < this.history.length; i++) {
            context.lineTo(this.history[i].x, this.history[i].y);
        }
        context.strokeStyle = this.color;
        context.stroke();
    };
    Particle.prototype.update = function () {
        this.timer--;
        if (this.timer >= 1) {
            var x = Math.floor(this.x / this.effect.cellSize);
            var y = Math.floor(this.y / this.effect.cellSize);
            var index = y * this.effect.cols + x;
            var flowFieldIndex = this.effect.FlowField[index];
            if (flowFieldIndex) {
                // motion
                this.newAngle = flowFieldIndex.colorAngle;
                if (this.angle > this.newAngle) {
                    this.angle -= this.angleCorrection;
                }
                else if (this.angle < this.newAngle) {
                    this.angle += this.angleCorrection;
                }
                else {
                    this.angle = this.newAngle;
                }
                // color 
                if (flowFieldIndex.alpha > 0) {
                    this.red === flowFieldIndex.red ? this.red : this.red += (flowFieldIndex.red - this.red) * 0.1;
                    this.green === flowFieldIndex.green ? this.green : this.green += (flowFieldIndex.green - this.green) * 0.1;
                    this.blue === flowFieldIndex.blue ? this.blue : this.blue += (flowFieldIndex.blue - this.blue) * 0.1;
                    this.color = 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';
                }
            }
            this.speedX = Math.cos(this.angle);
            this.speedY = Math.sin(this.angle);
            this.x += this.speedX * this.speedModifier;
            this.y += this.speedY * this.speedModifier;
            this.history.push({ x: this.x, y: this.y });
            if (this.history.length > this.maxLength) {
                this.history.shift();
            }
        }
        else if (this.history.length > 1) {
            this.history.shift();
        }
        else {
            this.reset();
        }
    };
    Particle.prototype.reset = function () {
        var attemps = 0;
        var resetSuccess = false;
        while (attemps < 50 && !resetSuccess) {
            attemps++;
            var testIndex = Math.floor(Math.random() * this.effect.FlowField.length);
            if (this.effect.FlowField[testIndex].alpha > 0) {
                this.x = this.effect.FlowField[testIndex].x;
                this.y = this.effect.FlowField[testIndex].y;
                this.history = [{ x: this.x, y: this.y }];
                this.timer = this.maxLength * 2;
                resetSuccess = true;
            }
        }
        if (!resetSuccess) {
            this.x = Math.random() * this.effect.width;
            this.y = Math.random() * this.effect.height;
            this.history = [{ x: this.x, y: this.y }];
            resetSuccess = true;
        }
    };
    return Particle;
}());
var Effect = /** @class */ (function () {
    function Effect(canvas, context) {
        var _this = this;
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.context = context;
        this.particles = [];
        this.numberOfParticles = 4000;
        this.cellSize = 20;
        this.rows;
        this.cols;
        this.curve = 0.01;
        this.zoom = 5;
        this.FlowField = [];
        this.image = document.getElementById('FlowImage');
        this.debug = false;
        this.init();
        window.addEventListener('keydown', function (event) {
            if (event.key === 'd') {
                _this.debug = !_this.debug;
            }
        });
        // window.addEventListener('resize', event => {
        //     let window = event?.target as Window; 
        //     this.resize(window?.innerWidth, window?.innerHeight); 
        // }); 
    }
    Effect.prototype.drawText = function () {
        this.context.font = '500px Impact';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        var gradient1 = this.context.createLinearGradient(0, 0, this.width, this.height);
        gradient1.addColorStop(0.2, 'rgb(255, 255,255)');
        gradient1.addColorStop(0.4, 'rgb(255, 255,0)');
        gradient1.addColorStop(0.6, 'rgb(0, 255,255)');
        gradient1.addColorStop(0.8, 'rgb(0, 0,255)');
        var gradient2 = this.context.createLinearGradient(0, 0, this.width, this.height);
        gradient2.addColorStop(0.2, 'rgb(255, 255, 0');
        gradient2.addColorStop(0.4, 'rgb(200, 5, 50');
        gradient2.addColorStop(0.6, 'rgb(150, 255, 255');
        gradient2.addColorStop(0.8, 'rgb(255, 255, 150');
        var gradient3 = this.context.createRadialGradient(this.width * 0.2, this.height * 0.2, 10, this.width * 0.2, this.height * 0.2, this.width);
        gradient3.addColorStop(0.2, 'rgb(0, 0, 255)');
        gradient3.addColorStop(0.4, 'rgb(200, 255, 0)');
        gradient3.addColorStop(0.6, 'rgb(0, 0, 255)');
        gradient3.addColorStop(0.8, 'rgb(0, 0, 0)');
        this.context.fillStyle = gradient3;
        this.context.fillText('安希子', this.width * 0.5, this.height * 0.5, this.width * 0.8);
    };
    Effect.prototype.drawFlowFieldImage = function () {
        var imageSize = this.width * 0.7;
        this.context.drawImage(this.image, this.width * 0.5 - imageSize * 0.5, this.height * 0.5 - imageSize * 0.5, imageSize, imageSize);
    };
    Effect.prototype.init = function () {
        //create flow field
        this.rows = Math.floor(this.height / this.cellSize);
        this.cols = Math.floor(this.width / this.cellSize);
        this.FlowField = [];
        // draw text 
        //this.drawText(); 
        this.drawFlowFieldImage();
        // scan pixel data
        var pixels = this.context.getImageData(0, 0, this.width, this.height).data;
        if (this.debug) {
            console.log(pixels);
        }
        for (var y = 0; y < this.height; y += this.cellSize) {
            for (var x = 0; x < this.width; x += this.cellSize) {
                var index = (y * this.width + x) * 4;
                var red = pixels[index];
                var green = pixels[index + 1];
                var blue = pixels[index + 2];
                var alpha = pixels[index + 3];
                var grayscale = (red + green + blue) / 3;
                var colorAngle = ((grayscale / 255) * 6.28).toFixed(2);
                this.FlowField.push({
                    x: x,
                    y: y,
                    red: red,
                    green: green,
                    blue: blue,
                    alpha: alpha,
                    colorAngle: colorAngle
                });
            }
        }
        // create particles 
        this.particles = [];
        for (var i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this));
        }
        this.particles.forEach(function (particle) { return particle.reset(); });
    };
    Effect.prototype.drawGrid = function () {
        this.context.save();
        this.context.strokeStyle = 'grey';
        this.context.lineWidth = 0.2;
        for (var c = 0; c < this.cols; c++) {
            this.context.beginPath();
            this.context.moveTo(this.cellSize * c, 0);
            this.context.lineTo(this.cellSize * c, this.height);
            this.context.stroke();
        }
        for (var r = 0; r < this.rows; r++) {
            this.context.beginPath();
            this.context.moveTo(0, this.cellSize * r);
            this.context.lineTo(this.width, this.cellSize * r);
            this.context.stroke();
        }
        this.context.restore();
    };
    Effect.prototype.resize = function (width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.init();
    };
    Effect.prototype.render = function () {
        var _this = this;
        if (this.debug) {
            //this.drawText(); 
            this.drawFlowFieldImage();
            this.drawGrid();
        }
        this.particles.forEach(function (particle) {
            particle.draw(_this.context);
            particle.update();
        });
    };
    return Effect;
}());
var effect = new Effect(canvas, context);
effect.init();
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    effect.render();
    requestAnimationFrame(animate);
}
animate();
