// Q.1 Check if number is positive, negative or zero

// let num  = 5;
// if(num > 0){
//     console.log("Positive Number")
// }else if (num < 0){
//     console.log("Negative number");
// }else{
//     console.log("Zero")
// }


// Q.2 Check if number is even or odd

// let num = 3;
// if(num % 2 === 0){
//     console.log("Even number")
// }else{
//     console.log("Odd number")
// }


// Q.3 Check if number is zero

// let num = -5;
// if(num === 0){
//     console.log("The number is zero")
// }else{
//     console.log("The number is not zero")
// }


// Q.4 Largest of two numbers

// let a = 10 , b = 30;
// if(a>b){
//     console.log("a is the largest number");
// }else{
//     console.log("b is the largest number");
// }

// Q.5 Smallest of two numbers
// let a = 5 , b = 1;

// if(a<b){
//     console.log("a is the smallest number");
// }else{
//     console.log("b is the smallest number");
// }


// Q.6 Largest of three numbers

// let a = 10 , b = 200 , c = 30;

// if(a>b && a>c){
//     console.log("a is the largest number");
// }else if (b>c){
//     console.log("b is the largest number");
// }else{
//     console.log("c is the largest number");
// }


// Q.7 Voting eligibility

// let age = 16;

// if(age>=18){
//     console.log("You are Eligible for Voting");
// }else {
//     console.log("You are not eligible for Voting");
// }


// Q.8 Leap year check

// let year = 2024;

// if((year % 4 === 0 && year % 100 !==0) ||  year % 400 ===0){
//     console.log("This is leap year")
// }else{
//     console.log("This is not a leap year")
// }

// Q.9 Vowel or consonant

// let ch = 'b';

// if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
//     console.log("Vowel")
// }else{
//     console.log("Consonant")
// }


// Q.10 Divisible by 5

// let num = 25;

// if(num % 5 === 0){
//     console.log("Divisible by 5")
// }else{
//     console.log("Not Divisible by 5")
// }


// Q.11 Divisible by 5 and 11

// let num = 25 ;

// if(num % 5 === 0 && num % 11 === 0){
//     console.log("Number is divisible by both 5 and 11")
// }else{
//     console.log("Number is not divisible by both 5 and 11");
// }

// Q.12 Multiple of 3

// let num = 9;

// if(num % 3 === 0){
//     console.log("Multiple of 3")
// }else{
//     console.log("Not multiple of 3")
// }

// Q.13 Positive and even

// let num = 12;

// if (num > 0 && num % 2 === 0){
//     console.log("The number is positive and even number")
// }else{
//     console.log("Both condition not matched")
// }


// Q.14 Minor or adult

// let age = 13;

// if (age >= 18){
//     console.log("The person is Adult");
// }else{
//     console.log("The person is Minor")
// }


// Q.15 Assign grade

let grade = 71;

if(grade >=90){
    console.log("A+ Grade")
}else if (grade >= 75){
    console.log("A Grade")
}else if (grade >= 60){
    console.log(" B Grade")
}else if (grade >=40) {
    console.log("C Grade")
}else{
    console.log("Fail")
}