var newName = document.querySelector(".profile-name");


function editName(){
    newName.innerText="Tala Khaled"
}

var re =document.querySelector(".count");
var ad = document.querySelector(".connection-count")
var userRemove = document.querySelector(".request-record")

 let count=500;

function add(){
    count++;
    ad.innerText=count;
    userRemove.remove();

}
 let count2 = 2;

function Ignore(){
    count2--;
    re.innerText=count2;
    userRemove.remove();
}

