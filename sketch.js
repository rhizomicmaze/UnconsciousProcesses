// ___________________________CONFIGURATIONS______________________________________________________
{
	var sound, xxx, font, font2, fillersrotatio, loading;
	var orgnsms = [];
	var fllrs = [];
	var ltrs = [];
	var bdgs = [];
	var sgntr = [];
	var wlvs = [];
	var mtls = [];
	var trans = [];
	var angls = [];
	var lgs = [];
	var rtngs = [];
	var veins = [];
	var wrms = [];
	var swords = [];
	var saving = [];
	var fx = [];
	var rndgif = [];
} //variables

function preload() {
	loading = createImg('images/loading.gif').position(300, 400); {
		font = loadFont('font/HelveticaThin.otf');
		font2 = loadFont('font/HelveticaBlack.otf');
	} //FONTS
	{
		sound = loadSound('sound/main_pjct.mp3');
		xxx = loadSound('sound/xxx.mp3');
		rndsound = loadSound('sound/random.mp3');
		rndsound.setVolume(0.3);
		saving[0] = loadSound('sound/perfect.mp3');
		saving[1] = loadSound('sound/great.mp3');
		swords[0] = loadSound('sound/sword_left.mp3');
		swords[1] = loadSound('sound/sword_right.mp3');
		for (i = 0; i < 16; i++) {
			fx[i] = loadSound('sound/fx' + i + '.mp3');
			fx[i].setVolume(0.1);
		}
	} //SOUND
	{
		{
			for (i = 1; i < 4; i++) {
				rndgif[i] = createImg('images/random' + i + '.gif');
				rndgif[i].hide();
			}
			angel = createImg('images/angel1.gif')
			angel.hide();
			pentagram = createImg('images/pentagram.gif')
			pentagram.hide();
			fire = createImg('images/fire.gif');
			fire.hide();
			r_anim = createImg('images/r_animation.gif');
			r_anim.hide();
		} //GIF
		{
			for (i = 0; i < 5; i++) {
				ltrs[i] = loadImage('images/letters/letters' + i + '.png');
			}
			for (i = 0; i < 3; i++) {
				bdgs[i] = loadImage('images/badges/badge' + i + '.png');
			}
			for (i = 3; i < 5; i++) {
				sgntr[i] = loadImage('images/badges/badge' + i + '.png');
			}
			for (i = 4; i < 9; i++) {
				fllrs[i] = loadImage('images/fillers' + i + '.png');
			}
			for (i = 0; i < 6; i++) {
				wlvs[i] = loadImage('images/wolves/wolves' + i + '.jpg');
			}
			for (i = 0; i < 12; i++) {
				mtls[i] = loadImage('images/metals/preciousmetals' + i + '.png');
			}
			for (i = 0; i < 4; i++) {
				trans[i] = loadImage('images/trans/transparency' + i + '.png');
			}
			for (i = 0; i < 7; i++) {
				angls[i] = loadImage('images/angelarium/angel' + i + '.png');
			}
			for (i = 0; i < 4; i++) {
				wrms[i] = loadImage('images/worms/worm' + i + '.png');
			}
			for (i = 0; i < 4; i++) {
				trans[i] = loadImage('images/transparency/transparency' + i + '.png');
			}
			for (i = 0; i < 2; i++) {
				veins[i] = loadImage('images/veins/veins' + i + '.png');
			}
			for (i = 0; i < 6; i++) {
				orgnsms[i] = loadImage('images/organisms/organism' + i + '.png');
			}
			for (i = 0; i < 16; i++) {
				lgs[i] = loadImage('images/logos/logo' + i + '.png');
			}
			for (i = 0; i < 10; i++) {
				rtngs[i] = loadImage('images/ratings/rating' + i + '.png');

				welcome = loadImage('images/welcomescreen0.jpg');
			}
		} //IMAGES
	} //GRFX	

}

function setup() {
	loading.hide();
	createCanvas(1080, 1350);
	background(0);
	r_anim.show();
	r_anim.position(510, 220);
	image(welcome, 0, 0);
	// WelcomeScreen();
	frameRate(5);
	colorMode(HSB, 100);
	imageMode(CENTER);
	angleMode(DEGREES);
	noFill();
	noLoop();

	sound.setVolume(0.8);
	sound.loop();

	fillersrotation = new FillersRotation();
}

// ___________________________PROGRAMM______________________________________________________

