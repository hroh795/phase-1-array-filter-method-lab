// Code your solution here
function findMatching(driverName, passedName) {
    return driverName.filter(checkName);
    function checkName(driverName) {
        return driverName.toLowerCase() === passedName.toLowerCase();
    }
}



function fuzzyMatch(driverName, passedLetters){
    const matches = driverName.filter(s => s.startsWith(passedLetters));
    return matches;

}

function matchName(arr, str) {
    const matches = arr.filter(homeMatching);
    function homeMatching (arr) {
        return str === arr.name;
    }
    return matches;

}
