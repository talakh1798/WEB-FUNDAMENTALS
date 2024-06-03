/*
Desc: This function will do count number for Like button
Developer name: Tala khaled
Time Date: 12/5/2024
Email: talakh1798@gmail.com
Input: HTML Element 
Output: None
*/

function addLike(element){
    var x= document.getElementById(element);
    var count= parseInt(x.innerText);
    x.innerText=count+1;
}


// var count = 0;
// var countElement= document.querySelector(".box-like");

// console.log(countElement);

// function Add(element){
//     count++;
//     countElement.innerText=  count +" like(s)";
//     console.log(count);
// } 

// var count1 = 12;
// var countElement1= document.querySelector(".box-like1");

// console.log(countElement1);
// var count2 = 0;
// var countElement2= document.querySelector(".box-like2");
// console.log(countElement2);

// function Add2(element){
//     count2++;
//     countElement2.innerText=  count2 +" like(s)";
//     console.log(count2);
// } 



   

