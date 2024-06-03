// Always Hungry

function alwaysHungry(arr) {
    for (let i=0; i< arr.length; i++){
        if (arr[i]=="food"){
            console.log("yummy");
        }
    }
       
} 

   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
