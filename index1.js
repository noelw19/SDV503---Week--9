let students = {
    name: 'Luke',
    class: 'SDV503',
    school: 'NMIT'
}

console.log(Object.keys(students));

Object.freeze(students) //freezes object and doesnt allow changes

students.name = "Phill" //trying to change object name value to phill

console.log(students);