function keyPressed() {
	// __________________________VARIABLES_FOR_ELEMENTS_______________________________________________________
	{
		r = floor(random(ltrs.length)); //LETTERS
		pick = ltrs[r]
		r1 = floor(random(bdgs.length)); //BADGES
		pick1 = bdgs[r1]
		r2 = floor(random(3, sgntr.length)); //SIGNATURE
		pick2 = sgntr[r2]
		r3 = floor(random(4, fllrs.length)); //FILLERS
		pick3 = fllrs[r3];
		r9 = floor(random(trans.length)); //TRANSPARENCY
		pick9 = trans[r9];

		hw = pick3.width / 2;
		hh = pick3.height / 2;
	}
	// __________________________VARIABLES_FOR_SOUNDS_______________________________________________________
	{
		r5 = floor(random(swords.length));
		swords[r5].setVolume(0.1);
		r6 = floor(random(saving.length));
		saving[r6].setVolume(0.2);

	}

	//___________________________MAIN HOTKEYS______________________________________________________
	{
		if (keyCode === 82) { //R
			r_anim.hide();
			background(0);
			fx[3].play();
			loop();
		} //RESET CANVAS
		if (keyCode === 83) { //S
			saveCanvas("ShitToPostOnInstagram", ".png");
			saving[r6].play();
		} //SAVE CANVAS AS PNG
	}

	// __________________________FILTERS______________________________________________________
	{
		if (keyCode === 49) { //1
			filter(INVERT);
		} //INVERT
		if (keyCode === 50) { //2
			filter(BLUR, 5);
		} //BLUR
		if (keyCode === 51) { //3
			filter(THRESHOLD);
		} //THRESHOLD
		if (keyCode === 52) { //4
			filter(GRAY);
		} //GREYSCALE
		if (keyCode === 53) { //5
			tint(random(0, 200), 100, random(80, 100))
		} //COLORIZE IMAGES
		if (keyCode === 54) { //6
			noTint();
		} //UNCOLORIZE IMAGES

	}

	// __________________________ELEMENTS______________________________________________________
	{
		if (keyCode === 57) { //9
			fx[8].play();
			image(pick1, mouseX, mouseY, 0, 0);
		} //BADGES
		// (Point and press 9)

		if (keyCode === 48) { //0
			fx[8].play();
			image(pick2, mouseX, mouseY, 0, 0);
		} //SIGNATURE
		// (Point and press 0)

		if (keyCode === 84) { //T
			{
				push();
				fx[14].play();
				fillersrotation.placePrecisely();
				fillersrotation.displayTrans();
				pop();
			}
			if (mouseIsPressed) {
				fx[15].play();
				push();
				ts = 20;
				noStroke();
				for (var x = 0; x <= width; x += 40) {
					for (var y = 0; y <= height; y += 40) {
						fill(70);
						rect(x, y, ts, ts);
						rect(x + ts, y + ts, ts, ts);
						fill(255);
						rect(x + ts, y, ts, ts);
						rect(x, y + ts, ts, ts);
					}
				}
				pop();
			}
		} //TRANSPARENCY
		// (Point and press T, or hold MLB and press T)

		if (keyCode === 67) { //C
			image(pick, mouseX, mouseY, 200, 200);
			swords[r5].play();
			if (mouseIsPressed) {
				image(pick, mouseX, mouseY);
				swords[r5].play();
			}
		} //CHARACTERS
		// (Point and press C, or hold n' drag MLB and press C multiple times)

		if (keyCode === 65) {
			if (mouseIsPressed) {
				sound.pause();
				fx[9].loop();
				angel.show();
				angel.position(430, 500);
			}
		} //ANGELS

	}

	// __________________________SPECIALS______________________________________________________
	{
		if (keyCode === 90) { //Z
			r_anim.hide();
			fx[6].setVolume(0.2);
			fx[6].play();
			new WarningScreen();
		} //LAST WARNING

		if (keyCode === 88) { //X
			sound.pause();
			pentagram.show();
			pentagram.position(430, 400)
			fire.show();
			fire.size(1080, 450)
			fire.position(0, 900);
			xxx.setVolume(1);
			xxx.loop();
		} //CHAOS MODE

		if (keyCode === 191) { //SLASH
			sound.pause();
			rndgif[1].show();
			rndsound.loop();
			rndgif[1].position(330, 500);
			if (mouseIsPressed) {}
		} //RANDOM MODE

	}
}

