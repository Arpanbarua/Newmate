
document.write("I love Bangladesh <br> ");
document.write("I live in Bangladesh");

var a = '3';

a= parseInt(a);
console.log(typeof(a)) ;

var b = true;
console.log(b);

var c= "hello";
console.log(c);

var d= 2.3456;

console.log(d.toFixed(2));
console.log(d.toPrecision(2));
console.log(Number(false))
/*
var v= prompt("What's ur name?");
var cv= " is my name";
var cv2= v.slice(0,4); // prints 0-3 characters
console.log(cv2);
console.log(v.slice(1,4));
var f = v.length;
console.log(f);
console.log("length of String/Num of characters: "+f);
console.log(v.charAt(2));
console.log(v.toUpperCase());
console.log(v.toLowerCase());
document.write(v+" is my name");
console.log(v.concat(cv));

*/
var b2= 3;
b2  %=3;
console.log(b2)
 /*
var num1= prompt("Enter 1st input:");
var num2= prompt("Enter 2nd input:");

var result;

num1 = parseInt(num1,10);
num2 = parseInt(num2,10);

result = num1+num2;
console.log(num1+ " + " + num2 + " = "+ result);

result = num1-num2;
console.log(num1+ " - " + num2 + " = "+ result);

result = num1*num2;
console.log(num1+ " * " + num2 + " = "+ result);

result = num1/num2;
console.log(num1+ " / " + num2 + " = "+ result);

result = num1**num2;
console.log(num1+ " **" + num2 + " = "+ result);


var ba= prompt("Enter Input:");
var bb= prompt("Enter Input:");
var height= prompt("Enter input:");
var result;

ba= parseFloat(ba);
bb= parseFloat(bb);

result= ba**2;
console.log(result+" square");

result= 0.5 * ba * bb;
console.log(result+" triangle");

result= ba*bb;
console.log(result+" rectangle");


var f= parseFloat(prompt("Enter fahrenheit:"));
var cel= (f-32)*(5/9);
console.log(cel.toFixed(2));

*/
/*
var num1 = prompt("Enter number:");
var num2 = prompt("enter num 2:");
var num3 = prompt("Enter num3 : ");


num1 = parseInt(num1,10);
num2 = parseInt(num2,10);
num3 = parseInt(num3,10);

console.log("The three numbers are: "+num1+"  "+num2+"  "+num3);
if (num1>num2 && num1>num3){
    console.log(num1 + " is greatest");
}
else if(num2>num1 && num2>num3){
    console.log(num2+ " is greatest");
}
else {
    console.log(num3+" is greatest");
}
*/
/*
if(num1 % 2==0){
    console.log("even");
}
else{
    console.log("odd");
}

if (num1<0){
    console.log("negative");
}
else if (num1==0){
    console.log("Zero");
}
else{
    console.log("positive");
}

if (num1>100 || num1<0){
    console.log("Invalid");
}
else if (num1>=80 && num1<=100){
    console.log("A+");
}
else if(num1>=70 && num1<=79){
    console.log("A");
}
else if(num1>=60 && num1<=69){
    console.log("A-");
}
else if(num1>=50 && num1<=59){
    console.log("B");
}
else if(num1>=40 && num1<=49){
    console.log("C");
}
else if(num1>=33 && num1<=39){
    console.log("D");
}
else{
    console.log("FAIL");
}



var letter=prompt("enter a letter:");

if(letter=="a"|| letter=="e"||letter=="i" || letter=="o"  ||letter=="u")
{
    console.log("vowel");
}
else{
    console.log("consonant");
}


var letter = prompt("Enter letter:");

letter = letter.toLowerCase();

switch(letter){
 case "a":
 case "e":
 case "i":
 case "o":
 case "u":
     console.log("vowel");
     break;
 default:
     console.log("consonant");
   

} 



var num= prompt("Enter a word:");
num = num.toLowerCase();

switch(num){
    case "1":
        console.log("one");
        break;
    
        case "2":
            console.log("two");
            break;

            case "3":
        console.log("three");
        break;

        case "4":
        console.log("four");
        break;

        case "5":
        console.log("five");
        break;

        case "6":
        console.log("six");
        break;

        case "7":
        console.log("seven");
        break;

        case "8":
        console.log("eight");
        break;

        case "9":
        console.log("nine");
        break;

        case "10":
        console.log("ten");
        break;

        default:
            console.log("invalid");
}

*/
