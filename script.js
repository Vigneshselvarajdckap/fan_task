let parent = document.querySelector(".main");

// let users = [
//     {name:"vicky", age:23, designation: "UI Developer" , place: "chennai"},
//     {name:"vinith", age:22, designation: "UI Developer" , place: "chennai"},
//     {name:"vadakkan", age:24, designation: "Front Developer" , place: "chennai", result: "fail"},
//     {name:"yuvaraj", age:19, designation: "UI Developer" , place: "chennai"},
//     {name:"Gokulakrishnan", age:24, designation: "Front Developer" , place: "chennai", result: "pass"},
// ]

// // let values = users.map(user => {
// //     let userFields = Object.keys(user).map(key => `<span class="label">${key} :</span>`).join('');
// //     let userValues = Object.values(user).map(value => `<p class="user-value">${value}</p>`).join('');
// //     return `<div class="user"><div class="spanlab">${userFields}</div><div>${userValues}</div></div>`;
// // }).join('');

// let values = users.map(user => {
//     return `<div class="user">
//                 ${Object.keys(user).map(key => `<p class="user-detail"><span class="label">${key}:</span> <span class="value">${user[key]}</span></p>`).join('')}
//             </div>`;
// }).join('');
// parent.innerHTML = values;



let fan = document.querySelector(".leaf")

let btns = document.querySelectorAll(".speed")

btns.forEach(buttons => {
buttons.addEventListener("click", ()=>{
if (buttons.innerText == 3) {
    fan.classList.remove("one")
    fan.classList.remove("two")
    fan.classList.add("three")
}
else if (buttons.innerText == 2) {
    fan.classList.remove("three")
    fan.classList.remove("one")
    fan.classList.add("two")
}
else if (buttons.innerText == 1) {
    fan.classList.remove("two")
    fan.classList.remove("three")
    fan.classList.add("one")
}
else{
    fan.classList.remove("one")
    fan.classList.remove("two")
    fan.classList.remove("three")
    fan.classList.add("leaf")
}
})
});












    // let assign = `<div class="card">
    // <div class="user-field name">
    // <span class="lable">Name: </span>
    // <p class="users-name">${userName.name}</p>
    // </div>
    // <div class="user-field age">
    // <span class="lable">Age: </span>
    // <p class="users-name">${userName.age}</p>
    // </div>
    // <div class="user-field designation">
    // <span class="lable">Designation: </span>
    // <p class="users-name">${userName.designation}</p>
    // </div>
    // <div class="user-field place">
    // <span class="lable">Place: </span>
    // <p class="users-name">${userName.place}</p>
    // </div>
    // </div>`
    // return assign;
    // console.log(Object.keys(userName));