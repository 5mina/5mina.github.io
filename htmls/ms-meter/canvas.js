const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

var animationUpdate = true;
var animationUpdateToggles = {
    bar: false,
    mode: false,
    modeTransition: false,
    modeNormalTutorial: false,
    modeSettingsNormal: false
};

var gameValues = {
    playValue: 0,
    meterValue: 0,
    meterLimit: 100,
    meterDisplay: 0,
    playerCount: players.length 
};

var ram = [];

function getLines(ctx, text, maxWidth) {
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}

function setCanvas() {
    canvas.setAttribute('width', '960');
    canvas.setAttribute('height', '810');
    canvas.style.width = document.getElementById("screen").clientWidth + 'px';
    canvas.style.height = document.getElementById("screen").clientHeight + 'px';

    ctx.fillStyle = 'white';
    ctx.font = '150px Major Mono Display';
    ctx.fillText('input', 50, 320);
    ctx.fillText('players', 50, 470);
    ctx.fillText('below', 50, 620);
}

var animationMemory = [];
var bin = gameValues.meterLimit;
var binQ = [];
var binQB = false;

// create a queue

function animationBarSetup() {
    var final;
    if (binQ[0] == undefined) {
        final = gameValues.playValue;
    } else {
        final = binQ[0];
    }
    if (binQB) {
        if (binQ[binQ.length - 1] != gameValues.playValue) {
            binQ.push(gameValues.playValue);
        }
    }
    var initial = gameValues.meterValue;
    if (initial != final) {
        var step = (final - initial) / 12;
        if (animationMemory[0] == undefined) {
            animationMemory[0] = ram.length;
            ram[animationMemory[0]] = initial + step;
            binQB = true;
        }
        if (ram[animationMemory[0]] > (final - 0.01) && ram[animationMemory[0]] < (final + 0.01)) {
            gameValues.meterValue = final;
            gameValues.meterDisplay = (gameValues.meterValue / gameValues.meterLimit) * 10000;
            gameValues.meterDisplay = Math.round(gameValues.meterDisplay);
            ram[animationMemory[0]] = undefined;
            animationMemory[0] = undefined; 
            binQ.splice(0,1);
            if (binQ.length == 0) {
                binQB = false;
            }
            return;
        } else {
            ram[animationMemory[0]] = ram[animationMemory[0]] + step;
        }
        
        gameValues.meterDisplay = (ram[animationMemory[0]] / gameValues.meterLimit) * 10000;
        gameValues.meterDisplay = Math.round(gameValues.meterDisplay);
    }
    if (bin != gameValues.meterLimit) {
        gameValues.meterDisplay = (gameValues.meterValue / gameValues.meterLimit) * 10000;
        gameValues.meterDisplay = Math.round(gameValues.meterDisplay);
        bin = gameValues.meterLimit;
    }
}

function animationSetup() {
    if (animationUpdateToggles.bar) {animationBarSetup();}

    animationUpdater();
}

function animationUpdater() {
    if (animationUpdateToggles.bar) { barUpdate(gameValues.meterDisplay) };
    if (animationUpdateToggles.mode) { modeSelectSetup(modeChoice) };
    if (animationUpdateToggles.modeTransition) { modeSelectTransition() };
    if (animationUpdateToggles.modeNormalTutorial) { modeNormalTutorial(textNext) };
    if (animationUpdateToggles.modeSettingsNormal) { modeSettingsNormal(); }

    if (animationUpdate) {
        setTimeout(() => { animationSetup() }, (1000 / 24));
    }
}

function modeSelectSetup(x) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = '100px Major Mono Display';
    ctx.fillStyle = 'white';
    ctx.fillText(modes[x].mode, 45, 135);
    ctx.fillText('MODE', 360, 235);
    ctx.font = '50px Major Mono Display';
    ctx.fillText('nav', 750, 72);
    ctx.fillText('with', 750, 72 + 65);
    ctx.fillText('arrow', 750, 72 + 65 * 2);
    ctx.fillText('keys', 750, 72 + 65 * 3);
    ctx.fillRect(0, 300, 960, 5);
    ctx.fillRect(720, 0, 5, 300);
    var a = getLines(ctx, modes[x].description, 910);
    a.forEach((item, index) => ctx.fillText(item, 25, 380+(index*50)));
    if(modes[x].availability) {
        ctx.fillRect(0, 710, 960, 100);
        ctx.fillStyle = 'black';
        ctx.font = '75px Major Mono Display';
        ctx.fillText('spAce to stArt', 87, 788);
    } else {
        ctx.fillRect(0, 707, 960, 3);
        ctx.font = '75px Major Mono Display';
        ctx.fillText('still in progress', 7, 788);
    }
}

