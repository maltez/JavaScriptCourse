var div = document.getElementById('btn_div');
var btn = document.getElementById('btn');

div.addEventListener("click", handleClick1);
btn.addEventListener("click", handleClick);
btn.addEventListener("click", handleClick2)

function handleClick(e) {
    //e.stopImmediatePropagation();
    console.log('Click on button');
}

function handleClick1(e) {
    console.log('Click on div');
}

function handleClick2(e) {
    console.log('Click on the button 2');
}