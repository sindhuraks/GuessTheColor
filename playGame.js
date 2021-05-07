function startGame() {
    document.getElementById("main-section").style.backgroundColor = 'teal';
    document.getElementById("result").innerHTML = " ";
    var button = document.getElementsByClassName('circle');
    //assign random red,green and blue colors
    for(var i=0;i<button.length;i++) {
        var r = Math.round(Math.random() * 256);
        var b = Math.round(Math.random() * 256);
        var g = Math.round(Math.random() * 256);
        //display the colors
        document.getElementById('para').innerHTML = 
            "RGB("+r+","+g+","+b+")";
        //set random red,green and blue colors to the buttons
        button[i].setAttribute('style','background-color: rgb('+ r +','+ g +','+ b +');');
        var get = button[i].style.backgroundColor;
        button[i].addEventListener('click',function() {
            var clickedColor = this.style.backgroundColor;
            //check if the button clicked is right or wrong
            if(get === clickedColor) {
                document.getElementById("main-section").style.backgroundColor = 'green';
                document.getElementById("result").innerHTML = "Correct!";
            }
            else {
                document.getElementById("main-section").style.backgroundColor = 'red';
                document.getElementById("result").innerHTML = "Wrong!Try again!";
            }
        });
    }
}
//reset the game
function resetGame() {
    var button = document.getElementsByClassName('replayBtn')[0];
    location.reload();
}