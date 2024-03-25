console.log('STUDENTI  -TEST-');
console.log(''); //SPAZIO VUOTO

// ARRAY OGGETTI STUDENTI

const studentsArray = [
    {
        studentName : 'Raff',
        studentLast : 'Val',
        studentAge : '28',

    },
    {
        studentName: 'Giorgio',
        studentLast: 'Barbuto',
        studentAge: '25',

    },
    {
        studentName: 'Sandra',
        studentLast: 'SenzaZucchero',
        studentAge: '32',

    },
    {
        studentName: 'Ilaria',
        studentLast: 'Ilarioni',
        studentAge: '21',

    }

]

console.log(studentsArray);
console.log('Stusenti inseriti nel database : ');

// STAMPA NOME COGNOME STUDENTI

// for (let i = 0; i < studentsArray.length; i++) {
//     const studentElement = studentsArray[i];
//     console.log(studentElement.studentName , studentElement.studentLast);
    
// }

studentsArray.forEach(function(element, index) {
    console.log(element.studentName , element.studentLast);
})
console.log(''); //SPAZIO VUOTO

// NUOVO STUDENTE

// let choice = false;
const choice = confirm('Vuoi inserire un nuovo studente ?');
if(choice) {
    console.log('NUOVO STUDENTE : ');
    let studentName = prompt('Inserisci il nome');
    const studentLast = prompt('Inserisci il cognome');
    const studentAge = prompt('Inserisci età');
    console.log(studentName, studentLast, studentAge);
    const newStudent = {studentName, studentLast, studentAge};
    console.log(newStudent);
    const choiceConfirm = confirm('Sei sicuro di voler inserire lo studente ?')
    if(choiceConfirm) {
        studentsArray.push(newStudent);
        console.log(''); //SPAZIO VUOTO
        console.log('Studenti ora presenti nel database :');
        studentsArray.forEach(function (element, index,) {
            console.log(element.studentName, element.studentLast, ', età : ', element.studentAge);
        })
    }
    

}
