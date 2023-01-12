window.onload=function(){   //Wait when window loaded
    var input = document.getElementById('source'); //Select field where taking the condition of this task
    const callback = () => {    //Main function
    console.log(input.value);   //Check the field content
    var source = input.value;   //Making variable with contant of field id 'source', type string
    var point = 0;              //Variable for 'catch' the end of number field. 
    for(i = 0; i < source.length; i++){ //Cycle for parsing string 'source'
        if(isNaN(source[i])){           //This condition runs when type char character founded by parcing
            if(point == 2){             //This condition runs when parcing catch '.' in previous cycles
                res += ";"              //Add separator between numbers
                point = 0;              //Clear variable for use in next cycles
            }
            if(source[i] == "."){       //This condition runs when parcing found a '.' in string 'source' 
                point = 2;              //Initialize variable for use in condition of next cycle
            }
            }
            else{                       //This condition runs when parcing found number in string 'source' 
                res += source[i];       //Add founded value to variable that contain result of parcing
                if(i + 1 == source.length){
                    res += ";";
                }
            }
        }
        console.log(res);
        var a = "";
        var b = 0;
        for(i = 0; i < res.length; i++){
            if(res[i] == ";"){
                b = Number(a);
                console.log(b);
                sum = sum + b;
                a = "";
                continue;
            }
            a += res[i];
            console.log("a:", a);
        }
        if(sum == 0){
            sum = a;
        }
        console.log("Sum:", sum);
};
    var el = document.getElementById('result');//Select field that contain the result value
    var res = ""; 
    var sum = 0;                             //Initialize variable for result value of parcing
        function someFunc(){                   //Function that write res value to result field
            el.value = sum /100;
        }
        function clear_result(){               //Function for clear result field
            el.value = "";
            res = "";
            sum = 0;
            a = "";
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