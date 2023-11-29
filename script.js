// Part 1: Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Part 2: Prime Time

// Function to check if a number is prime
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// Declare an arbitrary number
let n = 4;

// Create a loop to find the next prime number
while (true) {
    if (isPrime(n)) {
        console.log(n);
        break;
    }
    n++;
}
let data ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let ID ="";
let Name="";
let Occupation="";
let Age="";
let counter=1;

//Part 3 : Feeling Loopy
for(let i=0;i<data.length;i++){
    if(data[i]=='\n'){
        counter=1;
        ID += ', ';
        Name += ', ';
        Occupation += ', ';
        Age += ', ';
    } else {
        if(counter==1){
            if(data[i]!==',') ID += data[i];
            else counter++;
        } else if(counter==2){
            if(data[i]!==',') Name += data[i];
            else counter++;
        } else if(counter==3){
            if(data[i]!==',') Occupation += data[i];
            else counter++;
        } else {
            if(data[i]!==',') Age += data[i];
        }
    }
}

console.log(ID);
console.log(Name);
console.log(Occupation);
console.log(Age);