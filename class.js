class Grass {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];



    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));

        if (this.multiply >= 5 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }



}

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 2;
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    bazmanal() {
        if (this.energy == 10) {
            var norXotaker = new Xotaker(this.x, this.y);
            xotakerArr.push(norXotaker)
            this.energy = 5;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(1);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            this.x = miHatXot[0];
            this.y = miHatXot[1]
            matrix[miHatXot[1]][miHatXot[0]] = 2;
            this.energy++;

            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
    }


    mahanal() {
        if (this.energy == 0) {
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {

            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1]
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahanal()
        }


    }
}


class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
        this.index = 3;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {

            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1]
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();
        }


    }

    utel1() {
        this.stanalNorKordinatner();
        var xotaker = this.yntrelVandak(1);
        var miHatXotaker = random(xotaker);
        if (miHatXotaker) {
            matrix[this.y][this.x] = 1;
            this.x = miHatXotaker[0];
            this.y = miHatXotaker[1]
            matrix[miHatXotaker[1]][miHatXotaker[0]] = 3;
            this.energy++;
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var xotaker = this.yntrelVandak(2);
        var miHatXotaker = random(xotaker);
        if (miHatXotaker) {
            matrix[this.y][this.x] = 0;
            this.x = miHatXotaker[0];
            this.y = miHatXotaker[1]
            matrix[miHatXotaker[1]][miHatXotaker[0]] = 3;
            this.energy++;
            this.bazmanal();
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
    }

    bazmanal() {
        if (this.energy == 10) {
            var norGishatich = new Gishatich(this.x, this.y);
            GishatichArr.push(norGishatich)
            this.energy = 5;
        }

    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in GishatichArr) {
                if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                    GishatichArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }

    }

}

class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 4;
        this.energy = 100;
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    utel() {
        this.stanalNorKordinatner();
        var ameninch = this.yntrelVandak();
        var miHatXot = random(ameninch);
        if (ameninch) {
            if (matrix[ameninch[1][ameninch[0]]] == 1) {
                for (var i in grassArr) {
                    grassArr.splice(i, 1);
                }
            }
            else if (matrix[ameninch[1][ameninch[0]]] == 2) {
                for (var i in xotakerArr) {
                    xotakerArr.splice(i, 1);
                }
            }
            else if (matrix[ameninch[1][ameninch[0]]] == 3) {
                for (var i in GishatichArr) {
                    GishatichArr.splice(i, 1);
                }
            }
            else if (matrix[ameninch[1][ameninch[0]]] == 4) {
                for (var i in AmenakerArr) {
                    AmenakerArr.splice(i, 1);
                }
            }
            matrix[this.y][this.x] = 0;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            matrix[miHatXot[1]][miHatXot[0]] = 4;
            this.energy--;
            this.mahanal()
        }
    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in AmenakerArr) {
                if (this.x == AmenakerArr[i].x && this.y == AmenakerArr[i].y) {
                    AmenakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }

}

class NorKerpar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 5;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
        }
    }
    generate() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(4).concat(this.yntrelVandak(2).concat(this.yntrelVandak(3))));
        console.log(norVandak);
        
        if (norVandak) {
            if (matrix[norVandak[1]][norVandak[0]] == 2) {
                
                var xoter = new Xotaker(norVandak[0],norVandak[1]);
                NorkerparArr.push(xoter);
                matrix[norVandak[1]][norVandak[0]] = 2
            }
            else if(matrix[norVandak[1]][norVandak[0]] == 3){
                var xoter1 = new Gishatich(norVandak[0],norVandak[1])
                NorkerparArr.push(xoter1);
                matrix[norVandak[1]][norVandak[0]] = 3
            }
            else if(matrix[norVandak[1]][norVandak[0]] == 4){
                var xoter2 = new Amenaker(norVandak[0],norVandak[1])
                NorkerparArr.push(xoter2);
                matrix[norVandak[1]][norVandak[0]] = 4
            }
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            
        }
        else{
            this.sharjvel()
        }
    }


}