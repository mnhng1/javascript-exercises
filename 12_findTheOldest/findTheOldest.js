const findTheOldest = function(arr) {
    let oldest = arr.reduce((oldestPerson, currentPerson) => {
        const CurrDate = new Date().getFullYear;
        const yearOfDeath = currentPerson.yearOfDeath || CurrDate;
        const currAge = yearOfDeath - currentPerson.yearOfBirth;
        const oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        
        

        if (oldestAge < currAge) {
            return currentPerson;
        } else {
            return oldestPerson;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
