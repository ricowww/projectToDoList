//GETS INPUT DETAILS FOR A NEW TASK
    //INPUT - prompt
    //OUTPUT - updates to module variables

//Variables for temporarily storing task details before they are passed into the task object constructor
//The function cannot work without these variables hence they are included in this module
let nameTempVar = "";
let tagTempVar = "";
let dateTempVar = ""; /* Obsolete */
let idTempVar = "";

//Gather input details for a new task
//Module variables are directly called (as opposed to called as inputs where variable changes are internal to function) to allow modification of their values
function taskDetailsPrompt(){
    //*To be replaced with module calls and input helpers
    //Variables are reset to blank first, so that the non-empty-input-checker-while-loop would work
    nameTempVar = "";
    while(nameTempVar == ''){
        nameTempVar = prompt("Enter task name");
    };

    tagTempVar = "";
    while(tagTempVar == ''){
        tagTempVar = prompt("Enter a tag for the task");
    };

    dateTempVar = "";
    while(dateTempVar == ''){
        dateTempVar = prompt("Enter due date of the task");
    };

    //idTempVar = prompt("Enter ID"); 


    //*Back up code, can be deleted later
    //nameTempVar = prompt("Enter Name");
    //tagTempVar = prompt("Enter Tag");
    //dateTempVar = prompt("Enter Due Date");
    //idTempVar = prompt("Enter ID"); 
    

    //*Checker only, can be deleted later 
    //console.log(`taskDetailsPrompt is working, name: ${nameTempVar}, tag: ${tagTempVar}, date: ${dateTempVar}, id: ${idTempVar}`);
}

//Export
export {nameTempVar,tagTempVar, dateTempVar, idTempVar, taskDetailsPrompt}

