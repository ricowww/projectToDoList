import moduleTest from "./moduleTest"
import perTagList from "./perTagList"
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