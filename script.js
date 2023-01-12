window.onload=function(){
    var input = document.getElementById('source');
    const callback = () => {
    console.log("Hello world");
    if(input !== null){
        console.log(input.value);
    }
    };
    var el = document.getElementById('result');
function someFunc(){
    el.value = 1231321;
    console.log("someFunc");
}
    const button = document.querySelector('#myButton');
button.addEventListener('click', callback);
button.addEventListener('click', someFunc);
}