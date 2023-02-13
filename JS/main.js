let advice;
let id;
let dice = document.querySelector("button");
let idElement = document.querySelector(".id");
let quote = document.querySelector("q");

const url = "https://api.adviceslip.com/advice";

async function getAdviceAPI() {
    try {
        const req = await fetch(url, {
            method: 'GET',
        });
        return req.json();
    } catch (e) {
        console.log(e);
    }
}

function changeAdvice() {
    getAdviceAPI().then((data) => {
        id = data.slip.id;
        advice = data.slip.advice
        console.log(data);
        idElement.innerHTML = id;
        quote.innerHTML = advice;
    });
}

console.log(changeAdvice());

dice.addEventListener('click', changeAdvice)
