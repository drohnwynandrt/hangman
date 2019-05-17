var word = ["t", "e", "s", "t"]

function writeWord(){
    for (var i=0; i < word.length; i++){
        
    }
}

function checkWord(){
    if (document.getElementById("guess").value== word){
    alert("Goedzo!");}
    else {
        alert("Bijna goed!");}
}

function checkLetter(){
    if (document.getElementById("guess").value=="e");{
        document.getElementsByClassName("lettere").innerHTML = "e";
    }
        
}
