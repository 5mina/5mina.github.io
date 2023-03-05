var gameUpdate = true;

var gameStates = {
    modeSelection: false,
    text: false
};

var textNext = false;

var modeChoice = 0;

const modes = [
    {
        mode: 'NORMAL',
        description: 'play against friends in a game of chicken. see who can get the most points without going over the meter.',
        availability: true
    },
    {
        mode: 'TEAM',
        description: 'go in teams and try to gain more points that the other team or even your fellow teammate.',
        availability: false
    },
    {
        mode: 'BLIND',
        description: 'with the meter hidden, see how close you and your friends can get without going over.',
        availability: false
    },
    {
        mode: 'DICE',
        description: 'gamble your way against your fellow rollers and find out whether or not a risk was worth the taking.',
        availability: false
    },
    {
        mode: 'PARTY',
        description: 'compete in mini challenges to determine choice order and gain special power ups all to battle it out for the meter.',
        availability: false
    },
    {
        mode: 'POT',
        description: 'play minigames for play order and to fill up the meter. then, take turns taking points from it. will you split or steal?',
        availability: false
    },
    {
        mode: 'BOSS',
        description: 'work as a team to try and go against the meter. play minigames to gain points and damage the meter or earn items to sabotage your fellow teammates.',
        availability: false
    },
    {
        mode: 'MINIGAME',
        description: 'the party without the meter. play just the minigames of party mode and compete for points.',
        availability: false
    },
    {
        mode: '?????',
        description: 'more coming soon',
        availability: false
    }
];

var modeSettingNormalValues = {
rounds: 1,
meterLimit: 100,
showLimit: true,
changeLimit: true,
forfeit: true,
oneWinner: false,
changeOrder: 0,
};

function gameUpdater() {
    if (gameStates.modeSelection) {
        if (keyState.right) {
            modeChoice++;
            keyState.right = false;
        }
        if (keyState.left) {
            modeChoice--;
            keyState.left = false;
        }
        if (keyState.down) {
            modeChoice++;
            keyState.down = false;
        }
        if (keyState.up) {
            modeChoice--;
            keyState.up = false;
        }
        if (modeChoice < 0) {
            modeChoice = modes.length - 1;
        }
        if (modeChoice >= modes.length) {
            modeChoice = 0;
        }
        if (keyState.space && modes[modeChoice].availability) {
            gameStates.modeSelection = false;
            animationUpdateToggles.modeTransition = true;
        }
    }
    if (gameStates.text) {
        if (keyState.space) {
            textNext = true;
            keyState.space = false;
        }
    }

    if (gameUpdate) {
        setTimeout(() => { gameUpdater() }, (1000 / 48));
    }
}

function modeSetup(x) {
    if (x == 0) {
        // Normal Mode
        barSetup();
        animationUpdateToggles.bar = true;
        animationUpdateToggles.modeNormalTutorial = true;
    }
}