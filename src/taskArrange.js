/* Makes a dropdown of tags to choose from a given array of tags */

/* 
Declare a variable
For all elements in the array of tags, create <option> elements with a "value" equal to their "name" and append
*/
let tagPickerAnchor = document.getElementById("tagList");


function tagListMaker(tagsArray){
//temporary store
    let tagOptionsDOM = [];     
//from the input array, make options each   
    for (let element of tagsArray){
//makes a dropdown option with the element as the value
        tagOptionsDOM = document.createElement("option");
        tagOptionsDOM.textContent = element;
        tagOptionsDOM.setAttribute("value", element);
        tagPickerAnchor.appendChild(tagOptionsDOM);
    }
}

export {tagPickerAnchor, tagListMaker};