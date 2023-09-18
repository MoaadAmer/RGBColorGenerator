
function changeColor() {

    let body = document.getElementsByTagName("body")[0];

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    body.style.background = `rgb(${r},${g},${b})`;

    let h1 = document.getElementsByTagName("h1")[0];

    h1.innerText=`rgb(${r},${g},${b})`;

}
