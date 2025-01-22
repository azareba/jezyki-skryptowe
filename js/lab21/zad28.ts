// W języku TypeScript przygotuj klasę z prywatną tablicą o nazwie data[] w której umieścisz dowolny ciąg liczb (tablica posortowana). Zadeklaruj konstruktor klasy, który pobiera tablicę liczb (typ number[]) i przypisuje do tablicy o nazwie data. 
// Publiczne metody klasy to compress() i decompress(), które odpowiednio kompresują metodą RLE i dekompresują dane z tablicy data.
// Wynik działania programu dla tablicy data:
// Compressed Data: [ [ 1, 3 ], [ 2, 2 ], [ 3, 4], [ 4, 1 ] ]
// Decompressed Data: [1, 1, 1, 2, 2,3, 3, 3, 3, 4]


class RLE{
    private data: number[];

    constructor(data: number[]){
        this.data = data
    }

    public compress(): [number, number][] {
        const new_data: [number, number][] = [];

        let licznik = 1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === this.data[i + 1]) {
                licznik++;
            }else{
                new_data.push([this.data[i], licznik]);
                licznik = 1;
            }
        }
    
        return new_data;
    }

    public decompress(new_data:[number, number][]): number[] {
        const decomp : number[]=[]

        for (const [num,licznik] of new_data){
            for (let j = 1; j<=licznik;j++){
                decomp.push(num)
            }
        }
            
        return decomp
    }
}


const tablica = new RLE([1, 1, 1, 2, 2,3, 3, 3, 3, 4])
const wyjscie_comp = tablica.compress()
console.log(wyjscie_comp);

const wyjscie_decomp = tablica.decompress(wyjscie_comp)
console.log(wyjscie_decomp);



