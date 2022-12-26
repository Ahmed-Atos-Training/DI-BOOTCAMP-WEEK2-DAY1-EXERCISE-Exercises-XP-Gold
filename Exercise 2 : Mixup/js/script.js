let str1 = prompt('First word').toString();
let str2 = prompt('second word').toString();

let firstWord = str1.substring(0,2);
let firstWordRest=str1.substring(2,str1.length+1)

console.log(firstWord);
console.log(firstWordRest);


let secondWord = str2.substring(0,2)
let secondWordRest=str2.substring(2,str2.length+1)
console.log(secondWord);
console.log(secondWordRest);


let newWord = secondWord + firstWordRest + " " + firstWord + secondWordRest
console.log(newWord);