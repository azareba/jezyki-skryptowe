// W języku TypeScript przygotuj klasę z prywatną tablicą o nazwie data[] w której umieścisz dowolny ciąg liczb (tablica posortowana). Zadeklaruj konstruktor klasy, który pobiera tablicę liczb (typ number[]) i przypisuje do tablicy o nazwie data. 
// Publiczne metody klasy to compress() i decompress(), które odpowiednio kompresują metodą RLE i dekompresują dane z tablicy data.
// Wynik działania programu dla tablicy data:
// Compressed Data: [ [ 1, 3 ], [ 2, 2 ], [ 3, 4], [ 4, 1 ] ]
// Decompressed Data: [1, 1, 1, 2, 2,3, 3, 3, 3, 4]
var RLE = /** @class */ (function () {
    function RLE(data) {
        this.data = data;
    }
    RLE.prototype.compress = function () {
        var new_data = [];
        var licznik = 1;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i] === this.data[i + 1]) {
                licznik++;
            }
            else {
                new_data.push([this.data[i], licznik]);
                licznik = 1;
            }
        }
        return new_data;
    };
    RLE.prototype.decompress = function (new_data) {
        var decomp = [];
        for (var _i = 0, new_data_1 = new_data; _i < new_data_1.length; _i++) {
            var _a = new_data_1[_i], num = _a[0], licznik = _a[1];
            for (var j = 1; j <= licznik; j++) {
                decomp.push(num);
            }
        }
        return decomp;
    };
    return RLE;
}());
var tablica = new RLE([1, 1, 1, 2, 2, 3, 3, 3, 3, 4]);
var wyjscie_comp = tablica.compress();
console.log(wyjscie_comp);
var wyjscie_decomp = tablica.decompress(wyjscie_comp);
console.log(wyjscie_decomp);
