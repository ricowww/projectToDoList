//calls sub-modules to get inputs, then updates global variables
//INPUT - variables to be updated
//OUTPUT - updates to global variables

function taskDetailsPrompt(nameVar,tagVar, dateVar, idVar){
    //To be replaced with module calls
    nameVar = prompt("Enter Name");
    tagVar = prompt("Enter Tag");
    dateVar = prompt("Enter Due Date");
    idVar = prompt("Enter ID");
}

export default taskDetailsPrompt;