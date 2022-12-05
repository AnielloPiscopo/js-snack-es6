/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

const zucchini = [
    {
        variety: 'ASJDASKD',
        weight: '50g',
        length: '10cm',
    },

    {
        variety: 'ASJDASKD',
        weight: '50g',
        length: '10cm',
    },

    {
        variety: 'ASJDASKD',
        weight: '50g',
        length: '10cm',
    },

    {
        variety: 'ASJDASKD',
        weight: '50g',
        length: '10cm',
    },

    {
        variety: 'ASJDASKD',
        weight: '50g',
        length: '10cm',
    },

    {
        variety: 'ASJDASKD',
        weight: '50g',
        length: '10cm',
    },

    {
        variety: 'ASJDASKD',
        weight: '50g',
        length: '10cm',
    },

    {
        variety: 'ASJDASKD',
        weight: '50g',
        length: '10cm',
    },

    {
        variety: 'ASJDASKD',
        weight: '50g',
        length: '10cm',
    },

    {
        variety: 'ASJDASKD',
        weight: '50g',
        length: '10cm',
    }
]


let totalWeight = 0;
let totalLength = 0;

for(let i=0 ; i<zucchini.length ; i++){
    let zuchini = zucchini[i];

    zuchini.weight = zuchini.weight.replace('g','');
    zuchini['length'] = zuchini['length'].replace('cm','');

    totalWeight += parseFloat(zuchini.weight,10);
    totalLength += parseFloat(zuchini['length'],10);
}

let mediaWeight = totalWeight/zucchini.length;
let mediaLength = totalLength/zucchini.length;

console.log(totalWeight);
console.log(totalLength);
console.log(mediaWeight);
console.log(mediaLength);