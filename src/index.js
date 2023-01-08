import moduleTest from "./moduleTest"
import perTagObjArray from "./perTagObjArray"
import objArrayToTaskDivs from "./objArrayToTaskDivs"
import validNameCheck from "./validNameCheck"
import {nameTempVar,tagTempVar, dateTempVar, idTempVar, taskDetailsPrompt} from "./taskDetailsPrompt"
import {Task} from "./taskObjecConstruct.js"
import { sampleDate } from "./date"
import {pickedDateVar, datePicker} from "./datePicker"
import {pickedTagVar, tagPicker} from "./tagPicker"




import './styles/main.css' 
//Test moduleTest
console.log(moduleTest());

//////////////////////////////////
//Test perTagList
///Input array
let inpAr = [
    {"tag": "a"},
    {"tag": "a"},
    {"tag": "a"},
    {"tag": "a"},
    {"tag": "a"},
    {"tag": "b"},
    {"tag": "a"},
    {"tag": "b"},
    {"tag": "b"},
    {"tag": "c"},
    {"tag": "c"}
];
///Tag
let tagCr = "b";
///Output array
let outputAr = [];

///Call
let test = perTagObjArray(inpAr, tagCr, outputAr);
///Output
console.log(test);

//working
//////////////////////////////////

//////////////////////////////////
//Test generateTaskList
///Input array
let inpArGen = [
    {"id": "1", "name":"task1", "dueDate": "September 1, 2023", "tag": "a"},
    {"id": "2", "name":"task2", "dueDate": "September 1, 2023", "tag": "a"},
    {"id": "3", "name":"task3", "dueDate": "September 1, 2023", "tag": "a"},
    {"id": "4", "name":"task4", "dueDate": "September 1, 2023", "tag": "a"},
    {"id": "5", "name":"task5", "dueDate": "September 1, 2023", "tag": "a"},
    {"id": "6", "name":"task6", "dueDate": "September 1, 2023", "tag": "b"},
    {"id": "7", "name":"task7", "dueDate": "September 1, 2023", "tag": "a"},
    {"id": "8", "name":"task8", "dueDate": "September 1, 2023", "tag": "b"},
    {"id": "9", "name":"task9", "dueDate": "September 1, 2023", "tag": "b"},
    {"id": "10", "name":"task10", "dueDate": "September 1, 2023", "tag": "c"},
    {"id": "11", "name":"task11", "dueDate": "September 1, 2023", "tag": "c"}
];

//Define id to be used to call the anchorpoint
let idCall = "test";//point to the div in the html
///Call
objArrayToTaskDivs(inpArGen, idCall);
///Output
///Divs will appear in the html
//////////////////////////////////


/////////////////////////////////////
//testing validNameCheck

console.log(validNameCheck());
//working
/////////////////////////////////////

/////////////////////////////////////
//Test generateTaskList - vars moved to module
//let nameVar = "";
//let tagVar = "";
//let dateVar = "";
//let idVar = "";

//taskDetailsPrompt();
//working
/////////////////////////////////////

/////////////////////////////////////
//Test taskObjecConstruct
const TaskDatabase = [];//array to contain task objects

//console.log("task db TaskDatabase generated");
//TaskDatabase[nameTempVar] = new Task(nameTempVar, tagTempVar, dateTempVar, idTempVar)//call global variables containing the new task details
//taskDetailsPrompt();
//TaskDatabase[nameTempVar] = new Task(nameTempVar, tagTempVar, dateTempVar, idTempVar)//call global variables containing the new task details
//console.log("new Task generated");
//console.log(TaskDatabase);
//console.log(nameTempVar);




/////////////////////////////////////

console.log(sampleDate);

//displaying but adding one more day to the date

//Event listener to date picker to trigger savin the value 
let datePickerObject = document.getElementById("dateInput");
datePickerObject.addEventListener("change", datePicker);
//working

//Event listener to date picker to trigger savin the value 
let tagPickerObject = document.getElementById("tagList");
tagPickerObject.addEventListener("change", tagPicker);
