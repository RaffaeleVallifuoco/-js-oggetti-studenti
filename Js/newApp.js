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
    },
    {
        name: 'Lucia',
        last: 'Luciana',
        age: '11',
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
}
console.log(studentTable);
const filterElement = document.getElementById('filter');
filter.addEventListener('click', filtra);
filtra (studentTable);



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

const form = document.getElementById('add-form');
form.addEventListener('submit', addMember, svuota);




// add member

function addMember(e) {
    e.preventDefault()
    const name = document.getElementById('name').value // string
    const last = document.getElementById('last').value // string
    const age = document.getElementById('age').value // string
    
    const newMember = {
        name : name,
        last : last,
        age : age,
    }

    console.log(newMember)
    
    studentTable.push(newMember)

    console.log(studentTable)

    appendTable(newMember);
    
}


//svuota form

function svuota() {
    const reset = document.getElementById('add-form').reset();
}

// filtra 

function filtra (studentTables) {
    const people = studentTable.filter(studentTable => studentTable.age >= 18);
    console.log(people);
}