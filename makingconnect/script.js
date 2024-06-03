/*
Desc: This function will do decrease number of requests,
    and increase list connection
Developer name: Tala khaled
Time Date: 12/5/2024
Email: talakh1798@gmail.com

*/

var newName = document.querySelector(".profile-name");

function editName() {
    newName.innerText = "Tala Khaled"
    newName.style.color = 'pink'
    newName.style.fontFamily = 'cursive'
} 

function addUser(elementId) {
    ignoreUser(elementId);
    var numberOfConnections = document.querySelectorAll(".span")
    var num1= numberOfConnections[1].innerHTML;
    numberOfConnections[1].innerHTML=parseInt(num1)+1;
}  


function ignoreUser(elementId) {
     document.getElementById(elementId).remove();
    var numberOfRequest = document.querySelectorAll(".span");
    numberOfRequest[0].innerHTML -= 1;

}


