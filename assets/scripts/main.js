function handleKeyUp(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    // console.log(audio);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    // console.log(key);
    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName != "transform") return;
    // console.log(e.propertyName);    
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

document.body.addEventListener("keyup", handleKeyUp);



