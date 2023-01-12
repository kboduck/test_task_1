window.onload=function(){
    const callback = () => {
    alert("Hello, World!");
    console.log("Hello world");
    };
    const button = document.querySelector('#myButton');
button.addEventListener('click', callback);
var el = document.getElementById('result');

function someFunc(){
    el.value = 1231321;
}
}