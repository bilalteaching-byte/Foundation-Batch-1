let student_name = document.getElementById("student_name")
let addStudentBtn = document.getElementById("addStudentBtn")
let deleteLastStudentBtn = document.getElementById("deleteLastStudentBtn")
let deleteFirstStudentBtn = document.getElementById("deleteFirstStudentBtn")
let addAli = document.getElementById("addAli")
let copyFirstThree = document.getElementById("copyFirstThree")
let studentsInfo = document.getElementById("studentsInfo")


let students = ["Ahmed", "Bilal", "Hamza", "Usman"]

let listArray = () => {
    studentsInfo.innerHTML = ""
    for (let x = 0; x < students.length; x++) {
        let para = "<p>" + (x + 1) + ") " + students[x] + "</p>"
        studentsInfo.innerHTML += para
    }
}

let addStudent = () => {
    students.push(student_name.value)
    listArray()
    student_name.value = ""
}

let deleteLastStudent = () => {
    students.pop()
    listArray()
}
let deleteFirstStudent = () => {
    students.shift()
    listArray()
}

let addAliPostion2 = () => {
    students.splice(1, 0, "Ali")
    listArray()
}

let copy = () => {
    let copyArr = students.slice(0, 3)
    alert(copyArr)
}

addStudentBtn.addEventListener("click", addStudent);
deleteLastStudentBtn.addEventListener("click", deleteLastStudent);
deleteFirstStudentBtn.addEventListener("click", deleteFirstStudent);
addAli.addEventListener('click', addAliPostion2)
copyFirstThree.addEventListener("click", copy)
listArray()