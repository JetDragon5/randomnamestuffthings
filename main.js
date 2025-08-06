document.getElementById("arrange").style.visibility = "hidden";
document.getElementById("finish").style.visibility = "hidden";
var student1 = document.getElementById("student1").innerHTML;
var student2 = document.getElementById("student2").innerHTML;
var student3 = document.getElementById("student3").innerHTML;
var student4 = document.getElementById("student4").innerHTML;
var student5 = document.getElementById("student5").innerHTML;

function input(){
//updates the text of p id: "displayNames" to include the new text, shows the finish button and hides arrange button
var student1 = document.getElementById("student1").value;
var student2 = document.getElementById("student2").value;
var student3 = document.getElementById("student3").value;
var student4 = document.getElementById("student4").value;
var student5 = document.getElementById("student5").value;
studentNames = [];

studentNames.push(student1);
studentNames.push(student2);
studentNames.push(student3);
studentNames.push(student4);
studentNames.push(student5);

console.log(studentNames);
document.getElementById("displayNames").innerHTML = studentNames;

document.getElementById("arrange").style.visibility = "hidden";
document.getElementById("finish").style.visibility = "visible";

}
function finish(){
//shows the sort button and hides the finish button
document.getElementById("finish").style.visibility = "hidden";
document.getElementById("arrange").style.visibility = "visible";
}
function arrange(){
//arranges the names alphabetically
studentNames.sort();
console.log(studentNames)
document.getElementById("displayNames").innerHTML = studentNames;
}