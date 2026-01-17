const inputEl = document.querySelector("input#name-input");
const spanEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", addName);

function addName(event) {
    
    const inp = event.target.value.trim();
    spanEl.textContent = inp.length === 0 ? "Anonymous" : inp;
}


