const getTheTitles = function(arr) {
    let titles = [];
    for (i in arr){
        
        titles.push(arr[i].title);
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
