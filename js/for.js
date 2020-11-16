/***************************
 * Kintamųjų palyginimas
 ****************************/
// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”
// 1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// A) kuris didesnis
// B) kuris mažesnis
// C) ar jie lygūs
// D) ar jie nelygūs
// E) kuris didesnis arba lygus
// F)kuris mažesnis arba lygus

const num1 = 6;
const num2 = 3;
const num3 = 5;
if (num1 > num2) {
    console.log('Pomidoras');
} else if (num1 > num3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

if (num3 < num2) {
    console.log('Pomidoras');
} else {
    if (num3 < num1) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kita karta...');
    }
}

// 2. Išvesti teksto tipo kintamųjų ilgius

const text = 'Labas';
const text2 = 'vakaras';
console.log(`${text.length}`);
console.log(`${text2.length}`);

// 3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

if (text.length >= text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

if (text.length <= text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

if (text.length === text2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

// 4. Išvesti sąrašo tipo kintamųjų ilgius

const sarasas = ['Vilnius', 'Kaunas', 'Klaipeda'];
console.log(sarasas[0].length);
console.log(sarasas[1].length);
console.log(sarasas[2].length);

// 5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:

if (sarasas[0].length >= sarasas[1].length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

if (sarasas[2].length <= sarasas[1].length) {
    console.log('Pomidoras');
} else if (sarasas[2].length <= sarasas[0].length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta...');
}

/**********************************
 * Ciklo for panaudojimas
 **********************************/
// 1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 - 0
// 0 - 4 (1+2+3+4=10)
// 0 - 100
// 574 - 815
// -50 - 50
// -70 - 30

console.log('1 For ciklo uzduotis (0-0)');

for (let i = 0; i <= 0; i++) {
    console.log(i);
}

console.log('1 For ciklo uzduotis (0-4)');

let interval = 0;

for (let i = 0; i <= 4; i++) {
    interval = interval + i;
}
console.log(interval);

console.log('1 For ciklo uzduotis (574-815)');

let interval2 = 0;

for (let i = 574; i <= 815; i++) {
    interval2 = interval2 + i;
}
console.log(interval2);

console.log('1 For ciklo uzduotis (-50 - 50)');

let interval3 = 0;

for (let i = -50; i <= 50; i++) {
    interval3 = interval3 + i;
}
console.log(interval3);

console.log('1 For ciklo uzduotis (-70 - 30)');

let interval4 = 0;

for (let i = -70; i <= -30; i++) {
    interval4 = interval4 + i;
}
console.log(interval4);

// 2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”

console.log('2 For ciklo uzduotis');

const abecele = 'abcdef';
let atsakymas = '';

for (i = abecele.length - 1; i >= 0; i--) {
    const transform = abecele[i];
    atsakymas = atsakymas + transform;
}
console.log(atsakymas);

// 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// 0 - 11
// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

const divider = 3;
let sumaa = 0;
let totall = 0;

for (let i = 0; i <= 11; i++) {
    sumaa = sumaa % i;
}
console.log(sumaa);
