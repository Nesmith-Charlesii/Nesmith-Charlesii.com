let i = 0;
let text = "Web Developer";
let speed = 50;

function writeToScreen() {
    if(i < text.length) {
        document.getElementById("developer").innerHTML += text.charAt(i);
        i++;
        setTimeout(writeToScreen, speed);
    }
}
writeToScreen();