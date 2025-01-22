const { log } = require('console');
const fs = require('fs');
const path = require('path');

// const distancesArray = [
//     ['Warszawa', 300], 
//    ['Kraków', 250],
//     ['Gdańsk', 400], 
//    ['Wrocław', 270], 
//    ['Łódź', 220] 
//    ];

const danePliku = (path)=>{
    try{
        const data = fs.readFileSync(path,'utf8')
        return data.split('\n').map(linia =>{
            const [miasto, odleglosc] = linia.split(',')
            return [miasto.trim(), parseInt(odleglosc.trim())]
        })
    }catch (err){
        console.log("nie da sie odczytac pliku ",err);
        return [];
    }
}

const minOdleglosc = (odleglosc)=>{
    if (odleglosc.length === 0) return null

    let minMiasto = odleglosc[0];
    for (let i = 1; i < odleglosc.length; i++) {
        if (odleglosc[i][1] < minMiasto[1]) {
            minMiasto = odleglosc[i];
        }
    }
    return minMiasto;
}

const sciezkaTxt = path.resolve('src/odleglosc.txt')

const distancesArray = danePliku(sciezkaTxt)

if (distancesArray.length>0){
    const [miasto, odleglosc] = minOdleglosc(distancesArray)
    console.log(`min : ${miasto}, ${odleglosc} km `);
    
}else{
    console.log('nie ma pliku');
    
}


// npx babel-node .\src\skrypt31.js
// >> min : Łódź, 220 km