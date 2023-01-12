window.onload=function(){
    var input = document.getElementById('source');
    const callback = () => {
    console.log(input.value);
    var source = input.value;
    var point = 0;
    for(i = 0; i < source.length; i++){
        if(isNaN(source[i])){
            if(point == 2){
                res += ";"
                point = 0;
                //continue;
            }
            if(source[i] == "."){
                point = 2;
            }
            }
            else{
                res += source[i];
                //point++;
            }
        }
};
    var el = document.getElementById('result');
    var res = "";
        function someFunc(){
            el.value = res;
        }
        function clear_result(){
            el.value = "";
            res = "";
        }
        function clear_task(){
            input.value = "";
        }
const button = document.querySelector('#myButton');
const clear = document.querySelector("#clear");
const clear_input = document.querySelector('#clear_task')
button.addEventListener('click', callback);
button.addEventListener('click', someFunc);
clear.addEventListener('click', clear_result);
clear_input.addEventListener('click', clear_task);
}