const removeFromArray = function(list, ...elementsToRemove) {
    let returnList = []
    for (let i = 0; i<list.length; i++){
        if (!elementsToRemove.includes(list[i]))
            returnList.push(list[i]);
        }
            
            
    return returnList
}
    


// Do not edit below this line
module.exports = removeFromArray;