function draw() {
	// __________________________VARIABLES_FOR_POSITION______________________________________________________
	{
		prw = random(0, width);
		prh = random(0, height);
		prwe = random(-100, width + 100);
		prhe = random(-100, height + 100)
	}

	// __________________________VARIABLES_FOR_ELEMENTS______________________________________________________	prhe = random(-100,height+100);}
	{
		r4 = floor(random(wlvs.length)); //WOLVES(PICTURES)
		pick4 = wlvs[r4];
		r7 = floor(random(0, 2)); //METAL VEINS
		pick7 = mtls[r7];
		r8 = floor(random(5, 9)); //SPIKES (JAGGED)
		pick8 = mtls[r8];
		r10 = floor(random(angls.length)); //ANGELS
		pick10 = angls[r10];
		r11 = floor(random(veins.length)); //VEINS
		pick11 = veins[r11];
		r12 = floor(random(orgnsms.length)); //ORGANISMS
		pick12 = orgnsms[r12];
		pick12.resize(800, 0);
		r13 = floor(random(lgs.length)); //LOGOS
		pick13 = lgs[r13];
		r14 = floor(random(rtngs.length)); //RATINGS
		pick14 = rtngs[r14];
		r15 = floor(random(wrms.length)); //WORMS
		pick15 = wrms[r15];
		r16 = floor(random(9, 12)); //METALS
		pick16 = mtls[r16];
		r17 = floor(random(4, fllrs.length)); //FILLERS
		pick17 = fllrs[r17];
		r19 = floor(random(2, 5)); //CHROME
		pick19 = mtls[r19];
	}

	// __________________________ELEMENTS______________________________________________________	
	{
		if (keyIsDown(65)) { //A
			fx[10].play();
			push();
			fillersrotation.placePrecisely();
			fillersrotation.displayAngels();
			if (mouseIsPressed) {
				fx[10].stop(0);
				// sound.stop();
				fillersrotation.placeRandomly();
				fillersrotation.displayAngels();
				fillersrotation.placeRandomly();
				fillersrotation.displayAngels();
			}
			pop();
		} //ANGELS
		// (Point and press A, or hold A and drag mouse across the canvas, or hold MLB then hold A and drag mouse)

		if (keyIsDown(77)) { //M
			image(pick16, mouseX, mouseY);
			fx[0].setVolume(0.05);
			fx[0].play();
		} //METALS
		// (Point and press M, or hold M and drag mouse)

		if (keyIsDown(72)) {
			push();
			translate(mouseX - 75, mouseY - 25);
			scale(0.5, 0.5);
			new HUD();
			fx[2].play();
			pop();
			if (mouseIsPressed) {
				fx[2].play(0.5);
				push();
				translate(prw, prh);
				scale(0.5, 0.5);
				new HUD();
				pop();
			}

		} //HUD 
		// (Point and press H, or hold H and drag mouse, or hold H and MLB)

		if (keyIsDown(80)) { //P
			fx[8].play();
			push();
			imageMode(CORNER);
			image(pick4, prwe, prhe);
			pop();
		} //PICTURES

		if (keyIsDown(87)) { //W
			fx[5].play();
			push();
			fillersrotation.placePrecisely();
			fillersrotation.displayWorms();
			pop();
		} //WORMS

		if (keyIsDown(73)) { //I
			fx[7].play();
			var message_var = ['INFORMATION EXPLOSION', 'CYBERWARFARE', 'NO LOVE IN THE DEEP WEB', 'AUGMENTED REALITY', 'INTERNET AS FORM OF LIFE', 'TECHNOUTOPIANISM', 'DIGITAL NATIVES', 'PROTEUS EFFECT'];
			var message = random(message_var);
			var descr_var = ["With the help of advanced AR technology the information about the surrounding real world of the user becomes interactive and digitally manipulable. Information about the environment and its objects is overlaid on the real world.", "Human enhancement technologies are techniques that can be used not simply for treating illness and disability, but also for enhancing human characteristics and capacities.", "As the amount of available data grows, the problem of managing the information becomes more difficult, which can lead to information overload.", "Digital detox refers to a period of time during /which a person refrains from using electronic connecting devices such as smartphones and computers.", "21fd4a3024d13050161d3a08eeadd1c13424fdd3bcd71fea060603b056ad9639", "You ever dance with the devil in the pale moonlight?", "A tech-utopia does not disregard any problems that technology may cause, but strongly believes that technology allows mankind to make social, economic, political, and cultural advancements."];
			var descr = random(descr_var);
			textSize(35);
			textFont(font2);
			textAlign(LEFT);
			fill(255);
			noStroke();
			text(message, prw, prh)
			textSize(8);
			textFont(font);
			fill(50, 80, 80);
			s = descr;
			text(s, prw + 2, prh + 7, 300, 100);
			noFill();
		} //INFORMATION

		if (keyIsDown(76)) { //L
			strokeWeight(1);
			stroke(random(0, 360), random(30, 100), 100);
			line(prw, prh, prwe, prhe);
		} //LINES

		if (keyIsDown(66)) { //B
			strokeWeight(0.5);
			stroke(255);
			rect(prwe, prhe, 100, 30);
		} //BOXES

		if (keyIsDown(86)) { //V
			fx[4].play();
			pick7.resize(400, 0);
			image(pick7, mouseX, mouseY);
			if (mouseIsPressed) {
				image(pick11, prw, prh);
			}
		} //VEINS

		if (keyIsDown(74)) { //J
			push();
			fillersrotation.placePrecisely();
			fillersrotation.displayJagged();
			fx[1].play();
			if (mouseIsPressed) {
				fillersrotation.placeRandomly();
				fillersrotation.displayJagged();
				fillersrotation.placeRandomly();
				fillersrotation.displayJagged();
				fx[1].play();
			}
			pop();
		} //JAGGED METALS

		if (keyIsDown(79)) { //O
			fx[11].play();
			push();
			fillersrotation.placePrecisely();
			fillersrotation.displayOrganisms();
			pop();
		} //ORGANISMS

		if (keyIsDown(70)) { //F
			fx[12].play();
			push();
			fillersrotation.placePrecisely();
			fillersrotation.displayChrome();
			pop();
		} //FLUID CHROME

		if (keyIsDown(71)) { //G
			fx[13].play();
			push();
			fillersrotation.placePrecisely();
			fillersrotation.displayGeneric();
			pop();
		} //GENERIC ELEMENTS (FILLERS)

		if (keyIsDown(68)) {
			push();
			translate(-40, -25);
			noStroke();
			for (var x = 0; x <= mouseX; x += 50) {
				for (var y = 0; y <= mouseY; y += 50) {
					fill(random(255), random(100), random(100));
					ellipse(x, y, 8, 8);
				}
			}
			pop();
		} //DOTS

		if (keyIsDown(55)) { //7
			fx[8].play();
			image(pick14, mouseX, mouseY);
		} //RATINGS

		if (keyIsDown(56)) { //8
			fx[8].play();
			image(pick13, mouseX, mouseY);
		} //LOGOS

		if (keyIsDown(191)) { //SLASH
			push();
			fillersrotation.placeRandomly();
			fillersrotation.displayAllO();
			pop();
			if (mouseIsPressed) {
				rndgif[2].show();
				rndgif[2].position(200, 200);
				rndgif[3].show();
				rndgif[3].position(200, 1150);
				list = [pick8, pick16];
				glist = random(list);
				image(glist, prw, prh);
			}
		} //RANDOM MODE
	}

	// __________________________SPECIALS______________________________________________________	
	{
		if (keyIsDown(88)) { //X  
			push();
			fillersrotation.placeRandomly();
			fillersrotation.displayAll();
			image(pick13, prw, prh);
			image(pick14, prwe, prhe);
			filter(INVERT);
			pop();
		} //CHAOS MODE

		if (keyIsDown(192)) {
			noLoop();
		} //TILDA (Hold to Pause)
	}
}

