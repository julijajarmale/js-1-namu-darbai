//1.Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
const pirmas = 1;
console.log('pirmas', pirmas);

const antras = 2;
console.log('antras', antras);

const trecias = 3;
console.log('trecias', trecias);

//2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis

const pirmasMenuo = 'sausis';
console.log('pirmas menuo', pirmasMenuo);

const antrasMenuo = 'vasaris';
console.log('antras menuo', antrasMenuo);

const treciasMenuo = 'kovas';
console.log('trecias menuo', treciasMenuo);

// 3.Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis

const kaina = [2.99, 5.80, 8.99, 4.99, 6];
console.log('kainos skirtingose parduotuvese', kaina);

const vaikuSkaiciusSeimoje = [0, 1, 3, 1, 5];
console.log('vaiku skaicius seimoje', vaikuSkaiciusSeimoje);

const dienosTemp = [15, 18, 13, 18, 20];
console.log('auksciausia dienos temperatura', dienosTemp);

//4.Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis

const pavarde = ['Jonaitis', 'Petraitis', 'Simasius', 'Simpsonas', 'Burokas'];
console.log('Susrinkimo dalyviai', pavarde);

const valstybes = ['Lietuva', 'Lenkija', 'Latvija', 'Estija', 'Suomija'];
console.log('Valstybiu sarasas', valstybes);

const parduotuves = ['Maxima', 'Rimi', 'IKI', 'Norfa', 'Lidl'];
console.log('Parduotuviu sarasas', parduotuves);

//Veiksmai su kintamaisiais

//1. Susumuoti visus skaičiaus tipo kintamuosius

const sum = pirmas + antras + trecias;
console.log('the sum of ' + pirmas + ',' + antras + ' and ' + trecias + ' is: ' + sum);

//2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas

const tekstoElementai = (pirmasMenuo + ' ' + antrasMenuo + ' ' + treciasMenuo);
console.log(tekstoElementai);

//3.Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5
const t1 = 15;
const t2 = 18;
const t3 = 13;
const t4 = 18;
const t5 = 20;
const verte = t1 - t2 + t3 - t4 + t5;
console.log('Verte:', verte);

//4.Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const reversedPavarde = pavarde.reverse();
console.log(reversedPavarde);

const reversedValstybes = valstybes.reverse();
console.log(reversedValstybes);

const reversedParduotuves = parduotuves.reverse();
console.log(reversedParduotuves);


/* */