function modeSelectTransition() {
    if (animationMemory[1] == undefined) { animationMemory[1] = 1 }
    if (animationMemory[1] <= 6) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 960, 810 / 6 * animationMemory[1]);
        ctx.font = '100px Major Mono Display';
        ctx.fillStyle = 'black';
        ctx.fillText(modes[modeChoice].mode, 45, 135);
        ctx.fillText('MODE', 360, 235);
    } else if (animationMemory[1] <= 78) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 960, 810);
        ctx.font = '100px Major Mono Display';
        ctx.fillStyle = 'black';
        ctx.fillText(modes[modeChoice].mode, 45, 135);
        ctx.fillText('MODE', 360, 235);
        ctx.font = '50px Major Mono Display';
        if ((animationMemory[1] - 6) % 8 == 0 || (animationMemory[1] - 6) % 8 == 1) {
            ctx.fillText('loading', 560, 775);
        } else if ((animationMemory[1] - 6) % 8 == 2 || (animationMemory[1] - 6) % 8 == 3) {
            ctx.fillText('loading.', 560, 775);
        } else if ((animationMemory[1] - 6) % 8 == 4 || (animationMemory[1] - 6) % 8 == 5) {
            ctx.fillText('loading..', 560, 775);
        } else {
            ctx.fillText('loading...', 560, 775);
        }
    } else {
        animationMemory[1] = undefined;
        animationUpdateToggles.modeTransition = false;
        animationUpdateToggles.mode = false;
        modeSetup(modeChoice);
        return;
    }
    animationMemory[1]++;
}

function barSetup() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(865, 0, 5, 810);
}

function barUpdate(x) {
    ctx.clearRect(870, 0, 195, 810);
    ctx.fillStyle = "white";
    if (x > 10000) {
        ctx.fillStyle = "#d22";
        x = 10000;
    } else if (x < 0) {
        x = 0;
    }
    var h = (x / 10000) * 810;
    ctx.fillRect(870, (810 - h), 95, h);
}

function modeNormalTutorial() {
    ctx.clearRect(0, 0, 865, 810);
    if (animationMemory[2] == undefined) { animationMemory[2] = { frame: 0, text: 1 }; gameStates.text = true }
    
    if (keyState.enter) {
        keyState.enter = false;
        animationMemory[2] = undefined;
        animationUpdateToggles.modeNormalTutorial = false;
        animationUpdateToggles.modeSettingsNormal = true;
        gameStates.text = false;
        return;
    }

    var str = '';
    ctx.fillStyle = 'white';
    ctx.font = '50px Major Mono Display';

    switch (animationMemory[2].text) {
        case 1:
            str = 'welcome to the NORMAL mode tutorial.';
            break;
        case 2:
            str = 'you will take turns adding 1 to 99 to the METER. the number you choose will be added to your SCORE. use ARROW KEYS to SELECT a number and SPACE to enter the number.';
            break;
        case 3:
            str = 'you can choose to NOT add to the METER but that will result in you FORFEITING. to FORFEIT, press F.';
            break;
        case 4:
            str = 'FORFEITING will stop you from adding up to the METER and consequently NOT getting more POINTS. HOWEVER, you will get to KEEP your current SCORE.';
            break;
        case 5:
            str = 'when a player OVERFLOWS the METER, it will turn RED.';
            break;
        case 6:
            str = 'OVERFLOWING will cause the player to LOSE all their POINTS.'
            break;
        case 7:
            str = 'the METER will RESET afterwards.';
            break;
        case 8:
            str = 'the LIMIT will always be 50 or MORE.';
            break;
        case 9:
            str = 'hitting EXACTLY the LIMIT will double your POINTS.';
            break;
        case 10:
            str = 'may the BEST risk taker WIN!'
            break;
        default:
            animationMemory[2] = undefined;
            animationUpdateToggles.modeNormalTutorial = false;
            animationUpdateToggles.modeSettingsNormal = true;
            gameStates.text = false;
            return;
    }
    
    animationMemory[2].frame++;
    if (animationMemory[2].frame > str.length) { animationMemory[2].frame = str.length }
    if (textNext) {
        if (animationMemory[2].frame == str.length) { 
            animationMemory[2].frame = 0; 
            animationMemory[2].text++; 
            textNext = false; 
        }
        if (textNext && animationMemory[2].frame < str.length) { 
            animationMemory[2].frame = str.length; 
            textNext = false; 
        }
    }

    var b = 0;
    var a = getLines(ctx, str.substring(0, animationMemory[2].frame), 810);
    a.forEach((item, index) => {ctx.fillText(item, 25, 75 + (index * 50)); b++;} );
    
    ctx.font = '25px Major Mono Display';

    b++;
    if (animationMemory[2].frame == str.length) { 
        ctx.fillText('press SPACE', 600, 75 + (b * 50)); 
    }

    if (animationMemory[2].text == 2) {
        gameValues.playValue = 50;
    } else if (animationMemory[2].text == 3) {
        gameValues.playValue = 0;
    } else if (animationMemory[2].text == 5) {
        gameValues.playValue = 101;
    } else if (animationMemory[2].text == 7) {
        gameValues.playValue = 0;
    } else if (animationMemory[2].text == 9) {
        gameValues.playValue = 100;
    } else if (animationMemory[2].text == 10) {
        gameValues.playValue = 0;
    }
    ctx.fillText('press ENTER to SKIP', 25, 780);
}

var settingsMove = {
    up: false,
    down: false,
    right: false,
    left: false
};

function modeSettingsNormal() {
    ctx.clearRect(0, 0, 865, 810);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 125, 865, 125);
    ctx.fillRect(0, 375, 865, 5);
    ctx.font = '75px Major Mono Display';
    ctx.save();
    ctx.translate(445, 125);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(">", 0, 0);
    ctx.translate(-180, 0);
    ctx.fillText("<", 0, 0);
    ctx.restore();
    ctx.fillStyle = "black";
    ctx.fillText("<", 0, 215);
    ctx.fillText(">", 815, 215);
}