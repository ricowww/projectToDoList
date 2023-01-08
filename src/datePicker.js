//makes a date picker based on html form input

/* Number placeholder because dates are stored in number format in html */
let pickedDateVar = 0;

function datePicker(){
    pickedDateVar = document.getElementById("dateInput").value;
    alert(pickedDateVar);
};

export {pickedDateVar, datePicker};