//For all the elements in an array.
//if the element has the tag, store them in a list.

function perTagList(inputArray, tagCriteria, outputArray){
    outputArray = [];//reset during refresh to avoid stacking array
    for (let elem of inputArray){ //for all elements in the array
        if (elem.tag == tagCriteria){ //check the tag property of each element
            console.log(elem);
            outputArray.push(elem);
            console.log(outputArray);//works only when tested in console*
        };
    };
}

//outputArray //yields an empty array*




//UNOCCUPIED TILES
/* function unoccupiedTiles() {
    unoccupiedTilesArray = [];//reset during refresh to avoid stacking array
    for (let l = 1; l < 10; l++) {//from 1 to 9
        if (Tiles[l].tileStatus == 0) {//check if the tile is unoccupied
            unoccupiedTilesArray.push(parseInt((Tiles[l].id)))//if yes then add id of tile
        } else { };
    }
}; */


export default perTagList
