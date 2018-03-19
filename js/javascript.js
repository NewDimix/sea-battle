window.onload = function load() {
    var enemyArray = document.querySelectorAll('.enemy-field span');
    var userArray = document.querySelectorAll('.user-field span');

    var enemyShips = [];
    var userShips = [];

    enemyShips[0] = {
        dataLength: 4,
        killed: false,
        hits: 0
    }
    enemyShips[1] = {
        dataLength: 3,
        killed: false,
        hits: 0
    }
    enemyShips[2] = {
        dataLength: 3,
        killed: false,
        hits: 0
    }
    enemyShips[3] = {
        dataLength: 2,
        killed: false,
        hits: 0
    }
    enemyShips[4] = {
        dataLength: 2,
        killed: false,
        hits: 0
    }
    enemyShips[5] = {
        dataLength: 2,
        killed: false,
        hits: 0
    }
    enemyShips[6] = {
        dataLength: 1,
        killed: false,
        hits: 0
    }
    enemyShips[7] = {
        dataLength: 1,
        killed: false,
        hits: 0
    }
    enemyShips[8] = {
        dataLength: 1,
        killed: false,
        hits: 0
    }
    enemyShips[9] = {
        dataLength: 1,
        killed: false,
        hits: 0
    }

    userShips[0] = {
        dataLength: 4,
        killed: false,
        hits: 0,
        installed: false
    }
    userShips[1] = {
        dataLength: 3,
        killed: false,
        hits: 0,
        installed: false
    }
    userShips[2] = {
        dataLength: 3,
        killed: false,
        hits: 0,
        installed: false
    }
    userShips[3] = {
        dataLength: 2,
        killed: false,
        hits: 0,
        installed: false
    }
    userShips[4] = {
        dataLength: 2,
        killed: false,
        hits: 0,
        installed: false
    }
    userShips[5] = {
        dataLength: 2,
        killed: false,
        hits: 0,
        installed: false
    }
    userShips[6] = {
        dataLength: 1,
        killed: false,
        hits: 0,
        installed: false
    }
    userShips[7] = {
        dataLength: 1,
        killed: false,
        hits: 0,
        installed: false
    }
    userShips[8] = {
        dataLength: 1,
        killed: false,
        hits: 0,
        installed: false
    }
    userShips[9] = {
        dataLength: 1,
        killed: false,
        hits: 0,
        installed: false
    }

    for (var i = 0; i < enemyShips.length; i++) {
        var orientation = getRandomInt(0, 1);

        if (orientation == 0) {
            var row = getRandomInt(1, 10);
            var position0 = getRandomInt(row*10-9, row*10 - (enemyShips[i].dataLength-1));
            var position;
            var access = false;

            while (!access) {
                var error = 0;
                for (var x = 0; x < enemyShips[i].dataLength; x++) {
                    if (enemyArray[position0 + x - 1].classList.contains('ship')) {
                        error = error + 1;
                    }
                }

                if (error == 0) {
                    access = true;
                } else {
                    row = getRandomInt(1, 10);
                    position0 = getRandomInt(row*10-9, row*10 - (enemyShips[i].dataLength-1));
                }
            }

            enemyShips[i]["position0"] = position0;

            enemyArray[enemyShips[i].position0-1].classList.add('ship');

            for (var x = 1; x < enemyShips[i].dataLength; x++) {
                enemyShips[i]["position" + x] = enemyShips[i]["position" + (x-1)] + 1;
                enemyArray[enemyShips[i]["position" + x]-1].classList.add('ship');
            }

            if (enemyShips[i].position0 != (row*10-9)) {
                position = enemyShips[i].position0-2;
                enemyArray[position].classList.add('ship', 'none');
            }

            if (enemyShips[i]['position' + (enemyShips[i].dataLength-1)] != (row*10)) {
                position = enemyShips[i]['position' + (enemyShips[i].dataLength-1)];
                enemyArray[position].classList.add('ship', 'none');
            }

            for (var x = 0; x < enemyShips[i].dataLength; x++)  {
                var top = enemyShips[i]["position" + x] - 10 - 1;
                var bottom = enemyShips[i]["position" + x] + 10 - 1;

                if (top >=0 && top <=99 && row != 1) {
                    enemyArray[top].classList.add('ship', 'none');
                }

                if (bottom >=0 && bottom <=99 && row != 10) {
                    enemyArray[bottom].classList.add('ship', 'none');
                }

                if (enemyShips[i].position0 != (row*10-9))  {
                    top = enemyShips[i]["position" + x] - 10 - 2;
                    bottom = enemyShips[i]["position" + x] + 10 - 2;

                    if (top >=0 && top <=99) {
                        enemyArray[top].classList.add('ship', 'none');
                    }

                    if (bottom >=0 && bottom <=99) {
                        enemyArray[bottom].classList.add('ship', 'none');
                    }
                }

                if (enemyShips[i]['position' + (enemyShips[i].dataLength-1)] != (row*10)) {
                    top = enemyShips[i]["position" + x] - 10;
                    bottom = enemyShips[i]["position" + x] + 10;

                    if (top >=0 && top <=99) {
                        enemyArray[top].classList.add('ship', 'none');
                    }

                    if (bottom >=0 && bottom <=99) {
                        enemyArray[bottom].classList.add('ship', 'none');
                    }
                }
            }
        }

        if (orientation == 1) {
            var column = getRandomInt(1, 10);
            var position0Arrow = [];

            position0Arrow[0] = column;

            for (var x = 1; x < 10; x++) {
                position0Arrow[x] = column + (x*10);
            }

            var position0 = parseInt(position0Arrow[getRandomInt(0, (9-(enemyShips[i].dataLength-1)))]);
            var position;
            var access = false;

            while (!access) {
                var error = 0;
                for (var x = 0; x < enemyShips[i].dataLength; x++) {
                    if (enemyArray[position0 + (x*10) - 1].classList.contains('ship')) {
                        error = error + 1;
                    }
                }

                if (error == 0) {
                    access = true;
                } else {
                    column = getRandomInt(1, 10);
                    position0Arrow[0] = column;
                    for (var x = 1; x < 10; x++) {
                        position0Arrow[x] = column + (x*10);
                    }
                    position0 = parseInt(position0Arrow[getRandomInt(0, (9-(enemyShips[i].dataLength-1)))]);
                }
            }

            enemyShips[i]["position0"] = position0;

            enemyArray[enemyShips[i].position0-1].classList.add('ship');

            for (var x = 1; x < enemyShips[i].dataLength; x++) {
                enemyShips[i]["position" + x] = enemyShips[i]["position" + (x-1)] + 10;
                enemyArray[enemyShips[i]["position" + x]-1].classList.add('ship');
            }

            if (enemyShips[i].position0 != column) {
                position = enemyShips[i].position0-11;
                enemyArray[position].classList.add('ship', 'none');
            }

            if (enemyShips[i]['position' + (enemyShips[i].dataLength-1)] != (column+90)) {
                position = enemyShips[i]['position' + (enemyShips[i].dataLength-1)] + 9;
                enemyArray[position].classList.add('ship', 'none');
            }

            for (var x = 0; x < enemyShips[i].dataLength; x++)  {
                var left = enemyShips[i]["position" + x] - 1 - 1;
                var right = enemyShips[i]["position" + x] + 1 - 1;

                if (left >=0 && left <=99 && column != 1) {
                    enemyArray[left].classList.add('ship', 'none');
                }

                if (right >=0 && right <=99 && column != 10) {
                    enemyArray[right].classList.add('ship', 'none');
                }

                left = enemyShips[i]["position0"] - 10 - 2;
                right = enemyShips[i]["position0"] - 10;

                if (left >=0 && left <=99 && column != 1) {
                    enemyArray[left].classList.add('ship', 'none');
                }

                if (right >=0 && right <=99 && column != 10) {
                    enemyArray[right].classList.add('ship', 'none');
                }

                left = enemyShips[i]["position" + (enemyShips[i].dataLength-1)] + 10 - 2;
                right = enemyShips[i]["position" + (enemyShips[i].dataLength-1)] + 10;

                if (left >=0 && left <=99 && column != 1) {
                    enemyArray[left].classList.add('ship', 'none');
                }

                if (right >=0 && right <=99 && column != 10) {
                    enemyArray[right].classList.add('ship', 'none');
                }
            }
        }
    }

    var newEnemyArray = [];
    var hitsArray = [''];
    var kills = 0;
    var gameOver = false;
    var targetKill;

    for (var i = 0; i < enemyArray.length; i++) {
    newEnemyArray.push(enemyArray[i]);

        enemyArray[i].addEventListener('click', function(e) {
            if (gameOver == true) {
                dataAlert('Игра окончена.', 'game-over');
                return false;
            }

            var target = (newEnemyArray.indexOf(e.target)+1);
            var added = false;
            var repeat = false;
            var hit = false;

            checkShot:
            for (var z = 0; z < hitsArray.length; z++) {
                if ((target == hitsArray[z])) {
                    repeat = true;
                    break checkShot;
                }
            }

            if (repeat==false) {
                checkHit:
                for (var y = 0; y < enemyShips.length; y++) {
                    for (var x = 0; x < enemyShips[y].dataLength; x++) {
                        if (target == enemyShips[y]["position" + x]) {
                            enemyArray[target-1].classList.add('hitting');
                            log('Попадание!', target);
                            enemyShips[y].hits = enemyShips[y].hits + 1;
                            hitsArray.push(target);
                            added = true;
                            hit = true;

                            if (enemyShips[y].hits == enemyShips[y].dataLength) {
                                log('<b>Убил</b>', target);
                                dataAlert('УБИЛ!', 'kill');
                                enemyShips[y].killed = true;
                                kills = kills + 1;
                            } else {
                                dataAlert('Попадание', 'hit');
                            }

                            break checkHit;
                        }
                    }
                }

                if (hit == false) {
                    enemyArray[target-1].classList.add('slip');
                    log('Промах', target);
                    compShot();
                    dataAlert('Промах...', 'slip');
                }
            }

            if (added == false && repeat == false) {
                hitsArray.push(target);
                added = true;
            }

            if (kills == enemyShips.length) {
                dataAlert('Победа! Количество выстрелов: ' + (hitsArray.length-1) + '. Можно было и лучше...', 'game-over');
                log('Winner winner chicken dinner!', target);
                gameOver = true;
            }
        });
    }

    for (var i = 0; i < enemyArray.length; i++) {
        newEnemyArray.push(enemyArray[i]);

        enemyArray[i].addEventListener('contextmenu', function(e) {
            var target = (newEnemyArray.indexOf(e.target)+1);
            enemyArray[target-1].classList.add('noneUser');
            e.preventDefault();
        });
    }

    var numberShip = 0;
    var orientation = 0;
    var newUserArray = [];

    for (var i = 0; i < userArray.length; i++) {
        newUserArray.push(userArray[i]);

        userArray[i].addEventListener('mousewheel', function(e)  {
            if (orientation == 0) {
                orientation = 1;
            } else {
                orientation = 0;
            }
            var target = (newUserArray.indexOf(e.target)+1);
            console.log('prokrutka, orientation = ' + orientation);
            for (var i = 0; i < userArray.length; i++) {
                if (userArray[i].classList.contains('user-ship-g')) {
                    userArray[i].classList.remove('user-ship-g');
                }
            }
            userArray[target-1].dispatchEvent(mouseoverEvent);
            e.preventDefault();
        });

        userArray[i].addEventListener('mouseover', function(e) {
            if (userShips[numberShip] === undefined) {
                console.log('больше нет кораблей');
                return;
            }

            var target = (newUserArray.indexOf(e.target)+1);

            var column = target % 10;
            if (column == 0) {
                column = 10;
            }

            var row = Math.floor((target-1)/10) + 1;

            if (userShips[numberShip].dataLength == 1) {
                orientation = 0;
            }

            if (orientation == 0) {
                if (column > 11 - userShips[numberShip].dataLength) {
                    target = parseInt(String(row) + String((10-userShips[numberShip].dataLength+1)))-10;
                }
            } else {
                if (row > 11 - userShips[numberShip].dataLength) {
                    target = parseInt(String((10-userShips[numberShip].dataLength)) + '0') + column;
                }
            }

            while (userShips[numberShip] && userShips[numberShip].installed == true) {
                numberShip = numberShip + 1;
            }

            var error = false;
            var error2 = false;

            if (orientation == 0) {
                if (userShips[numberShip]) {
                    for (var i=0; i < userShips[numberShip].dataLength; i++) {
                        for (var x=0; x < userShips[numberShip].dataLength; x++) {
                            if (userArray[target-1+x].classList.contains('user-ship-b')) {
                                error = true;
                            }
                        }

                        if (error == true) {
                            while (error == true) {
                                error2 = false;

                                for (var x=0; x < userShips[numberShip].dataLength; x++) {
                                    if (userArray[target-1+x].classList.contains('user-ship-b')) {
                                        error2 = true;
                                    }
                                }

                                if (error2 == true) {
                                    target = target - 1;
                                } else {
                                    error = false;
                                }

                                column = target % 10;
                                if (column == 0) {
                                    column = 10;
                                }
                                row = Math.floor((target-1)/10) + 1;
                                if (column > 11 - userShips[numberShip].dataLength) {
                                    target = parseInt(String(row) + String((10-userShips[numberShip].dataLength+1)))-10;
                                }
                                if (target < 1) {
                                    return;
                                }
                            }
                        }

                        if (error == false) {
                            userArray[target-1+i].classList.add('user-ship-g');
                        }
                    }
                }
            } else {
                if (userShips[numberShip]) {
                    var position = 0;
                    var position2 = 0;
                    var position3 = 0;
                    for (var x=0; x < userShips[numberShip].dataLength; x++) {
                        if (userArray[target-1+position2].classList.contains('user-ship-b')) {
                            error = true;
                        }
                        position2 = position2 + 10;
                    }
                    if (error == true) {
                        while (error == true) {
                            error2 = false;

                            for (var x=0; x < userShips[numberShip].dataLength; x++) {
                                if (userArray[target-1+position3].classList.contains('user-ship-b')) {
                                    error2 = true;
                                }
                                position3 = position3 + 10;
                            }
                            position3 = 0;
                            if (error2 == true) {
                                target = target - 10;
                            } else {
                                error = false;
                            }
                            if (target < 1) {
                                return;
                            }
                        }
                    }

                    for (var i=0; i < userShips[numberShip].dataLength; i++) {
                        if (error == false) {
                            userArray[target-1+position].classList.add('user-ship-g');
                        }
                        position = position + 10;
                    }
                }
            }
            targetKill = target;
        });

        var mouseoverEvent = new Event('mouseover');
        var installed = 0;
        document.querySelector('.area__alert').style.display = "block";
        document.querySelector('.area__alert p').innerHTML = 'Расставьте свои корабли';

        userArray[i].addEventListener('click', function(e) {
            if (userShips[numberShip] === undefined) {
                return;
            }

            var target = targetKill;

            var column = target % 10;
            if (column == 0) {
                column = 10;
            }

            var row = Math.floor((target-1)/10) + 1;

            if (orientation == 0) {
                if (column > 11 - userShips[numberShip].dataLength) {
                    target = parseInt(String(row) + String((10-userShips[numberShip].dataLength+1)))-10;
                }
            } else {
                if (row > 11 - userShips[numberShip].dataLength) {
                    target = parseInt(String((10-userShips[numberShip].dataLength)) + '0') + column;
                }
            }

            while (userShips[numberShip].installed == true) {
                numberShip = numberShip + 1;
            }

            if (!userArray[target-1].classList.contains('user-ship-b') && error == false) {
                var position = 0;
                for (var i=0; i < userShips[numberShip].dataLength; i++) {
                    if (orientation == 0) {
                        userArray[target-1+i].classList.add('user-ship-b');
                        userShips[numberShip]["position" + i] = target-1+i;

                        if (userArray[target-1+i-10]) {
                            userArray[target-1+i-10].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1+i+10]) {
                            userArray[target-1+i+10].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1-1] && (target-1)%10 > 0) {
                            userArray[target-1-1].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1-11] && (target-1)%10 > 0) {
                            userArray[target-1-11].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1+9] && (target-1)%10 > 0) {
                            userArray[target-1+9].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1+userShips[numberShip].dataLength] && (target-1+userShips[numberShip].dataLength)%10 != 0) {
                            userArray[target-1+userShips[numberShip].dataLength].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1+userShips[numberShip].dataLength-10] && (target-1+userShips[numberShip].dataLength)%10 != 0) {
                            userArray[target-1+userShips[numberShip].dataLength-10].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1+userShips[numberShip].dataLength+10] && (target-1+userShips[numberShip].dataLength)%10 != 0) {
                            userArray[target-1+userShips[numberShip].dataLength+10].classList.add('user-ship-b', 'user-ship-n');
                        }
                    } else {
                        userArray[target-1+position].classList.add('user-ship-b');
                        userShips[numberShip]["position" + i] = target-1+position;

                        if (userArray[target-1+position-1] && column != 1) {
                            userArray[target-1+position-1].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1+position+1] && column != 10) {
                            userArray[target-1+position+1].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1-10]) {
                            userArray[target-1-10].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1-9] && column != 10) {
                            userArray[target-1-9].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1-11] && column != 1) {
                            userArray[target-1-11].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1+userShips[numberShip].dataLength*10]) {
                            userArray[target-1+userShips[numberShip].dataLength*10].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1+userShips[numberShip].dataLength*10+1] && column != 10) {
                            userArray[target-1+userShips[numberShip].dataLength*10+1].classList.add('user-ship-b', 'user-ship-n');
                        }
                        if (userArray[target-1+userShips[numberShip].dataLength*10-1] && column != 1) {
                            userArray[target-1+userShips[numberShip].dataLength*10-1].classList.add('user-ship-b', 'user-ship-n');
                        }
                        position = position + 10;
                    }
                }
                userShips[numberShip].installed = true;
                installed = installed + 1;
                if (installed == userShips.length) {
                    document.querySelector('.area__alert p').innerHTML = 'Ход компьютера';
                    document.querySelector('.area__alert').style.display = "none";
                    dataAlert('Вы начинаете первым!<br>ЛКМ - сделать выстрел<br>ПКМ - отметить пустое поле точкой', 'game-over');
                }
            }
        });



        userArray[i].addEventListener('mouseout', function(e) {
            if (userShips[numberShip] === undefined) {
                return;
            }

            var target = (newUserArray.indexOf(e.target)+1);
            for (var i = 0; i < userArray.length; i++) {
                if (userArray[i].classList.contains('user-ship-g')) {
                    userArray[i].classList.remove('user-ship-g');
                }
            }
//            for (var i=0; i < userShips[numberShip].dataLength; i++) {
//                if (userArray[target-1+i]) {
//                    userArray[target-1+i].classList.remove('user-ship-g');
//                }
//            }
        });
    };

    var fire = document.querySelector('.fire');
