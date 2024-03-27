console.log('OURSTUDENTS');

//GLOBAL VAR

//MAIN
const studentTable = [
    {
        name: 'Raffaele',
        last: 'Vallifuoco',
        age: '28',
    },
    {
        name: 'Eli',
        last: 'Sugar',
        age: '30',
    },
    {
        name: 'Gian',
        last: 'Paolo',
        age: '36',
    }
]
console.log(studentTable);

for (let i = 0; i < studentTable.length; i++) {
    const currentMember = studentTable[i];
    // const name = currentMember.name;
    // const last = currentMember.last;
    // const age = currentMember.age;
    // const tableElement = document.getElementById('usersTable')
    // const trString = `
        
    //     <td>${currentMember.name}</td>
    //     <td>${currentMember.last}</td>
    //     <td>${currentMember.age}</td>
        
    //     `
    console.log(currentMember);
    appendTable(currentMember);
    //tableElement.innerHTML += trString;
}


//FUNCTIONS


//append table

function appendTable(member) {

    const tableElement = document.getElementById('usersTable')
    const trString = `
        < tr >
            <td>${member.name}</td>
            <td>${member.last}</td>
            <td>${member.age}</td>
        </tr >
        `

        tableElement.innerHTML += trString;
}