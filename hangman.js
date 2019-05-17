var word = ["t", "e", "s", "t"]

function writeWord(){
    for (var i=0; i < word.length; i++){
        var newDiv = document.createElement('div');
        newDiv.className= "letter"+word[i];
        newDiv.textContent = " . ";

        var divParent = document.getElementById("theWord");
        divParent.appendChild(newDiv);
    }
}

function checkLetter(){
    for (var i=0; i < word.length; i++)
     {
        if (document.getElementById("userGuess").value == word[i]){
           gevonden = document.getElementsByClassName("letter"+word[i]);
           for (item of gevonden)
             item.innerHTML = word[i];
        }
     } 
     document.getElementById("userGuess").value="";
}