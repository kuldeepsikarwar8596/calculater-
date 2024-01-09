function addToDisplay (value){
    document.getElementById('display').value += value;
}

function clearDisplay (){
    document.getElementById("display").value = "";
}
function clearOne (){
    document.getElementById("display").value = display.value.toString().slice(0,-1);
}

 function goToResult(){
    try {
        let result= eval(document.getElementById('display').value);
        document.getElementById('display').value = result
    } catch (error) {
        alert('Error')
    }
 }



 // Play the audio when the button is clicked
let audio = new Audio('click.wav')
let button = document.querySelectorAll('input[type="button"]')
 
 
 button.addEventListener('click', function() {
    audio.play();
  });