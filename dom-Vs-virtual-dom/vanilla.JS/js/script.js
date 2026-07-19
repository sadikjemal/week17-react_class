let fruits = ["Banana", "Mango", "Pineapple"];

let x = 0;

setInterval(() => {
    fruits[0] = x % 2 == 0 ? "Orange" : "Banana";

    let cssClass = fruits[0] == "Banana" ? "yellow" : "orange";

    document.getElementById("fruits-list").innerHTML = `
    <ul>
        <li class=${cssClass}>${fruits[0]}</li>
        <li>${fruits[1]}</li>
        <li>${fruits[2]}</li>
    </ul>
    `;
    x++;
}, 3000);