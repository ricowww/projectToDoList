//makes a tag picker based on html form input

/* Text placeholder */
let pickedTagVar = "";

function tagPicker(){
    pickedTagVar = document.getElementById("tagList").value;
    alert(pickedTagVar);
};

export {pickedTagVar, tagPicker};