function keyReleased() {
	if (keyCode === 192) {
		loop();
	} //UNPAUSE
	if (keyCode === 88) { //X
		pentagram.hide();
		fire.hide();
		xxx.stop();
		sound.play();
	} //CHAOS MODE
	if (keyCode === 65) {
		angel.hide();
		fx[9].stop();
		sound.play();
	} //ANGELS
	if (keyCode === 191) { //SLASH

		rndgif[1].hide();
		rndgif[2].hide();
		rndgif[3].hide();
		rndsound.stop();
		sound.play();
	} //RANDOM MODE
}

// ___________________________SPECIAL_FUNCTIONS______________________________________________________
function FillersRotation() {
	this.displayAll = function() {
		push();
		translate(hw, hh);
		rotate(random(0, 360));
		list = [pick7, pick8, pick9, pick10, pick11, pick12, pick15, pick16, pick17, pick19];
		var glist = random(list);
		image(glist, 0, 0);
		pop();
	}

	this.displayAllO = function() {
		push();
		translate(hw, hh);
		rotate(random(0, 360));
		list = [pick3, pick10, pick12];
		var glist = random(list);
		image(glist, 0, 0);
		pop();
	}

	this.displayTrans = function() {
		push();
		translate(hw, hh);
		rotate(random(0, 360));
		image(pick9, 0, 0);
		pop();
	}

	this.displayAngels = function() {
		push();
		translate(hw, hh);
		rotate(random(0, 360));
		image(pick10, 0, 0);
		pop();
	}

	this.displayWorms = function() {
		push();
		translate(hw, hh);
		rotate(random(0, 360));
		image(pick15, 0, 0);
		pop();
	}

	this.displayOrganisms = function() {
		push();
		translate(hw, hh);
		rotate(random(0, 360));
		image(pick12, 0, 0);
		pop();
	}

	this.displayJagged = function() {
		push();
		translate(hw, hh);
		rotate(random(0, 360));
		image(pick8, 0, 0);
		pop();
	}

	this.displayChrome = function() {
		push();
		translate(hw, hh);
		rotate(random(0, 360));
		image(pick19, 0, 0);
		pop();
	}

	this.displayGeneric = function() {
		push();
		translate(hw, hh);
		rotate(random(0, 360));
		image(pick3, 0, 0);
		pop();
	}

	this.placePrecisely = function(x, y) {
		translate(mouseX - hw, mouseY - hh);
	}

	this.placeRandomly = function(x, y) {
		translate(random(0, width) - hw, random(0, height) - hh)

	}
}

