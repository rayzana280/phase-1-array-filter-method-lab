// Code your solution here
function findMatching(names, string){
   const newList= names.filter(callBack);

    function callBack(element){
        if(element.toLowerCase() === string.toLowerCase()){
            return true;
        }
    }
    return newList 
}

function fuzzyMatch(drivers, letters){
    const driversLetter = drivers.filter(callBackLetters);

    function callBackLetters (element){
        if(element.startsWith(letters)){
            return true;
        }
    }

    return driversLetter
}

function matchName(object, string){
    const driverName = object.filter(checkName);

    function checkName(element){
        if(element.name === string){
            return true 
        }
    }
    return driverName;
}