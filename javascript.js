window.onload = function load() {
    var fieldArray = document.querySelectorAll('td');

    var ships = []; // объявление массива

    ships[0] = {
        dataLength: 4,
        killed: false,
        hits: 0
    }

    ships[1] = {
        dataLength: 3,
        killed: false,
        hits: 0
    }

    ships[2] = {
        dataLength: 3,
        killed: false,
        hits: 0
    }

    ships[3] = {
        dataLength: 2,
        killed: false,
        hits: 0
    }

    ships[4] = {
        dataLength: 2,
        killed: false,
        hits: 0
    }

    ships[5] = {
        dataLength: 2,
        killed: false,
        hits: 0
    }

    ships[6] = {
        dataLength: 1,
        killed: false,
        hits: 0
    }

    ships[7] = {
        dataLength: 1,
        killed: false,
        hits: 0
    }

    ships[8] = {
        dataLength: 1,
        killed: false,
        hits: 0
    }

    ships[9] = {
        dataLength: 1,
        killed: false,
        hits: 0
    }

    for (var i = 0; i < ships.length; i++) {
        var orientation = getRandomInt(0, 1);

        if (orientation == 0) {
            var row = getRandomInt(1, 10);
            var position0 = getRandomInt(row*10-9, row*10 - (ships[i].dataLength-1));
            var position;
            var access = false;

            while (!access) {
                var error = 0;
                for (var x = 0; x < ships[i].dataLength; x++) {
                    if (fieldArray[position0 + x - 1].classList.contains('ship')) {
                        error = error + 1;
                    }
                }

                if (error == 0) {
                    access = true;
                } else {
                    row = getRandomInt(1, 10);
                    position0 = getRandomInt(row*10-9, row*10 - (ships[i].dataLength-1));
                }
            }

            ships[i]["position0"] = position0;

            fieldArray[ships[i].position0-1].classList.add('ship');

            for (var x = 1; x < ships[i].dataLength; x++) {
                ships[i]["position" + x] = ships[i]["position" + (x-1)] + 1;
                fieldArray[ships[i]["position" + x]-1].classList.add('ship');
            }

            if (ships[i].position0 != (row*10-9)) {
                position = ships[i].position0-2;
                fieldArray[position].classList.add('ship', 'none');
            }

            if (ships[i]['position' + (ships[i].dataLength-1)] != (row*10)) {
                position = ships[i]['position' + (ships[i].dataLength-1)];
                fieldArray[position].classList.add('ship', 'none');
            }

            for (var x = 0; x < ships[i].dataLength; x++)  {
                var top = ships[i]["position" + x] - 10 - 1;
                var bottom = ships[i]["position" + x] + 10 - 1;

                if (top >=0 && top <=99 && row != 1) {
                    fieldArray[top].classList.add('ship', 'none');
                }

                if (bottom >=0 && bottom <=99 && row != 10) {
                    fieldArray[bottom].classList.add('ship', 'none');
                }

                if (ships[i].position0 != (row*10-9))  {
                    top = ships[i]["position" + x] - 10 - 2;
                    bottom = ships[i]["position" + x] + 10 - 2;

                    if (top >=0 && top <=99) {
                        fieldArray[top].classList.add('ship', 'none');
                    }

                    if (bottom >=0 && bottom <=99) {
                        fieldArray[bottom].classList.add('ship', 'none');
                    }
                }

                if (ships[i]['position' + (ships[i].dataLength-1)] != (row*10)) {
                    top = ships[i]["position" + x] - 10;
                    bottom = ships[i]["position" + x] + 10;

                    if (top >=0 && top <=99) {
                        fieldArray[top].classList.add('ship', 'none');
                    }

                    if (bottom >=0 && bottom <=99) {
                        fieldArray[bottom].classList.add('ship', 'none');
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

            var position0 = parseInt(position0Arrow[getRandomInt(0, (9-(ships[i].dataLength-1)))]);
            var position;
            var access = false;

            while (!access) {
                var error = 0;
                for (var x = 0; x < ships[i].dataLength; x++) {
                    if (fieldArray[position0 + (x*10) - 1].classList.contains('ship')) {
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
                    position0 = parseInt(position0Arrow[getRandomInt(0, (9-(ships[i].dataLength-1)))]);
                }
            }

            ships[i]["position0"] = position0;

            fieldArray[ships[i].position0-1].classList.add('ship');

            for (var x = 1; x < ships[i].dataLength; x++) {
                ships[i]["position" + x] = ships[i]["position" + (x-1)] + 10;
                fieldArray[ships[i]["position" + x]-1].classList.add('ship');
            }

            if (ships[i].position0 != column) {
                position = ships[i].position0-11;
                fieldArray[position].classList.add('ship', 'none');
            }

            if (ships[i]['position' + (ships[i].dataLength-1)] != (column+90)) {
                position = ships[i]['position' + (ships[i].dataLength-1)] + 9;
                fieldArray[position].classList.add('ship', 'none');
            }

            for (var x = 0; x < ships[i].dataLength; x++)  {
                var left = ships[i]["position" + x] - 1 - 1;
                var right = ships[i]["position" + x] + 1 - 1;

                if (left >=0 && left <=99 && column != 1) {
                    fieldArray[left].classList.add('ship', 'none');
                }

                if (right >=0 && right <=99 && column != 10) {
                    fieldArray[right].classList.add('ship', 'none');
                }

                left = ships[i]["position0"] - 10 - 2;
                right = ships[i]["position0"] - 10;

                if (left >=0 && left <=99 && column != 1) {
                    fieldArray[left].classList.add('ship', 'none');
                }

                if (right >=0 && right <=99 && column != 10) {
                    fieldArray[right].classList.add('ship', 'none');
                }

                left = ships[i]["position" + (ships[i].dataLength-1)] + 10 - 2;
                right = ships[i]["position" + (ships[i].dataLength-1)] + 10;

                if (left >=0 && left <=99 && column != 1) {
                    fieldArray[left].classList.add('ship', 'none');
                }

                if (right >=0 && right <=99 && column != 10) {
                    fieldArray[right].classList.add('ship', 'none');
                }
            }
        }
    }

    var newFieldArray = [];
    var hitsArray = [''];
    var kills = 0;
    var gameOver = false;

    for (var i = 0; i < fieldArray.length; i++) {
    newFieldArray.push(fieldArray[i]);

        fieldArray[i].addEventListener('click', function(e) {
            if (gameOver == true) {
                alert('Игра окончена.');
                return false;
            }

            var target = (newFieldArray.indexOf(e.target)+1);
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
                for (var y = 0; y < ships.length; y++) {
                    for (var x = 0; x < ships[y].dataLength; x++) {
                        if (target == ships[y]["position" + x]) {
                            fieldArray[target-1].classList.add('hitting');
                            log('Попадание', target);
                            dataAlert('Попадание', 'hit');
                            ships[y].hits = ships[y].hits + 1;
                            hitsArray.push(target);
                            added = true;
                            hit = true;

                            if (ships[y].hits == ships[y].dataLength) {
                                log('<b>Убил</b>', target);
                                dataAlert('Убил!', 'kill');
                                ships[y].killed = true;
                                kills = kills + 1;
                            }

                            break checkHit;
                        }
                    }
                }

                if (hit == false) {
                    fieldArray[target-1].classList.add('slip');
                    log('Промах', target);
//                    dataAlert('Промах', 'slip');
                }
            }

            if (added == false && repeat == false) {
                hitsArray.push(target);
                added = true;
            }

            if (kills == ships.length) {
                alert('Победа за ' + (hitsArray.length-1) + ' ходов. Можно было и лучше...');
                log('Winner winner chicken dinner!', target);
                gameOver = true;
            }
        });
    }

    for (var i = 0; i < fieldArray.length; i++) {
        newFieldArray.push(fieldArray[i]);

        fieldArray[i].addEventListener('contextmenu', function(e) {
            var target = (newFieldArray.indexOf(e.target)+1);
            fieldArray[target-1].classList.add('slip');
            e.preventDefault();
        });
    }

    function dataAlert(text, mode) {
        if (document.querySelector('.alert')) {
            document.querySelector('.alert').parentNode.removeChild(document.querySelector('.alert'));
        }

        var p = document.createElement('p');
        var table = document.querySelector('table');

        if (mode == "slip") {
            p.className = "alert alert-slip";
        }
        if (mode == "hit") {
            p.className = "alert alert-hit";
        }
        if (mode == "kill") {
            p.className = "alert alert-kill";
        }

        p.innerHTML = text;
        table.appendChild(p);
        setTimeout(function(){
            document.querySelector('.alert').parentNode.removeChild(document.querySelector('.alert'));
        },1500);
    }

    function log(text, target) {
        var column = target % 10;
        console.log('column = ' + column);
        if (column != 0) {
            var row = Math.floor(target/10) + 1;
        } else {
            var row = Math.floor(target/10);
        }
        console.log('row = ' + row);
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
