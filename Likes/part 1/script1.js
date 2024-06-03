/*
Desc: This function will do count number for Like button
Developer name: Tala khaled
Time Date: 12/5/2024
Email: talakh1798@gmail.com
Input: HTML Element 
Output: None
*/


function counterLike(element){
    var countLike=document.getElementById(element);
    var counter=parseInt(countLike.innerText);
    countLike.innerText=counter+1;
}

// var count3=3;
// var counterLikes=document.querySelector(".count-like");

// function counter(){
//     count3++;
//     counterLikes.innerText=count3+"like(s)"
//     console.log(count3);

// }