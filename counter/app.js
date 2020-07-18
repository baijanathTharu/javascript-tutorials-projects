const countVal = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id == "decrease") {
            count--;
            valCol(count, "red");
        } else if (btn.id == "reset") {
            count = 0;
            valCol(count, "black");
        } else {
            count++;
            valCol(count, "green");
        }
    });
});

function valCol(value, color) {
    countVal.textContent = value;
    countVal.style.color = color;
}