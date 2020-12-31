
/*
//do-while loop
var i=21;
do{
console.log(i);
i++;
}while(i<=20);



while(i<4){
    
    console.log(i);
    i=i+1;
}

for(i=0;i<5;i++){
    console.log(i);
}


var m=prompt("Enter the starting number:");
var n= prompt("Enter the last number:");
m = parseInt(m,10);
n = parseInt(n,10);

i=m;
var sum=0;
while(i<n){

    if (i%3==0 && i%5==0){
        console.log(i);
        sum+=i; 
       
    }
    i++;
   
}
console.log(sum);



var i=0;
while(i<100){
    
    console.log(i);
    i++;
    if(i==8){
        break;;
    }    

}

for(i=1;i<100;i++){
    console.log(i);

    if(i==8){
        break;
    }
}


//ternary operator
var num1 = Number(prompt("Enter a number:"));

var result = num1>0 ? "positive" : num1<0 ? "negative" :"zero" ;

console.log(result);



function square(){
    var num = Number(prompt("Enter number:"));
    var result = num **2;
    return result;
}

document.write(square());


function square2(num){
      var result = num **2;
    console.log(num+"   "+result);
}

square2(9);

function add(num1,num2){
    var add = num1+num2;
    return add;
}

var result = add(5,6);
console.log("result is: "+result);

function sub(num1,num2){
    var sub = num1-num2;
    return sub;
}

var result = sub(99,6);
console.log("result is: "+result);

*/

var names = new Array(5);
var names2= ["Xari","Jasni","jenu"];
names[0]="Arif";
names[1]="Reza";
names[2]="qazi";
names[3]="Shezan";
names[4]="Dipu";
names2.push("Gazi","Gaffar");
console.log(names);
console.log(names[3]);
console.log(names2[2]);
console.log(names2);

names2.pop();
console.log(names2);

var student= names.concat(names2);
console.log(student);

//new array

var surn = new Array();
surn=  ["Xari","Jasni","jenu"];
console.log(surn); 
surn.push("Muhta");
console.log(surn);
surn.pop();

console.log(surn);

for(var i=0;i<surn.length;i++){
  console.log(surn[i]);
}

// array input and sum them
/* 
var num= new Array();
var sum=0;

for(var i=0;i<5;i++){
    num[i]= parseInt(prompt("enter number:"));
}
console.log(num);

for(var i=0;i<num.length;i++){
    console.log(num[i]);
    sum+= num[i];
}
console.log(sum);
*/

