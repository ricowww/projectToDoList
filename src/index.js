import moduleTest from "./moduleTest"
import perTagList from "./perTagList"
import generateTaskList from "./generateTaskList"
import './styles/main.css' 
//to get the style into the code

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
perTagList(inpAr, tagCr, outputAr);
///Output
console.log(outputAr);
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
generateTaskList(inpArGen, idCall);
///Output
///Divs will appear in the html
//////////////////////////////////