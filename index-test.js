

let myInteger = 1;
let myDouble = 2.1;
let myString = "Pablo";
let myBoolean = true;

myDouble = myDouble + parseInt("1");
/*
console.log(myDouble);

let a = 1;
let b = "1";

if (a === b)
    console.log(a+ " es igual a "+b);
else
    console.log(a+ " NO es igual a "+b);



let o = new Object();
let m = new Map();
let numbers = new Array();

numbers[0] = 1;
numbers[1] = 2;

numbers.push(3);

log(numbers)

for(let i=0;i<numbers.length;i++){
    log(i+": "+numbers[i]);
}




let numbers = [3,4,5,6,7,8,9]

function log(msg){
    console.log(msg);
}

numbers
    .filter((n)=>{
        return n>6;
    }).map((n)=>{
        return n+2;
    }).forEach((n) => log(n));


var s = numbers
            .reduce( (a,n) =>{
                log(a+" --> "+n);
                return a+n;
            });

log(s);

*/

let contact = new Object();

contact.name = "pepe";
contact.phone = 123456;

let list = 
    [{ name: 'luis', phone: 13456 },
     { name: 'pepe', phone: 23456 },
     { name: 'maria', phone: 33456 },
     { name: 'paco', phone: 43456 }];


console.log(search(list,"lu"));
//Salida: [{ name: 'luis', phone: 13456 }]

function search(list,searchString){
    return list.filter( (n) => n.name.match(searchString));
}

function searchAndPrint(list,searchString){
    list
        .filter( (n) => n.name.match(searchString))
        .forEach( (n) => console.log(n));
}

