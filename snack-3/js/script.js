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
        weight: 50,
        length: 10,
    },

    {
        variety: 'ASJDASKD',
        weight: 50,
        length: 10,
    },

    {
        variety: 'ASJDASKD',
        weight: 50,
        length: 10,
    },

    {
        variety: 'ASJDASKD',
        weight: 50,
        length: 10,
    },

    {
        variety: 'ASJDASKD',
        weight: 50,
        length: 10,
    },

    {
        variety: 'ASJDASKD',
        weight: 50,
        length: 10,
    },

    {
        variety: 'ASJDASKD',
        weight: 50,
        length: 10,
    },

    {
        variety: 'ASJDASKD',
        weight: 50,
        length: 10,
    },

    {
        variety: 'ASJDASKD',
        weight: 50,
        length: 10,
    },

    {
        variety: 'ASJDASKD',
        weight: 50,
        length: 10,
    }
]


let totalWeight = 0;
let totalLength = 0;

for(let i=0 ; i<zucchini.length ; i++){
    let zuchini = zucchini[i];
    totalWeight += zuchini.weight;
    totalLength += zuchini['length'];
}

let mediaWeight = totalWeight/zucchini.length;
let mediaLength = totalLength/zucchini.length;

console.log(totalWeight);
console.log(totalLength);
console.log(mediaWeight);
console.log(mediaLength);