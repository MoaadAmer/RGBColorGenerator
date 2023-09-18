let index = 0;

function changeColor() {

    let colors = ["red", "blue", "orange", "yellow", "green", "purple"];

    let body = document.getElementsByTagName("body")[0];

    body.style.background = colors[index++];

    index = index % colors.length;
}