let i = 0;
let text = "Charles Nesmith II";
let typeSpeed = 50;

function writeToScreen() {
    if(i < text.length) {
        document.getElementById("developer").innerHTML += text.charAt(i);
        i++;
        setTimeout(writeToScreen, typeSpeed);
    }
}
writeToScreen();