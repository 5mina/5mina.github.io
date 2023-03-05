var players = [];

function configureScreen() {
    var sh = window.innerHeight;
    var sw = window.innerWidth;
    var h, w;

    if (sw >= sh / 3 * 4) {
        h = sh;
        w = h / 3 * 4;
    } else {
        w = sw;
        h = w / 4 * 3;
    }

    document.getElementById('headerImage').style.width = sw - 10 + 'px';

    document.getElementById('screen').style.height = h - 6 + 'px';
    document.getElementById('screen').style.width = w - 18 + 'px';
    document.getElementById('footer').style.width = w - 18 + 'px';

    canvas.style.width = document.getElementById("screen").clientWidth + 'px';
    canvas.style.height = document.getElementById("screen").clientHeight + 'px';
}
addEventListener('resize', configureScreen);

function start() {    
    players = [];
    var a = $('#textArea').val().split('\n');
    a.forEach( item => {if (item.trim() != '') { players[players.length] = [item.trim(), 0, 1, [false, false]]}});

    if (players.length > 1) {
    var b = 'LEADERBOARD<br><table id="leaderboard">';
    players.forEach((item, index) => b = b +'<tr id="leaderboard' + (index + 1) + '">' + '<td>' + item[2] + '</td>' + '<td>' + item[0] + '</td>' + '<td>' + item[1] + '</td>' +'</tr>');
    document.getElementById('footer').innerHTML = b + '</table>';
    
    gameUpdater();
    animationSetup();
    animationUpdateToggles.mode = true;
    gameStates.modeSelection = true;
    } else {
        alert('Not Enough Players!');
    }
}

function updateLeaderboard() {
    //sort
    players.sort(function (a, b) {
        if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        }
        return 0;
    });
    players.forEach(function (item, index, array) {
        if (index > 0) {
            if (item[1] == array[index-1][1]){
                item[2] = array[index - 1][2];
            } else {
                item[2] = index + 1;
            }
        } else {
            item[2] = 1;
        }
    })
    //display
    players.forEach(function (item, index) {
        document.querySelector('#leaderboard' + (index + 1) + ' :nth-child(2)').innerHTML = item[0];
        document.querySelector('#leaderboard' + (index + 1) + ' :nth-child(3)').innerHTML = item[1];
        document.querySelector('#leaderboard' + (index + 1) + ' :nth-child(1)').innerHTML = item[2];
        if (item[3][1] == true) {
            document.getElementById('leaderboard' + (index + 1)).style.color = '#f00';
        } else {
            if (item[3][0] == true) {
                document.getElementById('leaderboard' + (index + 1)).style.color = '#000';
            } else {
                document.getElementById('leaderboard' + (index + 1)).style.color = '#fff';
            }
        }
        if (item[3][0] == true) {
            document.getElementById('leaderboard' + (index + 1)).style.backgroundColor = '#fff';
        } else {
            document.getElementById('leaderboard' + (index + 1)).style.backgroundColor = '#000';
        }
    })
}