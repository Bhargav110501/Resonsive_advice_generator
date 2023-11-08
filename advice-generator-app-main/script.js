const adviceId = document.getElementById("advice-id");
const adiveText = document.getElementById("advice-text");
const genarateBtn = document.getElementById("generate-btn");

const url = "https://api.adviceslip.com/advice";

async function getAdvice(){
    const res = await fetch(url);
    const {slip:{id,advice}} = await res.json();
    adviceId.innerText = id;
    adiveText.innerHTML = advice;
}

getAdvice()

genarateBtn.addEventListener("click",getAdvice)