const input=document.getElementById("input");

function appendToDisplay(element){
    input.value+=element;
}

function saaf(){
    input.value ="";
}

function calculate(){
    try{
        input.value=eval(input.value);  
    }
    catch(error){
        input.value='Error';  
    }
}
