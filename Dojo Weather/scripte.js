function display() {
    alert("Loading weather report..")
}

var dismissMesaage = document.querySelector(".bottom-box")

// function accept() {
//     dismissMesaage.style.display = 'none';
// }
function accept(){
    dismissMesaage.remove();
    
}



function weather() {

    var convertToF = document.querySelectorAll(".temperature-today h3")
    var unit = document.querySelector("#unit").value

    for (var i = 0; i < convertToF.length; i++) {
        var tempNow = convertToF[i].textContent;
        var tempNumber = parseInt(tempNow);
        if (unit == '°F') {
            var tempF = tempNumber * 9 / 5 + 32;
            convertToF[i].textContent = Math.floor(tempF) + '°'

        }
        else if (unit == '°C') {
            var tempC = (tempNumber - 32) * 5 / 9;
            convertToF[i].textContent = Math.floor(tempC) + '°'
        }
 
    }


}