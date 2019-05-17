var word = ["t", "e", "s", "t"]

function writeWord(){
    for (var i=0; i < word.length; i++){
        var newDiv = document.createElement('div');
        newDiv.id= "letter"+i;
        newDiv.textContent = "_";

        var divParent = document.getElementById("theWord");
        divParent.appendChild(newDiv);
    }
}

function checkWord(){
    if (document.getElementById("guess").value== word){
    alert("Goedzo!");}
    else {
        alert("Jammer... Probeer het nog eens!");}
}

function checkLetter(){
    if (document.getElementById("guess").value=="e");{
        document.getElementsByClassName("lettere").innerHTML = "e";
    }
        
}
