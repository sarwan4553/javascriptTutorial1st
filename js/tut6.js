console.log("This is tutorial 6");
let name = "sarwan";
let greeting = "Good Morning";
// console.log(name + greeting);
// console.log(name + " " + greeting);

let html;
html = "<h1>This is heading</h1> <br>" + "<p>This is peragraph</p>";
// console.log(html);
html = html.concat("thisss", " ", "str2");
// console.log(html)
// console.log(html.length)
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html.toLocaleUpperCase());
// console.log(html.toLocaleLowerCase());

// console.log(html[1]);
// console.log(html.indexOf("this"));
// console.log(html.indexOf("khkhgkjhgk"));
// console.log(html.indexOf("<"));
// console.log(html.lastIndexOf("<"));
// console.log(html.charAt("4"));
// console.log(html.endsWith("str2"));
// console.log(html.includes("is"));
// console.log(html.substring(1, 4));
// console.log(html.slice(0, 4));
// console.log(html.split(" "));
// console.log(html.replace("This", "it"));

let fruits1 = 'orange\'';
let fruits2 = "Mango";
let myHtml = `hello ${name}
<h1>This is heading</h1> <p>you like ${fruits1} and ${fruits2}</p>`;
console.log(myHtml)
document.body.innerHTML = myHtml;