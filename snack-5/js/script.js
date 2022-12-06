/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

*/



const people = [
    {
        name : 'Pippo',
        surnmame : 'Esposito',
        age: '33',
    },

    {
        name : 'Antonio',
        surnmame : 'Catanzaro',
        age: '16',
    },

    {
        name : 'Giuseppe',
        surnmame : 'Esposito',
        age: '12',
    },

    {
        name : 'Aniello',
        surnmame : 'Piscopo',
        age: '33',
    },

    {
        name : 'Gennarino',
        surnmame : 'Esposito',
        age: '3',
    },

    {
        name : 'Ioduro di Sodio',
        surnmame : 'Esposito',
        age: '78',
    },

    {
        name : 'Pippo',
        surnmame : 'Esposito',
        age: '33',
    },

    {
        name : 'Pippo',
        surnmame : 'Esposito',
        age: '33',
    },

    {
        name : 'Pippo',
        surnmame : 'Esposito',
        age: '33',
    },

    {
        name : 'El',
        surnmame : 'Blanco',
        age: '49',
    },
]


people.forEach(person => {
    let comment = person.name + ' ' + person.surnmame + ' ';
    if(person.age >= 18){
        console.log(comment + 'può guidare');
    }else if(person.age>=14){
        console.log(comment + 'può guidare solo il motorino');
    }else{
        console.log(comment + 'non può guidare');
    }
})