//    fire.onclick = compShot;
    var shotVars = [];
    var hitsArrayEnemy = [];
    var target;
    var shot;
    var currentShip;
    var killsUser = 0;
    var killsUserCount = 0;

    for (var i=1; i < 101; i++) {
        shotVars.push(i);
    }

    function compShot() {
        console.log('-------------------------------------------------');
//        fire.disabled = true;
        document.querySelector('.area__alert').style.display = "block";

        if (gameOver == true) {
            alert('Игра окончена.');
            return false;
        }

        if (shotVars.length == 0) {
            console.log('Больше некуда стрелять');
            return;
        }

        if (shot == true) {
            var shotVarsForKill = [];
            shotVarsForKillPush(shotVars, lastShot, shotVarsForKill);
            if (shotVarsForKill.length == 0) {
                lastShot = hitsArrayEnemy[hitsArrayEnemy.length-2];
                shotVarsForKillPush(shotVars, lastShot, shotVarsForKill);

                if (shotVarsForKill.length == 0) {
                    lastShot = hitsArrayEnemy[hitsArrayEnemy.length-3];
                    shotVarsForKillPush(shotVars, lastShot, shotVarsForKill);
                }
            }

            console.log('shotVarsForKill = ' + shotVarsForKill);
            target = shotVarsForKill[(getRandomInt(1, shotVarsForKill.length))-1];
        } else {
            target = shotVars[(getRandomInt(1, shotVars.length))-1];
        }

        console.log('target = ' + target);

        for (var y = 0; y < userShips.length; y++) {
            for (var x = 0; x < userShips[y].dataLength; x++) {
                if (target-1 == userShips[y]["position" + x]) {
                    console.log('Попадание');
                    killsUserCount = killsUserCount + 1;
                    shot = true;
                    lastShot = target;
                    hitsArrayEnemy.push(target);
                    userArray[target-1].classList.add('hitting');
                    userShips[y].hits = userShips[y].hits + 1;
                    currentShip = y;
                    shotVars.splice(getShotIndex(shotVars, target), 1);

                    if (target%10 != 0) {
                        shotVars.splice(getShotIndex(shotVars, (target - 9)), 1);
                        shotVars.splice(getShotIndex(shotVars, (target + 11)), 1);
//                        if (userArray[target-1 - 9]) {
//                            userArray[target-1 - 9].classList.add('slip');
//                        }
//                        if (userArray[target-1 + 11]) {
//                            userArray[target-1 + 11].classList.add('slip');
//                        }
                    }

                    if (target%10 != 1) {
                        shotVars.splice(getShotIndex(shotVars, (target + 9)), 1);
                        shotVars.splice(getShotIndex(shotVars, (target - 11)), 1);
//                        if (userArray[target-1 + 9]) {
//                            userArray[target-1 + 9].classList.add('slip');
//                        }
//                        if (userArray[target-1 - 11]) {
//                            userArray[target-1 - 11].classList.add('slip');
//                        }
                    }

                    if (userShips[y].hits == userShips[y].dataLength) {
                        console.log('Убил');
                        killsUser = killsUser + 1;
                        shot = false;
                        userShips[y].killed = true;
                        currentShip = undefined;

                        for (var i = 0; i < userShips[y].dataLength; i++) {

                            if ((userShips[y]["position" + i] + 1)%10 != 0) {
                                shotVars.splice(getShotIndex(shotVars, (userShips[y]["position" + i] + 1) + 1), 1);

//                                if (userArray[userShips[y]["position" + i] + 1]) {
//                                    userArray[userShips[y]["position" + i] + 1].classList.add('slip');
//                                }
                            }

                            if ((userShips[y]["position" + i] + 1)%10 != 1) {
                                shotVars.splice(getShotIndex(shotVars, (userShips[y]["position" + i] - 1) + 1), 1);

//                                if (userArray[userShips[y]["position" + i] - 1]) {
//                                    userArray[userShips[y]["position" + i] - 1].classList.add('slip');
//                                }
                            }

                            shotVars.splice(getShotIndex(shotVars, (userShips[y]["position" + i] + 10) + 1), 1);
                            shotVars.splice(getShotIndex(shotVars, (userShips[y]["position" + i] - 10) + 1), 1);
//                            if (userArray[userShips[y]["position" + i] + 10]) {
//                                userArray[userShips[y]["position" + i] + 10].classList.add('slip');
//                            }
//                            if (userArray[userShips[y]["position" + i] - 10]) {
//                                userArray[userShips[y]["position" + i] - 10].classList.add('slip');
//                            }
                        }

                        if (killsUser == userShips.length) {
                            gameOver = true;
                            dataAlert('Компьютер победил! Количество выстрелов: ' + killsUserCount + '. Он оказался сильнее, чем ты, sorry.', 'game-over');
                        }
                    }
                    setTimeout(compShot, 1000);
                    return;
                }
            }
        }

        userArray[target-1].classList.add('slip');
        console.log('Промах');
        killsUserCount = killsUserCount + 1;
        shotVars.splice(getShotIndex(shotVars, target), 1);
//        fire.disabled = false;
        document.querySelector('.area__alert').style.display = "none";
    }

    function getShotIndex(array, target) {
        for (var i=0; i < array.length; i++) {
            if (array[i] == target) {
                return i;
            }
        }
        return 1000;
    }

    function haveShot(array, target) {
        for (var i=0; i < array.length; i++) {
            if (array[i] == target) {
                return true;
            }
        }
        return false;
    }

    function shotVarsForKillPush(arrayCheck, target, arrayPush) {
        if (target%10 != 0) {
            if (haveShot(arrayCheck, target+1)) {
                arrayPush.push(target+1);
            }
        }
        if (target%10 != 1) {
            if (haveShot(arrayCheck, target-1)) {
                arrayPush.push(target-1);
            }
        }
        if (haveShot(arrayCheck, target+10)) {
            arrayPush.push(target+10);
        }
        if (haveShot(arrayCheck, target-10)) {
            arrayPush.push(target-10);
        }
    }

    function dataAlert(text, mode) {
        var alerts = document.querySelector('.alerts');
        var p = document.querySelector('.alerts p');
        $('.alerts p').removeClass();
        $('.alerts p').html(text)

        if (mode == "slip") {
            $('.alerts p').addClass('animated jello');
        }
        if (mode == "hit") {
            $('.alerts p').addClass('animated bounceIn');
        }
        if (mode == "kill") {
            $('.alerts p').addClass('animated tada');
        }
        if (mode == "game-over") {
            $('.alerts p').addClass('animated flipInX');
        }

        setTimeout(function () {
            $('.alerts p').removeClass();
        }, 1000);
    }

    function log(text, target) {
        var column = target % 10;
        if (column != 0) {
            var row = Math.floor(target/10) + 1;
        } else {
            var row = Math.floor(target/10);
        }
        switch (column) {
            case 1:
                column = "A";
                break;
            case 2:
                column = "B";
                break;
            case 3:
                column = "C";
                break;
            case 4:
                column = "D";
                break;
            case 5:
                column = "E";
                break;
            case 6:
                column = "F";
                break;
            case 7:
                column = "G";
                break;
            case 8:
                column = "H";
                break;
            case 9:
                column = "I";
                break;
            case 0:
                column = "J";
                break;
            default:
                alert('Ошибка');
        }

        var p = document.createElement('p');
        p.innerHTML = "<b>" + column + row + "</b>" + " " + text;
        logs.insertBefore(p, logs.firstChild);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
