let paraDeco = document.querySelectorAll("span.para-deco");

for (let elem of paraDeco) {
    elem.addEventListener("click", function() {
        elem.style.display = "inline"; 
    });
}
