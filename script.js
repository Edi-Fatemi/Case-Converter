const uppercaseBtn = document.getElementById("upper-case");
const lowerCaseBtn = document.getElementById("lower-case");
const properCaseBtn = document.getElementById("proper-case");
const sentenceCaseBtn = document.getElementById("sentence-case");
const downloadBtn = document.getElementById("save-text-file");

function upperCaseHandler() {
    let textArea = document.querySelector(".text-area").value;

    document.querySelector(".text-area").value = textArea.toUpperCase();
}


function loweCaseHandler() {
    let textArea = document.querySelector(".text-area").value;

    document.querySelector(".text-area").value = textArea.toLowerCase();
}


function  properCaseHandler() {
    let textArea = document.querySelector(".text-area");
    let proper = textArea.value.toLowerCase().split(' ');

    for(let i = 0; i < proper.length; i++) {
        proper[i] = proper[i].charAt(0).toUpperCase() + proper[i].substring(1);
    }

    textArea = proper.join(' ');

    document.querySelector(".text-area").value = textArea;
}


function  sentenceCaseHandler() {

    let textArea = document.querySelector('.text-area');

    textArea.value = textArea.value
    .toLowerCase()
    .replace(/^\s*\w|[.!?]\s*\w/g, letter => letter.toUpperCase())
}


function downloadFileHandler() {
    let text = document.querySelector(".text-area").value;
    let fileName = "text.txt";

    if(text === "") return;


    let createAnchorTag = document.createElement("a");


    createAnchorTag.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    createAnchorTag.setAttribute("download", fileName);



    createAnchorTag.style.display = "none";
    document.body.appendChild(createAnchorTag);

    createAnchorTag.click();
    document.removeChild(createAnchorTag);
}


function buttonHandler() {
    uppercaseBtn.addEventListener("click", upperCaseHandler);

    lowerCaseBtn.addEventListener("click", loweCaseHandler);

    properCaseBtn.addEventListener("click", properCaseHandler);

    sentenceCaseBtn.addEventListener("click", sentenceCaseHandler);

    downloadBtn.addEventListener("click", downloadFileHandler);
}

buttonHandler();