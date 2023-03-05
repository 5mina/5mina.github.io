const KEYS = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    w: 87,
    a: 65,
    s: 83,
    d: 68,
    space: 32,
    enter: 13
}

var keyState = {
    left: false,
    up: false,
    right: false,
    down: false,
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
    enter: false,
}

$(document).keydown(function(e) {
    if (e.keyCode == KEYS.left) {
        keyState.left = true;
    }
    if (e.keyCode == KEYS.right) {
        keyState.right = true;
    }
    if (e.keyCode == KEYS.down) {
        keyState.down = true;
    }
    if (e.keyCode == KEYS.up) {
        keyState.up = true;
    }
    if (e.keyCode == KEYS.a) {
        keyState.a = true;
    }
    if (e.keyCode == KEYS.d) {
        keyState.d = true;
    }
    if (e.keyCode == KEYS.s) {
        keyState.s = true;
    }
    if (e.keyCode == KEYS.w) {
        keyState.w = true;
    }
    if (e.keyCode == KEYS.space) {
        keyState.space = true;
    }
    if (e.keyCode == KEYS.enter) {
        keyState.enter = true;
    }
});

$(document).keyup(function (e) {
    if (e.keyCode == KEYS.left) {
        keyState.left = false;
    } 
    if (e.keyCode == KEYS.right) {
        keyState.right = false;
    }
    if (e.keyCode == KEYS.down) {
        keyState.down = false;
    }
    if (e.keyCode == KEYS.up) {
        keyState.up = false;
    }
    if (e.keyCode == KEYS.a) {
        keyState.a = false;
    }
    if (e.keyCode == KEYS.d) {
        keyState.d = false;
    }
    if (e.keyCode == KEYS.s) {
        keyState.s = false;
    }
    if (e.keyCode == KEYS.w) {
        keyState.w = false;
    }
    if (e.keyCode == KEYS.space) {
        keyState.space = false;
    }
    if (e.keyCode == KEYS.enter) {
        keyState.enter = false;
    }
});

var textboxFocus = true;
$("#textArea").focus(function () {
    textboxFocus = false;
});
$("#textArea").blur(function () {
    textboxFocus = true;
});
window.addEventListener("keydown", function (e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        if (textboxFocus) { e.preventDefault(); }
    }
}, false);