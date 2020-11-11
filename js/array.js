// sarasas inicijuojamas su lauztiniais skliaustais []

// Viduje gali but ivairiu reiksmiu,bet rekomenduotina tik vieno tipo reiksmes

//Pazymiai

// petro Pazymiai = 2,10,3,2,7,10,2;
const grades = [2,10,3,2,7,10,2];
console.log(grades)

// suskaiciuoti pazymiu vidurki 
let suma = 0;
suma = suma + grades[0];
suma = suma + grades[1];
suma = suma + grades[2];
suma = suma + grades[3];
suma = suma + grades[4];
suma = suma + grades[5];
suma = suma + grades[6];
const kiekis  = grades.length;
const average = suma / kiekis;
console.log(average.toFixed(0))

const miestai = ['VIlnius' , 'Kaunas', 'Klaipeda', 'Panevezys']

console.log(miestai)
console.log(miestai[0])
