'use strict';
var correct=0;
var Name=prompt("What's your name?").toLowerCase();
alert("Welcome "+Name);
confirm("Please answer with y/n");

var q1=prompt("Is my favorite color black? y/n");
if(q1.toLowerCase() === "y"){
  console.log("You are right!");
  alert("You are right!");
  correct++;
}else{
  console.log("Not correct :(");
  alert("Not correct :(");
}

var q2=prompt("Is it my favorite programming language is C++? y/n");
if(q2.toLowerCase() === "n"){
  console.log("You are right!");
  alert("You are right!");
  correct++;
}else{
  console.log("Not correct :(");
  alert("Not correct :(");
}

var q3=prompt("Am I 22 years old? y/n");
if(q3.toLowerCase() === "y"){
  console.log("You are right!");
  alert("You are right!");
  correct++;
}else{
  console.log("Not correct :(");
  alert("Not correct :(");
}

var q4=prompt("Is my mother tongue Arabic? y/n");
if(q4.toLowerCase() === "y"){
  console.log("You are right!");
  alert("You are right!");
  correct++;
}else{
  console.log("Not correct :(");
  alert("Not correct :(");
}
var q5=prompt("Do I love all pets? y/n");
if(q5.toLowerCase() === "y"){
  console.log("You are right!");
  alert("You are right!");
  correct++;
}else{
  console.log("Not correct :(");
  alert("Not correct :(");
}
var num=Math.floor(Math.random() * 10);//Random number
for(var i=1;i<=4;i++){
  var q6=prompt('Guess a number between 0 to 10');
  if(parseInt(q6) === num){
    alert("You are right!");
    console.log("You are right!");
    correct++;
    break;
  }else if(parseInt(q6)> num){
    alert("Too high"); 
    console.log("Too high");
  }else if(parseInt(q6)< num){
    alert('Too low');
    console.log("Too low");
  }else{
    alert("Enter number!");}
  if(i===4){
    alert("The right number is :"+num);}
}
var cars =["mercedes","bmw","tesla","lamborghini"];
for(i=1;i<=6;i++){
  var q7=prompt('What are my favorite cars?').toLowerCase();
  var C;
  for(var l=0;l<cars.length;l++){
    if(cars[l]===q7){
      C = true;
      break;
    }else{C = false;}
  }
  if(C){
    alert('You are right!');
    console.log("You are right!");
    correct++;
    break;
  }else{
    alert('Not correct :(');
    console.log("Not correct :(");
  }
  if(i===6){
    var car='The right cars are : ';
    for(var j=0;j<cars.length;j++){
      car =car+', '+cars[j];
    }
    alert(car);
  }
}
alert(' correct answers : '+correct);
alert('Thank you '+Name);
