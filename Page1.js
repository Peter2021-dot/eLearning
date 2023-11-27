// Simulated correct pronunciation
const audios = ["apple.m4a", "click.wav", "click.wav", "click.wav", "click.wav", "click.wav", "click.wav", "click.wav", "click.wav"]
const apple = new Audio(audios[0]);

const showButton1 = document.getElementById("showButton1");
const cont1 = document.querySelector(".container1");
const vid1 = document.querySelector(".Video1");

// Add a click event handler to the button
showButton1.addEventListener("click", function () {
    // Toggle the visibility of the div
    if (cont1.style.display === "none" || cont1.style.display === "") {
        vid1.style.display = "none";
        cont1.style.display = "block";
        showButton1.textContent ="Video";
    } else {
        cont1.style.display = "none";
        vid1.style.display = "block";
        showButton1.textContent = "Practice";
    }
});


const showButton2 = document.getElementById("showButton2");
const cont2 = document.querySelector(".container2");
const vid2 = document.querySelector(".Video2");

// Add a click event handler to the button
showButton2.addEventListener("click", function () {
    // Toggle the visibility of the div
    if (cont2.style.display === "none" || cont2.style.display === "") {
        cont2.style.display = "block";
        vid2.style.display = "none";
        showButton2.textContent ="Video";
    } else {
        cont2.style.display = "none";
        vid2.style.display = "block";
        showButton2.textContent = "Practice";
    }
});

const showButton3 = document.getElementById("showButton3");
const cont3 = document.querySelector(".container3");
const vid3 = document.querySelector(".Video3");

// Add a click event handler to the button
showButton3.addEventListener("click", function () {
    // Toggle the visibility of the div
    if (cont3.style.display === "none" || cont3.style.display === "") {
        cont3.style.display = "block";
        vid3.style.display = "none";
        showButton3.textContent ="Video";
    } else {
        cont3.style.display = "none";
        vid3.style.display = "block";
        showButton3.textContent = "Practice";
    }
});

const showButton4 = document.getElementById("showButton4");
const cont4 = document.querySelector(".container4");
const vid4 = document.querySelector(".Video4");

// Add a click event handler to the button
showButton4.addEventListener("click", function () {
    // Toggle the visibility of the div
    if (cont4.style.display === "none" || cont4.style.display === "") {
        cont4.style.display = "block";
        vid4.style.display = "none";
        showButton4.textContent ="Video";
    } else {
        cont4.style.display = "none";
        vid4.style.display = "block";
        showButton4.textContent = "Practice";
    }
});


const showButton5 = document.getElementById("showButton5");
const cont5 = document.querySelector(".container5");
const vid5 = document.querySelector(".Video5");

// Add a click event handler to the button
showButton5.addEventListener("click", function () {
    // Toggle the visibility of the div
    if (cont5.style.display === "none" || cont5.style.display === "") {
        cont5.style.display = "block";
        vid5.style.display = "none";
        showButton5.textContent ="Video";
    } else {
        cont5.style.display = "none";
        vid5.style.display = "block";
        showButton5.textContent = "Practice";
    }
});


document.getElementById("playButton1").addEventListener("click", () => {
    apple.play();
});


const w1 = new Audio(audios[1]);
document.getElementById("playButton2").addEventListener("click", () => {
    // In a real application, you would play the audio here
    w1.play();
});

const w2 = new Audio(audios[2]);
document.getElementById("playButton3").addEventListener("click", () => {
    // In a real application, you would play the audio here
    w2.play();
});

const w3 = new Audio(audios[3]);
document.getElementById("playButton4").addEventListener("click", () => {
    // In a real application, you would play the audio here
    w3.play();
});

const w4 = new Audio(audios[4]);
document.getElementById("playButton5").addEventListener("click", () => {
    // In a real application, you would play the audio here
    w4.play();
});

const w5 = new Audio(audios[5]);
document.getElementById("playButton6").addEventListener("click", () => {
    // In a real application, you would play the audio here
    w5.play();
});