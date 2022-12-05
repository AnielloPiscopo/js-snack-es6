// 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
// 2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.


const students = [
    student1 = {
        name: 'Aniello',
        'last-name' : 'Piscopo',
        age : 34,
    },

    student2 = {
        name: 'Giancarlo',
        'last-name' : 'Esposito',
        age : 35,
    },

    student3 = {
        name: 'Carlo',
        'last-name' : 'Cracco',
        age : 50,
    }
]



for(let i=0 ; i<students.length ; i++){
    let student = students[i];

    for(let key in students){
        console.log(student);
        console.log(student['name']);
        console.log(student['last-name']);
        console.log(student['age']);
    }
}