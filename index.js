// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter((driver) => {
        return driver.toLowerCase() === str.toLowerCase();
    });
}

function fuzzyMatch(drivers, str) {
    return drivers.filter((driver) => {
        return str.toLowerCase() === driver.substring(0, str.length).toLowerCase();
    })
}

function matchName(drivers, str) {
    return drivers.filter((driver) => {
        return driver.name === str
    })
}