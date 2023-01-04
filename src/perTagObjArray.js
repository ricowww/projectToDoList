//If an object-element matches the tag, append them to a new object-array
//Input - Objects inside an Array; Tag Name; An Output Array
//Output - Returns New Array


function perTagObjArray(inputArray, tagCriteria, outputArray){
    //For all elements in the array, check the tag property of each element
    for (let elem of inputArray){ 
        if (elem.tag == tagCriteria){
            console.log(elem);
            outputArray.push(elem);
        };
    };
    console.log("perTagObjArray.js is working")
    return outputArray;
} 

export default perTagObjArray
