document.title = "this is tutorial 7 let me dicus to array";
// let discouse of array
let marks = [34, 23, 24, 93, 73, 25];
let fruit = ["Mango", "Orange", "Pine Apple", "banna", "graps"];
let mixed = ["mango", 23, 22.5, "banna"];

const arr = new Array(23, 25, 26, 88, "apple");



// console.log(marks);
// console.log(fruit);
// console.log(mixed);
// // console.log(Array.isArray([1, 2, 3])); //length is property
// console.log(Array.isArray(arr)); //length is property
// marks[1] = 99;

// indexOf
let value = marks.indexOf(23)
    // console.log(value);

// muatating of array
// marks.push(100); //add end 
// marks.unshift(1003); //add sart
// console.log(marks)

// marks.pop(); //remove starting
// marks.shift(); //remove start
// console.log(marks)

// marks.splice(1, 2);      //strat and end 
// marks.splice(2, 4);
// console.log(marks)

// console.log(marks)
// marks.reverse()
// console.log(marks)

// let marks2 = [1, 2, 3, 4, 5];
// marks = marks.concat(marks2)        //marge
// console.log(marks)

let myObj = {
    name: "sarwan",
    "father Name": "anil Choudhary",
    website: "inchstreet",
    isAvtive: true,
    marks: [58, 59, 68, 78, 88]
}
console.log(myObj)
console.log(myObj.name)
console.log(myObj['father Name']);
console.log(myObj.website)
console.log(myObj.isAvtive)
console.log(myObj.marks)