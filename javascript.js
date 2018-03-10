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

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
