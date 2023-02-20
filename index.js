// Code your solution here
// function findMatching(drivers, str) {
//     return drivers.filter((driver) => {
//         return driver.toLowerCase() === str.toLowerCase();
//     });
// }

// function fuzzyMatch(drivers, str) {
//     return drivers.filter((driver) => {
//         return str.toLowerCase() === driver.substring(0, str.length).toLowerCase();
//     })
// }

// function matchName(drivers, str) {
//     return drivers.filter((driver) => {
//         return driver.name === str
//     })
// }


function findMatching(drivers, name) {
    return drivers.filter(driver => {
        if (driver.toLowerCase() === name.toLowerCase()) {
            return driver;
        }
    });
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
    return drivers.filter(driver => {
        if (driver.name === name) {
            return driver.name;
        }
    })
}