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
                if(i + 1 == source.length){//This condition runs when cycle end is on number
                    res += ";";         //Add ';' to the end of string if end is number, because it needed for correct work next cycle
                }
            }
        }
        var a = "";                     //This variable contain pre-parced numbers for use in internal condition
        var b = 0;                      //This variable contain changed to type number value of variable 'a'
        for(i = 0; i < res.length; i++){//Cycle parsing variable 'res'
            if(res[i] == ";"){          //This condition runs when reached separator ";"
                b = Number(a);          //Write translated to type number value of first price from 'res'
                sum = sum + b;          //Add next founded price to writed in memory('sum') value
                a = "";                 //Clear value of 'a' for next use in cycle
                continue;
            }
            a += res[i];                //Collect values of first price from 'res' in variable 'a', type string
        }
        if(sum == 0){                   //When 'res' contains only one price, 'sum' not initialized by cycle
            sum = a;                    //Write the only price from 'res' collected by cycle
        }
};
    var el = document.getElementById('result');//Select field that contain the result value
    var res = "";                              //Initialize 'res' by empty string 
    var sum = 0;                               //Initialize variable for result value of parcing
        function someFunc(){                   //Function that write res value to result field
            el.value = sum /100;               //Result in needed to user format
        }
        function clear_result(){               //Function for clear result field
            el.value = "";
            res = "";
            sum = 0;
            a = "";
        }
        function clear_task(){                 //Function that clear the task input
            input.value = "";
        }
const button = document.querySelector('#myButton'); //Write selector of calculate result button
const clear = document.querySelector("#clear");     //Write selector of clear result field button
const clear_input = document.querySelector('#clear_task');  //Write selector of clear input check button
button.addEventListener('click', callback);         //Call main function when user maked click on calculate result button 
button.addEventListener('click', someFunc);
clear.addEventListener('click', clear_result);
clear_input.addEventListener('click', clear_task);
}