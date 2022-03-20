/**
 * data types in js
 *      primitive Data type
 *          string      '',"", `` hello
 *          number      1234
 *          boolean     true/false
 *          null        blank
 *          undifiend   
 *          symboll
 *      refrence Data type
 *          arrays
 *          object literals
 *          function
 *          data
 */
// primetive Data  type
// string
let name = "sarwan";
console.log("my name is " + name);
console.log('data type is ' + (typeof name))

//number
let marks = 45;
console.log(marks)
console.log('data type is ' + (typeof marks))

//boolean
let isDriave = true;
console.log(isDriave)
console.log('data type is ' + (typeof isDriave))

//null
let nulVar = null;
console.log(nulVar)
console.log('data type is ' + (typeof nulVar))

//null
let unded = undefined;
console.log(unded)
console.log('data type is ' + (typeof unded))

// refrence data type
// array
let myarr = [1, 2, 3, 4, 5, 6, 7, "string", true]
console.log(myarr)
console.log('data type is ' + (typeof myarr))

// object liserals
let studentmarks = {
    sarwan: 89,
    sanjay: 78,
    arun: 90,
    'saurav k': 89
}
console.log(studentmarks)
console.log('data type is ' + studentmarks)

// function
function findName() {

}
console.log(findName)
console.log('data type is ' + (typeof findName))