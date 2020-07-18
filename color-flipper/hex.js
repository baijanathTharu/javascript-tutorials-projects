const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let colorString = "";
    for (let i = 0; i < 6; i++) {
        let randNum = randomNumber(hex.length);
        colorString += hex[randNum];
    }
    color.textContent = "#" + colorString;
    document.body.style.backgroundColor = "#" + colorString;
});

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}