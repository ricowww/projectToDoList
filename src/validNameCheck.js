//Input - indirect via prompt
//Output - name of task

let validNameCheckVar = "";

function validNameCheck(){
    //initial input
    //as long as name is empty, keep asking
    while (validNameCheckVar == ""){
        validNameCheckVar = prompt("Enter Name");
    };
    //handout the name
    return validNameCheckVar;
}
export default validNameCheck;

//working
