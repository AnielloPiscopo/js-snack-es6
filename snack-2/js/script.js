/**
 * 
 Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const automobili = [
    {
        marca : '1',
        modello : 'Ma che ne so',
        alimentazione : 'benzina',
    },

    {
        marca : '2',
        modello : 'Ma che ne so',
        alimentazione : 'diesel',
    },

    {
        marca : '3',
        modello : 'Ma che ne so',
        alimentazione : 'gpl',
    },

    {
        marca : '4',
        modello : 'Ma che ne so',
        alimentazione : 'elettrico',
    },

    {
        marca : '5',
        modello : 'Ma che ne so',
        alimentazione : 'metano',
    },

    {
        marca : '6',
        modello : 'Non lo so',
        alimentazione : 'benzina',
    },

    {
        marca : '7',
        modello : 'Non lo so',
        alimentazione : 'diesel',
    },

    {
        marca : '8',
        modello : 'Non lo so',
        alimentazione : 'gpl',
    },

    {
        marca : '9',
        modello : 'Non lo so',
        alimentazione : 'elettrico',
    },

    {
        marca : '10',
        modello : 'Non lo so',
        alimentazione : 'metano',
    },
]


const autoABenzina = [];
const autoADiesel = [];
const autoRimanenti = [];


for(let i=0 ; i<automobili.length ; i++) {
    switch (automobili[i]['alimentazione']){
        case 'benzina':
            autoABenzina.push(automobili[i]);
            break;

        case 'diesel':
            autoADiesel.push(automobili[i]);
            break;

        default:
            autoRimanenti.push(automobili[i]);
    }
}


console.log(automobili);
console.log(autoABenzina);
console.log(autoADiesel);
console.log(autoRimanenti);