function HUD() {
	d1 = 200;
	strokeWeight(1);
	stroke(30, 100, 90);
	push();
	translate(150, 40)
	line(0, 0, 0, 20);
	line(-10, 10, 10, 10);
	push();
	line(10, 15, 60, 30);
	scale(-1, 1);
	line(10, 15, 60, 30);
	scale(1, -1);
	translate(0, -20);
	line(10, 15, 60, 30);
	scale(-1, 1);
	line(10, 15, 60, 30);
	scale(1, -1);
	translate(0, -30);
	triangle(-100, 20, 0, 0, 100, 20);
	pop();
	ellipse(0, 10, 250, 30);
	ellipse(0, 10, 250, 60);
	fill(30, 100, 90);
	ellipse(-145, 10, 3, 3);
	ellipse(145, 10, 3, 3);
	noFill();
	rect(-149, 5, 10, 10);
	rect(139, 5, 10, 10);
	line(-80, 58, -20, 58);
	line(20, 58, 80, 58);
	line(-150, -45, 150, -45);
	line(-150, 65, 150, 65);
	line(-50, 85, 50, 85);
	line(0, 85, 0, 95);
	line(0, -45, 0, -60);
	arc(0, 10, 40, 40, 0, PI, OPEN);
	arc(0, 10, 50, 50, 0, PI, OPEN);
	arc(0, 10, 70, 30, 10, PI, OPEN);
	pop(0);

	for (var x = 0; x <= d1; x += d1) {
		for (var y = d1 / 20; y <= d1 / 2; y += d1 / 4) {
			push();
			translate(35, 10);
			rect(x + 5, y - 5, 10, 10);
			line(x, y, x + 20, y);
			line(x + 10, y - 10, x + 10, y + 10);
			noStroke();
			fill(30, 100, 90);
			textFont(font, [5]);
			textAlign(CENTER);
			s = " Memory:Enabled  /	 Startup:Enabled  /	 Filesystem:Enabled 	Archives:Enabled  /	 Rootkits:Disabled  /	 Heuristics:Enabled";
			text(s, 15, -10, 200, 100);
			s = "22.011																																																																	31.161";
			text(s, -35, 80, 300, 80);
			text("Module: 0", 115, 90);
			text("AS", -25, 85);
			text("AN", 255, 85);
			text("AS", -25, 0);
			text("AN", 255, 0);
			s = "Scan Type: Threat  /	 Scan Result:Completed  /	 Objects Scanned: 347863  /	 Threats Detected: 36  /	 Threats Quarantined: 24  /	 Time Elapsed: 0 min, 29 sec";
			text(s, -35, 100, 300, 80);
			pop();
		}
	}
	for (var x = 0; x <= 300; x += 300) {
		line(0, 0, 15, 0);
		line(0, 0, 0, 15);
		line(0, 100, 15, 100);
		line(0, 85, 0, 100);
		scale(-1, 1);
		translate(-300, 0);

	}
}

function WarningScreen() {
	background(0);
	push();
	noStroke();
	textFont(font2);
	textSize(30);
	textAlign(LEFT);
	fill(255);
	s = `So, you did it. 
You ignore my warning and did it. 
I can't blame you for curioucity. \n\ 
But under any circumstances do not hold X.
I hope you understand me, but one more time:


`;
	text(s, 200, 500, 800, 400);
	textFont(font);
	textSize(10);
	textAlign(LEFT);
	text("If you do, I'll can't help you.", 200, 840);
	textSize(70);
	fill(255, 100, 100);
	text('DO NOT HOLD X', 190, 780);
	pop();
	loop();
}