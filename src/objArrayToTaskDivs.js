//Given an array of objects containing names, dates, tags, make vertical set of divs with an inline checkbox

//for each elem, make a div
    //will have an inline checkbox
    //these div will have a name title div
    //also a tag in form of a button
function objArrayToTaskDivs(tasksObjectsArray, anchorPointId){
    //declare anchor point based on input
    let anchorPoint = document.getElementById(anchorPointId);
    for (let element of tasksObjectsArray){
        //declare DOM object and its properties
        let tempDivDomHolder = document.createElement("div");
        tempDivDomHolder.button = document.createElement("button");
        tempDivDomHolder.nameDiv = document.createElement("div");
        tempDivDomHolder.dateDiv  = document.createElement("div");
        //declare classes
        tempDivDomHolder.classList.add("taskDiv");
        (tempDivDomHolder.button).classList.add("taskCheck");
        (tempDivDomHolder.nameDiv).classList.add("taskName");
        (tempDivDomHolder.dateDiv).classList.add("taskDate");
        //declare textcontents
        (tempDivDomHolder.button).textContent = "O";
        (tempDivDomHolder.nameDiv).textContent = element.name;
        (tempDivDomHolder.dateDiv).textContent = element.dueDate;
        //declare id's
        tempDivDomHolder.setAttribute("id", element.id);
        //append to html
        tempDivDomHolder.appendChild(tempDivDomHolder.button);
        tempDivDomHolder.appendChild(tempDivDomHolder.nameDiv);
        tempDivDomHolder.appendChild(tempDivDomHolder.dateDiv);
        anchorPoint.appendChild(tempDivDomHolder);
    };
    console.log("objArrayToTaskDivs.js is working")
};
export default objArrayToTaskDivs;