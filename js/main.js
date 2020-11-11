/***********************************
// Kintamųjų inicijavimas
***********************************/
// 1 Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
const number = 2;
console.log(number);
const number2 = 3;
console.log(number2);
const number3 = 5;
console.log(number3);

// 2 Sukurti 3 kintamuosius su teksto tipo reikšmėmis
const text = 'Pirmas';
console.log(text);
const text2 = 'Antras';
console.log(text2);
const text3 = 'Trecias';
console.log(text3);

// 3 Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
const array = [3, 5, 7, 9, 10];
console.log(array);
const array2 = [2, 4, 10, 9, 2];
console.log(array2);
const array3 = [1, 4, 9, 5, 11];
console.log(array3);

// 4 Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
const list = ['Vilnius', 'Kaunas', 'Klaipeda', 'Alytus', 'Rokiskis'];
console.log(list);
const list2 = ['stalas', 'kede', 'spinta', 'lenta', 'lova'];
console.log(list2);
const list3 = ['Petras', 'Aiste', 'Jonas', 'Ona', 'Rimas'];
console.log(list3);

/***********************************
// Veiksmai su kintamaisiais
***********************************/
// 1 Susumuoti visus skaičiaus tipo kintamuosius
const numberSum = number + number2 + number3;
console.log(numberSum);

// 2 Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
const textSum = text + ' ' + text2 + ' ' + text3;
console.log(textSum);
const textSum2 = `${text} ${text2} ${text3}`;
console.log(textSum2);

// 3 Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką (1-2+3-4+5)
let arraySum = 0;
arraySum = arraySum + array[0];
arraySum = arraySum - array[1];
arraySum = arraySum + array[2];
arraySum = arraySum - array[3];
arraySum = arraySum + array[4];
console.log(arraySum);

arraySum2 = array2[0] - array2[1] + array2[2] - array2[3] + array2[4];
console.log(arraySum2);

arraySum3 = array3[0] - array3[1] + array3[2] - array3[3] + array3[4];
console.log(arraySum3);

// 4 Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
console.log(list.reverse());

reverseList2 = `${list2[4]}, ${list2[3]}, ${list2[2]}, ${list2[1]}, ${list2[0]}`;
console.log(reverseList2);

reverseList3 = `${list3[4]}, ${list3[3]}, ${list3[2]}, ${list3[1]}, ${list3[0]}`;
console.log(reverseList3);